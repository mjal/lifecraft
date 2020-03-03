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
     backend = Svg;
     show_patterns = false;
     directory = "";
   },
   msg Reset)

let subscriptions _ =
  Keyboard.downs (fun k -> KeyPressed k)

let update state event =
  let state = match event with
  | SetDirectory dir -> { state with directory = dir }
  | SetRule rule -> { state with rule }
  | SetBackend backend -> { state with backend }
  | SetAutoClamp -> { state with auto_clamp = not state.auto_clamp }
  | SetShowPattern -> { state with show_patterns = not state.show_patterns }
  | Reset | Next | Flip(_) | SetSize(_,_) | Clamp -> { state with (*previous = state.board :: state.previous;*) board = (Board.update state event) }
  | Previous ->
    let board, previous = begin match state.previous with
      | [] -> (Matrix.make 0 0 Dead), []
      | hd :: tl -> hd, tl
    end in { state with board; previous; }
  | LifeData (Ok data) ->  { state with board = Rle.parse data };
  | LifeData (Error _e) -> { state with board = Matrix.make 0 0 Dead };
  | _ -> state in

  let cmd = match event with
  | Fetch (url) -> Tea.Http.getString url |> Tea.Http.send lifeData
  | KeyPressed k -> if k.key_code = 13 || k.key_code = 32 then msg Next else NoCmd
  | LifeData (Ok _ ) | Next | Flip(_) -> if state.geo = Infinite then msg Clamp else NoCmd
  | _ -> NoCmd in

  state, cmd

let main =
  program { init; update; view = View.view; subscriptions; shutdown = (fun _ -> NoCmd); }
