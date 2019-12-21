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

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  }
  return xs[index];
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

function curry_4(o, a0, a1, a2, a3, arity) {
  switch (arity) {
    case 1 :
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3
                  ]);
    case 2 :
        return app(o(a0, a1), /* array */[
                    a2,
                    a3
                  ]);
    case 3 :
        return app(o(a0, a1, a2), /* array */[a3]);
    case 4 :
        return o(a0, a1, a2, a3);
    case 5 :
        return (function (param) {
            return o(a0, a1, a2, a3, param);
          });
    case 6 :
        return (function (param, param$1) {
            return o(a0, a1, a2, a3, param, param$1);
          });
    case 7 :
        return (function (param, param$1, param$2) {
            return o(a0, a1, a2, a3, param, param$1, param$2);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3
                ]);
  }
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  switch (arity) {
    case 1 :
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4
                  ]);
    case 2 :
        return app(o(a0, a1), /* array */[
                    a2,
                    a3,
                    a4
                  ]);
    case 3 :
        return app(o(a0, a1, a2), /* array */[
                    a3,
                    a4
                  ]);
    case 4 :
        return app(o(a0, a1, a2, a3), /* array */[a4]);
    case 5 :
        return o(a0, a1, a2, a3, a4);
    case 6 :
        return (function (param) {
            return o(a0, a1, a2, a3, a4, param);
          });
    case 7 :
        return (function (param, param$1) {
            return o(a0, a1, a2, a3, a4, param, param$1);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4
                ]);
  }
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  switch (arity) {
    case 1 :
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4,
                    a5
                  ]);
    case 2 :
        return app(o(a0, a1), /* array */[
                    a2,
                    a3,
                    a4,
                    a5
                  ]);
    case 3 :
        return app(o(a0, a1, a2), /* array */[
                    a3,
                    a4,
                    a5
                  ]);
    case 4 :
        return app(o(a0, a1, a2, a3), /* array */[
                    a4,
                    a5
                  ]);
    case 5 :
        return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
    case 6 :
        return o(a0, a1, a2, a3, a4, a5);
    case 7 :
        return (function (param) {
            return o(a0, a1, a2, a3, a4, a5, param);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5
                ]);
  }
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  switch (arity) {
    case 1 :
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6
                  ]);
    case 2 :
        return app(o(a0, a1), /* array */[
                    a2,
                    a3,
                    a4,
                    a5,
                    a6
                  ]);
    case 3 :
        return app(o(a0, a1, a2), /* array */[
                    a3,
                    a4,
                    a5,
                    a6
                  ]);
    case 4 :
        return app(o(a0, a1, a2, a3), /* array */[
                    a4,
                    a5,
                    a6
                  ]);
    case 5 :
        return app(o(a0, a1, a2, a3, a4), /* array */[
                    a5,
                    a6
                  ]);
    case 6 :
        return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
    case 7 :
        return o(a0, a1, a2, a3, a4, a5, a6);
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6
                ]);
  }
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  switch (arity) {
    case 1 :
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    case 2 :
        return app(o(a0, a1), /* array */[
                    a2,
                    a3,
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    case 3 :
        return app(o(a0, a1, a2), /* array */[
                    a3,
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    case 4 :
        return app(o(a0, a1, a2, a3), /* array */[
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    case 5 :
        return app(o(a0, a1, a2, a3, a4), /* array */[
                    a5,
                    a6,
                    a7
                  ]);
    case 6 :
        return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                    a6,
                    a7
                  ]);
    case 7 :
        return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6,
                  a7
                ]);
  }
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}
/* No side effect */

function __(tag, block) {
  block.tag = tag;
  return block;
}
/* No side effect */

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}
/* No side effect */

function div(x, y) {
  if (y === 0) {
    throw division_by_zero;
  }
  return x / y | 0;
}
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

function caml_is_extension(e) {
  if (e === undefined) {
    return false;
  } else if (e.tag === 248) {
    return true;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return slot.tag === 248;
    } else {
      return false;
    }
  }
}
/* No side effect */

var undefinedHeader = /* array */[];

function some(x) {
  if (x === undefined) {
    var block = /* tuple */[
      undefinedHeader,
      0
    ];
    block.tag = 256;
    return block;
  } else if (x !== null && x[0] === undefinedHeader) {
    var nid = x[1] + 1 | 0;
    var block$1 = /* tuple */[
      undefinedHeader,
      nid
    ];
    block$1.tag = 256;
    return block$1;
  } else {
    return x;
  }
}

function valFromOption(x) {
  if (x !== null && x[0] === undefinedHeader) {
    var depth = x[1];
    if (depth === 0) {
      return ;
    } else {
      return /* tuple */[
              undefinedHeader,
              depth - 1 | 0
            ];
    }
  } else {
    return x;
  }
}
/* No side effect */

var $$Error = create("Caml_js_exceptions.Error");

function internalToOCamlException(e) {
  if (caml_is_extension(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}
/* No side effect */

var Exit = create("Pervasives.Exit");

var min_int = -2147483648;

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

var max_int = 2147483647;
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

function iter(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      _1(f, param[0]);
      _param = param[1];
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

function fold_right(f, l, accu) {
  if (l) {
    return _2(f, l[0], fold_right(f, l[1], accu));
  } else {
    return accu;
  }
}

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

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

var noNode = /* CommentNode */__(0, [""]);
/* No side effect */

function map$1(f, a) {
  var l = a.length;
  if (l === 0) {
    return /* array */[];
  } else {
    var r = caml_make_vect(l, _1(f, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = _1(f, a[i]);
    }
    return r;
  }
}

function to_list(a) {
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    } else {
      _res = /* :: */[
        a[i],
        res
      ];
      _i = i - 1 | 0;
      continue ;
    }
  }}

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

function fold_right$1(f, a, x) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = _2(f, a[i], r);
  }
  return r;
}

var Bottom = create("Array.Bottom");
/* No side effect */

function get(dict, k) {
  if ((k in dict)) {
    return some(dict[k]);
  }
  
}
/* No side effect */

function classify(x) {
  var ty = typeof x;
  if (ty === "string") {
    return /* JSONString */__(0, [x]);
  } else if (ty === "number") {
    return /* JSONNumber */__(1, [x]);
  } else if (ty === "boolean") {
    if (x === true) {
      return /* JSONTrue */1;
    } else {
      return /* JSONFalse */0;
    }
  } else if (x === null) {
    return /* JSONNull */2;
  } else if (Array.isArray(x)) {
    return /* JSONArray */__(3, [x]);
  } else {
    return /* JSONObject */__(2, [x]);
  }
}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

