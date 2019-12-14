open Global

type pointer = { x: int; y: int; i: int; j: int; inside: bool; selecting: bool }

let () =
  let pointer = ref { x = 0; y = 0; i = 0; j = 0; inside = false; selecting = false; } in

  let size = { x = 5; y = 8; } in

  let state = {
    size = ref size;
    board = ref (lmatrix_create size.x size.y Dead);
    previous = ref [];
  } in

  let rec prune_top (board : cell list list) : cell list list =
    match board with
    | hd :: tl -> 
      if List.exists (fun e -> e == Alive) hd then
        board
      else
        prune_top tl
    | [] -> []
  in

  let prune_bottom board = List.rev (prune_top (List.rev board)) in

  let rec prune_left board =
    let column = List.map List.hd board in
    if List.length board = 0 then
      []
    else if List.exists (fun e -> e == Alive) column then
      board
    else
      prune_left (List.map List.tl board)
  in

  let prune_right board =
    let rev_board = List.map List.rev board
    in List.map List.rev (prune_left rev_board)
  in

  let prune board = prune_left (prune_right (prune_bottom (prune_top board)))
  in

  let resize board =
    let board2 = List.map (fun row -> Dead :: (List.append row [Dead])) board in
    let length = List.length (List.hd board2) in
    let column = List.init length (fun i -> Dead)  in
    column :: (List.append board2 [column])
  in

  let next board =
    let is_alive coords =
      let (i,j) = coords in
      if i < 0 || i >= !(state.size).x
      || j < 0 || j >= !(state.size).y
      then
        0
      else
        let row = List.nth board i in
        let cell = List.nth row j in
        match cell with | Dead -> 0 | Alive -> 1
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
    lmatrix_mapij next_one board
  in

  let update_pointer pointer =
    (*
    let inside =
      let dot_w = (width / !(state.size).x) in
      let dot_h = (height / !(state.size).y) in
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
      i = pointer.x / width  * !(state.size).x;
      j = pointer.y / height * !(state.size).y;
      *)
      inside
    }
    *)
    pointer
  in

  let flip i j i2 j2 e =
    if i == i2 && j == j2 then
      match e with | Alive -> Dead | Dead -> Alive
    else
      e
  in

  let update (event : event) : unit =
    let board = match event with
     | Next         -> next !(state.board)
     | Previous     -> List.hd !(state.previous)
     | Reset        -> lmatrix_create size.x size.y Dead
     | Click(i,j)   -> lmatrix_mapij (flip i j) !(state.board)
     | ClickThenNext(i,j)  -> next (lmatrix_mapij (flip i j) !(state.board))
     | Select(_,_)  -> !(state.board) (* Do Nothing *)
     | _            -> !(state.board) (* Do nothing *)
    in

    (* use cons of x :: xs instead of append *)
    let previous = match event with
      | Next -> !(state.board) :: !(state.previous);
      | Click(_,_) | ClickThenNext(_,_) -> !(state.board) :: !(state.previous);
      | Previous -> List.tl !(state.previous)
      | _ -> !(state.previous)
    in 

    state.previous := previous;
    state.board :=
      begin
        match event with
        | Next -> resize (prune board)
        | _ -> board
      end
    ;
    state.size := {
      x = List.length !(state.board);
      y = if List.length !(state.board) = 0 then 0 else List.length (List.hd !(state.board))
    };
    pointer := update_pointer !pointer;

    Draw.draw state;
    Draw.draw_selection !pointer.x !pointer.y;
  in

  let mousedown x y =
    pointer := { !pointer with selecting = true };
    update (ClickThenNext((x / (width / !(state.size).x)), (y / (height / !(state.size).y))))
  in

  let mouseup () = 
    pointer := { !pointer with selecting = false };
  in

  let mousemove x y =
    pointer := { !pointer with x; y };
    if !(state.size).x != 0 && !(state.size).y != 0 then
      update (Select((x / (width / !(state.size).x)), (y / (height / !(state.size).y))))
    else
      ()
  in

  let keydown str =
    (* Idea: Arrows move cursor for mouseless *)
    let event = match str with
      | " "         -> Next
      | "ArrowLeft" -> Previous
      | "ArrowRight" -> Next
      | "Escape"    -> Reset
      | _           -> Js.log str; Nothing
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

  update (Click(1,1));
  update (Click(2,2));
  update (Click(3,2));
  update (Click(1,3));
  update (Click(1,3));
  update (Click(2,4));
