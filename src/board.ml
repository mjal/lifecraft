open Global
open Tea.Cmd

let clamp board =
  let x1 = try Matrix.findi (Array.exists ((=) Alive)) board with Not_found -> 0 in
  let x2 = try Matrix.findri (Array.exists ((=) Alive)) board with Not_found -> 0 in
  let y1 = try Matrix.vfindi ((=) Alive) board with Not_found -> 0 in
  let y2 = try Matrix.vfindri ((=) Alive) board with Not_found -> 0 in
  let board2 = Array.make_matrix (x2 - x1 + 3) (y2 - y1 + 3) Dead in
  let () = Matrix.blit board x1 y1 board2 1 1 (x2 - x1 + 1) (y2 - y1 + 1) in
  board2

let next rule board =
  let is_alive coords =
    let (i,j) = coords in
    if i < 0 || i >= Array.length board
    || j < 0 || j >= Array.length board.(0)
    then
      0
    else
      let row = Array.get board i in
      let cell = Array.get row j in
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
    | Dead, 6 -> begin match rule with | B3S23 -> Dead | B36S23 -> Alive end
    | _ -> Dead
  in
  Matrix.mapij next_one board

let flip i j board =
  let flip_if_equal i j i2 j2 e =
    if i == i2 && j == j2 then
      match e with | Alive -> Dead | Dead -> Alive
    else
      e
  in
    Matrix.mapij (flip_if_equal i j) board

let resize board x y =
  let w = Matrix.width board in
  let h = Matrix.height board in
  let a = Matrix.make x y Dead in
    Matrix.blit board 0 0 a x y w h;
    a

let update state event =
  let w = Matrix.width state.board in
  let h = Matrix.height state.board in
  let board = match event with
    | Next -> state.board |> (next state.rule)
    | Previous -> begin match state.previous with
      | [] -> Matrix.make 0 0 Dead
      | hd::_ -> hd
    end
    | Reset -> Matrix.make (Matrix.width state.board) (Matrix.height state.board) Dead
    | Click(i,j) -> state.board |> flip i j
    | ClickThenNext(i,j) ->
      state.board |> flip i j |> (next state.rule)
    | SetBoard(board) -> board
    | SetBoardFromSeed(str) -> [%raw {| JSON.parse($$event[0]) |}]
    | SetX(x) -> resize state.board x h
    | SetY(y) -> resize state.board w y
    | Clamp -> clamp state.board
    | _ -> state.board
  in

  let cmd = match event with
    | Clamp -> Tea.Cmd.NoCmd
    | KeyPressed k       ->
      begin
        match k.key_code with
        | 13 (* Enter *) | 32 (* Space *) -> msg Next
        | _ -> NoCmd
      end
    | _ -> (if state.auto_clamp then (Tea.Cmd.msg Clamp) else Tea.Cmd.NoCmd)
  in

  board, cmd
