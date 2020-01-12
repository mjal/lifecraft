open Global
open Tea.Html

let view_button title msg =
  button [ onClick msg; class' "flex-1" ] [ text title ]

let view_link title msg =
  p [] [ a [ href "#"; onClick msg ] [ text title ] ]

let select_rule model =
  let change_rule i =
    let _,rule,_ = List.find (fun (_,_,j) -> i = j) rule_list in
    SetRule(rule)
  in
  let rules_option (str, rule, i) =
    option' [
      value (string_of_int i);
      Attributes.selected (model.rule = rule)
    ] [text str]
  in select [onChange (fun v -> v |> int_of_string |> change_rule)] (List.map rules_option rule_list)

let view model =
  div [id "container"; class' "flex"] [
    div [id "left-side"] [
      (select_rule model);
      div [] [
        a [href "#"; onClick (Fetch("test.rle"))] [text "Test"];
      ];
      div [] [
        a [href "#"; onClick (Fetch("elephant.rle"))] [text "Elephant"];
      ];
      div [] [
        a [href "#"; onClick (Fetch("ufo.rle"))] [text "UFO"];
      ];
      div [] [
        span [] [text "x = "];
        input' [type' "text"; class' "small-i"; value (Js.String.make (Matrix.width  model.board)); onInput (fun x -> SetX(int_of_string x)) ] [];
        span [] [text "y = "];
        input' [type' "text"; class' "small-i"; value (Js.String.make (Matrix.height model.board)); onInput (fun y -> SetY(int_of_string y)) ] [];
        view_button "Clamp" Clamp;
      ];
      div [class' "flex"] [
        if model.auto_clamp
        then view_button "Auto clamp: On" ToggleAutoClamp
        else view_button "Auto clamp: Off"  ToggleAutoClamp
      ]
    ];
    div [id "center"] [
      div [class' "flex"] [
        div [class' "flex-1 centered"; id "size"] [
          p [] [text (Printf.sprintf "Size : %dx%d" (Matrix.width model.board) (Matrix.height model.board))]
        ];
        div [class' "flex-1 centered"; id "population"] [
          p [] [text "My Pop"]
        ]
      ];
      div [class' "board"] (Draw.draw_html model);
      (*node "canvas" [Vdom.attribute "" "width" "640"; Vdom.attribute "" "height" "640"] []; *)
      div [class' "flex"] [
        view_button "Reset" Reset;
        view_button "Previous" Previous;
        view_button "Next" Next;
        (*view_button "Save" Save; *)
      ]
    ];
  ]
