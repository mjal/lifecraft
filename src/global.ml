type cell = Dead | Alive
type rule = B3S23 | B36S23 [@@bs.deriving {accessors}]

type event =
  | Nothing
  | Click of int * int
  | ClickThenNext of int * int
  | Select of int * int
  | Next
  | Previous
  | SetBoard of cell array array
  | SetBoardFromSeed of string
  | AddSeed of string * string
  | SetX of int
  | SetY of int
  | SetRule of rule
  | KeyPressed of Keyboard.key_event
  | ToggleAutoClamp
  | Clamp
  | Reset

type size = { x: int; y: int }
type seed = { name: string; str: string }

type state = {
  size: size;
  board: cell array array;
  previous: cell array array list;
  seeds: seed list;
  rule: rule;
  auto_clamp: bool;
}

type pointer = { x: int; y: int; i: int; j: int; inside: bool; selecting: bool }