var classify$1 = classify;
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function error(param) {
  if (param.tag) {
    return some(param[0]);
  }
  
}

function first(fst, e) {
  if (e.tag) {
    return e;
  } else {
    return fst;
  }
}

function error_of_first(fst, param) {
  if (param.tag) {
    return some(param[0]);
  } else {
    return error(fst);
  }
}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function height(param) {
  if (param) {
    return param[/* h */4];
  } else {
    return 0;
  }
}

function create$1(l, x, d, r) {
  var hl = height(l);
  var hr = height(r);
  return /* Node */[
          /* l */l,
          /* v */x,
          /* d */d,
          /* r */r,
          /* h */hl >= hr ? hl + 1 | 0 : hr + 1 | 0
        ];
}

function singleton(x, d) {
  return /* Node */[
          /* l : Empty */0,
          /* v */x,
          /* d */d,
          /* r : Empty */0,
          /* h */1
        ];
}

function bal(l, x, d, r) {
  var hl = l ? l[/* h */4] : 0;
  var hr = r ? r[/* h */4] : 0;
  if (hl > (hr + 2 | 0)) {
    if (l) {
      var lr = l[/* r */3];
      var ld = l[/* d */2];
      var lv = l[/* v */1];
      var ll = l[/* l */0];
      if (height(ll) >= height(lr)) {
        return create$1(ll, lv, ld, create$1(lr, x, d, r));
      } else if (lr) {
        return create$1(create$1(ll, lv, ld, lr[/* l */0]), lr[/* v */1], lr[/* d */2], create$1(lr[/* r */3], x, d, r));
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            invalid_argument,
            "Map.bal"
          ];
    }
  } else if (hr > (hl + 2 | 0)) {
    if (r) {
      var rr = r[/* r */3];
      var rd = r[/* d */2];
      var rv = r[/* v */1];
      var rl = r[/* l */0];
      if (height(rr) >= height(rl)) {
        return create$1(create$1(l, x, d, rl), rv, rd, rr);
      } else if (rl) {
        return create$1(create$1(l, x, d, rl[/* l */0]), rl[/* v */1], rl[/* d */2], create$1(rl[/* r */3], rv, rd, rr));
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            invalid_argument,
            "Map.bal"
          ];
    }
  } else {
    return /* Node */[
            /* l */l,
            /* v */x,
            /* d */d,
            /* r */r,
            /* h */hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  }
}

function is_empty(param) {
  if (param) {
    return false;
  } else {
    return true;
  }
}

function add(x, data, m) {
  if (m) {
    var r = m[/* r */3];
    var d = m[/* d */2];
    var v = m[/* v */1];
    var l = m[/* l */0];
    var c = caml_string_compare(x, v);
    if (c === 0) {
      if (d === data) {
        return m;
      } else {
        return /* Node */[
                /* l */l,
                /* v */x,
                /* d */data,
                /* r */r,
                /* h */m[/* h */4]
              ];
      }
    } else if (c < 0) {
      var ll = add(x, data, l);
      if (l === ll) {
        return m;
      } else {
        return bal(ll, v, d, r);
      }
    } else {
      var rr = add(x, data, r);
      if (r === rr) {
        return m;
      } else {
        return bal(l, v, d, rr);
      }
    }
  } else {
    return /* Node */[
            /* l : Empty */0,
            /* v */x,
            /* d */data,
            /* r : Empty */0,
            /* h */1
          ];
  }
}

function find(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var c = caml_string_compare(x, param[/* v */1]);
      if (c === 0) {
        return param[/* d */2];
      } else {
        _param = c < 0 ? param[/* l */0] : param[/* r */3];
        continue ;
      }
    } else {
      throw not_found;
    }
  }}

function find_first(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var v = param[/* v */1];
      if (_1(f, v)) {
        var _v0 = v;
        var _d0 = param[/* d */2];
        var f$1 = f;
        var _param$1 = param[/* l */0];
        while(true) {
          var param$1 = _param$1;
          var d0 = _d0;
          var v0 = _v0;
          if (param$1) {
            var v$1 = param$1[/* v */1];
            if (_1(f$1, v$1)) {
              _param$1 = param$1[/* l */0];
              _d0 = param$1[/* d */2];
              _v0 = v$1;
              continue ;
            } else {
              _param$1 = param$1[/* r */3];
              continue ;
            }
          } else {
            return /* tuple */[
                    v0,
                    d0
                  ];
          }
        }      } else {
        _param = param[/* r */3];
        continue ;
      }
    } else {
      throw not_found;
    }
  }}

function find_first_opt(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var v = param[/* v */1];
      if (_1(f, v)) {
        var _v0 = v;
        var _d0 = param[/* d */2];
        var f$1 = f;
        var _param$1 = param[/* l */0];
        while(true) {
          var param$1 = _param$1;
          var d0 = _d0;
          var v0 = _v0;
          if (param$1) {
            var v$1 = param$1[/* v */1];
            if (_1(f$1, v$1)) {
              _param$1 = param$1[/* l */0];
              _d0 = param$1[/* d */2];
              _v0 = v$1;
              continue ;
            } else {
              _param$1 = param$1[/* r */3];
              continue ;
            }
          } else {
            return /* tuple */[
                    v0,
                    d0
                  ];
          }
        }      } else {
        _param = param[/* r */3];
        continue ;
      }
    } else {
      return ;
    }
  }}

function find_last(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var v = param[/* v */1];
      if (_1(f, v)) {
        var _v0 = v;
        var _d0 = param[/* d */2];
        var f$1 = f;
        var _param$1 = param[/* r */3];
        while(true) {
          var param$1 = _param$1;
          var d0 = _d0;
          var v0 = _v0;
          if (param$1) {
            var v$1 = param$1[/* v */1];
            if (_1(f$1, v$1)) {
              _param$1 = param$1[/* r */3];
              _d0 = param$1[/* d */2];
              _v0 = v$1;
              continue ;
            } else {
              _param$1 = param$1[/* l */0];
              continue ;
            }
          } else {
            return /* tuple */[
                    v0,
                    d0
                  ];
          }
        }      } else {
        _param = param[/* l */0];
        continue ;
      }
    } else {
      throw not_found;
    }
  }}

