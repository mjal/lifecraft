open Global

type pointer = { x: int; y: int; i: int; j: int; inside: bool; selecting: bool }

type state = {
  board: point array array ref;
  previous: point array array list ref;
}

let () =
  let pointer = ref { x = 0; y = 0; i = 0; j = 0; inside = false; selecting = false; } in

  let state = {
    board = ref (Array.make_matrix num_dot_x num_dot_y Dead);
    previous = ref [];
  } in

  let next board =
    let is_alive coords =
      let (i,j) = coords in
      if i < 0 || i >= num_dot_x
      || j < 0 || j >= num_dot_y
      then
        0
      else
        match board.(i).(j) with | Dead -> 0 | Alive -> 1
    in 
    let sum_neighbourg x y =
      let offsets = [(-1,-1); (-1, 0); (-1, 1); (0, -1); (*(0, 0);*) (0, 1); (1, -1); (1, 0); (1, 1)] in
      let coords  = List.map (fun coords -> (x + (fst coords), y + (snd coords))) offsets in
      let neighbourg = List.map is_alive coords in
      List.fold_left (+) 0 neighbourg
    in
    let next_one i j e =
      let n = sum_neighbourg i j in
      match (e, n) with
      | Alive, 2 -> Alive
      | Alive, 3 -> Alive
      | Dead, 3  -> Alive
      | _ -> Dead
    in
    matrix_mapij next_one board
  in

  let update_pointer pointer =
    let inside =
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
      i = pointer.x / dot_w;
      j = pointer.y / dot_h;
      inside
    }
  in

  let flip i j i2 j2 e =
    if i == i2 && j == j2 then
      match e with | Alive -> Dead | Dead -> Alive
    else
      e
  in

  let update event =

    let board = match event with
     | Next         -> next !(state.board)
     | Previous     -> List.hd !(state.previous)
     | Reset        -> Array.make_matrix num_dot_x num_dot_y Dead
     | Click(i,j)  -> matrix_mapij (flip i j) !(state.board)
     | ClickThenNext(i,j)  -> next (matrix_mapij (flip i j) !(state.board))
     | Select(_,_)  -> !(state.board) (* Do Nothing *)
     | _            -> !(state.board) (* Do nothing *)
    in

    let previous = match event with
      | Next -> List.append [!(state.board)] !(state.previous);
      | Click(_,_) | ClickThenNext(_,_) -> List.append [!(state.board)] !(state.previous);
      | Previous -> List.tl !(state.previous)
      | _ -> !(state.previous)
    in 

    state.previous := previous;
    state.board := board;

    pointer := update_pointer !pointer;

    Draw.draw !(state.board);
    Draw.draw_selection !pointer.x !pointer.y;
  in

  let mousedown x y =
    pointer := { !pointer with selecting = true };
    update (ClickThenNext((x/dot_w), (y/dot_h)))
  in

  let mouseup () = 
    pointer := { !pointer with selecting = false };
  in

  let mousemove x y =
    pointer := { !pointer with x; y };
    let event = Select((x/dot_w), (y/dot_h)) in
    update event
  in

  let keydown str =
    (* Idea: Arrows move cursor to use mouseless *)
    let event = match str with
      | " "         -> Next
      | "LeftArrow" -> Previous
      | "RighArrow" -> Next
      | "Escape"    -> Reset
      | _           -> Nothing
    in update event

  in

  let reset () =
    update Reset
  in

  let previous () =
    update Previous
  in

  let next () =
    update Next
  in

  bind_mousemove mousemove;
  bind_mousedown mousedown;
  bind_mouseup mouseup;
  bind_keydown keydown;
  bind_next next;
  bind_previous previous;
  bind_reset reset;

  update (Click(10,5));
  update (Click(10,6));
