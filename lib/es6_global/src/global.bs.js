// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Caml_chrome_debugger from "../../../node_modules/bs-platform/lib/es6/caml_chrome_debugger.js";

function flip(param_0, param_1) {
  return /* Flip */Caml_chrome_debugger.variant("Flip", 0, [
            param_0,
            param_1
          ]);
}

function setBoard(param_0) {
  return /* SetBoard */Caml_chrome_debugger.variant("SetBoard", 1, [param_0]);
}

function setBoardFromSeed(param_0) {
  return /* SetBoardFromSeed */Caml_chrome_debugger.variant("SetBoardFromSeed", 2, [param_0]);
}

function addSeed(param_0, param_1) {
  return /* AddSeed */Caml_chrome_debugger.variant("AddSeed", 3, [
            param_0,
            param_1
          ]);
}

function resize(param_0, param_1) {
  return /* Resize */Caml_chrome_debugger.variant("Resize", 4, [
            param_0,
            param_1
          ]);
}

function setX(param_0) {
  return /* SetX */Caml_chrome_debugger.variant("SetX", 5, [param_0]);
}

function setY(param_0) {
  return /* SetY */Caml_chrome_debugger.variant("SetY", 6, [param_0]);
}

function setRule(param_0) {
  return /* SetRule */Caml_chrome_debugger.variant("SetRule", 7, [param_0]);
}

function setBackend(param_0) {
  return /* SetBackend */Caml_chrome_debugger.variant("SetBackend", 8, [param_0]);
}

function keyPressed(param_0) {
  return /* KeyPressed */Caml_chrome_debugger.variant("KeyPressed", 9, [param_0]);
}

function $$fetch(param_0) {
  return /* Fetch */Caml_chrome_debugger.variant("Fetch", 10, [param_0]);
}

function lifeData(param_0) {
  return /* LifeData */Caml_chrome_debugger.variant("LifeData", 11, [param_0]);
}

var b3S23 = /* B3S23 */0;

var b36S23 = /* B36S23 */1;

var nothing = /* Nothing */0;

var reset = /* Reset */1;

var next = /* Next */2;

var previous = /* Previous */3;

var toggleAutoClamp = /* ToggleAutoClamp */4;

var clamp = /* Clamp */5;

var rule_list = /* :: */Caml_chrome_debugger.simpleVariant("::", [
    /* tuple */[
      "B3S23",
      /* B3S23 */0,
      0
    ],
    /* :: */Caml_chrome_debugger.simpleVariant("::", [
        /* tuple */[
          "B36S23",
          /* B36S23 */1,
          1
        ],
        /* [] */0
      ])
  ]);

var backend_list = /* :: */Caml_chrome_debugger.simpleVariant("::", [
    /* tuple */[
      "Html",
      /* Html */0,
      0
    ],
    /* :: */Caml_chrome_debugger.simpleVariant("::", [
        /* tuple */[
          "Svg",
          /* Svg */1,
          1
        ],
        /* :: */Caml_chrome_debugger.simpleVariant("::", [
            /* tuple */[
              "Canvas",
              /* Canvas */2,
              2
            ],
            /* [] */0
          ])
      ])
  ]);

var seed_list = /* :: */Caml_chrome_debugger.simpleVariant("::", [
    /* tuple */[
      "Test",
      "test.rle"
    ],
    /* :: */Caml_chrome_debugger.simpleVariant("::", [
        /* tuple */[
          "Elephant",
          "elephant.rle"
        ],
        /* :: */Caml_chrome_debugger.simpleVariant("::", [
            /* tuple */[
              "UFO",
              "ufo.rle"
            ],
            /* :: */Caml_chrome_debugger.simpleVariant("::", [
                /* tuple */[
                  "Bob",
                  "bob.rle"
                ],
                /* [] */0
              ])
          ])
      ])
  ]);

export {
  b3S23 ,
  b36S23 ,
  nothing ,
  reset ,
  flip ,
  next ,
  previous ,
  setBoard ,
  setBoardFromSeed ,
  addSeed ,
  resize ,
  setX ,
  setY ,
  setRule ,
  setBackend ,
  keyPressed ,
  toggleAutoClamp ,
  clamp ,
  $$fetch ,
  lifeData ,
  rule_list ,
  backend_list ,
  seed_list ,
  
}
/* No side effect */