function find_last_opt(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var v = param[/* v */1];
      if (_1(f, v)) {
        var _v0 = v;
        var _d0 = param[/* d */2];
        var f$1 = f;
        var _param$1 = param[/* r */3];
        while(true) {
          var param$1 = _param$1;
          var d0 = _d0;
          var v0 = _v0;
          if (param$1) {
            var v$1 = param$1[/* v */1];
            if (_1(f$1, v$1)) {
              _param$1 = param$1[/* r */3];
              _d0 = param$1[/* d */2];
              _v0 = v$1;
              continue ;
            } else {
              _param$1 = param$1[/* l */0];
              continue ;
            }
          } else {
            return /* tuple */[
                    v0,
                    d0
                  ];
          }
        }      } else {
        _param = param[/* l */0];
        continue ;
      }
    } else {
      return ;
    }
  }}

function find_opt(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var c = caml_string_compare(x, param[/* v */1]);
      if (c === 0) {
        return some(param[/* d */2]);
      } else {
        _param = c < 0 ? param[/* l */0] : param[/* r */3];
        continue ;
      }
    } else {
      return ;
    }
  }}

function mem(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var c = caml_string_compare(x, param[/* v */1]);
      if (c === 0) {
        return true;
      } else {
        _param = c < 0 ? param[/* l */0] : param[/* r */3];
        continue ;
      }
    } else {
      return false;
    }
  }}

function min_binding(_param) {
  while(true) {
    var param = _param;
    if (param) {
      var l = param[/* l */0];
      if (l) {
        _param = l;
        continue ;
      } else {
        return /* tuple */[
                param[/* v */1],
                param[/* d */2]
              ];
      }
    } else {
      throw not_found;
    }
  }}

function min_binding_opt(_param) {
  while(true) {
    var param = _param;
    if (param) {
      var l = param[/* l */0];
      if (l) {
        _param = l;
        continue ;
      } else {
        return /* tuple */[
                param[/* v */1],
                param[/* d */2]
              ];
      }
    } else {
      return ;
    }
  }}

function max_binding(_param) {
  while(true) {
    var param = _param;
    if (param) {
      var r = param[/* r */3];
      if (r) {
        _param = r;
        continue ;
      } else {
        return /* tuple */[
                param[/* v */1],
                param[/* d */2]
              ];
      }
    } else {
      throw not_found;
    }
  }}

function max_binding_opt(_param) {
  while(true) {
    var param = _param;
    if (param) {
      var r = param[/* r */3];
      if (r) {
        _param = r;
        continue ;
      } else {
        return /* tuple */[
                param[/* v */1],
                param[/* d */2]
              ];
      }
    } else {
      return ;
    }
  }}

function remove_min_binding(param) {
  if (param) {
    var l = param[/* l */0];
    if (l) {
      return bal(remove_min_binding(l), param[/* v */1], param[/* d */2], param[/* r */3]);
    } else {
      return param[/* r */3];
    }
  } else {
    throw [
          invalid_argument,
          "Map.remove_min_elt"
        ];
  }
}

function merge(t1, t2) {
  if (t1) {
    if (t2) {
      var match = min_binding(t2);
      return bal(t1, match[0], match[1], remove_min_binding(t2));
    } else {
      return t1;
    }
  } else {
    return t2;
  }
}

function remove(x, m) {
  if (m) {
    var r = m[/* r */3];
    var d = m[/* d */2];
    var v = m[/* v */1];
    var l = m[/* l */0];
    var c = caml_string_compare(x, v);
    if (c === 0) {
      return merge(l, r);
    } else if (c < 0) {
      var ll = remove(x, l);
      if (l === ll) {
        return m;
      } else {
        return bal(ll, v, d, r);
      }
    } else {
      var rr = remove(x, r);
      if (r === rr) {
        return m;
      } else {
        return bal(l, v, d, rr);
      }
    }
  } else {
    return /* Empty */0;
  }
}

function update(x, f, m) {
  if (m) {
    var r = m[/* r */3];
    var d = m[/* d */2];
    var v = m[/* v */1];
    var l = m[/* l */0];
    var c = caml_string_compare(x, v);
    if (c === 0) {
      var match = _1(f, some(d));
      if (match !== undefined) {
        var data = valFromOption(match);
        if (d === data) {
          return m;
        } else {
          return /* Node */[
                  /* l */l,
                  /* v */x,
                  /* d */data,
                  /* r */r,
                  /* h */m[/* h */4]
                ];
        }
      } else {
        return merge(l, r);
      }
    } else if (c < 0) {
      var ll = update(x, f, l);
      if (l === ll) {
        return m;
      } else {
        return bal(ll, v, d, r);
      }
    } else {
      var rr = update(x, f, r);
      if (r === rr) {
        return m;
      } else {
        return bal(l, v, d, rr);
      }
    }
  } else {
    var match$1 = _1(f, undefined);
    if (match$1 !== undefined) {
      return /* Node */[
              /* l : Empty */0,
              /* v */x,
              /* d */valFromOption(match$1),
              /* r : Empty */0,
              /* h */1
            ];
    } else {
      return /* Empty */0;
    }
  }
}

function iter$1(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      iter$1(f, param[/* l */0]);
      _2(f, param[/* v */1], param[/* d */2]);
      _param = param[/* r */3];
      continue ;
    } else {
      return /* () */0;
    }
  }}

function map$2(f, param) {
  if (param) {
    var l$prime = map$2(f, param[/* l */0]);
    var d$prime = _1(f, param[/* d */2]);
    var r$prime = map$2(f, param[/* r */3]);
    return /* Node */[
            /* l */l$prime,
            /* v */param[/* v */1],
            /* d */d$prime,
            /* r */r$prime,
            /* h */param[/* h */4]
          ];
  } else {
    return /* Empty */0;
  }
}

function mapi$2(f, param) {
  if (param) {
    var v = param[/* v */1];
    var l$prime = mapi$2(f, param[/* l */0]);
    var d$prime = _2(f, v, param[/* d */2]);
    var r$prime = mapi$2(f, param[/* r */3]);
    return /* Node */[
            /* l */l$prime,
            /* v */v,
            /* d */d$prime,
            /* r */r$prime,
            /* h */param[/* h */4]
          ];
  } else {
    return /* Empty */0;
  }
}

