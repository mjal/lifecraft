let make (i:int) (j:int) (e: 'a) =
  Array.make_matrix i j e

let width (a: 'a array array) =
  Array.length a

let height (a: 'a array array) =
  let width = Array.length a in
  if width = 0 then 0
  else Array.length a.(0)

let mapij f matrix =
  matrix  |> Array.mapi (fun i row -> row
          |> Array.mapi (fun j e -> f i j e))

let iterij f matrix =
  matrix  |> Array.iteri (fun i row -> row
          |> Array.iteri (fun j e -> f i j e))

let findi (f: 'a -> bool) (a: 'a array array) =
  let rec findi2 f a i =
    if i >= Array.length a then raise Not_found
    else if Array.exists f a.(i) then i
    else findi2 f a (i+1)
  in findi2 f a 0

let findri (f: 'a -> bool) (a: 'a array array) =
  let rec findri2 f a i =
    if i < 0 then raise Not_found
    else if Array.exists f a.(i) then i
    else findri2 f a (i-1)
  in findri2 f a ((Array.length a)-1)

let vfindi (f: 'a -> bool) (a: 'a array array) =
  let length = 
    if (Array.length a) = 0 then raise Not_found
    else Array.length a.(0)
  in
    let rec vfindi2 f a i =
      if i >= length then raise Not_found
      else
        let found = ref false in
        for j = 0 to ((Array.length a) - 1) do
          if f a.(j).(i) then found := true;
        done;
        if !found then i else vfindi2 f a (i+1)
    in vfindi2 f a 0

let vfindri (f: 'a -> bool) (a: 'a array array) =
  let length = 
    if (Array.length a) = 0 then raise Not_found
    else Array.length a.(0)
  in
    let rec vfindri2 f a i =
      if i < 0 then raise Not_found
      else
        let found = ref false in
        for j = 0 to ((Array.length a) - 1) do
          if f a.(j).(i) then found := true;
        done;
        if !found then i else vfindri2 f a (i-1)
    in vfindri2 f a (length - 1)

let blit m1 x1 y1 m2 x2 y2 w h =
  for i = 0 to (w - 1) do 
    Array.blit m1.(x1 + i) y1 m2.(x2 + i) y2 h;
  done
