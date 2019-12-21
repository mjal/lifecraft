// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Tea_app from "../node_modules/bucklescript-tea/src-ocaml/tea_app.js";
import * as Tea_html from "../node_modules/bucklescript-tea/src-ocaml/tea_html.js";

function set(param_0) {
  return /* Set */[param_0];
}

function init(param) {
  return 4;
}

function update(model, param) {
  if (typeof param === "number") {
    switch (param) {
      case /* Increment */0 :
          return model + 1 | 0;
      case /* Decrement */1 :
          return model - 1 | 0;
      case /* Reset */2 :
          return 0;
      
    }
  } else {
    return param[0];
  }
}

function view_button(title, msg) {
  return Tea_html.button(undefined, undefined, /* :: */[
              Tea_html.onClick(msg),
              /* [] */0
            ], /* :: */[
              Tea_html.text(title),
              /* [] */0
            ]);
}

function view(model) {
  return Tea_html.div(undefined, undefined, /* [] */0, /* :: */[
              Tea_html.span(undefined, undefined, /* :: */[
                    Tea_html.style("text-weight", "bold"),
                    /* [] */0
                  ], /* :: */[
                    Tea_html.text(String(model)),
                    /* [] */0
                  ]),
              /* :: */[
                Tea_html.br(/* [] */0),
                /* :: */[
                  view_button("Increment", /* Increment */0),
                  /* :: */[
                    Tea_html.br(/* [] */0),
                    /* :: */[
                      view_button("Decrement", /* Decrement */1),
                      /* :: */[
                        Tea_html.br(/* [] */0),
                        /* :: */[
                          view_button("Set to 42", /* Set */[42]),
                          /* :: */[
                            Tea_html.br(/* [] */0),
                            /* :: */[
                              model !== 0 ? view_button("Reset", /* Reset */2) : Tea_html.noNode,
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var partial_arg = {
  model: 4,
  update: update,
  view: view
};

function main(param, param$1) {
  return Tea_app.beginnerProgram(partial_arg, param, param$1);
}

var increment = /* Increment */0;

var decrement = /* Decrement */1;

var reset = /* Reset */2;

export {
  increment ,
  decrement ,
  reset ,
  set ,
  init ,
  update ,
  view_button ,
  view ,
  main ,
  
}
/* Tea_html Not a pure module */
