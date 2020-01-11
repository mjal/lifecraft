open Global
open Tea.App
open Tea.Cmd

let init () =
  ( {
      board = [| [| Dead |] |];
      previous = [];
      rule = B3S23;
      auto_clamp = true;
      seeds =
        [
          { name = "Glisseur 1"; str = "[[0,1,0],[1,0,0],[1,1,1]]" };
          { name = "Mathusalem 1"; str = "[[0,0,1,0],[0,1,0,0],[1,1,1,0]]" };
        ];
    },
    msg Reset )

let update state event =
  let board, cmd = Board.update state event in
  let previous =
    match event with
    | Next | SetBoard _ | Click (_, _) -> state.board :: state.previous
    | Previous -> ( match state.previous with [] -> [] | _ :: tl -> tl )
    | _ -> state.previous
  in
  let seeds =
    match event with
    | AddSeed (name, str) -> { name; str } :: state.seeds
    | _ -> state.seeds
  in
  let rule = match event with SetRule rule -> rule | _ -> state.rule in
  let auto_clamp =
    match event with
    | ToggleAutoClamp -> not state.auto_clamp
    | _ -> state.auto_clamp
  in
  let cmd2 = match event with
  | Fetch (url) -> Tea.Http.getString url |> Tea.Http.send lifeData
  | _ -> cmd in
  let board2 = match event with
  | LifeData (Ok data) -> Rle.parse data;
  | LifeData (Error _e) -> board;
  | _ -> board in
  ( { (*state with*) board = board2; previous; seeds; rule; auto_clamp },
    cmd2 (* Cmd.Batch *) )

let subscriptions _ = Keyboard.downs (fun k -> KeyPressed k)

let main =
  program { init; update; view = View.view; subscriptions; shutdown = (fun _ -> NoCmd); }