function fold(f, _m, _accu) {
  while(true) {
    var accu = _accu;
    var m = _m;
    if (m) {
      _accu = _3(f, m[/* v */1], m[/* d */2], fold(f, m[/* l */0], accu));
      _m = m[/* r */3];
      continue ;
    } else {
      return accu;
    }
  }}

function for_all(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (_2(p, param[/* v */1], param[/* d */2]) && for_all(p, param[/* l */0])) {
        _param = param[/* r */3];
        continue ;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }}

function exists$1(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (_2(p, param[/* v */1], param[/* d */2]) || exists$1(p, param[/* l */0])) {
        return true;
      } else {
        _param = param[/* r */3];
        continue ;
      }
    } else {
      return false;
    }
  }}

function add_min_binding(k, x, param) {
  if (param) {
    return bal(add_min_binding(k, x, param[/* l */0]), param[/* v */1], param[/* d */2], param[/* r */3]);
  } else {
    return singleton(k, x);
  }
}

function add_max_binding(k, x, param) {
  if (param) {
    return bal(param[/* l */0], param[/* v */1], param[/* d */2], add_max_binding(k, x, param[/* r */3]));
  } else {
    return singleton(k, x);
  }
}

function join(l, v, d, r) {
  if (l) {
    if (r) {
      var rh = r[/* h */4];
      var lh = l[/* h */4];
      if (lh > (rh + 2 | 0)) {
        return bal(l[/* l */0], l[/* v */1], l[/* d */2], join(l[/* r */3], v, d, r));
      } else if (rh > (lh + 2 | 0)) {
        return bal(join(l, v, d, r[/* l */0]), r[/* v */1], r[/* d */2], r[/* r */3]);
      } else {
        return create$1(l, v, d, r);
      }
    } else {
      return add_max_binding(v, d, l);
    }
  } else {
    return add_min_binding(v, d, r);
  }
}

function concat(t1, t2) {
  if (t1) {
    if (t2) {
      var match = min_binding(t2);
      return join(t1, match[0], match[1], remove_min_binding(t2));
    } else {
      return t1;
    }
  } else {
    return t2;
  }
}

function concat_or_join(t1, v, d, t2) {
  if (d !== undefined) {
    return join(t1, v, valFromOption(d), t2);
  } else {
    return concat(t1, t2);
  }
}

function split(x, param) {
  if (param) {
    var r = param[/* r */3];
    var d = param[/* d */2];
    var v = param[/* v */1];
    var l = param[/* l */0];
    var c = caml_string_compare(x, v);
    if (c === 0) {
      return /* tuple */[
              l,
              some(d),
              r
            ];
    } else if (c < 0) {
      var match = split(x, l);
      return /* tuple */[
              match[0],
              match[1],
              join(match[2], v, d, r)
            ];
    } else {
      var match$1 = split(x, r);
      return /* tuple */[
              join(l, v, d, match$1[0]),
              match$1[1],
              match$1[2]
            ];
    }
  } else {
    return /* tuple */[
            /* Empty */0,
            undefined,
            /* Empty */0
          ];
  }
}

function merge$1(f, s1, s2) {
  if (s1) {
    var v1 = s1[/* v */1];
    if (s1[/* h */4] >= height(s2)) {
      var match = split(v1, s2);
      return concat_or_join(merge$1(f, s1[/* l */0], match[0]), v1, _3(f, v1, some(s1[/* d */2]), match[1]), merge$1(f, s1[/* r */3], match[2]));
    }
    
  } else if (!s2) {
    return /* Empty */0;
  }
  if (s2) {
    var v2 = s2[/* v */1];
    var match$1 = split(v2, s1);
    return concat_or_join(merge$1(f, match$1[0], s2[/* l */0]), v2, _3(f, v2, match$1[1], some(s2[/* d */2])), merge$1(f, match$1[2], s2[/* r */3]));
  } else {
    throw [
          assert_failure,
          /* tuple */[
            "map.ml",
            393,
            10
          ]
        ];
  }
}

function union(f, s1, s2) {
  if (s1) {
    if (s2) {
      var d2 = s2[/* d */2];
      var v2 = s2[/* v */1];
      var d1 = s1[/* d */2];
      var v1 = s1[/* v */1];
      if (s1[/* h */4] >= s2[/* h */4]) {
        var match = split(v1, s2);
        var d2$1 = match[1];
        var l = union(f, s1[/* l */0], match[0]);
        var r = union(f, s1[/* r */3], match[2]);
        if (d2$1 !== undefined) {
          return concat_or_join(l, v1, _3(f, v1, d1, valFromOption(d2$1)), r);
        } else {
          return join(l, v1, d1, r);
        }
      } else {
        var match$1 = split(v2, s1);
        var d1$1 = match$1[1];
        var l$1 = union(f, match$1[0], s2[/* l */0]);
        var r$1 = union(f, match$1[2], s2[/* r */3]);
        if (d1$1 !== undefined) {
          return concat_or_join(l$1, v2, _3(f, v2, valFromOption(d1$1), d2), r$1);
        } else {
          return join(l$1, v2, d2, r$1);
        }
      }
    } else {
      return s1;
    }
  } else {
    return s2;
  }
}

function filter(p, m) {
  if (m) {
    var r = m[/* r */3];
    var d = m[/* d */2];
    var v = m[/* v */1];
    var l = m[/* l */0];
    var l$prime = filter(p, l);
    var pvd = _2(p, v, d);
    var r$prime = filter(p, r);
    if (pvd) {
      if (l === l$prime && r === r$prime) {
        return m;
      } else {
        return join(l$prime, v, d, r$prime);
      }
    } else {
      return concat(l$prime, r$prime);
    }
  } else {
    return /* Empty */0;
  }
}

function partition(p, param) {
  if (param) {
    var d = param[/* d */2];
    var v = param[/* v */1];
    var match = partition(p, param[/* l */0]);
    var lf = match[1];
    var lt = match[0];
    var pvd = _2(p, v, d);
    var match$1 = partition(p, param[/* r */3]);
    var rf = match$1[1];
    var rt = match$1[0];
    if (pvd) {
      return /* tuple */[
              join(lt, v, d, rt),
              concat(lf, rf)
            ];
    } else {
      return /* tuple */[
              concat(lt, rt),
              join(lf, v, d, rf)
            ];
    }
  } else {
    return /* tuple */[
            /* Empty */0,
            /* Empty */0
          ];
  }
}

