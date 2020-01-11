open Global
open Tea.Html

let view_button title msg =
  button [ onClick msg; class' "flex-1" ] [ text title ]

let view_link title msg =
  p [] [ a [ href "#"; onClick msg ] [ text title ] ]

let rules_select model =
  let rules = [("B3S23", B3S23, 0); ("B36S23", B36S23, 1)] in
  let change_rule str =
    let i = int_of_string str in
    let res = List.find (fun e -> let _,_,j = e in i == j) rules in
    let _,rule,_ = res in SetRule(rule)
  in
  let rules_option tuple =
    let str, rule, i = tuple in
    option' [ value (string_of_int i); Attributes.selected (model.rule = rule) ] [text str]
  in select [onChange change_rule] (List.map rules_option rules)

let view model =
  div [id "container"; class' "flex"] [
    div [id "left-side"] [
      (rules_select model);
      (div [] (List.map (fun s -> view_link s.name (SetBoardFromSeed(s.str))) model.seeds));
      a [href "#"; onClick (Fetch("test.rle"))] [text "Hello"];
      a [href "#"; onClick (Fetch("elephant.rle"))] [text "Elephant"];
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
