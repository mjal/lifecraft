open Global

let draw_selection x y =
  drawCircle x y 20 "black"

let draw state =
  let draw_one i j e =
    let dot_w = (width / !(state.size).x) in
    let dot_h = (height / !(state.size).y) in
    let r = min (dot_w / 2) (dot_h / 2) in
    let x = i * dot_w + dot_w / 2 in
    let y = j * dot_h + dot_h / 2 in
    let (color, size) = match e with
      | Alive -> ("black", r/2)
      | Dead ->  ("grey", r/5)
    in
      drawDisk x y size color;
  in
    clear();
    if !(state.size).x != 0 && !(state.size).y != 0 then
      lmatrix_iterij draw_one !(state.board)
    else
      ()