function cons_enum(_m, _e) {
  while(true) {
    var e = _e;
    var m = _m;
    if (m) {
      _e = /* More */[
        m[/* v */1],
        m[/* d */2],
        m[/* r */3],
        e
      ];
      _m = m[/* l */0];
      continue ;
    } else {
      return e;
    }
  }}

function compare(cmp, m1, m2) {
  var _e1 = cons_enum(m1, /* End */0);
  var _e2 = cons_enum(m2, /* End */0);
  while(true) {
    var e2 = _e2;
    var e1 = _e1;
    if (e1) {
      if (e2) {
        var c = caml_string_compare(e1[0], e2[0]);
        if (c !== 0) {
          return c;
        } else {
          var c$1 = _2(cmp, e1[1], e2[1]);
          if (c$1 !== 0) {
            return c$1;
          } else {
            _e2 = cons_enum(e2[2], e2[3]);
            _e1 = cons_enum(e1[2], e1[3]);
            continue ;
          }
        }
      } else {
        return 1;
      }
    } else if (e2) {
      return -1;
    } else {
      return 0;
    }
  }}

function equal(cmp, m1, m2) {
  var _e1 = cons_enum(m1, /* End */0);
  var _e2 = cons_enum(m2, /* End */0);
  while(true) {
    var e2 = _e2;
    var e1 = _e1;
    if (e1) {
      if (e2 && caml_string_compare(e1[0], e2[0]) === 0 && _2(cmp, e1[1], e2[1])) {
        _e2 = cons_enum(e2[2], e2[3]);
        _e1 = cons_enum(e1[2], e1[3]);
        continue ;
      } else {
        return false;
      }
    } else if (e2) {
      return false;
    } else {
      return true;
    }
  }}

function cardinal(param) {
  if (param) {
    return (cardinal(param[/* l */0]) + 1 | 0) + cardinal(param[/* r */3]) | 0;
  } else {
    return 0;
  }
}

function bindings_aux(_accu, _param) {
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[/* l */0];
      _accu = /* :: */[
        /* tuple */[
          param[/* v */1],
          param[/* d */2]
        ],
        bindings_aux(accu, param[/* r */3])
      ];
      continue ;
    } else {
      return accu;
    }
  }}

function bindings(s) {
  return bindings_aux(/* [] */0, s);
}

var ObjectDict = {
  empty: /* Empty */0,
  is_empty: is_empty,
  mem: mem,
  add: add,
  update: update,
  singleton: singleton,
  remove: remove,
  merge: merge$1,
  union: union,
  compare: compare,
  equal: equal,
  iter: iter$1,
  fold: fold,
  for_all: for_all,
  exists: exists$1,
  filter: filter,
  partition: partition,
  cardinal: cardinal,
  bindings: bindings,
  min_binding: min_binding,
  min_binding_opt: min_binding_opt,
  max_binding: max_binding,
  max_binding_opt: max_binding_opt,
  choose: min_binding,
  choose_opt: min_binding_opt,
  split: split,
  find: find,
  find_opt: find_opt,
  find_first: find_first,
  find_first_opt: find_first_opt,
  find_last: find_last,
  find_last_opt: find_last_opt,
  map: map$2,
  mapi: mapi$2
};

var ParseFail = create("Tea_json.Decoder.ParseFail");

var string = /* Decoder */[(function (value) {
      var match = classify$1(value);
      if (typeof match === "number" || match.tag) {
        return /* Error */__(1, ["Non-string value"]);
      } else {
        return /* Ok */__(0, [match[0]]);
      }
    })];

var $$int = /* Decoder */[(function (value) {
      var match = classify$1(value);
      if (typeof match === "number" || match.tag !== /* JSONNumber */1) {
        return /* Error */__(1, ["Non-int value"]);
      } else {
        var n = match[0];
        if (n > min_int && n < max_int) {
          return /* Ok */__(0, [n | 0]);
        } else {
          return /* Error */__(1, ["number out of int range"]);
        }
      }
    })];

var $$float = /* Decoder */[(function (value) {
      var match = classify$1(value);
      if (typeof match === "number" || match.tag !== /* JSONNumber */1) {
        return /* Error */__(1, ["Non-float-value"]);
      } else {
        return /* Ok */__(0, [match[0]]);
      }
    })];

var bool = /* Decoder */[(function (value) {
      var match = classify$1(value);
      if (typeof match === "number") {
        switch (match) {
          case /* JSONFalse */0 :
              return /* Ok */__(0, [false]);
          case /* JSONTrue */1 :
              return /* Ok */__(0, [true]);
          case /* JSONNull */2 :
              return /* Error */__(1, ["Non-boolean value"]);
          
        }
      } else {
        return /* Error */__(1, ["Non-boolean value"]);
      }
    })];

function $$null(v) {
  return /* Decoder */[(function (value) {
              var match = classify$1(value);
              if (typeof match === "number" && match >= 2) {
                return /* Ok */__(0, [v]);
              } else {
                return /* Error */__(1, ["Non-null value"]);
              }
            })];
}

function list(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify$1(value);
              if (typeof match === "number" || match.tag !== /* JSONArray */3) {
                return /* Error */__(1, ["Non-list value"]);
              } else {
                var parse = function (v) {
                  var match = _1(decoder, v);
                  if (match.tag) {
                    throw [
                          ParseFail,
                          match[0]
                        ];
                  } else {
                    return match[0];
                  }
                };
                try {
                  return /* Ok */__(0, [map(parse, to_list(match[0]))]);
                }
                catch (raw_exn){
                  var exn = internalToOCamlException(raw_exn);
                  if (exn[0] === ParseFail) {
                    return /* Error */__(1, ["list -> " + exn[1]]);
                  } else {
                    throw exn;
                  }
                }
              }
            })];
}

function array(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify$1(value);
              if (typeof match === "number" || match.tag !== /* JSONArray */3) {
                return /* Error */__(1, ["Non-array value"]);
              } else {
                var parse = function (v) {
                  var match = _1(decoder, v);
                  if (match.tag) {
                    throw [
                          ParseFail,
                          match[0]
                        ];
                  } else {
                    return match[0];
                  }
                };
                try {
                  return /* Ok */__(0, [map$1(parse, match[0])]);
                }
                catch (raw_exn){
                  var exn = internalToOCamlException(raw_exn);
                  if (exn[0] === ParseFail) {
                    return /* Error */__(1, ["array -> " + exn[1]]);
                  } else {
                    throw exn;
                  }
                }
              }
            })];
}

