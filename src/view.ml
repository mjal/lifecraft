open Global
open Tea.Html

let view_button title msg =
  button [ onClick msg; class' "btn btn-light flex-1" ] [ text title ]

let view_link title msg =
  p [] [ a [ href "#"; onClick msg ] [ text title ] ]

let seed_link (name, url) =
  div [] [a [href "#"; onClick (Fetch(url))] [text name]]

let auto_clamp_button model =
  let text = if model.auto_clamp then "Auto: On" else "Auto: Off" in
  view_button text SetAutoClamp

let select_rule model =
  let rule_list =
    [("B3S23", B3S23, 0); ("B36S23", B36S23, 1)]
  in
  let rules_option (str, rule, i) =
    option' [
      Attributes.selected (model.rule = rule);
      onClick (SetRule(rule));
    ] [text str]
  in select [] (List.map rules_option rule_list)

let select_backend model =
  let backend_list =
    [("Html", Html, 0); ("Svg", Svg, 1); ("Canvas", Canvas, 2)]
  in
  let backend_option (str, backend, i) =
    option' [
      Attributes.selected (model.backend = backend);
      onClick (SetBackend(backend));
    ] [text str]
  in select [] (List.map backend_option backend_list)

let file_menu model =
  let directories = List.map (fun (k,v) -> k) Filelist.list in
  let file_button model filename = 
    view_button filename (Fetch ("Life/" ^ model.directory ^ "/" ^ filename))
  in
  let files_from_dir dir =
    try let (k,files) = List.find (fun (k,v) -> dir = k) Filelist.list in files
    with _ -> []
  in
  if not model.show_patterns then div [] [] else
    div [] [
      div [class' "menu flex"] (List.map (fun e -> view_button e (SetDirectory e)) directories);
      div [class' "menu flex"] (List.map (file_button model) (files_from_dir model.directory));
    ]

let view model =
  div [id "container"; class' "flex"] [
    div [id "center"] [
      div [class' "menu flex"] [
        view_button "Reset" Reset;
        view_button "Next" Next;
        (*view_button "Previous" Previous;*)
        select_rule model;
        select_backend model;
        view_button "Resize" Clamp;
        auto_clamp_button model;
        view_button "Patterns" SetShowPattern;
      ];
      file_menu model;
      div [class' "board"] (Draw.draw model);
    ];
  ]
