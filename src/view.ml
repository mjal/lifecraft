open Global
open Tea.Html

let view_button title msg =
  button [ onClick msg; class' "flex-1" ] [ text title ]

let view_link title msg =
  p [] [ a [ href "#"; onClick msg ] [ text title ] ]

let rules model =
  List.cons
    (select
      [onChange (fun i -> match (int_of_string i) with
        | 0 -> SetRule(B3S23)
        | _ -> SetRule(B36S23)
      )]
      [
        option'
          [ value "0"; Attributes.selected (model.rule = B3S23) ]
          [text "B3S23"];
        option'
          [ value "1"; Attributes.selected (model.rule = B36S23) ]
          [text "B36S23"];
      ]
    )
    (List.map (fun s -> view_link s.name (SetBoardFromSeed(s.str))) model.seeds)

let view model =
  div [id "container"; class' "flex"] [
    div [id "left-side"; class' "flex-1"] (rules model);
    div [id "center"; class' "flex-1"] [
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
    div [id "right-side"; class' "flex-1"] [
      div [class' "flex"] [
        span [class' "flex-1"] [text "x = "];
        input' [
          class' "flex-1";
          type' "text";
          value (Js.String.make (Matrix.width model.board));
          onInput (fun x -> SetX(int_of_string x))
        ] [];

        span [class' "flex-1"] [text "y = "];
        input' [
          class' "flex-1";
          type' "text";
          value (Js.String.make (Matrix.height model.board));
          onInput (fun y -> SetY(int_of_string y))
        ] [];
        view_button "Clamp" Clamp;
      ];
      div [class' "flex"] [
        if model.auto_clamp
        then view_button "Auto clamp: On" ToggleAutoClamp
        else view_button "Auto clamp: Off"  ToggleAutoClamp
      ]
    ]
  ]