function keyValuePairs(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify$1(value);
              if (typeof match === "number" || match.tag !== /* JSONObject */2) {
                return /* Error */__(1, ["Non-keyValuePair value"]);
              } else {
                var o = match[0];
                var keys = Object.keys(o);
                var parse = function (k, l) {
                  var match = get(o, k);
                  if (match !== undefined) {
                    var match$1 = _1(decoder, valFromOption(match));
                    if (match$1.tag) {
                      throw [
                            ParseFail,
                            match$1[0]
                          ];
                    } else {
                      return /* :: */[
                              /* tuple */[
                                k,
                                match$1[0]
                              ],
                              l
                            ];
                    }
                  } else {
                    throw [
                          ParseFail,
                          "Key is undefined: " + k
                        ];
                  }
                };
                try {
                  return /* Ok */__(0, [fold_right$1(parse, keys, /* [] */0)]);
                }
                catch (raw_exn){
                  var exn = internalToOCamlException(raw_exn);
                  if (exn[0] === ParseFail) {
                    return /* Error */__(1, ["Invalid keyValuePair parsing: " + exn[1]]);
                  } else {
                    throw exn;
                  }
                }
              }
            })];
}

function dict(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify$1(value);
              if (typeof match === "number" || match.tag !== /* JSONObject */2) {
                return /* Error */__(1, ["Non-dict value"]);
              } else {
                var o = match[0];
                var keys = Object.keys(o);
                var parse = function (k, d) {
                  var match = get(o, k);
                  if (match !== undefined) {
                    var match$1 = _1(decoder, valFromOption(match));
                    if (match$1.tag) {
                      throw [
                            ParseFail,
                            match$1[0]
                          ];
                    } else {
                      return add(k, match$1[0], d);
                    }
                  } else {
                    throw [
                          ParseFail,
                          "Key is undefined: " + k
                        ];
                  }
                };
                try {
                  return /* Ok */__(0, [fold_right$1(parse, keys, /* Empty */0)]);
                }
                catch (raw_exn){
                  var exn = internalToOCamlException(raw_exn);
                  if (exn[0] === ParseFail) {
                    return /* Error */__(1, ["Invalid dict parsing: " + exn[1]]);
                  } else {
                    throw exn;
                  }
                }
              }
            })];
}

function field(key, param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify$1(value);
              if (typeof match === "number" || match.tag !== /* JSONObject */2) {
                return /* Error */__(1, ["Non-fieldable value"]);
              } else {
                var match$1 = get(match[0], key);
                if (match$1 !== undefined) {
                  var o = _1(decoder, valFromOption(match$1));
                  if (o.tag) {
                    return /* Error */__(1, ["field `" + (key + ("` -> " + o[0]))]);
                  } else {
                    return o;
                  }
                } else {
                  return /* Error */__(1, ["Field Value is undefined: " + key]);
                }
              }
            })];
}

function at(fields, dec) {
  return fold_right(field, fields, dec);
}

function index(idx, param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify$1(value);
              if (typeof match === "number" || match.tag !== /* JSONArray */3) {
                return /* Error */__(1, ["Non-array value"]);
              } else {
                var a = match[0];
                if (idx < 0 || idx > a.length) {
                  return /* Error */__(1, ["Array index out of range: " + String(idx)]);
                } else {
                  return _1(decoder, caml_array_get(a, idx));
                }
              }
            })];
}

function maybe(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder, value);
              if (match.tag) {
                return /* Ok */__(0, [undefined]);
              } else {
                return /* Ok */__(0, [some(match[0])]);
              }
            })];
}

function oneOf(decoders) {
  return /* Decoder */[(function (value) {
              var parse = function (v, _param) {
                while(true) {
                  var param = _param;
                  if (param) {
                    var rest = param[1];
                    try {
                      var ok = _1(param[0][0], v);
                      if (ok.tag) {
                        return parse(v, rest);
                      } else {
                        return ok;
                      }
                    }
                    catch (exn){
                      _param = rest;
                      continue ;
                    }
                  } else {
                    return /* Error */__(1, ["No one-of's matched"]);
                  }
                }              };
              return parse(value, decoders);
            })];
}

function map$1$1(mapper, param) {
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              if (match.tag) {
                return /* Error */__(1, ["map " + match[0]]);
              } else {
                return /* Ok */__(0, [_1(mapper, match[0])]);
              }
            })];
}

function map2(mapper, param, param$1) {
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              if (!match.tag && !match$1.tag) {
                return /* Ok */__(0, [_2(mapper, match[0], match$1[0])]);
              }
              var match$2 = error_of_first(match, match$1);
              if (match$2 !== undefined) {
                return /* Error */__(1, ["map2 -> " + match$2]);
              } else {
                throw [
                      failure,
                      "Impossible case"
                    ];
              }
            })];
}

function map3(mapper, param, param$1, param$2) {
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              if (!match.tag && !match$1.tag && !match$2.tag) {
                return /* Ok */__(0, [_3(mapper, match[0], match$1[0], match$2[0])]);
              }
              var match$3 = first(match$2, first(match$1, match));
              if (match$3.tag) {
                return /* Error */__(1, ["map3 -> " + match$3[0]]);
              } else {
                throw [
                      failure,
                      "Impossible case"
                    ];
              }
            })];
}

function map4(mapper, param, param$1, param$2, param$3) {
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              if (!match.tag && !match$1.tag && !match$2.tag && !match$3.tag) {
                return /* Ok */__(0, [_4(mapper, match[0], match$1[0], match$2[0], match$3[0])]);
              }
              var match$4 = first(match$3, first(match$2, first(match$1, match)));
              if (match$4.tag) {
                return /* Error */__(1, ["map4 -> " + match$4[0]]);
              } else {
                throw [
                      failure,
                      "Impossible case"
                    ];
              }
            })];
}

