open Global
open Tea.Html

let draw_html state =
  let draw_cell i j e =
    div [
      class' (if e = Alive then "alive" else "dead");
      onClick (Flip(i,j))
    ] []
  in
  let draw_line i line = 
    div [class' "flex-1 flex"] ((Array.mapi (draw_cell i) line) |> Array.to_list)
  in
  (Array.mapi draw_line state.board) |> Array.to_list

let draw_canvas state =
  (*
  let draw_one i j e =
    let dot_w = (canvas_width / state.size.x) in
    let dot_h = (canvas_height / state.size.y) in
    let r = min (dot_w / 2) (dot_h / 2) in
    let x = i * dot_w + dot_w / 2 in
    let y = j * dot_h + dot_h / 2 in
    let (color, size) = match e with
      | Alive -> ("black", (r*2)/3)
      | Dead ->  ("grey", r/5)
    in
      drawDisk x y size color;
  in
    clear();
    if state.size.x != 0 && state.size.y != 0 then
      lmatrix_iterij draw_one state.board
    else
      ()
  *)
  ()
