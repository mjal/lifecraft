open Global
open Tea.Html

let view_button title msg =
  button [ onClick msg; class' "flex-1" ] [ text title ]

let view_link title msg =
  p [] [ a [ href "#"; onClick msg ] [ text title ] ]

let seed_link (name, url) =
  div [] [a [href "#"; onClick (Fetch(url))] [text name]]

let select_rule model =
  let change_rule i =
    let _,rule,_ = List.find (fun (_,_,j) -> i = j) rule_list in
    SetRule(rule)
  in
  let rules_option (str, rule, i) =
    option' [
      value (string_of_int i);
      Attributes.selected (model.rule = rule)
    ] [text str] in
  (* select [onChange (fun v -> v |> int_of_string |> change_rule)] (List.map rules_option rule_list) *)
  div [class' "dropdown"] [
    button [class' "btn btn-secondary dropdown-toggle";
    type' "button";
    Vdom.attribute "" "data-toggle" "dropdown"
  ] [text "Rule"];
    div [class' "dropdown menu";
    ] (
      List.map (fun (str, rule, i) ->
        a [class' "dropdown-item"; href "#"] [text str]
      ) rule_list
    )
  ]

let select_backend model =
  let change_backend i = let _,backend,_ = List.find (fun (_,_,j) -> i = j) backend_list in SetBackend(backend) in
  let backend_option (str, enum, i) =
    option' [
      value (string_of_int i);
      Attributes.selected (model.backend = enum)
    ] [text str]
  in select [onChange (fun v -> v |> int_of_string |> change_backend)] (List.map backend_option backend_list)

let params_form model =
  div [class' "flex"] [
    select_rule model;
    select_backend model;
    span [class' "label-i"] [text "x = "];
    input' [
      type' "text"; class' "small-i";
      value (Js.String.make (Matrix.width model.board));
      onInput (fun x -> Resize(int_of_string x, Matrix.height model.board))
    ] [];
    span [class' "label-i"] [text "y = "];
    input' [
      type' "text"; class' "small-i";
      value (Js.String.make (Matrix.height model.board));
      onInput (fun y -> Resize(Matrix.width model.board, int_of_string y))
    ] [];
    view_button "Resize" Clamp;
    if model.auto_clamp
    then view_button "Auto: On" ToggleAutoClamp
    else view_button "Auto: Off"  ToggleAutoClamp
  ]

let view model =
  div [id "container"; class' "flex"] [
    div [id "left-side"] [
      params_form model;
      div [] (List.map seed_link seed_list)
    ];
    div [id "center"] [
      (*div [class' "flex"] [
        div [class' "flex-1 centered"; id "size"] [
          p [] [text (Printf.sprintf "Size : %dx%d" (Matrix.width model.board) (Matrix.height model.board))]
        ];
        div [class' "flex-1 centered"; id "population"] [
          p [] [text "Unimplemented"]
        ]
      ];*)
      div [class' "board"] (Draw.draw model);
      (*node "canvas" [Vdom.attribute "" "width" "640"; Vdom.attribute "" "height" "640"] []; *)
      div [class' "flex"] [
        view_button "Reset" Reset;
        view_button "Previous" Previous;
        view_button "Next" Next;
        (*view_button "Save" Save; *)
      ]
    ];
  ]
