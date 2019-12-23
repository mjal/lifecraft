open Global
open Tea.App
open Tea.Html
open Tea.Cmd

let init () =
  ({
    size = {x = 9; y = 9};
    board = [|[||]|];
    previous = [];
    seeds = [
      {name = "Glisseur 1"; str = "[[0,1,0],[1,0,0],[1,1,1]]"};
      {name = "Mathusalem 1"; str = "[[0,0,1,0],[0,1,0,0],[1,1,1,0]]"}
    ];
    rule = B3S23;
    auto_clamp = false;
  }, msg Reset)

let update state event =
  let board, cmd = Board.update state event in

  (* use cons of x :: xs instead of append *)
  let previous = match event with
    | Next -> state.board :: state.previous;
    | Previous -> (match state.previous with | [] -> [] | _::tl -> tl)
    | Click(_,_) | ClickThenNext(_,_) | SetBoard(_) ->
        state.board :: state.previous;
    | _ -> state.previous
  in 

  let seeds = match event with
    | AddSeed(name,str) -> {name;str} :: state.seeds
    | _ -> state.seeds
  in

  let size = {
    x = Array.length board;
    y = if Array.length board = 0 then 0 else Array.length board.(0)
  } in

  let rule = match event with
    | SetRule(rule) -> rule
    | _ -> state.rule
  in

  let auto_clamp = match event with
    | ToggleAutoClamp -> not state.auto_clamp
    | _ -> state.auto_clamp
  in

  ({ (*state with*) board; previous; size; seeds; rule; auto_clamp}, cmd (* Cmd.Batch *))

let view_button title msg =
  button
    [ onClick msg;
      class' "flex-1"
    ]
    [ text title
    ]

let view_link title msg =
  p [] [
    a [ href "#"; onClick msg ] [ text title ]
  ]

let view model =
  div [id "container"; class' "flex"] [
    div [id "left-side"; class' "flex-1"]
      @@ List.cons
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
    ;
    div [id "center"; class' "flex-1"] [
      div [class' "flex"] [
        div [class' "flex-1 centered"; id "size"] [
          p [] [text (Printf.sprintf "Size : %dx%d" model.size.x model.size.y)]
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
          value @@ Js.String.make model.size.x;
          onInput (fun x -> SetX (int_of_string x))
        ] [];

        span [class' "flex-1"] [text "y = "];
        input' [
          class' "flex-1";
          type' "text";
          value (Js.String.make model.size.y);
          onInput (fun y -> SetY (int_of_string y))
        ] [];
        view_button "Clamp" Clamp;
        br [];
        let name = if model.auto_clamp then "Auto clamp: On" else "Auto clamp: Off" in
          view_button name ToggleAutoClamp;
      ]
    ]
  ]

let subscriptions _ =
  Keyboard.downs (fun k -> KeyPressed k)

let main =
  program {
    init;
    update;
    view;
    subscriptions;
    shutdown = (fun _ -> NoCmd);
  }
