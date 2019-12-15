type cell =
  | Dead
  | Alive

type event =
  | Nothing
  | Click of int * int
  | ClickThenNext of int * int
  | Select of int * int
  | Next
  | Previous
  | Reset

type size = { x: int; y: int }

type state = {
  size: size ref;
  board: cell list list ref;
  previous: cell list list list ref;
}

let matrix_mapij f a =
  Array.mapi (fun i row ->
    Array.mapi (fun j e -> f i j e) row
  ) a

let matrix_iterij f a =
  Array.iteri (fun i row ->
    Array.iteri (fun j e -> f i j e) row
  ) a

let lmatrix_mapij f a =
  List.mapi (fun i row ->
    List.mapi (fun j e -> f i j e) row
  ) a

let lmatrix_iterij f a =
  List.iteri (fun i row ->
    List.iteri (fun j e -> f i j e) row
  ) a

let lmatrix_create i j e =
  List.init i (fun _ -> List.init j (fun _ -> e))


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

external bind_button: string -> (unit -> unit) -> unit = "bind_button" [@@bs.val]
