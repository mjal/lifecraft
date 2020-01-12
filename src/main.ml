open Global
open Tea.App
open Tea.Cmd

let init () =
  ({
     board = [| [| Dead |] |];
     rule = B3S23;
     geo = Infinite;
     previous = [];
     auto_clamp = true;
   },
   msg Reset)

let subscriptions _ =
  Keyboard.downs (fun k -> KeyPressed k)

let update state event =
  let state = match event with
  | SetRule rule -> { state with rule }
  | Reset | Next | Flip(_) | Resize(_) | Clamp -> { state with previous = state.board :: state.previous; board = (Board.update state event) }
  | Previous ->
    let board, previous = begin match state.previous with
      | [] -> (Matrix.make 0 0 Dead), []
      | hd :: tl -> hd, tl
    end in { state with board; previous; }
  | ToggleAutoClamp -> { state with auto_clamp = not state.auto_clamp }
  | LifeData (Ok data) ->  { state with board = Rle.parse data };
  | LifeData (Error _e) -> { state with board = Matrix.make 0 0 Dead };
  | _ -> state in
  let cmd =
    match event with
    | Fetch (url) -> Tea.Http.getString url |> Tea.Http.send lifeData
    | KeyPressed k ->
      begin
        match k.key_code with
        | 13 (* Enter *) | 32 (* Space *) -> msg Next
        | _ -> NoCmd
      end
    | LifeData (Ok _ ) | Next | Flip(_) -> if state.geo = Infinite then msg Clamp else NoCmd
    | _ -> NoCmd in
  state, cmd

let main =
  program { init; update; view = View.view; subscriptions; shutdown = (fun _ -> NoCmd); }
