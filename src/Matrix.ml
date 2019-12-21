let make i j e =
  Array.make i (Array.make j e)

let mapij f a =
  Array.mapi (fun i row -> Array.mapi (fun j e -> f i j e) row) a

let iterij f a =
  Array.iteri (fun i row -> Array.iteri (fun j e -> f i j e) row) a

