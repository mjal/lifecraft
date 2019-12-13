let matrix_mapij f a =
  Array.mapi (fun i row ->
    Array.mapi (fun j e -> f i j e) row
  ) a

let matrix_iterij f a =
  Array.iteri (fun i row ->
    Array.iteri (fun j e -> f i j e) row
  ) a

let listmatrix_mapij f a =
  List.mapi (fun i row ->
    List.mapi (fun j e -> f i j e) row
  ) a

let listmatrix_iterij f a =
  List.iteri (fun i row ->
    List.iteri (fun j e -> f i j e) row
  ) a

type player =
  | Player
  | Enemy

type sphere_type =
  | Base
  | Scout
  | View

type point =
  | Dead
  | Alive

type event =
  | Click of int * int
  | Select of int * int
  | Next
  | Previous
  | Reset

external width: int = "canvas.width" [@@bs.val]
external height: int = "canvas.height" [@@bs.val]

external drawCircle: x:int -> y:int -> r:int -> color:string -> unit = "drawCircle" [@@bs.val]
external drawDisk: x:int -> y:int -> r:int -> color:string -> unit = "drawDisk" [@@bs.val]
external clear: unit -> unit = "clear" [@@bs.val]

external setTimeout: (unit -> unit) -> int -> unit = "setInterval" [@@bs.val]

external bind_mousemove:  (int -> int -> unit) -> unit = "bind_mousemove" [@@bs.val]
external bind_mousedown:  (int -> int -> unit) -> unit = "bind_mousedown" [@@bs.val]
external bind_mouseup:    (unit -> unit) -> unit = "bind_mouseup" [@@bs.val]
external bind_keydown:    (string -> unit) -> unit = "bind_keydown" [@@bs.val]

external bind_reset: (unit -> unit) -> unit = "bind_reset" [@@bs.val]
external bind_previous: (unit -> unit) -> unit = "bind_previous" [@@bs.val]
external bind_next: (unit -> unit) -> unit = "bind_next" [@@bs.val]

let num_dot_x = 21
let num_dot_y = 11
let dot_w = width / num_dot_x
let dot_h = height / num_dot_y
let r = min (dot_w / 2) (dot_h / 2)
