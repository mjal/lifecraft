open Global

let () = 
  let pointer = ref { x = 0; y = 0; i = 0; j = 0; inside = false; selecting = false; }
  in

  let size = { x = 3; y = 3; }
  in
  
  let state = ref {
    size = size;
    board = (lmatrix_create size.x size.y Dead);
    previous = [];
    seeds = [];
  }
  in

  let update state event =
    let board = match event with
     | Next               -> state.board |. Board.next |. Board.clamp
     | Previous           -> List.hd state.previous
     | Reset              -> lmatrix_create size.x size.y Dead
     | Click(i,j)         -> state.board |. Board.flip i j |. Board.clamp
     | ClickThenNext(i,j) -> state.board |. Board.flip i j |. Board.next |. Board.clamp
     | Select(_,_)        -> state.board
     | SetBoard(board)    -> Board.clamp board
     | _            -> state.board
    in

    (* use cons of x :: xs instead of append *)
    let previous = match event with
      | Next -> state.board :: state.previous;
      | Previous -> List.tl state.previous
      | Click(_,_) | ClickThenNext(_,_) | SetBoard(_) ->
          state.board :: state.previous;
      | _ -> state.previous
    in 

    let seeds = match event with
      | AddSeed(name,str) -> {name;str} :: state.seeds
      | _ -> state.seeds
    in

    let size = {
      x = List.length board;
      y = if List.length board = 0 then 0 else List.length (List.hd board)
    } in

    { (*state with*) board; previous; size; seeds}
  in

  let send event =
    state := update !state event;
    
    clear_left_side ();
    List.iter (fun seed -> add_seed seed.name seed.str) !state.seeds;
    set_html_size !state.size.x !state.size.y;

    let sum = List.fold_left (+) 0 in
    let digify _ _ e = match e with |Alive -> 1 | Dead -> 0 in
    let population = sum (List.map sum (lmatrix_mapij  digify !state.board)) in

    set_html_population population;

    Draw.draw !state;
    Draw.draw_selection !pointer.x !pointer.y;
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
    let name = [%raw {| window.prompt("Choose a name for it", "Untitled") |}] in

    send (AddSeed(name, seed_json))
  in

  let mousedown x y =
    pointer := { !(pointer) with selecting = true };
    let i = x / (width  / !state.size.x) in
    let j = y / (height / !state.size.y) in
    send (Click(i, j))
  in

  let mouseup () = 
    pointer := { !(pointer) with selecting = false };
    ()
  in

  let mousemove x y =
    pointer := { !(pointer) with x; y };

    if !(state).size.x != 0 && !(state).size.y != 0 then
      let i = x / (width  / !(state).size.x) in
      let j = y / (height / !(state).size.y) in
      send (Select(i, j))
    else
      ()
  in

  bind_mousemove mousemove;
  bind_mousedown mousedown;
  bind_mouseup mouseup;

  let set_state (state_str: string) =
    let my_array: cell array array = [%raw {| JSON.parse(state_str) |}] in
    let my_state: cell list list = Array.to_list (Array.map Array.to_list my_array) in
    send (SetBoard(my_state))
  in

  bind_set_state_to_js set_state;

  bind_keydown keydown;

  bind_button ".next" next;
  bind_button ".previous" previous;
  bind_button ".reset" reset;
  bind_button ".save" save;

  send (AddSeed("Glisseur 1", "[[0,1,0],[1,0,0],[1,1,1]]"));
  send (AddSeed("Mathusalem 1", "[[0,0,1,0],[0,1,0,0],[1,1,1,0]]"));

  set_state "[[0,0,0,0],[0,1,1,0],[0,0,0,0]]";
