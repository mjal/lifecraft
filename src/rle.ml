type cell = Dead | Alive

type state = FindX | ParseX | FindY | ParseY | Reading | End

type header = {
  state: state;
  line: cell list;
  grid: cell list list;
  x: int;
  y: int;
}

let explode s =
  let rec exp i l =
    if i < 0 then l else exp (i - 1) (s.[i] :: l) in
  exp (String.length s - 1) []

let implode l =
  let res = Bytes.create (List.length l) in
  let rec imp i = function
  | [] -> res
  | c :: l -> Bytes.set res i c; imp (i + 1) l in
  Bytes.to_string (imp 0 l)

let parse_int l =
  let rec f acc = function
    | ('0'..'9' as i) :: tl -> f (i :: acc) tl
    | l2 -> l2, List.rev acc in
  let l2, res = f [] l in
  l2, int_of_string @@ implode res

let rec parse_header o l = 
  match (o.state, l) with
  | _, ' ' :: tl -> parse_header o tl
  | _, '=' :: tl -> parse_header o tl
  | FindX, 'x' :: tl -> parse_header {o with state = ParseX } tl
  | FindY, 'y' :: tl -> parse_header {o with state = ParseY } tl
  | ParseX, '0'..'9' :: _ ->
      let l2, x = parse_int l in
      parse_header {o with x; state = FindY } l2
  | ParseY, '0'..'9' :: _tl ->
      let _l2, y = parse_int l in
      {o with y; state = Reading }
  | _, c :: _ -> raise (Invalid_argument (String.make 1 c))
  | _, []     -> raise (Failure "Incomplete header")

let parse_map o l =
  let rec f n l =
    match l with
    | '0'..'9' :: _tl -> let l2, n = parse_int l in f n l2
    | 'b' :: _tl -> {o with line = (List.init n (fun _ -> Dead))  @ o.line}
    | 'o' :: _tl -> {o with line = (List.init n (fun _ -> Alive)) @ o.line}
    | '$' :: _tl -> {o with line = []; grid = o.line :: o.grid}
    | '!' :: _tl -> {o with state = End}
    | c   :: _ -> raise (Invalid_argument (String.make 1 c))
    | [] -> o
  in f 1 l

let parse_line o s =
  let l = explode s in
  let c = List.hd l in
  if c = '#' then o
  else if o.state = FindX then parse_header o l
  else parse_map o l

let rec parse_lines o ss =
  match ss with
  | [] -> o
  | s :: tl -> parse_lines (parse_line o s) tl

let parse o text = 
  let ss = String.split_on_char '\n' text in
  parse_lines o ss

let o = {x = 0; y = 0; state = FindX; line = []; grid = [] }

let r = parse_header o @@ explode "x 1 y 123";;

Printf.printf "x = %d y = %d" r.x r.y;
