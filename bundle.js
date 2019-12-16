var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;
/*  Not a pure module */

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }  return result;
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}
/* No side effect */

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var init_arity = f.length;
    var arity = init_arity === 0 ? 1 : init_arity;
    var len = args.length;
    var d = arity - len | 0;
    if (d === 0) {
      return f.apply(null, args);
    } else if (d < 0) {
      _args = caml_array_sub(args, arity, -d | 0);
      _f = f.apply(null, caml_array_sub(args, 0, arity));
      continue ;
    } else {
      return (function(f,args){
      return function (x) {
        return app(f, args.concat(/* array */[x]));
      }
      }(f,args));
    }
  }}

function curry_1(o, a0, arity) {
  switch (arity) {
    case 1 :
        return o(a0);
    case 2 :
        return (function (param) {
            return o(a0, param);
          });
    case 3 :
        return (function (param, param$1) {
            return o(a0, param, param$1);
          });
    case 4 :
        return (function (param, param$1, param$2) {
            return o(a0, param, param$1, param$2);
          });
    case 5 :
        return (function (param, param$1, param$2, param$3) {
            return o(a0, param, param$1, param$2, param$3);
          });
    case 6 :
        return (function (param, param$1, param$2, param$3, param$4) {
            return o(a0, param, param$1, param$2, param$3, param$4);
          });
    case 7 :
        return (function (param, param$1, param$2, param$3, param$4, param$5) {
            return o(a0, param, param$1, param$2, param$3, param$4, param$5);
          });
    default:
      return app(o, /* array */[a0]);
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function curry_2(o, a0, a1, arity) {
  switch (arity) {
    case 1 :
        return app(o(a0), /* array */[a1]);
    case 2 :
        return o(a0, a1);
    case 3 :
        return (function (param) {
            return o(a0, a1, param);
          });
    case 4 :
        return (function (param, param$1) {
            return o(a0, a1, param, param$1);
          });
    case 5 :
        return (function (param, param$1, param$2) {
            return o(a0, a1, param, param$1, param$2);
          });
    case 6 :
        return (function (param, param$1, param$2, param$3) {
            return o(a0, a1, param, param$1, param$2, param$3);
          });
    case 7 :
        return (function (param, param$1, param$2, param$3, param$4) {
            return o(a0, a1, param, param$1, param$2, param$3, param$4);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1
                ]);
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function curry_3(o, a0, a1, a2, arity) {
  switch (arity) {
    case 1 :
        return app(o(a0), /* array */[
                    a1,
                    a2
                  ]);
    case 2 :
        return app(o(a0, a1), /* array */[a2]);
    case 3 :
        return o(a0, a1, a2);
    case 4 :
        return (function (param) {
            return o(a0, a1, a2, param);
          });
    case 5 :
        return (function (param, param$1) {
            return o(a0, a1, a2, param, param$1);
          });
    case 6 :
        return (function (param, param$1, param$2) {
            return o(a0, a1, a2, param, param$1, param$2);
          });
    case 7 :
        return (function (param, param$1, param$2, param$3) {
            return o(a0, a1, a2, param, param$1, param$2, param$3);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2
                ]);
  }
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}
/* No side effect */

function __(tag, block) {
  block.tag = tag;
  return block;
}
/* No side effect */

function caml_int_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}
/* No side effect */

function div(x, y) {
  if (y === 0) {
    throw division_by_zero;
  }
  return x / y | 0;
}

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);
/* imul Not a pure module */

var id = {
  contents: 0
};

function caml_fresh_oo_id(param) {
  id.contents = id.contents + 1;
  return id.contents;
}

function create(str) {
  var v_001 = caml_fresh_oo_id();
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}
/* No side effect */

var $$Error = create("Caml_js_exceptions.Error");
/* No side effect */

var Exit = create("Pervasives.Exit");

function $at(l1, l2) {
  if (l1) {
    return /* :: */[
            l1[0],
            $at(l1[1], l2)
          ];
  } else {
    return l2;
  }
}
/* No side effect */

function length(l) {
  var _len = 0;
  var _param = l;
  while(true) {
    var param = _param;
    var len = _len;
    if (param) {
      _param = param[1];
      _len = len + 1 | 0;
      continue ;
    } else {
      return len;
    }
  }}

function hd(param) {
  if (param) {
    return param[0];
  } else {
    throw [
          failure,
          "hd"
        ];
  }
}

function tl(param) {
  if (param) {
    return param[1];
  } else {
    throw [
          failure,
          "tl"
        ];
  }
}

function nth(l, n) {
  if (n < 0) {
    throw [
          invalid_argument,
          "List.nth"
        ];
  }
  var _l = l;
  var _n = n;
  while(true) {
    var n$1 = _n;
    var l$1 = _l;
    if (l$1) {
      if (n$1 === 0) {
        return l$1[0];
      } else {
        _n = n$1 - 1 | 0;
        _l = l$1[1];
        continue ;
      }
    } else {
      throw [
            failure,
            "nth"
          ];
    }
  }}

function rev_append(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;
    } else {
      return l2;
    }
  }}

