open Global

let update pointer =
  pointer
  (*
  let inside =
    let dot_w = (width / state.size.x) in
    let dot_h = (height / state.size.y) in
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
    i = pointer.x / canvas_width  * state.size.x;
    j = pointer.y / canvas_height * state.size.y;
    *)
    inside
  }
  *)
