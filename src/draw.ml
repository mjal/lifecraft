open Global
open Tea.Html
open Tea.Svg

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

let draw_svg state =
  let ftoa x = Js.Float.toPrecisionWithPrecision x 4 in
  let ftoa2 x = (ftoa x)^"%" in
  let draw_cell i j e =
    let w = 100. /. (float_of_int (Matrix.width state.board)) in
    let h = 100. /. (float_of_int (Matrix.height state.board)) in
    let x = (float_of_int i) *. w in
    let y = (float_of_int j) *. h in
    node "rect" [
      Vdom.attribute "" "x" (ftoa x);
      Vdom.attribute "" "y" (ftoa y);
      Vdom.attribute "" "width" (ftoa w);
      Vdom.attribute "" "height" (ftoa h);
      Vdom.attribute "" "fill" (if e = Alive then "black" else "white");
      Vdom.attribute "" "stroke-width" "0.5";
      Vdom.attribute "" "stroke" "pink";
      onClick (Flip(i,j));
    ] []
  in
  let cells = (Matrix.mapij (fun i j e -> draw_cell i j e) state.board) in
  [
    svg [
      Vdom.attribute "" "viewBox" "0 0 100 100";
    ] (List.flatten (Array.to_list (Array.map Array.to_list cells)))
  ]

let draw_canvas state =
  let (canvas_width, canvas_height) = (800,600) in
  let (matrix_width, matrix_height) = (Matrix.width state.board, Matrix.height state.board) in
  let drawDisk x y size color = "" in
  let clear () = "" in
  let draw_one i j e =
    let dot_w = (canvas_width / matrix_width) in
    let dot_h = (canvas_height / matrix_height) in
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
    (if matrix_width != 0 && matrix_height != 0 then
      () (*Matrix.iterij draw_one state.board*)
    else
      ()
    );
    [
      canvas [
        Vdom.attribute "" "width" "800";
        Vdom.attribute "" "height" "600";
      ] []
    ]


let draw state =
  match state.backend with
  | Html -> draw_html state
  | Svg  -> draw_svg state
  | Canvas -> draw_canvas state