function rev(l) {
  return rev_append(l, /* [] */0);
}

function init_tailrec_aux(_acc, _i, n, f) {
  while(true) {
    var i = _i;
    var acc = _acc;
    if (i >= n) {
      return acc;
    } else {
      _i = i + 1 | 0;
      _acc = /* :: */[
        _1(f, i),
        acc
      ];
      continue ;
    }
  }}

function init_aux(i, n, f) {
  if (i >= n) {
    return /* [] */0;
  } else {
    var r = _1(f, i);
    return /* :: */[
            r,
            init_aux(i + 1 | 0, n, f)
          ];
  }
}

function init(len, f) {
  if (len < 0) {
    throw [
          invalid_argument,
          "List.init"
        ];
  }
  if (len > 10000) {
    return rev_append(init_tailrec_aux(/* [] */0, 0, len, f), /* [] */0);
  } else {
    return init_aux(0, len, f);
  }
}

function map(f, param) {
  if (param) {
    var r = _1(f, param[0]);
    return /* :: */[
            r,
            map(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi(i, f, param) {
  if (param) {
    var r = _2(f, i, param[0]);
    return /* :: */[
            r,
            mapi(i + 1 | 0, f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi$1(f, l) {
  return mapi(0, f, l);
}

function iteri(f, l) {
  var _i = 0;
  var f$1 = f;
  var _param = l;
  while(true) {
    var param = _param;
    var i = _i;
    if (param) {
      _2(f$1, i, param[0]);
      _param = param[1];
      _i = i + 1 | 0;
      continue ;
    } else {
      return /* () */0;
    }
  }}

function fold_left(f, _accu, _l) {
  while(true) {
    var l = _l;
    var accu = _accu;
    if (l) {
      _l = l[1];
      _accu = _2(f, accu, l[0]);
      continue ;
    } else {
      return accu;
    }
  }}

function exists(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (_1(p, param[0])) {
        return true;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return false;
    }
  }}

var append = $at;
/* No side effect */

function list_length(_accu, _param) {
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = accu + 1 | 0;
      continue ;
    } else {
      return accu;
    }
  }}

function of_list(l) {
  if (l) {
    var a = caml_make_vect(list_length(0, l), l[0]);
    var _i = 1;
    var _param = l[1];
    while(true) {
      var param = _param;
      var i = _i;
      if (param) {
        a[i] = param[0];
        _param = param[1];
        _i = i + 1 | 0;
        continue ;
      } else {
        return a;
      }
    }  } else {
    return /* array */[];
  }
}

var Bottom = create("Array.Bottom");
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function lmatrix_mapij(f, a) {
  return mapi$1((function (i, row) {
                return mapi$1((function (j, e) {
                              return _3(f, i, j, e);
                            }), row);
              }), a);
}

function lmatrix_iterij(f, a) {
  return iteri((function (i, row) {
                return iteri((function (j, e) {
                              return _3(f, i, j, e);
                            }), row);
              }), a);
}

function lmatrix_create(i, j, e) {
  return init(i, (function (param) {
                return init(j, (function (param) {
                              return e;
                            }));
              }));
}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function draw_selection(x, y) {
  drawCircle(x, y, 20, "black");
  return /* () */0;
}

function draw(state) {
  var draw_one = function (i, j, e) {
    var dot_w = div(canvas.width, state.size.contents.x);
    var dot_h = div(canvas.height, state.size.contents.y);
    var r = caml_int_min(dot_w / 2 | 0, dot_h / 2 | 0);
    var x = imul(i, dot_w) + (dot_w / 2 | 0) | 0;
    var y = imul(j, dot_h) + (dot_h / 2 | 0) | 0;
    var match = e ? /* tuple */[
        "black",
        (r << 1) / 3 | 0
      ] : /* tuple */[
        "grey",
        r / 5 | 0
      ];
    drawDisk(x, y, match[1], match[0]);
    return /* () */0;
  };
  clear();
  if (state.size.contents.x !== 0 && state.size.contents.y !== 0) {
    return lmatrix_iterij(draw_one, state.board.contents);
  } else {
    return /* () */0;
  }
}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

var pointer = {
  contents: {
    x: 0,
    y: 0,
    i: 0,
    j: 0,
    inside: false,
    selecting: false
  }
};

var state_size = {
  contents: {
    x: 3,
    y: 3
  }
};

var state_board = {
  contents: lmatrix_create(3, 3, /* Dead */0)
};

var state_previous = {
  contents: /* [] */0
};

var state = {
  size: state_size,
  board: state_board,
  previous: state_previous
};

function prune_top(_board) {
  while(true) {
    var board = _board;
    if (board) {
      if (exists((function (e) {
                return e === /* Alive */1;
              }), board[0])) {
        return board;
      } else {
        _board = board[1];
        continue ;
      }
    } else {
      return /* [] */0;
    }
  }}

function prune_left(_board) {
  while(true) {
    var board = _board;
    var column = map(hd, board);
    if (length(board) === 0) {
      return /* [] */0;
    } else if (exists((function (e) {
              return e === /* Alive */1;
            }), column)) {
      return board;
    } else {
      _board = map(tl, board);
      continue ;
    }
  }}

function prune_right(board) {
  return map(rev, prune_left(map(rev, board)));
}

function prune(board) {
  var board$1 = prune_top(board);
  return prune_left(prune_right(rev(prune_top(rev(board$1)))));
}

function resize(board) {
  if (board === /* [] */0) {
    return /* :: */[
            /* :: */[
              /* Dead */0,
              /* [] */0
            ],
            /* [] */0
          ];
  } else {
    var board2 = map((function (row) {
            return /* :: */[
                    /* Dead */0,
                    append(row, /* :: */[
                          /* Dead */0,
                          /* [] */0
                        ])
                  ];
          }), board);
    var length$1 = length(hd(board2));
    var column = init(length$1, (function (param) {
            return /* Dead */0;
          }));
    return /* :: */[
            column,
            append(board2, /* :: */[
                  column,
                  /* [] */0
                ])
          ];
  }
}

function next(board) {
  var is_alive = function (coords) {
    var j = coords[1];
    var i = coords[0];
    if (i < 0 || i >= state_size.contents.x || j < 0 || j >= state_size.contents.y) {
      return 0;
    } else {
      var row = nth(board, i);
      var cell = nth(row, j);
      if (cell) {
        return 1;
      } else {
        return 0;
      }
    }
  };
  var sum_neighbourg = function (x, y) {
    var coords = map((function (coords) {
            return /* tuple */[
                    x + coords[0] | 0,
                    y + coords[1] | 0
                  ];
          }), /* :: */[
          /* tuple */[
            -1,
            -1
          ],
          /* :: */[
            /* tuple */[
              -1,
              0
            ],
            /* :: */[
              /* tuple */[
                -1,
                1
              ],
              /* :: */[
                /* tuple */[
                  0,
                  -1
                ],
                /* :: */[
                  /* tuple */[
                    0,
                    1
                  ],
                  /* :: */[
                    /* tuple */[
                      1,
                      -1
                    ],
                    /* :: */[
                      /* tuple */[
                        1,
                        0
                      ],
                      /* :: */[
                        /* tuple */[
                          1,
                          1
                        ],
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]);
    var neighbourg = map(is_alive, coords);
    return fold_left((function (prim, prim$1) {
                  return prim + prim$1 | 0;
                }), 0, neighbourg);
  };
  var next_one = function (i, j, e) {
    var n = sum_neighbourg(i, j);
    if (e) {
      if (n === 3 || n === 2) {
        return /* Alive */1;
      } else {
        return /* Dead */0;
      }
    } else if (n !== 3) {
      return /* Dead */0;
    } else {
      return /* Alive */1;
    }
  };
  return lmatrix_mapij(next_one, board);
}

function flip(i, j, i2, j2, e) {
  if (i === i2 && j === j2) {
    if (e) {
      return /* Dead */0;
    } else {
      return /* Alive */1;
    }
  } else {
    return e;
  }
}

function update($$event) {
  var board;
  if (typeof $$event === "number") {
    switch ($$event) {
      case /* Nothing */0 :
          board = state_board.contents;
          break;
      case /* Next */1 :
          board = next(state_board.contents);
          break;
      case /* Previous */2 :
          board = hd(state_previous.contents);
          break;
      case /* Reset */3 :
          board = lmatrix_create(3, 3, /* Dead */0);
          break;
      
    }
  } else {
    switch ($$event.tag | 0) {
      case /* Click */0 :
          var j = $$event[1];
          var i = $$event[0];
          board = lmatrix_mapij((function (param, param$1, param$2) {
                  return flip(i, j, param, param$1, param$2);
                }), state_board.contents);
          break;
      case /* ClickThenNext */1 :
          var j$1 = $$event[1];
          var i$1 = $$event[0];
          board = next(lmatrix_mapij((function (param, param$1, param$2) {
                      return flip(i$1, j$1, param, param$1, param$2);
                    }), state_board.contents));
          break;
      case /* Select */2 :
          board = state_board.contents;
          break;
      
    }
  }
  var previous;
  var exit = 0;
  if (typeof $$event === "number") {
    switch ($$event) {
      case /* Next */1 :
          previous = /* :: */[
            state_board.contents,
            state_previous.contents
          ];
          break;
      case /* Previous */2 :
          previous = tl(state_previous.contents);
          break;
      default:
        previous = state_previous.contents;
    }
  } else {
    switch ($$event.tag | 0) {
      case /* Click */0 :
      case /* ClickThenNext */1 :
          exit = 1;
          break;
      default:
        previous = state_previous.contents;
    }
  }
  if (exit === 1) {
    previous = /* :: */[
      state_board.contents,
      state_previous.contents
    ];
  }
  state_previous.contents = previous;
  var tmp;
  tmp = typeof $$event === "number" ? (
      $$event === /* Next */1 ? resize(prune(board)) : board
    ) : (
      $$event.tag ? board : resize(prune(board))
    );
  state_board.contents = tmp;
  state_size.contents = {
    x: length(state_board.contents),
    y: length(state_board.contents) === 0 ? 0 : length(hd(state_board.contents))
  };
  pointer.contents = pointer.contents;
  draw(state);
  return draw_selection(pointer.contents.x, pointer.contents.y);
}

function mousedown(x, y) {
  var init = pointer.contents;
  pointer.contents = {
    x: init.x,
    y: init.y,
    i: init.i,
    j: init.j,
    inside: init.inside,
    selecting: true
  };
  return update(/* Click */__(0, [
                div(x, div(canvas.width, state_size.contents.x)),
                div(y, div(canvas.height, state_size.contents.y))
              ]));
}

function mouseup(param) {
  var init = pointer.contents;
  pointer.contents = {
    x: init.x,
    y: init.y,
    i: init.i,
    j: init.j,
    inside: init.inside,
    selecting: false
  };
  return /* () */0;
}

function mousemove(x, y) {
  var init = pointer.contents;
  pointer.contents = {
    x: x,
    y: y,
    i: init.i,
    j: init.j,
    inside: init.inside,
    selecting: init.selecting
  };
  if (state_size.contents.x !== 0 && state_size.contents.y !== 0) {
    return update(/* Select */__(2, [
                  div(x, div(canvas.width, state_size.contents.x)),
                  div(y, div(canvas.height, state_size.contents.y))
                ]));
  } else {
    return /* () */0;
  }
}

function keydown(str) {
  var tmp;
  switch (str) {
    case "ArrowLeft" :
        tmp = /* Previous */2;
        break;
    case " " :
    case "ArrowRight" :
        tmp = /* Next */1;
        break;
    case "Escape" :
        tmp = /* Reset */3;
        break;
    default:
      console.log(str);
      tmp = /* Nothing */0;
  }
  return update(tmp);
}

function reset(param) {
  return update(/* Reset */3);
}

function previous(param) {
  return update(/* Previous */2);
}

function next$1(param) {
  return update(/* Next */1);
}

function save(param) {
  console.log(of_list(map(of_list, state_board.contents)));
  return /* () */0;
}

bind_mousemove(mousemove);

bind_mousedown(mousedown);

bind_mouseup(mouseup);

bind_keydown(keydown);

bind_button(".next", next$1);

bind_button(".previous", previous);

bind_button(".reset", reset);

bind_button(".save", save);

update(/* Click */__(0, [
        1,
        1
      ]));

update(/* Click */__(0, [
        1,
        2
      ]));

update(/* Click */__(0, [
        1,
        3
      ]));

update(/* Click */__(0, [
        1,
        2
      ]));
/* state Not a pure module */
