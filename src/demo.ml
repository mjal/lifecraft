open Global

type pointer = { x: int; y: int; i: int; j: int; inside: bool; selecting: bool }

let () =
  let pointer = ref { x = 0; y = 0; i = 0; j = 0; inside = false; selecting = false; } in

  let size = { x = 3; y = 3; } in

  let state = ref {
    size = size;
    board = (lmatrix_create size.x size.y Dead);
    previous = [];
    seeds = [];
  } in

  let update_pointer pointer =
    (*
    let inside =
      let dot_w = (width / state.size.x) in
      let dot_h = (height / state.size.y) in
      let r = min (dot_w / 2) (dot_h / 2) in
      let foi = float_of_int in
      let x = foi (pointer.x - pointer.x mod dot_w) in
      let y = foi (pointer.y - pointer.y mod dot_h) in
      let i = foi pointer.x in
      let j = foi pointer.y in
      let dist2 =
        (x -. (i +. 0.5) *. (foi dot_w)) ** 2.
        +. (y -. (j +. 0.5) *. (foi dot_h)) ** 2.
      in
        if (dist2 < foi(r) ** 2.)
        then true
        else false
    in
    { pointer with
      (*
      i = pointer.x / width  * state.size.x;
      j = pointer.y / height * state.size.y;
      *)
      inside
    }
    *)
    pointer
  in

  let update state event =
    let board = match event with
     | Next         -> Board.clamp (Board.next state.board)
     | Previous     -> List.hd state.previous
     | Reset        -> lmatrix_create size.x size.y Dead
     | Click(i,j)   -> Board.clamp (Board.flip state.board i j)
     | ClickThenNext(i,j)  -> Board.next (Board.flip state.board i j)
     | Select(_,_)  -> state.board (* Do Nothing *)
     | SetBoard(board) -> Board.clamp board
     | _            -> state.board (* Do nothing *)
    in

    (* use cons of x :: xs instead of append *)
    let previous = match event with
      | Next -> state.board :: state.previous;
      | Previous -> List.tl state.previous
      | Click(_,_) | ClickThenNext(_,_) | SetBoard(_) ->
          state.board :: state.previous;
      | _ -> state.previous
    in 

    let size = {
      x = List.length board;
      y = if List.length board = 0 then 0 else List.length (List.hd board)
    } in

    { state with board; previous; size}
  in

  let send event =
    state := update !state event;

    pointer := update_pointer !pointer;

    Draw.draw !state;
    Draw.draw_selection !pointer.x !pointer.y;
  in

  let mousedown x y =
    pointer := { !pointer with selecting = true };
    send (Click((x / (width / !state.size.x)), (y / (height / !state.size.y))))
  in

  let mouseup () = 
    pointer := { !pointer with selecting = false };
  in

  let mousemove x y =
    pointer := { !pointer with x; y };
    if !state.size.x != 0 && !state.size.y != 0 then
      send (Select((x / (width / !state.size.x)), (y / (height / !state.size.y))))
    else
      ()
  in

  let keydown str =
    (* Idea: Arrows move cursor for mouseless use *)
    let event = match str with
      | " "         -> Next
      | "ArrowLeft" -> Previous
      | "ArrowRight" -> Next
      | "Escape"    -> Reset
      | _           -> Js.log str; Nothing
    in send event

  in

  let reset () = send Reset in
  let previous () = send Previous in
  let next () = send Next in

  let save () =
    let seed_array = (Array.of_list (List.map Array.of_list !state.board)) in
    Js.log seed_array; (* to export name for raw js *)
    let seed_json = [%raw {|JSON.stringify(seed_array)|}] in
    add_seed "Some name" seed_json;
  in

  let set_state (state_str: string) =
    let my_array: cell array array =
      [%raw {| JSON.parse(state_str) |}]
    in
    let my_state: cell list list =
      Array.to_list (Array.map Array.to_list my_array)
    in
    send (SetBoard(my_state))
  in

  bind_set_state_to_js set_state;

  bind_mousemove mousemove;
  bind_mousedown mousedown;
  bind_mouseup mouseup;
  bind_keydown keydown;

  bind_button ".next" next;
  bind_button ".previous" previous;
  bind_button ".reset" reset;
  bind_button ".save" save;

  send (Click(1,1));
  send (Click(1,2));
  send (Click(1,3));
  send (Click(1,2));

  set_state "[[0,0,0,0],[0,1,1,0],[0,0,0,0]]";
