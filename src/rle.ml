open Global

type state = FindX | ParseX | FindY | ParseY | Reading | End

type header = {
  state: state;
  line: cell list;
  grid: cell list list;
  x: int; y: int;
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
  | _, ',' :: tl -> parse_header o tl
  | FindX, 'x' :: tl -> parse_header {o with state = ParseX } tl
  | FindY, 'y' :: tl -> parse_header {o with state = ParseY } tl
  | ParseX, '0'..'9' :: _ ->
      let l2, x = parse_int l in
      parse_header {o with x; state = FindY } l2
  | ParseY, '0'..'9' :: _tl ->
      let l2, y = parse_int l in
      parse_header {o with y; state = Reading } l2
  | Reading, _ -> o
  | _, c :: _ -> raise (Invalid_argument (String.make 1 c))
  | _, []     -> raise (Failure "Incomplete header")

let print_list l =
  List.iter (fun e -> print_string (String.make 1 e)) l;
  print_string "\n";
  ()

let print_cell_list l =
  List.iter (fun e -> print_string (if e = Dead then "x" else "o")) l;
  print_string "\n";
  ()

let parse_map o l =
  let rec f n o l =
    match l with
    | '0'..'9' :: _tl -> let l2, n = parse_int l in f n o l2
    | 'b' :: tl ->
       let line = (List.init n (fun _ -> Dead))  @ o.line in
       f 1 {o with line} tl
    | 'o' :: tl ->
       let line = (List.init n (fun _ -> Alive))  @ o.line in
       f 1 {o with line} tl
    | '$' :: tl ->
       let grid = o.line :: o.grid in
       f 1 {o with line = []; grid} tl
    | '!' :: tl -> f 1 {o with state = End} tl
    | c   :: _ -> raise (Invalid_argument (String.make 1 c))
    | [] -> o
  in f 1 o l

let parse_line o s =
  let l = explode s in
  if l = [] then o else
  let c = List.hd l in
  if c = '#' then o
  else if o.state = FindX then parse_header o l
  else parse_map o l

let rec parse_lines o ss =
  match ss with
  | [] -> o
  | s :: tl -> parse_lines (parse_line o s) tl

let to_array o =
  let dx = o.x - List.length o.grid in
  let grid = o.grid (* if dx > 0 then o.grid @@ (List.init dx [||]) else o.grid in *) in
  let resize_row n l =
    let n2 = List.length l in
    if n2 < n then List.append l (List.init (n - n2) (fun  _ -> Dead))
    else if n2 > n then l (* TODO : clamp_list *)
    else l
  in
  let grid2 = List.map (resize_row o.x) grid in
  let grid3 = List.map (List.rev) grid2 in
  Array.of_list (List.rev_map Array.of_list grid3)


let parse text = 
  let o = {x = 0; y = 0; state = FindX; line = []; grid = [] } in
  let ss = String.split_on_char '\n' text in
  let o2 = parse_lines o ss in
  to_array o2

let rec print_grid_line = function
  | Dead :: tl ->
     print_string "x";
     print_grid_line tl
  | Alive :: tl ->
     print_string "o";
     print_grid_line tl
  | [] -> ()

let rec print_grid = function
  | hd::tl ->
     print_grid_line hd;
     print_string "\n";
     print_grid tl;
  | _ -> ();

(*
let o = {x = 0; y = 0; state = FindX; line = []; grid = [] };;

#use "topfind";;
#require "extlib";;
let file = (Std.input_file "test.rle");;

let r = parse o file;;

Printf.printf "x = %d y = %d\n" r.x r.y;
print_grid r.grid;;
*)
