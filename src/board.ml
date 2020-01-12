open Global

let flip i j board =
  let f = function | Alive -> Dead | Dead -> Alive in
  Matrix.mapij (fun i2 j2 e -> if i = i2 && j = j2 then f e else e) board

let reset board =
  Matrix.make (Matrix.width board) (Matrix.height board) Dead

let resize board x y =
  let w = Matrix.width board in
  let h = Matrix.height board in
  let a = Matrix.make x y Dead in
    Matrix.blit board 0 0 a 0 0 (min x w) (min y h);
    a

let clamp board =
  let is_alive = ((=) Alive) in
  let x1, x2, y1, y2 = try 
    (Matrix.findi is_alive board, Matrix.findri is_alive board,
    Matrix.vfindi is_alive board, Matrix.vfindri is_alive board)
  with Not_found -> (0,0,0,0) in
  let w, h = (x2 - x1, y2 - y1) in
  let a = Array.make_matrix (w + 3) (h + 3) Dead in
  let () = Matrix.blit board x1 y1 a 1 1 (w + 1) (h + 1) in
  a

let next rule board =
  let is_inside (i,j) = 
    i >= 0 && i < Matrix.width board && j >= 0 && j < Matrix.height board
  in
  let is_alive (i,j) =
    if is_inside (i,j) then
      match board.(i).(j) with | Dead -> 0 | Alive -> 1
    else 0
  in
  let sum_neighbourg x y =
    let offsets = [(-1,-1); (-1, 0); (-1, 1); (0, -1); (*(0, 0);*) (0, 1); (1, -1); (1, 0); (1, 1)] in
    let neighbourg = List.map (fun (dx,dy) -> is_alive (x + dx, y + dy)) offsets in
    List.fold_left (+) 0 neighbourg
  in
  let next_one i j e =
    let n = sum_neighbourg i j in
    match (e, n) with
    | Alive, 2 -> Alive
    | Alive, 3 -> Alive
    | Dead, 3  -> Alive
    | Dead, 6 -> begin match rule with | B3S23 -> Dead | B36S23 -> Alive end
    | _ -> Dead
  in
  Matrix.mapij next_one board

let update state = function
  | Next -> state.board |> (next state.rule)
  | Reset -> state.board |> reset |> clamp
  | Flip(i,j) -> state.board |> flip i j |> clamp
  | Resize(x, y) -> resize state.board x y
  | Clamp -> state.board |> clamp
  | _ -> state.board