function map5(mapper, param, param$1, param$2, param$3, param$4) {
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var match$4 = _1(decoder5, value);
              if (!match.tag && !match$1.tag && !match$2.tag && !match$3.tag && !match$4.tag) {
                return /* Ok */__(0, [_5(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0])]);
              }
              var match$5 = first(match$4, first(match$3, first(match$2, first(match$1, match))));
              if (match$5.tag) {
                return /* Error */__(1, ["map5 -> " + match$5[0]]);
              } else {
                throw [
                      failure,
                      "Impossible case"
                    ];
              }
            })];
}

function map6(mapper, param, param$1, param$2, param$3, param$4, param$5) {
  var decoder6 = param$5[0];
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var match$4 = _1(decoder5, value);
              var match$5 = _1(decoder6, value);
              if (!match.tag && !match$1.tag && !match$2.tag && !match$3.tag && !match$4.tag && !match$5.tag) {
                return /* Ok */__(0, [_6(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0])]);
              }
              var match$6 = first(match$5, first(match$4, first(match$3, first(match$2, first(match$1, match)))));
              if (match$6.tag) {
                return /* Error */__(1, ["map6 -> " + match$6[0]]);
              } else {
                throw [
                      failure,
                      "Impossible case"
                    ];
              }
            })];
}

function map7(mapper, param, param$1, param$2, param$3, param$4, param$5, param$6) {
  var decoder7 = param$6[0];
  var decoder6 = param$5[0];
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var match$4 = _1(decoder5, value);
              var match$5 = _1(decoder6, value);
              var match$6 = _1(decoder7, value);
              if (!match.tag && !match$1.tag && !match$2.tag && !match$3.tag && !match$4.tag && !match$5.tag && !match$6.tag) {
                return /* Ok */__(0, [_7(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0], match$6[0])]);
              }
              var match$7 = first(match$6, first(match$5, first(match$4, first(match$3, first(match$2, first(match$1, match))))));
              if (match$7.tag) {
                return /* Error */__(1, ["map7 -> " + match$7[0]]);
              } else {
                throw [
                      failure,
                      "Impossible case"
                    ];
              }
            })];
}

function map8(mapper, param, param$1, param$2, param$3, param$4, param$5, param$6, param$7) {
  var decoder8 = param$7[0];
  var decoder7 = param$6[0];
  var decoder6 = param$5[0];
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var match$4 = _1(decoder5, value);
              var match$5 = _1(decoder6, value);
              var match$6 = _1(decoder7, value);
              var match$7 = _1(decoder8, value);
              if (!match.tag && !match$1.tag && !match$2.tag && !match$3.tag && !match$4.tag && !match$5.tag && !match$6.tag && !match$7.tag) {
                return /* Ok */__(0, [_8(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0], match$6[0], match$7[0])]);
              }
              var match$8 = first(match$7, first(match$6, first(match$5, first(match$4, first(match$3, first(match$2, first(match$1, match)))))));
              if (match$8.tag) {
                return /* Error */__(1, ["map8 -> " + match$8[0]]);
              } else {
                throw [
                      failure,
                      "Impossible case"
                    ];
              }
            })];
}

function succeed(v) {
  return /* Decoder */[(function (_value) {
              return /* Ok */__(0, [v]);
            })];
}

function fail(e) {
  return /* Decoder */[(function (_value) {
              return /* Error */__(1, [e]);
            })];
}

var value = /* Decoder */[(function (value) {
      return /* Ok */__(0, [value]);
    })];

function andThen(func, param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var err = _1(decoder, value);
              if (err.tag) {
                return err;
              } else {
                var match = _1(func, err[0]);
                return _1(match[0], value);
              }
            })];
}

function lazy_(func) {
  return andThen(func, /* Decoder */[(function (_value) {
                  return /* Ok */__(0, [/* () */0]);
                })]);
}

function nullable(decoder) {
  return oneOf(/* :: */[
              $$null(undefined),
              /* :: */[
                map$1$1((function (v) {
                        return some(v);
                      }), decoder),
                /* [] */0
              ]
            ]);
}

function decodeValue(param, value) {
  try {
    return _1(param[0], value);
  }
  catch (raw_exn){
    var exn = internalToOCamlException(raw_exn);
    if (exn[0] === ParseFail) {
      return /* Error */__(1, [exn[1]]);
    } else {
      return /* Error */__(1, ["Unknown JSON parsing error"]);
    }
  }
}

function decodeEvent(param, value) {
  try {
    return _1(param[0], value);
  }
  catch (raw_exn){
    var exn = internalToOCamlException(raw_exn);
    if (exn[0] === ParseFail) {
      return /* Error */__(1, [exn[1]]);
    } else {
      return /* Error */__(1, ["Unknown JSON parsing error"]);
    }
  }
}

function decodeString(decoder, string) {
  try {
    var value = JSON.parse(string);
    return decodeValue(decoder, value);
  }
  catch (exn){
    return /* Error */__(1, ["Invalid JSON string"]);
  }
}

var Decoder = {
  ObjectDict: ObjectDict,
  ParseFail: ParseFail,
  string: string,
  $$int: $$int,
  $$float: $$float,
  bool: bool,
  $$null: $$null,
  list: list,
  array: array,
  keyValuePairs: keyValuePairs,
  dict: dict,
  field: field,
  at: at,
  index: index,
  maybe: maybe,
  oneOf: oneOf,
  map: map$1$1,
  map2: map2,
  map3: map3,
  map4: map4,
  map5: map5,
  map6: map6,
  map7: map7,
  map8: map8,
  succeed: succeed,
  fail: fail,
  value: value,
  andThen: andThen,
  lazy_: lazy_,
  nullable: nullable,
  decodeValue: decodeValue,
  decodeEvent: decodeEvent,
  decodeString: decodeString
};
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

var targetValue = Decoder.at(/* :: */[
      "target",
      /* :: */[
        "value",
        /* [] */0
      ]
    ], Decoder.string);

var targetChecked = Decoder.at(/* :: */[
      "target",
      /* :: */[
        "checked",
        /* [] */0
      ]
    ], Decoder.bool);

