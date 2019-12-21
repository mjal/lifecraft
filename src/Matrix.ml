let make i j e =
  Array.make_matrix i j e

let mapij f matrix =
  matrix  |> Array.mapi (fun i row -> row
          |> Array.mapi (fun j e -> f i j e))
