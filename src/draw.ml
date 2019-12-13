open Global

let draw_selection x y = drawCircle x y r "black"

let draw board =
  let draw_one i j e =
    let x = i * dot_w + dot_w / 2 in
    let y = j * dot_h + dot_h / 2 in
    let (color, size) = match e with
      | Alive -> ("black", r/2)
      | Dead ->  ("grey", r/5)
    in
      drawDisk x y size color;
  in
    clear();
    matrix_iterij draw_one board;