var keyCode = Decoder.field("keyCode", Decoder.$$int);
/* targetValue Not a pure module */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function draw_selection(x, y) {
  drawCircle(x, y, 20, "black");
  return /* () */0;
}
/* Tea_html Not a pure module */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function lmatrix_mapij(f, a) {
  return mapi$1((function (i, row) {
                return mapi$1((function (j, e) {
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
    if (i < 0 || i >= length(board) || j < 0 || j >= length(hd(board))) {
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

function flip_if_equal(i, j, i2, j2, e) {
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

function flip(board, i, j) {
  return lmatrix_mapij((function (param, param$1, param$2) {
                return flip_if_equal(i, j, param, param$1, param$2);
              }), board);
}

function update$1(state, param) {
  if (typeof param === "number") {
    switch (param) {
      case /* Nothing */0 :
          return state.board;
      case /* Next */1 :
          var board = next(state.board);
          return resize(prune(board));
      case /* Previous */2 :
          var match = state.previous;
          if (match) {
            return match[0];
          } else {
            return /* [] */0;
          }
      case /* Reset */3 :
          return lmatrix_create(state.size.x, state.size.y, /* Dead */0);
      
    }
  } else {
    switch (param.tag | 0) {
      case /* Click */0 :
          var board$1 = flip(state.board, param[0], param[1]);
          return resize(prune(board$1));
      case /* ClickThenNext */1 :
          var board$2 = next(flip(state.board, param[0], param[1]));
          return resize(prune(board$2));
      case /* SetBoard */3 :
          return resize(prune(param[0]));
      case /* SetBoardFromSeed */4 :
          var my_array = ( JSON.parse(param[0]) );
          var board$3 = to_list(map$1(to_list, my_array));
          return resize(prune(board$3));
      case /* SetX */6 :
          var x = param[0];
          var h = length(state.board);
          if (h > 0) {
            var w = length(hd(state.board));
            if (w < x) {
              return map((function (row) {
                            return append(init(w - x | 0, (function (param) {
                                              return /* Dead */0;
                                            })), row);
                          }), state.board);
            } else {
              return state.board;
            }
          } else {
            return state.board;
          }
      case /* Select */2 :
      case /* AddSeed */5 :
      case /* SetY */7 :
          return state.board;
      case /* KeyPressed */8 :
          var match$1 = param[0].key_code;
          if (match$1 !== 13) {
            if (match$1 !== 32) {
              return state.board;
            } else {
              var board$4 = next(state.board);
              return resize(prune(board$4));
            }
          } else {
            var board$5 = next(state.board);
            return resize(prune(board$5));
          }
      
    }
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

var state = {
  contents: {
    size: {
      x: 3,
      y: 3
    },
    board: lmatrix_create(3, 3, /* Dead */0),
    previous: /* [] */0,
    seeds: /* [] */0
  }
};

function update$2(state, $$event) {
  var board = update$1(state, $$event);
  var previous;
  var exit = 0;
  if (typeof $$event === "number") {
    switch ($$event) {
      case /* Next */1 :
          previous = /* :: */[
            state.board,
            state.previous
          ];
          break;
      case /* Previous */2 :
          previous = tl(state.previous);
          break;
      default:
        previous = state.previous;
    }
  } else {
    switch ($$event.tag | 0) {
      case /* Click */0 :
      case /* ClickThenNext */1 :
      case /* SetBoard */3 :
          exit = 1;
          break;
      default:
        previous = state.previous;
    }
  }
  if (exit === 1) {
    previous = /* :: */[
      state.board,
      state.previous
    ];
  }
  var seeds;
  seeds = typeof $$event === "number" || $$event.tag !== /* AddSeed */5 ? state.seeds : /* :: */[
      {
        name: $$event[0],
        str: $$event[1]
      },
      state.seeds
    ];
  var size_x = length(board);
  var size_y = length(board) === 0 ? 0 : length(hd(board));
  var size = {
    x: size_x,
    y: size_y
  };
  return {
          size: size,
          board: board,
          previous: previous,
          seeds: seeds
        };
}

function send($$event) {
  state.contents = update$2(state.contents, $$event);
  clear_left_side();
  iter((function (seed) {
          add_seed(seed.name, seed.str);
          return /* () */0;
        }), state.contents.seeds);
  set_html_size(state.contents.size.x, state.contents.size.y);
  var sum = function (param) {
    return fold_left((function (prim, prim$1) {
                  return prim + prim$1 | 0;
                }), 0, param);
  };
  var digify = function (param, param$1, e) {
    if (e) {
      return 1;
    } else {
      return 0;
    }
  };
  var population = sum(map(sum, lmatrix_mapij(digify, state.contents.board)));
  set_html_population(population);
  draw_selection(pointer.contents.x, pointer.contents.y);
  return /* () */0;
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
  return send(tmp);
}

function reset(param) {
  return send(/* Reset */3);
}

function previous(param) {
  return send(/* Previous */2);
}

function next$1(param) {
  return send(/* Next */1);
}

function save(param) {
  var seed_array = of_list(map(of_list, state.contents.board));
  console.log(seed_array);
  var seed_json = (JSON.stringify(seed_array));
  var name = ( window.prompt("Choose a name for it", "Untitled") );
  return send(/* AddSeed */__(5, [
                name,
                seed_json
              ]));
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
  var i = div(x, div(canvas.width, state.contents.size.x));
  var j = div(y, div(canvas.height, state.contents.size.y));
  return send(/* Click */__(0, [
                i,
                j
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
  if (state.contents.size.x !== 0 && state.contents.size.y !== 0) {
    var i = div(x, div(canvas.width, state.contents.size.x));
    var j = div(y, div(canvas.height, state.contents.size.y));
    return send(/* Select */__(2, [
                  i,
                  j
                ]));
  } else {
    return /* () */0;
  }
}

bind_mousemove(mousemove);

bind_mousedown(mousedown);

bind_mouseup(mouseup);

function set_state(state_str) {
  var my_array = ( JSON.parse(state_str) );
  var my_state = to_list(map$1(to_list, my_array));
  return send(/* SetBoard */__(3, [my_state]));
}

bind_set_state_to_js(set_state);

bind_keydown(keydown);

bind_button(".next", next$1);

bind_button(".previous", previous);

bind_button(".reset", reset);

bind_button(".save", save);

send(/* AddSeed */__(5, [
        "Glisseur 1",
        "[[0,1,0],[1,0,0],[1,1,1]]"
      ]));

send(/* AddSeed */__(5, [
        "Mathusalem 1",
        "[[0,0,1,0],[0,1,0,0],[1,1,1,0]]"
      ]));

set_state("[[0,0,0,0],[0,1,1,0],[0,0,0,0]]");
/* state Not a pure module */
