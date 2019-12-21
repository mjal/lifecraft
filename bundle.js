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

function caml_int_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
/* No side effect */

function for_in (o,foo){
        for (var x in o) { foo(x); }
      }
function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return true;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return false;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                invalid_argument,
                "equal: functional value"
              ];
        }
        if (b_type === "number" || b_type === "undefined" || b === null) {
          return false;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
          } else if (tag_a === 248) {
            return a[1] === b[1];
          } else {
            if (tag_a === 251) {
              throw [
                    invalid_argument,
                    "equal: abstract value"
                  ];
            }
            if (tag_a !== tag_b) {
              return false;
            } else if (tag_a === 256) {
              return a[1] === b[1];
            } else {
              var len_a = a.length | 0;
              var len_b = b.length | 0;
              if (len_a === len_b) {
                if (Array.isArray(a)) {
                  var a$1 = a;
                  var b$1 = b;
                  var _i = 0;
                  var same_length = len_a;
                  while(true) {
                    var i = _i;
                    if (i === same_length) {
                      return true;
                    } else if (caml_equal(a$1[i], b$1[i])) {
                      _i = i + 1 | 0;
                      continue ;
                    } else {
                      return false;
                    }
                  }                } else if ((a instanceof Date && b instanceof Date)) {
                  return !(a > b || a < b);
                } else {
                  var a$2 = a;
                  var b$2 = b;
                  var result = {
                    contents: true
                  };
                  var do_key_a = (function(b$2,result){
                  return function do_key_a(key) {
                    if (b$2.hasOwnProperty(key)) {
                      return 0;
                    } else {
                      result.contents = false;
                      return /* () */0;
                    }
                  }
                  }(b$2,result));
                  var do_key_b = (function(a$2,b$2,result){
                  return function do_key_b(key) {
                    if (!a$2.hasOwnProperty(key) || !caml_equal(b$2[key], a$2[key])) {
                      result.contents = false;
                      return /* () */0;
                    } else {
                      return 0;
                    }
                  }
                  }(a$2,b$2,result));
                  for_in(a$2, do_key_a);
                  if (result.contents) {
                    for_in(b$2, do_key_b);
                  }
                  return result.contents;
                }
              } else {
                return false;
              }
            }
          }
        }
      }
    }
  }}

function caml_notequal(a, b) {
  return !caml_equal(a, b);
}
/* No side effect */

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

function make_matrix(sx, sy, init) {
  var res = caml_make_vect(sx, /* array */[]);
  for(var x = 0 ,x_finish = sx - 1 | 0; x <= x_finish; ++x){
    res[x] = caml_make_vect(sy, init);
  }
  return res;
}

function map(f, a) {
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

function mapi(f, a) {
  var l = a.length;
  if (l === 0) {
    return /* array */[];
  } else {
    var r = caml_make_vect(l, _2(f, 0, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = _2(f, i, a[i]);
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

function fold_right(f, a, x) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = _2(f, a[i], r);
  }
  return r;
}

var Bottom = create("Array.Bottom");
/* No side effect */

function caml_fill_bytes(s, i, l, c) {
  if (l > 0) {
    for(var k = i ,k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k){
      s[k] = c;
    }
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_create_bytes(len) {
  if (len < 0) {
    throw [
          invalid_argument,
          "String.create"
        ];
  }
  var result = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    result[i] = /* "\000" */0;
  }
  return result;
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;
      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;
        for(var j = range; j >= 0; --j){
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }
        return /* () */0;
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for(var k = 0; k <= range$1; ++k){
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }
        return /* () */0;
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return /* () */0;
      } else {
        for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return /* () */0;
      }
    }
  } else {
    return 0;
  }
}

function bytes_to_string(a) {
  var bytes = a;
  var len = a.length;
  var s = "";
  var s_len = len;
  if ( len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null, bytes);
  } else {
    var offset = 0;
    while(s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null, tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    }    return s;
  }
}

function caml_blit_string(s1, i1, s2, i2, len) {
  if (len > 0) {
    var off1 = s1.length - i1 | 0;
    if (len <= off1) {
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
      }
      return /* () */0;
    } else {
      for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }
      for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
        s2[i2 + i$2 | 0] = /* "\000" */0;
      }
      return /* () */0;
    }
  } else {
    return 0;
  }
}

function bytes_of_string(s) {
  var len = s.length;
  var res = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    res[i] = s.charCodeAt(i);
  }
  return res;
}
/* No side effect */

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);
/* imul Not a pure module */

function repeat (count,self){
    if (self.repeat){
        return self.repeat(count)
    }
    if (self.length == 0 || count == 0) {
            return '';
        }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (self.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (;;) {
            if ((count & 1) == 1) {
                rpt += self;
            }
            count >>>= 1;
            if (count == 0) {
                break;
            }
            self += self;
    }
    return rpt;

}/* No side effect */

var min_int = {
  hi: -2147483648,
  lo: 0
};

var max_int = {
  hi: 2147483647,
  lo: 1
};

var one = {
  hi: 0,
  lo: 1
};

var zero = {
  hi: 0,
  lo: 0
};

var neg_one = {
  hi: -1,
  lo: 4294967295
};

function neg_signed(x) {
  return (x & 2147483648) !== 0;
}

function add(param, param$1) {
  var other_low_ = param$1.lo;
  var this_low_ = param.lo;
  var lo = this_low_ + other_low_ & 4294967295;
  var overflow = neg_signed(this_low_) && (neg_signed(other_low_) || !neg_signed(lo)) || neg_signed(other_low_) && !neg_signed(lo) ? 1 : 0;
  var hi = param.hi + param$1.hi + overflow & 4294967295;
  return {
          hi: hi,
          lo: (lo >>> 0)
        };
}

function not(param) {
  var hi = param.hi ^ -1;
  var lo = param.lo ^ -1;
  return {
          hi: hi,
          lo: (lo >>> 0)
        };
}

function eq(x, y) {
  if (x.hi === y.hi) {
    return x.lo === y.lo;
  } else {
    return false;
  }
}

function neg(x) {
  if (eq(x, min_int)) {
    return min_int;
  } else {
    return add(not(x), one);
  }
}

function lsl_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var lo = x.lo;
    if (numBits >= 32) {
      return {
              hi: (lo << (numBits - 32 | 0)),
              lo: 0
            };
    } else {
      var hi = (lo >>> (32 - numBits | 0)) | (x.hi << numBits);
      return {
              hi: hi,
              lo: ((lo << numBits) >>> 0)
            };
    }
  }
}

function asr_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x.hi;
    if (numBits < 32) {
      var hi$1 = (hi >> numBits);
      var lo = (hi << (32 - numBits | 0)) | (x.lo >>> numBits);
      return {
              hi: hi$1,
              lo: (lo >>> 0)
            };
    } else {
      var lo$1 = (hi >> (numBits - 32 | 0));
      return {
              hi: hi >= 0 ? 0 : -1,
              lo: (lo$1 >>> 0)
            };
    }
  }
}

function is_zero(param) {
  if (param.hi !== 0 || param.lo !== 0) {
    return false;
  } else {
    return true;
  }
}

function mul(_this, _other) {
  while(true) {
    var other = _other;
    var $$this = _this;
    var lo;
    var this_hi = $$this.hi;
    var exit = 0;
    var exit$1 = 0;
    var exit$2 = 0;
    if (this_hi !== 0 || $$this.lo !== 0) {
      exit$2 = 4;
    } else {
      return zero;
    }
    if (exit$2 === 4) {
      if (other.hi !== 0 || other.lo !== 0) {
        exit$1 = 3;
      } else {
        return zero;
      }
    }
    if (exit$1 === 3) {
      if (this_hi !== -2147483648 || $$this.lo !== 0) {
        exit = 2;
      } else {
        lo = other.lo;
      }
    }
    if (exit === 2) {
      var other_hi = other.hi;
      var lo$1 = $$this.lo;
      var exit$3 = 0;
      if (other_hi !== -2147483648 || other.lo !== 0) {
        exit$3 = 3;
      } else {
        lo = lo$1;
      }
      if (exit$3 === 3) {
        var other_lo = other.lo;
        if (this_hi < 0) {
          if (other_hi < 0) {
            _other = neg(other);
            _this = neg($$this);
            continue ;
          } else {
            return neg(mul(neg($$this), other));
          }
        } else if (other_hi < 0) {
          return neg(mul($$this, neg(other)));
        } else {
          var a48 = (this_hi >>> 16);
          var a32 = this_hi & 65535;
          var a16 = (lo$1 >>> 16);
          var a00 = lo$1 & 65535;
          var b48 = (other_hi >>> 16);
          var b32 = other_hi & 65535;
          var b16 = (other_lo >>> 16);
          var b00 = other_lo & 65535;
          var c48 = 0;
          var c32 = 0;
          var c16 = 0;
          var c00 = a00 * b00;
          c16 = (c00 >>> 16) + a16 * b00;
          c32 = (c16 >>> 16);
          c16 = (c16 & 65535) + a00 * b16;
          c32 = c32 + (c16 >>> 16) + a32 * b00;
          c48 = (c32 >>> 16);
          c32 = (c32 & 65535) + a16 * b16;
          c48 = c48 + (c32 >>> 16);
          c32 = (c32 & 65535) + a00 * b32;
          c48 = c48 + (c32 >>> 16);
          c32 = c32 & 65535;
          c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
          var hi = c32 | (c48 << 16);
          var lo$2 = c00 & 65535 | ((c16 & 65535) << 16);
          return {
                  hi: hi,
                  lo: (lo$2 >>> 0)
                };
        }
      }
      
    }
    if ((lo & 1) === 0) {
      return zero;
    } else {
      return min_int;
    }
  }}

function ge(param, param$1) {
  var other_hi = param$1.hi;
  var hi = param.hi;
  if (hi > other_hi) {
    return true;
  } else if (hi < other_hi) {
    return false;
  } else {
    return param.lo >= param$1.lo;
  }
}

function neq(x, y) {
  return !eq(x, y);
}

function lt(x, y) {
  return !ge(x, y);
}

function gt(x, y) {
  if (x.hi > y.hi) {
    return true;
  } else if (x.hi < y.hi) {
    return false;
  } else {
    return x.lo > y.lo;
  }
}

function to_float(param) {
  return param.hi * (0x100000000) + param.lo;
}

function of_float(x) {
  if (isNaN(x) || !isFinite(x)) {
    return zero;
  } else if (x <= -9.22337203685477581e+18) {
    return min_int;
  } else if (x + 1 >= 9.22337203685477581e+18) {
    return max_int;
  } else if (x < 0) {
    return neg(of_float(-x));
  } else {
    var hi = x / 4294967296 | 0;
    var lo = x % 4294967296 | 0;
    return {
            hi: hi,
            lo: (lo >>> 0)
          };
  }
}

function div(_self, _other) {
  while(true) {
    var other = _other;
    var self = _self;
    var self_hi = self.hi;
    var exit = 0;
    var exit$1 = 0;
    if (other.hi !== 0 || other.lo !== 0) {
      exit$1 = 2;
    } else {
      throw division_by_zero;
    }
    if (exit$1 === 2) {
      if (self_hi !== -2147483648) {
        if (self_hi !== 0 || self.lo !== 0) {
          exit = 1;
        } else {
          return zero;
        }
      } else if (self.lo !== 0) {
        exit = 1;
      } else if (eq(other, one) || eq(other, neg_one)) {
        return self;
      } else if (eq(other, min_int)) {
        return one;
      } else {
        var other_hi = other.hi;
        var half_this = asr_(self, 1);
        var approx = lsl_(div(half_this, other), 1);
        if (approx.hi === 0 && approx.lo === 0) {
          if (other_hi < 0) {
            return one;
          } else {
            return neg(one);
          }
        }
        var y = mul(other, approx);
        var rem = add(self, neg(y));
        return add(approx, div(rem, other));
      }
    }
    if (exit === 1) {
      var other_hi$1 = other.hi;
      if (other_hi$1 === -2147483648 && other.lo === 0) {
        return zero;
      }
      if (self_hi < 0) {
        if (other_hi$1 < 0) {
          _other = neg(other);
          _self = neg(self);
          continue ;
        } else {
          return neg(div(neg(self), other));
        }
      } else if (other_hi$1 < 0) {
        return neg(div(self, neg(other)));
      } else {
        var res = zero;
        var rem$1 = self;
        while(ge(rem$1, other)) {
          var approx$1 = caml_float_max(1, Math.floor(to_float(rem$1) / to_float(other)));
          var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
          var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
          var approxRes = of_float(approx$1);
          var approxRem = mul(approxRes, other);
          while(approxRem.hi < 0 || gt(approxRem, rem$1)) {
            approx$1 = approx$1 - delta;
            approxRes = of_float(approx$1);
            approxRem = mul(approxRes, other);
          }          if (is_zero(approxRes)) {
            approxRes = one;
          }
          res = add(res, approxRes);
          rem$1 = add(rem$1, neg(approxRem));
        }        return res;
      }
    }
    
  }}

function div_mod(self, other) {
  var quotient = div(self, other);
  var y = mul(quotient, other);
  return /* tuple */[
          quotient,
          add(self, neg(y))
        ];
}

function to_int32(x) {
  return x.lo | 0;
}

function to_hex(x) {
  var x_lo = x.lo;
  var x_hi = x.hi;
  var aux = function (v) {
    return (v >>> 0).toString(16);
  };
  if (x_hi === 0 && x_lo === 0) {
    return "0";
  }
  if (x_lo !== 0) {
    if (x_hi !== 0) {
      var lo = aux(x_lo);
      var pad = 8 - lo.length | 0;
      if (pad <= 0) {
        return aux(x_hi) + lo;
      } else {
        return aux(x_hi) + (repeat(pad, "0") + lo);
      }
    } else {
      return aux(x_lo);
    }
  } else {
    return aux(x_hi) + "00000000";
  }
}

function discard_sign(x) {
  return {
          hi: 2147483647 & x.hi,
          lo: x.lo
        };
}
/* Caml_int32 Not a pure module */

function parse_digit(c) {
  if (c >= 65) {
    if (c >= 97) {
      if (c >= 123) {
        return -1;
      } else {
        return c - 87 | 0;
      }
    } else if (c >= 91) {
      return -1;
    } else {
      return c - 55 | 0;
    }
  } else if (c > 57 || c < 48) {
    return -1;
  } else {
    return c - /* "0" */48 | 0;
  }
}

function int_of_string_base(param) {
  switch (param) {
    case /* Oct */0 :
        return 8;
    case /* Hex */1 :
        return 16;
    case /* Dec */2 :
        return 10;
    case /* Bin */3 :
        return 2;
    
  }
}

function parse_sign_and_base(s) {
  var sign = 1;
  var base = /* Dec */2;
  var i = 0;
  var match = s.charCodeAt(i);
  switch (match) {
    case 43 :
        i = i + 1 | 0;
        break;
    case 44 :
        break;
    case 45 :
        sign = -1;
        i = i + 1 | 0;
        break;
      
  }
  if (s[i] === "0") {
    var match$1 = s.charCodeAt(i + 1 | 0);
    if (match$1 >= 89) {
      if (match$1 >= 111) {
        if (match$1 < 121) {
          switch (match$1 - 111 | 0) {
            case 0 :
                base = /* Oct */0;
                i = i + 2 | 0;
                break;
            case 6 :
                i = i + 2 | 0;
                break;
            case 1 :
            case 2 :
            case 3 :
            case 4 :
            case 5 :
            case 7 :
            case 8 :
                break;
            case 9 :
                base = /* Hex */1;
                i = i + 2 | 0;
                break;
            
          }
        }
        
      } else if (match$1 === 98) {
        base = /* Bin */3;
        i = i + 2 | 0;
      }
      
    } else if (match$1 !== 66) {
      if (match$1 >= 79) {
        switch (match$1 - 79 | 0) {
          case 0 :
              base = /* Oct */0;
              i = i + 2 | 0;
              break;
          case 6 :
              i = i + 2 | 0;
              break;
          case 1 :
          case 2 :
          case 3 :
          case 4 :
          case 5 :
          case 7 :
          case 8 :
              break;
          case 9 :
              base = /* Hex */1;
              i = i + 2 | 0;
              break;
          
        }
      }
      
    } else {
      base = /* Bin */3;
      i = i + 2 | 0;
    }
  }
  return /* tuple */[
          i,
          sign,
          base
        ];
}

function caml_int_of_string(s) {
  var match = parse_sign_and_base(s);
  var i = match[0];
  var base = int_of_string_base(match[2]);
  var threshold = 4294967295;
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = parse_digit(c);
  if (d < 0 || d >= base) {
    throw [
          failure,
          "int_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
        } else {
          var v = parse_digit(a);
          if (v < 0 || v >= base) {
            throw [
                  failure,
                  "int_of_string"
                ];
          }
          var acc$1 = base * acc + v;
          if (acc$1 > threshold) {
            throw [
                  failure,
                  "int_of_string"
                ];
          }
          _k = k + 1 | 0;
          _acc = acc$1;
          continue ;
        }
      }
    }  };
  var res = match[1] * aux(d, i + 1 | 0);
  var or_res = res | 0;
  if (base === 10 && res !== or_res) {
    throw [
          failure,
          "int_of_string"
        ];
  }
  return or_res;
}

function int_of_base(param) {
  switch (param) {
    case /* Oct */0 :
        return 8;
    case /* Hex */1 :
        return 16;
    case /* Dec */2 :
        return 10;
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [
          invalid_argument,
          "format_int: format too long"
        ];
  }
  var f = {
    justify: "+",
    signstyle: "-",
    filter: " ",
    alternate: false,
    base: /* Dec */2,
    signedconv: false,
    width: 0,
    uppercase: false,
    sign: 1,
    prec: -1,
    conv: "f"
  };
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0 :
                  f.base = /* Hex */1;
                  f.uppercase = true;
                  _i = i + 1 | 0;
                  continue ;
              case 13 :
              case 14 :
              case 15 :
                  exit = 5;
                  break;
              case 12 :
              case 17 :
                  exit = 4;
                  break;
              case 23 :
                  f.base = /* Oct */0;
                  _i = i + 1 | 0;
                  continue ;
              case 29 :
                  f.base = /* Dec */2;
                  _i = i + 1 | 0;
                  continue ;
              case 1 :
              case 2 :
              case 3 :
              case 4 :
              case 5 :
              case 6 :
              case 7 :
              case 8 :
              case 9 :
              case 10 :
              case 11 :
              case 16 :
              case 18 :
              case 19 :
              case 20 :
              case 21 :
              case 22 :
              case 24 :
              case 25 :
              case 26 :
              case 27 :
              case 28 :
              case 30 :
              case 31 :
                  exit = 1;
                  break;
              case 32 :
                  f.base = /* Hex */1;
                  _i = i + 1 | 0;
                  continue ;
              
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f.signedconv = true;
          f.uppercase = true;
          f.conv = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue ;
        }
      } else {
        switch (c) {
          case 35 :
              f.alternate = true;
              _i = i + 1 | 0;
              continue ;
          case 32 :
          case 43 :
              exit = 2;
              break;
          case 45 :
              f.justify = "-";
              _i = i + 1 | 0;
              continue ;
          case 46 :
              f.prec = 0;
              var j = i + 1 | 0;
              while((function(j){
                  return function () {
                    var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                    return w >= 0 && w <= 9;
                  }
                  }(j))()) {
                f.prec = (imul(f.prec, 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                j = j + 1 | 0;
              }              _i = j;
              continue ;
          case 33 :
          case 34 :
          case 36 :
          case 37 :
          case 38 :
          case 39 :
          case 40 :
          case 41 :
          case 42 :
          case 44 :
          case 47 :
              exit = 1;
              break;
          case 48 :
              f.filter = "0";
              _i = i + 1 | 0;
              continue ;
          case 49 :
          case 50 :
          case 51 :
          case 52 :
          case 53 :
          case 54 :
          case 55 :
          case 56 :
          case 57 :
              exit = 3;
              break;
          default:
            exit = 1;
        }
      }
      switch (exit) {
        case 1 :
            _i = i + 1 | 0;
            continue ;
        case 2 :
            f.signstyle = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
        case 3 :
            f.width = 0;
            var j$1 = i;
            while((function(j$1){
                return function () {
                  var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                  return w >= 0 && w <= 9;
                }
                }(j$1))()) {
              f.width = (imul(f.width, 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
              j$1 = j$1 + 1 | 0;
            }            _i = j$1;
            continue ;
        case 4 :
            f.signedconv = true;
            f.base = /* Dec */2;
            _i = i + 1 | 0;
            continue ;
        case 5 :
            f.signedconv = true;
            f.conv = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
        
      }
    }
  }}

function finish_formatting(config, rawbuffer) {
  var justify = config.justify;
  var signstyle = config.signstyle;
  var filter = config.filter;
  var alternate = config.alternate;
  var base = config.base;
  var signedconv = config.signedconv;
  var width = config.width;
  var uppercase = config.uppercase;
  var sign = config.sign;
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base === /* Oct */0) {
      len = len + 1 | 0;
    } else if (base === /* Hex */1) {
      len = len + 2 | 0;
    }
    
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
    
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_int(fmt, i) {
  if (fmt === "%d") {
    return String(i);
  } else {
    var f = parse_format(fmt);
    var f$1 = f;
    var i$1 = i;
    var i$2 = i$1 < 0 ? (
        f$1.signedconv ? (f$1.sign = -1, -i$1) : (i$1 >>> 0)
      ) : i$1;
    var s = i$2.toString(int_of_base(f$1.base));
    if (f$1.prec >= 0) {
      f$1.filter = " ";
      var n = f$1.prec - s.length | 0;
      if (n > 0) {
        s = repeat(n, "0") + s;
      }
      
    }
    return finish_formatting(f$1, s);
  }
}

function caml_int64_format(fmt, x) {
  var f = parse_format(fmt);
  var x$1 = f.signedconv && lt(x, /* int64 */{
        hi: 0,
        lo: 0
      }) ? (f.sign = -1, neg(x)) : x;
  var s = "";
  var match = f.base;
  switch (match) {
    case /* Oct */0 :
        var wbase = /* int64 */{
          hi: 0,
          lo: 8
        };
        var cvtbl = "01234567";
        if (lt(x$1, /* int64 */{
                hi: 0,
                lo: 0
              })) {
          var y = discard_sign(x$1);
          var match$1 = div_mod(y, wbase);
          var quotient = add(/* int64 */{
                hi: 268435456,
                lo: 0
              }, match$1[0]);
          var modulus = match$1[1];
          s = String.fromCharCode(cvtbl.charCodeAt(to_int32(modulus))) + s;
          while(neq(quotient, /* int64 */{
                  hi: 0,
                  lo: 0
                })) {
            var match$2 = div_mod(quotient, wbase);
            quotient = match$2[0];
            modulus = match$2[1];
            s = String.fromCharCode(cvtbl.charCodeAt(to_int32(modulus))) + s;
          }        } else {
          var match$3 = div_mod(x$1, wbase);
          var quotient$1 = match$3[0];
          var modulus$1 = match$3[1];
          s = String.fromCharCode(cvtbl.charCodeAt(to_int32(modulus$1))) + s;
          while(neq(quotient$1, /* int64 */{
                  hi: 0,
                  lo: 0
                })) {
            var match$4 = div_mod(quotient$1, wbase);
            quotient$1 = match$4[0];
            modulus$1 = match$4[1];
            s = String.fromCharCode(cvtbl.charCodeAt(to_int32(modulus$1))) + s;
          }        }
        break;
    case /* Hex */1 :
        s = to_hex(x$1) + s;
        break;
    case /* Dec */2 :
        var wbase$1 = /* int64 */{
          hi: 0,
          lo: 10
        };
        var cvtbl$1 = "0123456789";
        if (lt(x$1, /* int64 */{
                hi: 0,
                lo: 0
              })) {
          var y$1 = discard_sign(x$1);
          var match$5 = div_mod(y$1, wbase$1);
          var match$6 = div_mod(add(/* int64 */{
                    hi: 0,
                    lo: 8
                  }, match$5[1]), wbase$1);
          var quotient$2 = add(add(/* int64 */{
                    hi: 214748364,
                    lo: 3435973836
                  }, match$5[0]), match$6[0]);
          var modulus$2 = match$6[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(to_int32(modulus$2))) + s;
          while(neq(quotient$2, /* int64 */{
                  hi: 0,
                  lo: 0
                })) {
            var match$7 = div_mod(quotient$2, wbase$1);
            quotient$2 = match$7[0];
            modulus$2 = match$7[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(to_int32(modulus$2))) + s;
          }        } else {
          var match$8 = div_mod(x$1, wbase$1);
          var quotient$3 = match$8[0];
          var modulus$3 = match$8[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(to_int32(modulus$3))) + s;
          while(neq(quotient$3, /* int64 */{
                  hi: 0,
                  lo: 0
                })) {
            var match$9 = div_mod(quotient$3, wbase$1);
            quotient$3 = match$9[0];
            modulus$3 = match$9[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(to_int32(modulus$3))) + s;
          }        }
        break;
    
  }
  if (f.prec >= 0) {
    f.filter = " ";
    var n = f.prec - s.length | 0;
    if (n > 0) {
      s = repeat(n, "0") + s;
    }
    
  }
  return finish_formatting(f, s);
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f.prec < 0 ? 6 : f.prec;
  var x$1 = x < 0 ? (f.sign = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f.filter = " ";
  } else if (isFinite(x$1)) {
    var match = f.conv;
    switch (match) {
      case "e" :
          s = x$1.toExponential(prec);
          var i = s.length;
          if (s[i - 3 | 0] === "e") {
            s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
          }
          break;
      case "f" :
          s = x$1.toFixed(prec);
          break;
      case "g" :
          var prec$1 = prec !== 0 ? prec : 1;
          s = x$1.toExponential(prec$1 - 1 | 0);
          var j = s.indexOf("e");
          var exp = Number(s.slice(j + 1 | 0)) | 0;
          if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
            var i$1 = j - 1 | 0;
            while(s[i$1] === "0") {
              i$1 = i$1 - 1 | 0;
            }            if (s[i$1] === ".") {
              i$1 = i$1 - 1 | 0;
            }
            s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
            var i$2 = s.length;
            if (s[i$2 - 3 | 0] === "e") {
              s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
            }
            
          } else {
            var p = prec$1;
            if (exp < 0) {
              p = p - (exp + 1 | 0) | 0;
              s = x$1.toFixed(p);
            } else {
              while((function () {
                      s = x$1.toFixed(p);
                      return s.length > (prec$1 + 1 | 0);
                    })()) {
                p = p - 1 | 0;
              }            }
            if (p !== 0) {
              var k = s.length - 1 | 0;
              while(s[k] === "0") {
                k = k - 1 | 0;
              }              if (s[k] === ".") {
                k = k - 1 | 0;
              }
              s = s.slice(0, k + 1 | 0);
            }
            
          }
          break;
        
    }
  } else {
    s = "inf";
    f.filter = " ";
  }
  return finish_formatting(f, s);
}

function caml_hexstring_of_float (x,prec,style){ 
  if (!isFinite(x)) {
    if (isNaN(x)) return "nan";
    return x > 0 ? "infinity":"-infinity";
  }
  var sign = (x==0 && 1/x == -Infinity)?1:(x>=0)?0:1;
  if(sign) x = -x;
  var exp = 0;
  if (x == 0) ;
  else if (x < 1) {
    while (x < 1 && exp > -1022)  { x *= 2; exp--; }
  } else {
    while (x >= 2) { x /= 2; exp++; }
  }
  var exp_sign = exp < 0 ? '' : '+';
  var sign_str = '';
  if (sign) sign_str = '-';
  else {
    switch(style){
    case 43 /* '+' */: sign_str = '+'; break;
    case 32 /* ' ' */: sign_str = ' '; break;
    }
  }
  if (prec >= 0 && prec < 13) {
    /* If a precision is given, and is small, round mantissa accordingly */
      var cst = Math.pow(2,prec * 4);
      x = Math.round(x * cst) / cst;
  }
  var x_str = x.toString(16);
  if(prec >= 0){
      var idx = x_str.indexOf('.');
    if(idx<0) {
      x_str += '.' +  '0'.repeat(prec);
    }
    else {
      var size = idx+1+prec;
      if(x_str.length < size)
        x_str += '0'.repeat(size - x_str.length);
      else
        x_str = x_str.substr(0,size);
    }
  }
  return  (sign_str + '0x' + x_str + 'p' + exp_sign + exp.toString(10));
}
var caml_nativeint_format = caml_format_int;

var caml_int32_format = caml_format_int;
/* No side effect */

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  }
  return s.charCodeAt(i);
}
/* No side effect */

function erase_rel(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case /* Char_ty */0 :
          return /* Char_ty */__(0, [erase_rel(param[0])]);
      case /* String_ty */1 :
          return /* String_ty */__(1, [erase_rel(param[0])]);
      case /* Int_ty */2 :
          return /* Int_ty */__(2, [erase_rel(param[0])]);
      case /* Int32_ty */3 :
          return /* Int32_ty */__(3, [erase_rel(param[0])]);
      case /* Nativeint_ty */4 :
          return /* Nativeint_ty */__(4, [erase_rel(param[0])]);
      case /* Int64_ty */5 :
          return /* Int64_ty */__(5, [erase_rel(param[0])]);
      case /* Float_ty */6 :
          return /* Float_ty */__(6, [erase_rel(param[0])]);
      case /* Bool_ty */7 :
          return /* Bool_ty */__(7, [erase_rel(param[0])]);
      case /* Format_arg_ty */8 :
          return /* Format_arg_ty */__(8, [
                    param[0],
                    erase_rel(param[1])
                  ]);
      case /* Format_subst_ty */9 :
          var ty1 = param[0];
          return /* Format_subst_ty */__(9, [
                    ty1,
                    ty1,
                    erase_rel(param[2])
                  ]);
      case /* Alpha_ty */10 :
          return /* Alpha_ty */__(10, [erase_rel(param[0])]);
      case /* Theta_ty */11 :
          return /* Theta_ty */__(11, [erase_rel(param[0])]);
      case /* Any_ty */12 :
          return /* Any_ty */__(12, [erase_rel(param[0])]);
      case /* Reader_ty */13 :
          return /* Reader_ty */__(13, [erase_rel(param[0])]);
      case /* Ignored_reader_ty */14 :
          return /* Ignored_reader_ty */__(14, [erase_rel(param[0])]);
      
    }
  }
}

function concat_fmtty(fmtty1, fmtty2) {
  if (typeof fmtty1 === "number") {
    return fmtty2;
  } else {
    switch (fmtty1.tag | 0) {
      case /* Char_ty */0 :
          return /* Char_ty */__(0, [concat_fmtty(fmtty1[0], fmtty2)]);
      case /* String_ty */1 :
          return /* String_ty */__(1, [concat_fmtty(fmtty1[0], fmtty2)]);
      case /* Int_ty */2 :
          return /* Int_ty */__(2, [concat_fmtty(fmtty1[0], fmtty2)]);
      case /* Int32_ty */3 :
          return /* Int32_ty */__(3, [concat_fmtty(fmtty1[0], fmtty2)]);
      case /* Nativeint_ty */4 :
          return /* Nativeint_ty */__(4, [concat_fmtty(fmtty1[0], fmtty2)]);
      case /* Int64_ty */5 :
          return /* Int64_ty */__(5, [concat_fmtty(fmtty1[0], fmtty2)]);
      case /* Float_ty */6 :
          return /* Float_ty */__(6, [concat_fmtty(fmtty1[0], fmtty2)]);
      case /* Bool_ty */7 :
          return /* Bool_ty */__(7, [concat_fmtty(fmtty1[0], fmtty2)]);
      case /* Format_arg_ty */8 :
          return /* Format_arg_ty */__(8, [
                    fmtty1[0],
                    concat_fmtty(fmtty1[1], fmtty2)
                  ]);
      case /* Format_subst_ty */9 :
          return /* Format_subst_ty */__(9, [
                    fmtty1[0],
                    fmtty1[1],
                    concat_fmtty(fmtty1[2], fmtty2)
                  ]);
      case /* Alpha_ty */10 :
          return /* Alpha_ty */__(10, [concat_fmtty(fmtty1[0], fmtty2)]);
      case /* Theta_ty */11 :
          return /* Theta_ty */__(11, [concat_fmtty(fmtty1[0], fmtty2)]);
      case /* Any_ty */12 :
          return /* Any_ty */__(12, [concat_fmtty(fmtty1[0], fmtty2)]);
      case /* Reader_ty */13 :
          return /* Reader_ty */__(13, [concat_fmtty(fmtty1[0], fmtty2)]);
      case /* Ignored_reader_ty */14 :
          return /* Ignored_reader_ty */__(14, [concat_fmtty(fmtty1[0], fmtty2)]);
      
    }
  }
}

function concat_fmt(fmt1, fmt2) {
  if (typeof fmt1 === "number") {
    return fmt2;
  } else {
    switch (fmt1.tag | 0) {
      case /* Char */0 :
          return /* Char */__(0, [concat_fmt(fmt1[0], fmt2)]);
      case /* Caml_char */1 :
          return /* Caml_char */__(1, [concat_fmt(fmt1[0], fmt2)]);
      case /* String */2 :
          return /* String */__(2, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case /* Caml_string */3 :
          return /* Caml_string */__(3, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case /* Int */4 :
          return /* Int */__(4, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case /* Int32 */5 :
          return /* Int32 */__(5, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case /* Nativeint */6 :
          return /* Nativeint */__(6, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case /* Int64 */7 :
          return /* Int64 */__(7, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case /* Float */8 :
          return /* Float */__(8, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case /* Bool */9 :
          return /* Bool */__(9, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case /* Flush */10 :
          return /* Flush */__(10, [concat_fmt(fmt1[0], fmt2)]);
      case /* String_literal */11 :
          return /* String_literal */__(11, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case /* Char_literal */12 :
          return /* Char_literal */__(12, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case /* Format_arg */13 :
          return /* Format_arg */__(13, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case /* Format_subst */14 :
          return /* Format_subst */__(14, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case /* Alpha */15 :
          return /* Alpha */__(15, [concat_fmt(fmt1[0], fmt2)]);
      case /* Theta */16 :
          return /* Theta */__(16, [concat_fmt(fmt1[0], fmt2)]);
      case /* Formatting_lit */17 :
          return /* Formatting_lit */__(17, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case /* Formatting_gen */18 :
          return /* Formatting_gen */__(18, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case /* Reader */19 :
          return /* Reader */__(19, [concat_fmt(fmt1[0], fmt2)]);
      case /* Scan_char_set */20 :
          return /* Scan_char_set */__(20, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case /* Scan_get_counter */21 :
          return /* Scan_get_counter */__(21, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case /* Scan_next_char */22 :
          return /* Scan_next_char */__(22, [concat_fmt(fmt1[0], fmt2)]);
      case /* Ignored_param */23 :
          return /* Ignored_param */__(23, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case /* Custom */24 :
          return /* Custom */__(24, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      
    }
  }
}
/* No side effect */

var Exit = create("Pervasives.Exit");

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

var min_int$1 = -2147483648;

function classify_float(x) {
  if (isFinite(x)) {
    if (Math.abs(x) >= 2.22507385850720138e-308) {
      return /* FP_normal */0;
    } else if (x !== 0) {
      return /* FP_subnormal */1;
    } else {
      return /* FP_zero */2;
    }
  } else if (isNaN(x)) {
    return /* FP_nan */4;
  } else {
    return /* FP_infinite */3;
  }
}

function string_of_bool(b) {
  if (b) {
    return "true";
  } else {
    return "false";
  }
}

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

var max_int$1 = 2147483647;
/* No side effect */

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

function map$1(f, param) {
  if (param) {
    var r = _1(f, param[0]);
    return /* :: */[
            r,
            map$1(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
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

function fold_right$1(f, l, accu) {
  if (l) {
    return _2(f, l[0], fold_right$1(f, l[1], accu));
  } else {
    return accu;
  }
}

function fold_left2(f, _accu, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    var accu = _accu;
    if (l1) {
      if (l2) {
        _l2 = l2[1];
        _l1 = l1[1];
        _accu = _3(f, accu, l1[0], l2[0]);
        continue ;
      } else {
        throw [
              invalid_argument,
              "List.fold_left2"
            ];
      }
    } else {
      if (l2) {
        throw [
              invalid_argument,
              "List.fold_left2"
            ];
      }
      return accu;
    }
  }}

function find_all(p) {
  return (function (param) {
      var _accu = /* [] */0;
      var _param = param;
      while(true) {
        var param$1 = _param;
        var accu = _accu;
        if (param$1) {
          var l = param$1[1];
          var x = param$1[0];
          if (_1(p, x)) {
            _param = l;
            _accu = /* :: */[
              x,
              accu
            ];
            continue ;
          } else {
            _param = l;
            continue ;
          }
        } else {
          return rev_append(accu, /* [] */0);
        }
      }    });
}

var append = $at;

var filter = find_all;
/* No side effect */

function escaped(c) {
  var exit = 0;
  if (c >= 40) {
    if (c !== 92) {
      exit = c >= 127 ? 1 : 2;
    } else {
      return "\\\\";
    }
  } else if (c >= 32) {
    if (c >= 39) {
      return "\\'";
    } else {
      exit = 2;
    }
  } else if (c >= 14) {
    exit = 1;
  } else {
    switch (c) {
      case 8 :
          return "\\b";
      case 9 :
          return "\\t";
      case 10 :
          return "\\n";
      case 0 :
      case 1 :
      case 2 :
      case 3 :
      case 4 :
      case 5 :
      case 6 :
      case 7 :
      case 11 :
      case 12 :
          exit = 1;
          break;
      case 13 :
          return "\\r";
      
    }
  }
  switch (exit) {
    case 1 :
        var s = [
          0,
          0,
          0,
          0
        ];
        s[0] = /* "\\" */92;
        s[1] = 48 + (c / 100 | 0) | 0;
        s[2] = 48 + (c / 10 | 0) % 10 | 0;
        s[3] = 48 + c % 10 | 0;
        return bytes_to_string(s);
    case 2 :
        var s$1 = [0];
        s$1[0] = c;
        return bytes_to_string(s$1);
    
  }
}

function uppercase_ascii(c) {
  if (c >= /* "a" */97 && c <= /* "z" */122) {
    return c - 32 | 0;
  } else {
    return c;
  }
}
/* No side effect */

function make(n, c) {
  var s = caml_create_bytes(n);
  caml_fill_bytes(s, 0, n, c);
  return s;
}

function copy(s) {
  var len = s.length;
  var r = caml_create_bytes(len);
  caml_blit_bytes(s, 0, r, 0, len);
  return r;
}

function sub(s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          invalid_argument,
          "String.sub / Bytes.sub"
        ];
  }
  var r = caml_create_bytes(len);
  caml_blit_bytes(s, ofs, r, 0, len);
  return r;
}

function sub_string(b, ofs, len) {
  return bytes_to_string(sub(b, ofs, len));
}

function blit(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          invalid_argument,
          "Bytes.blit"
        ];
  }
  return caml_blit_bytes(s1, ofs1, s2, ofs2, len);
}

function blit_string(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          invalid_argument,
          "String.blit / Bytes.blit_string"
        ];
  }
  return caml_blit_string(s1, ofs1, s2, ofs2, len);
}

function escaped$1(s) {
  var n = 0;
  for(var i = 0 ,i_finish = s.length - 1 | 0; i <= i_finish; ++i){
    var match = s[i];
    var tmp;
    if (match >= 32) {
      var switcher = match - 34 | 0;
      tmp = switcher > 58 || switcher < 0 ? (
          switcher >= 93 ? 4 : 1
        ) : (
          switcher > 57 || switcher < 1 ? 2 : 1
        );
    } else {
      tmp = match >= 11 ? (
          match !== 13 ? 4 : 2
        ) : (
          match >= 8 ? 2 : 4
        );
    }
    n = n + tmp | 0;
  }
  if (n === s.length) {
    return copy(s);
  } else {
    var s$prime = caml_create_bytes(n);
    n = 0;
    for(var i$1 = 0 ,i_finish$1 = s.length - 1 | 0; i$1 <= i_finish$1; ++i$1){
      var c = s[i$1];
      var exit = 0;
      if (c >= 35) {
        if (c !== 92) {
          if (c >= 127) {
            exit = 1;
          } else {
            s$prime[n] = c;
          }
        } else {
          exit = 2;
        }
      } else if (c >= 32) {
        if (c >= 34) {
          exit = 2;
        } else {
          s$prime[n] = c;
        }
      } else if (c >= 14) {
        exit = 1;
      } else {
        switch (c) {
          case 8 :
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "b" */98;
              break;
          case 9 :
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "t" */116;
              break;
          case 10 :
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "n" */110;
              break;
          case 0 :
          case 1 :
          case 2 :
          case 3 :
          case 4 :
          case 5 :
          case 6 :
          case 7 :
          case 11 :
          case 12 :
              exit = 1;
              break;
          case 13 :
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "r" */114;
              break;
          
        }
      }
      switch (exit) {
        case 1 :
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 100 | 0) | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 10 | 0) % 10 | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + c % 10 | 0;
            break;
        case 2 :
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = c;
            break;
        
      }
      n = n + 1 | 0;
    }
    return s$prime;
  }
}

function map$2(f, s) {
  var l = s.length;
  if (l === 0) {
    return s;
  } else {
    var r = caml_create_bytes(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = _1(f, s[i]);
    }
    return r;
  }
}

function uppercase_ascii$1(s) {
  return map$2(uppercase_ascii, s);
}
/* No side effect */

function ensure_ge(x, y) {
  if (x >= y) {
    return x;
  } else {
    throw [
          invalid_argument,
          "String.concat"
        ];
  }
}

function sum_lengths(_acc, seplen, _param) {
  while(true) {
    var param = _param;
    var acc = _acc;
    if (param) {
      var tl = param[1];
      var hd = param[0];
      if (tl) {
        _param = tl;
        _acc = ensure_ge((hd.length + seplen | 0) + acc | 0, acc);
        continue ;
      } else {
        return hd.length + acc | 0;
      }
    } else {
      return acc;
    }
  }}

function unsafe_blits(dst, _pos, sep, seplen, _param) {
  while(true) {
    var param = _param;
    var pos = _pos;
    if (param) {
      var tl = param[1];
      var hd = param[0];
      if (tl) {
        caml_blit_string(hd, 0, dst, pos, hd.length);
        caml_blit_string(sep, 0, dst, pos + hd.length | 0, seplen);
        _param = tl;
        _pos = (pos + hd.length | 0) + seplen | 0;
        continue ;
      } else {
        caml_blit_string(hd, 0, dst, pos, hd.length);
        return dst;
      }
    } else {
      return dst;
    }
  }}

function concat(sep, l) {
  if (l) {
    var seplen = sep.length;
    return bytes_to_string(unsafe_blits(caml_create_bytes(sum_lengths(0, seplen, l)), 0, sep, seplen, l));
  } else {
    return "";
  }
}

function escaped$2(s) {
  var needs_escape = function (_i) {
    while(true) {
      var i = _i;
      if (i >= s.length) {
        return false;
      } else {
        var match = s.charCodeAt(i);
        if (match >= 32) {
          var switcher = match - 34 | 0;
          if (switcher > 58 || switcher < 0) {
            if (switcher >= 93) {
              return true;
            } else {
              _i = i + 1 | 0;
              continue ;
            }
          } else if (switcher > 57 || switcher < 1) {
            return true;
          } else {
            _i = i + 1 | 0;
            continue ;
          }
        } else {
          return true;
        }
      }
    }  };
  if (needs_escape(0)) {
    return bytes_to_string(escaped$1(bytes_of_string(s)));
  } else {
    return s;
  }
}

var blit$1 = blit_string;
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function setStyle(n, key, value) {
  n.style[key] = value;
  return /* () */0;
}

function setStyleProperty(n, $staropt$star, key, value) {
  var priority = $staropt$star !== undefined ? $staropt$star : false;
  var style = n.style;
  var match = style.setProperty;
  if (match !== undefined) {
    return style.setProperty(key, value, priority ? "important" : null);
  } else {
    return setStyle(n, key, value);
  }
}

function insertBefore(n, child, refNode) {
  return n.insertBefore(child, refNode);
}

function setAttributeNsOptional(n, namespace, key, value) {
  if (namespace === "") {
    return n.setAttribute(key, value);
  } else {
    return n.setAttributeNS(namespace, key, value);
  }
}

function removeAttributeNsOptional(n, namespace, key) {
  if (namespace === "") {
    return n.removeAttribute(key);
  } else {
    return n.removeAttributeNS(namespace, key);
  }
}

function addEventListener(n, typ, listener, options) {
  return n.addEventListener(typ, listener, options);
}

function removeEventListener(n, typ, listener, options) {
  return n.removeEventListener(typ, listener, options);
}

function remove_polyfill(param) {
  return (
  // remove polyfill
  (function() {
    if (!('remove' in Element.prototype)) {
      Element.prototype.remove = function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }  }())
  );
}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function createElementNsOptional(namespace, tagName) {
  if (namespace === "") {
    return document.createElement(tagName);
  } else {
    return document.createElementNS(namespace, tagName);
  }
}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

var noNode = /* CommentNode */__(0, [""]);

function fullnode(namespace, tagName, key, unique, props, vdoms) {
  return /* Node */__(2, [
            namespace,
            tagName,
            key,
            unique,
            props,
            vdoms
          ]);
}

function onCB(name, key, cb) {
  return /* Event */__(3, [
            name,
            /* EventHandlerCallback */__(0, [
                key,
                cb
              ]),
            {
              contents: undefined
            }
          ]);
}

function onMsg(name, msg) {
  return /* Event */__(3, [
            name,
            /* EventHandlerMsg */__(1, [msg]),
            {
              contents: undefined
            }
          ]);
}

function renderToHtmlString(_param) {
  while(true) {
    var param = _param;
    switch (param.tag | 0) {
      case /* CommentNode */0 :
          return "<!-- " + (param[0] + " -->");
      case /* Text */1 :
          return param[0];
      case /* Node */2 :
          var tagName = param[1];
          var namespace = param[0];
          return concat("", /* :: */[
                      "<",
                      /* :: */[
                        namespace,
                        /* :: */[
                          namespace === "" ? "" : ":",
                          /* :: */[
                            tagName,
                            /* :: */[
                              concat("", map$1((function (p) {
                                          var param = p;
                                          if (typeof param === "number") {
                                            return "";
                                          } else {
                                            switch (param.tag | 0) {
                                              case /* RawProp */0 :
                                                  return concat("", /* :: */[
                                                              " ",
                                                              /* :: */[
                                                                param[0],
                                                                /* :: */[
                                                                  "=\"",
                                                                  /* :: */[
                                                                    param[1],
                                                                    /* :: */[
                                                                      "\"",
                                                                      /* [] */0
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]);
                                              case /* Attribute */1 :
                                                  return concat("", /* :: */[
                                                              " ",
                                                              /* :: */[
                                                                param[1],
                                                                /* :: */[
                                                                  "=\"",
                                                                  /* :: */[
                                                                    param[2],
                                                                    /* :: */[
                                                                      "\"",
                                                                      /* [] */0
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]);
                                              case /* Data */2 :
                                                  return concat("", /* :: */[
                                                              " data-",
                                                              /* :: */[
                                                                param[0],
                                                                /* :: */[
                                                                  "=\"",
                                                                  /* :: */[
                                                                    param[1],
                                                                    /* :: */[
                                                                      "\"",
                                                                      /* [] */0
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]);
                                              case /* Event */3 :
                                                  return "";
                                              case /* Style */4 :
                                                  return concat("", /* :: */[
                                                              " style=\"",
                                                              /* :: */[
                                                                concat(";", map$1((function (param) {
                                                                            return concat("", /* :: */[
                                                                                        param[0],
                                                                                        /* :: */[
                                                                                          ":",
                                                                                          /* :: */[
                                                                                            param[1],
                                                                                            /* :: */[
                                                                                              ";",
                                                                                              /* [] */0
                                                                                            ]
                                                                                          ]
                                                                                        ]
                                                                                      ]);
                                                                          }), param[0])),
                                                                /* :: */[
                                                                  "\"",
                                                                  /* [] */0
                                                                ]
                                                              ]
                                                            ]);
                                              
                                            }
                                          }
                                        }), param[4])),
                              /* :: */[
                                ">",
                                /* :: */[
                                  concat("", map$1(renderToHtmlString, param[5])),
                                  /* :: */[
                                    "</",
                                    /* :: */[
                                      tagName,
                                      /* :: */[
                                        ">",
                                        /* [] */0
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]);
      case /* LazyGen */3 :
          _param = _1(param[1], /* () */0);
          continue ;
      case /* Tagger */4 :
          _param = param[1];
          continue ;
      
    }
  }}

function eventHandler(callbacks, cb) {
  return (function (ev) {
      var match = _1(cb.contents, ev);
      if (match !== undefined) {
        return _1(callbacks.contents.enqueue, valFromOption(match));
      } else {
        return /* () */0;
      }
    });
}

function eventHandler_GetCB(param) {
  if (param.tag) {
    var msg = param[0];
    return (function (_ev) {
        return some(msg);
      });
  } else {
    return param[1];
  }
}

function compareEventHandlerTypes(left, param) {
  if (param.tag) {
    if (left.tag && caml_equal(param[0], left[0])) {
      return true;
    } else {
      return false;
    }
  } else if (left.tag) {
    return false;
  } else {
    return param[0] === left[0];
  }
}

function eventHandler_Register(callbacks, elem, name, handlerType) {
  var cb = {
    contents: eventHandler_GetCB(handlerType)
  };
  var handler = eventHandler(callbacks, cb);
  addEventListener(elem, name, handler, false);
  return {
          handler: handler,
          cb: cb
        };
}

function eventHandler_Unregister(elem, name, param) {
  if (param !== undefined) {
    removeEventListener(elem, name, param.handler, false);
    return ;
  }
  
}

function eventHandler_Mutate(callbacks, elem, oldName, newName, oldHandlerType, newHandlerType, oldCache, newCache) {
  var match = oldCache.contents;
  if (match !== undefined) {
    if (oldName === newName) {
      newCache.contents = oldCache.contents;
      if (compareEventHandlerTypes(oldHandlerType, newHandlerType)) {
        return /* () */0;
      } else {
        var cb = eventHandler_GetCB(newHandlerType);
        match.cb.contents = cb;
        return /* () */0;
      }
    } else {
      oldCache.contents = eventHandler_Unregister(elem, oldName, oldCache.contents);
      newCache.contents = eventHandler_Register(callbacks, elem, newName, newHandlerType);
      return /* () */0;
    }
  } else {
    newCache.contents = eventHandler_Register(callbacks, elem, newName, newHandlerType);
    return /* () */0;
  }
}

function patchVNodesOnElems_PropertiesApply_Add(callbacks, elem, _idx, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case /* RawProp */0 :
          elem[param[0]] = param[1];
          return /* () */0;
      case /* Attribute */1 :
          return setAttributeNsOptional(elem, param[0], param[1], param[2]);
      case /* Data */2 :
          console.log(/* tuple */[
                "TODO:  Add Data Unhandled",
                param[0],
                param[1]
              ]);
          throw [
                failure,
                "TODO:  Add Data Unhandled"
              ];
      case /* Event */3 :
          param[2].contents = eventHandler_Register(callbacks, elem, param[0], param[1]);
          return /* () */0;
      case /* Style */4 :
          return fold_left((function (param, param$1) {
                        return setStyleProperty(elem, undefined, param$1[0], param$1[1]);
                      }), /* () */0, param[0]);
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply_Remove(_callbacks, elem, _idx, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case /* RawProp */0 :
          elem[param[0]] = undefined;
          return /* () */0;
      case /* Attribute */1 :
          return removeAttributeNsOptional(elem, param[0], param[1]);
      case /* Data */2 :
          console.log(/* tuple */[
                "TODO:  Remove Data Unhandled",
                param[0],
                param[1]
              ]);
          throw [
                failure,
                "TODO:  Remove Data Unhandled"
              ];
      case /* Event */3 :
          var cache = param[2];
          cache.contents = eventHandler_Unregister(elem, param[0], cache.contents);
          return /* () */0;
      case /* Style */4 :
          return fold_left((function (param, param$1) {
                        return setStyleProperty(elem, undefined, param$1[0], null);
                      }), /* () */0, param[0]);
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply_RemoveAdd(callbacks, elem, idx, oldProp, newProp) {
  patchVNodesOnElems_PropertiesApply_Remove(callbacks, elem, idx, oldProp);
  patchVNodesOnElems_PropertiesApply_Add(callbacks, elem, idx, newProp);
  return /* () */0;
}

function patchVNodesOnElems_PropertiesApply_Mutate(_callbacks, elem, _idx, oldProp, _newProp) {
  if (typeof _newProp === "number") {
    throw [
          failure,
          "This should never be called as all entries through NoProp are gated."
        ];
  } else {
    switch (_newProp.tag | 0) {
      case /* RawProp */0 :
          elem[_newProp[0]] = _newProp[1];
          return /* () */0;
      case /* Attribute */1 :
          return setAttributeNsOptional(elem, _newProp[0], _newProp[1], _newProp[2]);
      case /* Data */2 :
          console.log(/* tuple */[
                "TODO:  Mutate Data Unhandled",
                _newProp[0],
                _newProp[1]
              ]);
          throw [
                failure,
                "TODO:  Mutate Data Unhandled"
              ];
      case /* Event */3 :
          throw [
                failure,
                "This will never be called because it is gated"
              ];
      case /* Style */4 :
          if (typeof oldProp === "number") {
            throw [
                  failure,
                  "Passed a non-Style to a new Style as a Mutations while the old Style is not actually a style!"
                ];
          } else if (oldProp.tag === /* Style */4) {
            return fold_left2((function (param, param$1, param$2) {
                          var nv = param$2[1];
                          var nk = param$2[0];
                          var ok = param$1[0];
                          if (ok === nk) {
                            if (param$1[1] === nv) {
                              return /* () */0;
                            } else {
                              return setStyleProperty(elem, undefined, nk, nv);
                            }
                          } else {
                            setStyleProperty(elem, undefined, ok, null);
                            return setStyleProperty(elem, undefined, nk, nv);
                          }
                        }), /* () */0, oldProp[0], _newProp[0]);
          } else {
            throw [
                  failure,
                  "Passed a non-Style to a new Style as a Mutations while the old Style is not actually a style!"
                ];
          }
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply(callbacks, elem, _idx, _oldProperties, _newProperties) {
  while(true) {
    var newProperties = _newProperties;
    var oldProperties = _oldProperties;
    var idx = _idx;
    if (oldProperties) {
      var _oldProp = oldProperties[0];
      if (newProperties) {
        if (typeof _oldProp === "number") {
          if (typeof newProperties[0] === "number") {
            _newProperties = newProperties[1];
            _oldProperties = oldProperties[1];
            _idx = idx + 1 | 0;
            continue ;
          }
          
        } else {
          switch (_oldProp.tag | 0) {
            case /* RawProp */0 :
                var newProp = newProperties[0];
                if (typeof newProp !== "number" && !newProp.tag) {
                  if (!(_oldProp[0] === newProp[0] && _oldProp[1] === newProp[1])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                }
                break;
            case /* Attribute */1 :
                var newProp$1 = newProperties[0];
                if (typeof newProp$1 !== "number" && newProp$1.tag === /* Attribute */1) {
                  if (!(_oldProp[0] === newProp$1[0] && _oldProp[1] === newProp$1[1] && _oldProp[2] === newProp$1[2])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp$1);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                }
                break;
            case /* Data */2 :
                var newProp$2 = newProperties[0];
                if (typeof newProp$2 !== "number" && newProp$2.tag === /* Data */2) {
                  if (!(_oldProp[0] === newProp$2[0] && _oldProp[1] === newProp$2[1])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp$2);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                }
                break;
            case /* Event */3 :
                var _newProp = newProperties[0];
                if (typeof _newProp !== "number" && _newProp.tag === /* Event */3) {
                  eventHandler_Mutate(callbacks, elem, _oldProp[0], _newProp[0], _oldProp[1], _newProp[1], _oldProp[2], _newProp[2]);
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                }
                break;
            case /* Style */4 :
                var newProp$3 = newProperties[0];
                if (typeof newProp$3 !== "number" && newProp$3.tag === /* Style */4) {
                  if (!caml_equal(_oldProp[0], newProp$3[0])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp$3);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                }
                break;
            
          }
        }
      } else {
        return false;
      }
      patchVNodesOnElems_PropertiesApply_RemoveAdd(callbacks, elem, idx, _oldProp, newProperties[0]);
      _newProperties = newProperties[1];
      _oldProperties = oldProperties[1];
      _idx = idx + 1 | 0;
      continue ;
    } else if (newProperties) {
      return false;
    } else {
      return true;
    }
  }}

function patchVNodesOnElems_Properties(callbacks, elem, oldProperties, newProperties) {
  return patchVNodesOnElems_PropertiesApply(callbacks, elem, 0, oldProperties, newProperties);
}

function patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, param) {
  if (param.tag === /* Node */2) {
    var newProperties = param[4];
    var oldChild = caml_array_get(elems, idx);
    var newChild = createElementNsOptional(param[0], param[1]);
    var match = patchVNodesOnElems_Properties(callbacks, newChild, map$1((function (param) {
                return /* NoProp */0;
              }), newProperties), newProperties);
    if (match) {
      var childChildren = newChild.childNodes;
      patchVNodesOnElems(callbacks, newChild, childChildren, 0, /* [] */0, param[5]);
      insertBefore(elem, newChild, oldChild);
      elem.removeChild(oldChild);
      return /* () */0;
    } else {
      throw [
            match_failure,
            /* tuple */[
              "vdom.ml",
              388,
              30
            ]
          ];
    }
  } else {
    throw [
          failure,
          "Node replacement should never be passed anything but a node itself"
        ];
  }
}

function patchVNodesOnElems_CreateElement(_callbacks, _param) {
  while(true) {
    var param = _param;
    var callbacks = _callbacks;
    switch (param.tag | 0) {
      case /* CommentNode */0 :
          var text = param[0];
          return document.createComment(text);
      case /* Text */1 :
          var text$1 = param[0];
          return document.createTextNode(text$1);
      case /* Node */2 :
          var newProperties = param[4];
          var newChild = createElementNsOptional(param[0], param[1]);
          var match = patchVNodesOnElems_Properties(callbacks, newChild, map$1((function (param) {
                      return /* NoProp */0;
                    }), newProperties), newProperties);
          if (match) {
            var childChildren = newChild.childNodes;
            patchVNodesOnElems(callbacks, newChild, childChildren, 0, /* [] */0, param[5]);
            return newChild;
          } else {
            throw [
                  match_failure,
                  /* tuple */[
                    "vdom.ml",
                    405,
                    30
                  ]
                ];
          }
      case /* LazyGen */3 :
          var vdom = _1(param[1], /* () */0);
          param[2].contents = vdom;
          _param = vdom;
          continue ;
      case /* Tagger */4 :
          _param = param[1];
          _callbacks = _1(param[0], callbacks);
          continue ;
      
    }
  }}

function patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode) {
  if (oldNode.tag === /* Node */2) {
    if (newNode.tag === /* Node */2) {
      if (oldNode[3] !== newNode[3] || oldNode[1] !== newNode[1]) {
        return patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, newNode);
      } else {
        var child = caml_array_get(elems, idx);
        var childChildren = child.childNodes;
        if (!patchVNodesOnElems_Properties(callbacks, child, oldNode[4], newNode[4])) {
          console.log("VDom:  Failed swapping properties because the property list length changed, use `noProp` to swap properties instead, not by altering the list structure.  This is a massive inefficiency until this issue is resolved.");
          patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, newNode);
        }
        return patchVNodesOnElems(callbacks, child, childChildren, 0, oldNode[5], newNode[5]);
      }
    } else {
      throw [
            failure,
            "Non-node passed to patchVNodesOnElems_MutateNode"
          ];
    }
  } else {
    throw [
          failure,
          "Non-node passed to patchVNodesOnElems_MutateNode"
        ];
  }
}

function patchVNodesOnElems(callbacks, elem, elems, _idx, _oldVNodes, _newVNodes) {
  while(true) {
    var newVNodes = _newVNodes;
    var oldVNodes = _oldVNodes;
    var idx = _idx;
    if (oldVNodes) {
      var oldNode = oldVNodes[0];
      switch (oldNode.tag | 0) {
        case /* CommentNode */0 :
            if (newVNodes) {
              var match = newVNodes[0];
              if (!match.tag && oldNode[0] === match[0]) {
                _newVNodes = newVNodes[1];
                _oldVNodes = oldVNodes[1];
                _idx = idx + 1 | 0;
                continue ;
              }
              
            }
            break;
        case /* Text */1 :
            if (newVNodes) {
              var match$1 = newVNodes[0];
              if (match$1.tag === /* Text */1) {
                var newText = match$1[0];
                if (oldNode[0] !== newText) {
                  var child = caml_array_get(elems, idx);
                  child.nodeValue = newText;
                }
                _newVNodes = newVNodes[1];
                _oldVNodes = oldVNodes[1];
                _idx = idx + 1 | 0;
                continue ;
              }
              
            }
            break;
        case /* Node */2 :
            if (newVNodes) {
              var newNode = newVNodes[0];
              if (newNode.tag === /* Node */2) {
                var newRest = newVNodes[1];
                var newKey = newNode[2];
                var newTagName = newNode[1];
                var newNamespace = newNode[0];
                var oldRest = oldVNodes[1];
                var oldKey = oldNode[2];
                var oldTagName = oldNode[1];
                var oldNamespace = oldNode[0];
                if (oldKey === newKey && oldKey !== "") {
                  _newVNodes = newRest;
                  _oldVNodes = oldRest;
                  _idx = idx + 1 | 0;
                  continue ;
                } else if (oldKey === "" || newKey === "") {
                  patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode);
                  _newVNodes = newRest;
                  _oldVNodes = oldRest;
                  _idx = idx + 1 | 0;
                  continue ;
                } else {
                  var exit = 0;
                  var exit$1 = 0;
                  if (oldRest) {
                    var match$2 = oldRest[0];
                    if (match$2.tag === /* Node */2) {
                      var olderRest = oldRest[1];
                      var olderKey = match$2[2];
                      var olderTagName = match$2[1];
                      var olderNamespace = match$2[0];
                      var exit$2 = 0;
                      if (newRest) {
                        var match$3 = newRest[0];
                        if (match$3.tag === /* Node */2 && olderNamespace === newNamespace && olderTagName === newTagName && olderKey === newKey && oldNamespace === match$3[0] && oldTagName === match$3[1] && oldKey === match$3[2]) {
                          var firstChild = caml_array_get(elems, idx);
                          var secondChild = caml_array_get(elems, idx + 1 | 0);
                          elem.removeChild(secondChild);
                          insertBefore(elem, secondChild, firstChild);
                          _newVNodes = newRest[1];
                          _oldVNodes = olderRest;
                          _idx = idx + 2 | 0;
                          continue ;
                        } else {
                          exit$2 = 4;
                        }
                      } else {
                        exit$2 = 4;
                      }
                      if (exit$2 === 4) {
                        if (olderNamespace === newNamespace && olderTagName === newTagName && olderKey === newKey) {
                          var oldChild = caml_array_get(elems, idx);
                          elem.removeChild(oldChild);
                          _newVNodes = newRest;
                          _oldVNodes = olderRest;
                          _idx = idx + 1 | 0;
                          continue ;
                        } else {
                          exit$1 = 3;
                        }
                      }
                      
                    } else {
                      exit$1 = 3;
                    }
                  } else {
                    exit$1 = 3;
                  }
                  if (exit$1 === 3) {
                    if (newRest) {
                      var match$4 = newRest[0];
                      if (match$4.tag === /* Node */2 && oldNamespace === match$4[0] && oldTagName === match$4[1] && oldKey === match$4[2]) {
                        var oldChild$1 = caml_array_get(elems, idx);
                        var newChild = patchVNodesOnElems_CreateElement(callbacks, newNode);
                        insertBefore(elem, newChild, oldChild$1);
                        _newVNodes = newRest;
                        _idx = idx + 1 | 0;
                        continue ;
                      } else {
                        exit = 2;
                      }
                    } else {
                      exit = 2;
                    }
                  }
                  if (exit === 2) {
                    patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode);
                    _newVNodes = newRest;
                    _oldVNodes = oldRest;
                    _idx = idx + 1 | 0;
                    continue ;
                  }
                  
                }
              }
              
            }
            break;
        case /* LazyGen */3 :
            if (newVNodes) {
              var match$5 = newVNodes[0];
              if (match$5.tag === /* LazyGen */3) {
                var newRest$1 = newVNodes[1];
                var newCache = match$5[2];
                var newGen = match$5[1];
                var newKey$1 = match$5[0];
                var oldRest$1 = oldVNodes[1];
                var oldCache = oldNode[2];
                var oldKey$1 = oldNode[0];
                if (oldKey$1 === newKey$1) {
                  newCache.contents = oldCache.contents;
                  _newVNodes = newRest$1;
                  _oldVNodes = oldRest$1;
                  _idx = idx + 1 | 0;
                  continue ;
                } else {
                  var exit$3 = 0;
                  var exit$4 = 0;
                  if (oldRest$1) {
                    var match$6 = oldRest$1[0];
                    if (match$6.tag === /* LazyGen */3) {
                      var olderRest$1 = oldRest$1[1];
                      var olderKey$1 = match$6[0];
                      var exit$5 = 0;
                      if (newRest$1) {
                        var match$7 = newRest$1[0];
                        if (match$7.tag === /* LazyGen */3 && olderKey$1 === newKey$1 && oldKey$1 === match$7[0]) {
                          var firstChild$1 = caml_array_get(elems, idx);
                          var secondChild$1 = caml_array_get(elems, idx + 1 | 0);
                          elem.removeChild(secondChild$1);
                          insertBefore(elem, secondChild$1, firstChild$1);
                          _newVNodes = newRest$1[1];
                          _oldVNodes = olderRest$1;
                          _idx = idx + 2 | 0;
                          continue ;
                        } else {
                          exit$5 = 4;
                        }
                      } else {
                        exit$5 = 4;
                      }
                      if (exit$5 === 4) {
                        if (olderKey$1 === newKey$1) {
                          var oldChild$2 = caml_array_get(elems, idx);
                          elem.removeChild(oldChild$2);
                          var oldVdom = match$6[2].contents;
                          newCache.contents = oldVdom;
                          _newVNodes = newRest$1;
                          _oldVNodes = olderRest$1;
                          _idx = idx + 1 | 0;
                          continue ;
                        } else {
                          exit$4 = 3;
                        }
                      }
                      
                    } else {
                      exit$4 = 3;
                    }
                  } else {
                    exit$4 = 3;
                  }
                  if (exit$4 === 3) {
                    if (newRest$1) {
                      var match$8 = newRest$1[0];
                      if (match$8.tag === /* LazyGen */3 && match$8[0] === oldKey$1) {
                        var oldChild$3 = caml_array_get(elems, idx);
                        var newVdom = _1(newGen, /* () */0);
                        newCache.contents = newVdom;
                        var newChild$1 = patchVNodesOnElems_CreateElement(callbacks, newVdom);
                        insertBefore(elem, newChild$1, oldChild$3);
                        _newVNodes = newRest$1;
                        _idx = idx + 1 | 0;
                        continue ;
                      } else {
                        exit$3 = 2;
                      }
                    } else {
                      exit$3 = 2;
                    }
                  }
                  if (exit$3 === 2) {
                    var oldVdom$1 = oldCache.contents;
                    var newVdom$1 = _1(newGen, /* () */0);
                    newCache.contents = newVdom$1;
                    _newVNodes = /* :: */[
                      newVdom$1,
                      newRest$1
                    ];
                    _oldVNodes = /* :: */[
                      oldVdom$1,
                      oldRest$1
                    ];
                    continue ;
                  }
                  
                }
              }
              
            }
            break;
        case /* Tagger */4 :
            _oldVNodes = /* :: */[
              oldNode[1],
              oldVNodes[1]
            ];
            continue ;
        
      }
      var oldRest$2 = oldVNodes[1];
      if (newVNodes) {
        var newNode$1 = newVNodes[0];
        if (newNode$1.tag === /* Tagger */4) {
          patchVNodesOnElems(_1(newNode$1[0], callbacks), elem, elems, idx, /* :: */[
                oldNode,
                /* [] */0
              ], /* :: */[
                newNode$1[1],
                /* [] */0
              ]);
          _newVNodes = newVNodes[1];
          _oldVNodes = oldRest$2;
          _idx = idx + 1 | 0;
          continue ;
        } else {
          var oldChild$4 = caml_array_get(elems, idx);
          var newChild$2 = patchVNodesOnElems_CreateElement(callbacks, newNode$1);
          insertBefore(elem, newChild$2, oldChild$4);
          elem.removeChild(oldChild$4);
          _newVNodes = newVNodes[1];
          _oldVNodes = oldRest$2;
          _idx = idx + 1 | 0;
          continue ;
        }
      } else {
        var child$1 = caml_array_get(elems, idx);
        elem.removeChild(child$1);
        _newVNodes = /* [] */0;
        _oldVNodes = oldRest$2;
        continue ;
      }
    } else if (newVNodes) {
      var newChild$3 = patchVNodesOnElems_CreateElement(callbacks, newVNodes[0]);
      elem.appendChild(newChild$3);
      _newVNodes = newVNodes[1];
      _oldVNodes = /* [] */0;
      _idx = idx + 1 | 0;
      continue ;
    } else {
      return /* () */0;
    }
  }}

function patchVNodesIntoElement(callbacks, elem, oldVNodes, newVNodes) {
  var elems = elem.childNodes;
  patchVNodesOnElems(callbacks, elem, elems, 0, oldVNodes, newVNodes);
  return newVNodes;
}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function requestAnimationFrame_polyfill(param) {
  return (
  // requestAnimationFrame polyfill
  (function() {
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];
      for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
          window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                     || window[vendors[x]+'CancelRequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame)
          window.requestAnimationFrame = function(callback, element) {
              var currTime = new Date().getTime();
              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
              var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
              lastTime = currTime + timeToCall;
              return id;
          };

      if (!window.cancelAnimationFrame)
          window.cancelAnimationFrame = function(id) {
              clearTimeout(id);
          };
  }())
  );
}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function polyfills(param) {
  remove_polyfill();
  requestAnimationFrame_polyfill();
  return /* () */0;
}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function run(_callbacks, _param) {
  while(true) {
    var param = _param;
    var callbacks = _callbacks;
    if (typeof param === "number") {
      return /* () */0;
    } else {
      switch (param.tag | 0) {
        case /* Mapper */0 :
            var subCallbacks = _1(param[0], callbacks);
            _param = param[1];
            _callbacks = subCallbacks;
            continue ;
        case /* Batch */1 :
            return fold_left((function(callbacks){
                      return function (param, cmd) {
                        return run(callbacks, cmd);
                      }
                      }(callbacks)), /* () */0, param[0]);
        case /* EnqueueCall */2 :
            return _1(param[0], callbacks);
        
      }
    }
  }}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function registration(key, enableCall) {
  return /* Registration */__(1, [
            key,
            (function (callbacks) {
                return _1(enableCall, callbacks.contents);
              }),
            {
              contents: undefined
            }
          ]);
}

function run$1(oldCallbacks, newCallbacks, oldSub, newSub) {
  var enable = function (_callbacks, _param) {
    while(true) {
      var param = _param;
      var callbacks = _callbacks;
      if (typeof param === "number") {
        return /* () */0;
      } else {
        switch (param.tag | 0) {
          case /* Batch */0 :
              var subs = param[0];
              if (subs) {
                return iter((function(callbacks){
                          return function (param) {
                            return enable(callbacks, param);
                          }
                          }(callbacks)), subs);
              } else {
                return /* () */0;
              }
          case /* Registration */1 :
              param[2].contents = _1(param[1], callbacks);
              return /* () */0;
          case /* Mapper */2 :
              var subCallbacks = _1(param[0], callbacks);
              _param = param[1];
              _callbacks = subCallbacks;
              continue ;
          
        }
      }
    }  };
  var disable = function (_callbacks, _param) {
    while(true) {
      var param = _param;
      var callbacks = _callbacks;
      if (typeof param === "number") {
        return /* () */0;
      } else {
        switch (param.tag | 0) {
          case /* Batch */0 :
              var subs = param[0];
              if (subs) {
                return iter((function(callbacks){
                          return function (param) {
                            return disable(callbacks, param);
                          }
                          }(callbacks)), subs);
              } else {
                return /* () */0;
              }
          case /* Registration */1 :
              var diCB = param[2];
              var match = diCB.contents;
              if (match !== undefined) {
                diCB.contents = undefined;
                return _1(match, /* () */0);
              } else {
                return /* () */0;
              }
          case /* Mapper */2 :
              var subCallbacks = _1(param[0], callbacks);
              _param = param[1];
              _callbacks = subCallbacks;
              continue ;
          
        }
      }
    }  };
  if (typeof oldSub === "number") {
    if (typeof newSub === "number") {
      return newSub;
    }
    
  } else {
    switch (oldSub.tag | 0) {
      case /* Batch */0 :
          if (typeof newSub !== "number" && !newSub.tag) {
            var aux = function (_oldList, _newList) {
              while(true) {
                var newList = _newList;
                var oldList = _oldList;
                if (oldList) {
                  var oldRest = oldList[1];
                  var oldSubSub = oldList[0];
                  if (newList) {
                    run$1(oldCallbacks, newCallbacks, oldSubSub, newList[0]);
                    _newList = newList[1];
                    _oldList = oldRest;
                    continue ;
                  } else {
                    disable(oldCallbacks, oldSubSub);
                    _newList = /* [] */0;
                    _oldList = oldRest;
                    continue ;
                  }
                } else if (newList) {
                  enable(newCallbacks, newList[0]);
                  _newList = newList[1];
                  _oldList = /* [] */0;
                  continue ;
                } else {
                  return /* () */0;
                }
              }            };
            aux(oldSub[0], newSub[0]);
            return newSub;
          }
          break;
      case /* Registration */1 :
          if (typeof newSub !== "number" && newSub.tag === /* Registration */1 && oldSub[0] === newSub[0]) {
            newSub[2].contents = oldSub[2].contents;
            return newSub;
          }
          break;
      case /* Mapper */2 :
          if (typeof newSub !== "number" && newSub.tag === /* Mapper */2) {
            var olderCallbacks = _1(oldSub[0], oldCallbacks);
            var newerCallbacks = _1(newSub[0], newCallbacks);
            run$1(olderCallbacks, newerCallbacks, oldSub[1], newSub[1]);
            return newSub;
          }
          break;
      
    }
  }
  disable(oldCallbacks, oldSub);
  enable(newCallbacks, newSub);
  return newSub;
}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function programStateWrapper(initModel, pump, shutdown) {
  var model = {
    contents: initModel
  };
  var callbacks = {
    contents: {
      enqueue: (function (_msg) {
          console.log("INVALID enqueue CALL!");
          return /* () */0;
        }),
      on: (function (param) {
          return /* () */0;
        })
    }
  };
  var pumperInterface = _1(pump, callbacks);
  var pending = {
    contents: undefined
  };
  var handler = function (msg) {
    var match = pending.contents;
    if (match !== undefined) {
      pending.contents = /* :: */[
        msg,
        match
      ];
      return /* () */0;
    } else {
      pending.contents = /* [] */0;
      var newModel = _2(pumperInterface.handleMsg, model.contents, msg);
      model.contents = newModel;
      var match$1 = pending.contents;
      if (match$1 !== undefined) {
        var msgs = match$1;
        if (msgs) {
          pending.contents = undefined;
          return iter(handler, rev(msgs));
        } else {
          pending.contents = undefined;
          return /* () */0;
        }
      } else {
        throw [
              failure,
              "INVALID message queue state, should never be None during message processing!"
            ];
      }
    }
  };
  var render_events = {
    contents: /* [] */0
  };
  var finalizedCBs_enqueue = handler;
  var finalizedCBs_on = function (param) {
    if (typeof param === "number") {
      return iter(handler, render_events.contents);
    } else if (param.tag) {
      var msg = param[0];
      render_events.contents = filter((function (mg) {
                return msg !== mg;
              }))(render_events.contents);
      return /* () */0;
    } else {
      render_events.contents = append(render_events.contents, /* :: */[
            param[0],
            /* [] */0
          ]);
      return /* () */0;
    }
  };
  var finalizedCBs = {
    enqueue: finalizedCBs_enqueue,
    on: finalizedCBs_on
  };
  callbacks.contents = finalizedCBs;
  var pi_requestShutdown = function (param) {
    callbacks.contents = {
      enqueue: (function (_msg) {
          console.log("INVALID message enqueued when shut down");
          return /* () */0;
        }),
      on: (function (param) {
          return /* () */0;
        })
    };
    var cmd = _1(shutdown, model.contents);
    _1(pumperInterface.shutdown, cmd);
    return /* () */0;
  };
  var render_string = function (param) {
    return _1(pumperInterface.render_string, model.contents);
  };
  _1(pumperInterface.startup, /* () */0);
  return {
          pushMsg: handler,
          shutdown: pi_requestShutdown,
          getHtmlString: render_string
        };
}

function programLoop(update, view, subscriptions, initModel, initCmd, param) {
  if (param !== undefined) {
    var parentNode = valFromOption(param);
    return (function (callbacks) {
        var priorRenderedVdom = {
          contents: /* [] */0
        };
        var latestModel = {
          contents: initModel
        };
        var nextFrameID = {
          contents: undefined
        };
        var doRender = function (_delta) {
          var match = nextFrameID.contents;
          if (match !== undefined) {
            var newVdom_000 = _1(view, latestModel.contents);
            var newVdom = /* :: */[
              newVdom_000,
              /* [] */0
            ];
            var justRenderedVdom = patchVNodesIntoElement(callbacks, parentNode, priorRenderedVdom.contents, newVdom);
            priorRenderedVdom.contents = justRenderedVdom;
            _1(callbacks.contents.on, /* Render */0);
            nextFrameID.contents = undefined;
            return /* () */0;
          } else {
            return /* () */0;
          }
        };
        var scheduleRender = function (param) {
          var match = nextFrameID.contents;
          if (match !== undefined) {
            return /* () */0;
          } else {
            var id = window.requestAnimationFrame(doRender);
            nextFrameID.contents = id;
            return /* () */0;
          }
        };
        var clearPnode = function (param) {
          while(parentNode.childNodes.length > 0) {
            var match = parentNode.firstChild;
            if (match !== null) {
              parentNode.removeChild(match);
            }
            
          }          return /* () */0;
        };
        var oldSub = {
          contents: /* NoSub */0
        };
        var handleSubscriptionChange = function (model) {
          var newSub = _1(subscriptions, model);
          oldSub.contents = run$1(callbacks, callbacks, oldSub.contents, newSub);
          return /* () */0;
        };
        var handlerStartup = function (param) {
          clearPnode();
          run(callbacks, initCmd);
          handleSubscriptionChange(latestModel.contents);
          nextFrameID.contents = -1;
          doRender();
          return /* () */0;
        };
        var render_string = function (model) {
          return renderToHtmlString(_1(view, model));
        };
        var handler = function (model, msg) {
          var match = _2(update, model, msg);
          var newModel = match[0];
          latestModel.contents = newModel;
          run(callbacks, match[1]);
          scheduleRender();
          handleSubscriptionChange(newModel);
          return newModel;
        };
        var handlerShutdown = function (cmd) {
          nextFrameID.contents = undefined;
          run(callbacks, cmd);
          oldSub.contents = run$1(callbacks, callbacks, oldSub.contents, /* NoSub */0);
          priorRenderedVdom.contents = /* [] */0;
          clearPnode();
          return /* () */0;
        };
        return {
                startup: handlerStartup,
                render_string: render_string,
                handleMsg: handler,
                shutdown: handlerShutdown
              };
      });
  } else {
    return (function (callbacks) {
        var oldSub = {
          contents: /* NoSub */0
        };
        var handleSubscriptionChange = function (model) {
          var newSub = _1(subscriptions, model);
          oldSub.contents = run$1(callbacks, callbacks, oldSub.contents, newSub);
          return /* () */0;
        };
        return {
                startup: (function (param) {
                    run(callbacks, initCmd);
                    handleSubscriptionChange(initModel);
                    return /* () */0;
                  }),
                render_string: (function (model) {
                    return renderToHtmlString(_1(view, model));
                  }),
                handleMsg: (function (model, msg) {
                    var match = _2(update, model, msg);
                    var newModel = match[0];
                    run(callbacks, match[1]);
                    handleSubscriptionChange(newModel);
                    return newModel;
                  }),
                shutdown: (function (cmd) {
                    run(callbacks, cmd);
                    oldSub.contents = run$1(callbacks, callbacks, oldSub.contents, /* NoSub */0);
                    return /* () */0;
                  })
              };
      });
  }
}

function program(param, pnode, flags) {
  polyfills();
  var match = _1(param.init, flags);
  var initModel = match[0];
  var opnode = (pnode == null) ? undefined : some(pnode);
  var pumpInterface = programLoop(param.update, param.view, param.subscriptions, initModel, match[1], opnode);
  return programStateWrapper(initModel, pumpInterface, param.shutdown);
}
/* No side effect */

function get$1(dict, k) {
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

function add$1(x, data, m) {
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
      var ll = add$1(x, data, l);
      if (l === ll) {
        return m;
      } else {
        return bal(ll, v, d, r);
      }
    } else {
      var rr = add$1(x, data, r);
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

function map$3(f, param) {
  if (param) {
    var l$prime = map$3(f, param[/* l */0]);
    var d$prime = _1(f, param[/* d */2]);
    var r$prime = map$3(f, param[/* r */3]);
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

function mapi$1(f, param) {
  if (param) {
    var v = param[/* v */1];
    var l$prime = mapi$1(f, param[/* l */0]);
    var d$prime = _2(f, v, param[/* d */2]);
    var r$prime = mapi$1(f, param[/* r */3]);
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

function exists(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (_2(p, param[/* v */1], param[/* d */2]) || exists(p, param[/* l */0])) {
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

function concat$1(t1, t2) {
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
    return concat$1(t1, t2);
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

function filter$1(p, m) {
  if (m) {
    var r = m[/* r */3];
    var d = m[/* d */2];
    var v = m[/* v */1];
    var l = m[/* l */0];
    var l$prime = filter$1(p, l);
    var pvd = _2(p, v, d);
    var r$prime = filter$1(p, r);
    if (pvd) {
      if (l === l$prime && r === r$prime) {
        return m;
      } else {
        return join(l$prime, v, d, r$prime);
      }
    } else {
      return concat$1(l$prime, r$prime);
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
              concat$1(lf, rf)
            ];
    } else {
      return /* tuple */[
              concat$1(lt, rt),
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
  add: add$1,
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
  exists: exists,
  filter: filter$1,
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
  map: map$3,
  mapi: mapi$1
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
        if (n > min_int$1 && n < max_int$1) {
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
                  return /* Ok */__(0, [map$1(parse, to_list(match[0]))]);
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
                  return /* Ok */__(0, [map(parse, match[0])]);
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
                  var match = get$1(o, k);
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
                  return /* Ok */__(0, [fold_right(parse, keys, /* [] */0)]);
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
                  var match = get$1(o, k);
                  if (match !== undefined) {
                    var match$1 = _1(decoder, valFromOption(match));
                    if (match$1.tag) {
                      throw [
                            ParseFail,
                            match$1[0]
                          ];
                    } else {
                      return add$1(k, match$1[0], d);
                    }
                  } else {
                    throw [
                          ParseFail,
                          "Key is undefined: " + k
                        ];
                  }
                };
                try {
                  return /* Ok */__(0, [fold_right(parse, keys, /* Empty */0)]);
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
                var match$1 = get$1(match[0], key);
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
  return fold_right$1(field, fields, dec);
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

function text(str) {
  return /* Text */__(1, [str]);
}

function div$1($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star !== undefined ? $staropt$star : "";
  var unique = $staropt$star$1 !== undefined ? $staropt$star$1 : "";
  return fullnode("", "div", key, unique, props, nodes);
}

function span($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star !== undefined ? $staropt$star : "";
  var unique = $staropt$star$1 !== undefined ? $staropt$star$1 : "";
  return fullnode("", "span", key, unique, props, nodes);
}

function p($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star !== undefined ? $staropt$star : "";
  var unique = $staropt$star$1 !== undefined ? $staropt$star$1 : "";
  return fullnode("", "p", key, unique, props, nodes);
}

function a($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star !== undefined ? $staropt$star : "";
  var unique = $staropt$star$1 !== undefined ? $staropt$star$1 : "";
  return fullnode("", "a", key, unique, props, nodes);
}

function button($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star !== undefined ? $staropt$star : "";
  var unique = $staropt$star$1 !== undefined ? $staropt$star$1 : "";
  return fullnode("", "button", key, unique, props, nodes);
}

function input$prime($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star !== undefined ? $staropt$star : "";
  var unique = $staropt$star$1 !== undefined ? $staropt$star$1 : "";
  return fullnode("", "input", key, unique, props, nodes);
}

function id$1(str) {
  return /* RawProp */__(0, [
            "id",
            str
          ]);
}

function href(str) {
  return /* Attribute */__(1, [
            "",
            "href",
            str
          ]);
}

function class$prime(name) {
  return /* RawProp */__(0, [
            "className",
            name
          ]);
}

function type$prime(typ) {
  return /* RawProp */__(0, [
            "type",
            typ
          ]);
}

function value$1(str) {
  return /* RawProp */__(0, [
            "value",
            str
          ]);
}

function onInputOpt($staropt$star, msg) {
  var key = $staropt$star !== undefined ? $staropt$star : "";
  return onCB("input", key, (function (ev) {
                var match = ev.target;
                if (match !== undefined) {
                  var match$1 = match.value;
                  if (match$1 !== undefined) {
                    return _1(msg, match$1);
                  } else {
                    return ;
                  }
                }
                
              }));
}

function onInput($staropt$star, msg) {
  var key = $staropt$star !== undefined ? $staropt$star : "";
  return onInputOpt(key, (function (ev) {
                return some(_1(msg, ev));
              }));
}

function onClick(msg) {
  return onMsg("click", msg);
}

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

function draw_html(state) {
  var draw_line = function (i, line) {
    return div$1(undefined, undefined, /* :: */[
                class$prime("flex-1 flex"),
                /* [] */0
              ], to_list(mapi((function (param, param$1) {
                          var i$1 = i;
                          var j = param;
                          var e = param$1;
                          return div$1(undefined, undefined, /* :: */[
                                      class$prime(e === /* Alive */1 ? "alive" : "dead"),
                                      /* :: */[
                                        onClick(/* Click */__(0, [
                                                i$1,
                                                j
                                              ])),
                                        /* [] */0
                                      ]
                                    ], /* [] */0);
                        }), line)));
  };
  return to_list(mapi(draw_line, state.board));
}
/* Tea_html Not a pure module */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function make$1(i, j, e) {
  return caml_make_vect(i, caml_make_vect(j, e));
}

function mapij(f, a) {
  return mapi((function (i, row) {
                return mapi((function (j, e) {
                              return _3(f, i, j, e);
                            }), row);
              }), a);
}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function next(board) {
  var is_alive = function (coords) {
    var j = coords[1];
    var i = coords[0];
    if (i < 0 || i >= board.length || j < 0 || j >= caml_array_get(board, 0).length) {
      return 0;
    } else {
      var row = caml_array_get(board, i);
      var cell = caml_array_get(row, j);
      if (cell) {
        return 1;
      } else {
        return 0;
      }
    }
  };
  var sum_neighbourg = function (x, y) {
    var coords = map$1((function (coords) {
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
    var neighbourg = map$1(is_alive, coords);
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
  return mapij(next_one, board);
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
  return mapij((function (param, param$1, param$2) {
                return flip_if_equal(i, j, param, param$1, param$2);
              }), board);
}

function update$1(state, param) {
  if (typeof param === "number") {
    switch (param) {
      case /* Nothing */0 :
          return state.board;
      case /* Next */1 :
          return next(state.board);
      case /* Previous */2 :
          var match = state.previous;
          if (match) {
            return match[0];
          } else {
            return make$1(0, 0, /* Dead */0);
          }
      case /* Reset */3 :
          return make$1(state.size.x, state.size.y, /* Dead */0);
      
    }
  } else {
    switch (param.tag | 0) {
      case /* Click */0 :
          return flip(state.board, param[0], param[1]);
      case /* ClickThenNext */1 :
          return next(flip(state.board, param[0], param[1]));
      case /* SetBoard */3 :
          return param[0];
      case /* SetBoardFromSeed */4 :
          return ( JSON.parse(param[0]) );
      case /* AddSeed */5 :
          return state.board;
      case /* KeyPressed */8 :
          var match$1 = param[0].key_code;
          if (match$1 !== 13 && match$1 !== 32) {
            return state.board;
          } else {
            return next(state.board);
          }
      default:
        return state.board;
    }
  }
}
/* No side effect */

function create$2(n) {
  var n$1 = n < 1 ? 1 : n;
  var s = caml_create_bytes(n$1);
  return {
          buffer: s,
          position: 0,
          length: n$1,
          initial_buffer: s
        };
}

function contents(b) {
  return sub_string(b.buffer, 0, b.position);
}

function resize(b, more) {
  var len = b.length;
  var new_len = len;
  while((b.position + more | 0) > new_len) {
    new_len = (new_len << 1);
  }  var new_buffer = caml_create_bytes(new_len);
  blit(b.buffer, 0, new_buffer, 0, b.position);
  b.buffer = new_buffer;
  b.length = new_len;
  return /* () */0;
}

function add_char(b, c) {
  var pos = b.position;
  if (pos >= b.length) {
    resize(b, 1);
  }
  b.buffer[pos] = c;
  b.position = pos + 1 | 0;
  return /* () */0;
}

function add_string(b, s) {
  var len = s.length;
  var new_position = b.position + len | 0;
  if (new_position > b.length) {
    resize(b, len);
  }
  blit_string(s, 0, b.buffer, b.position, len);
  b.position = new_position;
  return /* () */0;
}
/* No side effect */

function buffer_check_size(buf, overhead) {
  var len = buf.bytes.length;
  var min_len = buf.ind + overhead | 0;
  if (min_len > len) {
    var new_len = caml_int_max((len << 1), min_len);
    var new_str = caml_create_bytes(new_len);
    blit(buf.bytes, 0, new_str, 0, len);
    buf.bytes = new_str;
    return /* () */0;
  } else {
    return 0;
  }
}

function buffer_add_char(buf, c) {
  buffer_check_size(buf, 1);
  buf.bytes[buf.ind] = c;
  buf.ind = buf.ind + 1 | 0;
  return /* () */0;
}

function buffer_add_string(buf, s) {
  var str_len = s.length;
  buffer_check_size(buf, str_len);
  blit$1(s, 0, buf.bytes, buf.ind, str_len);
  buf.ind = buf.ind + str_len | 0;
  return /* () */0;
}

function buffer_contents(buf) {
  return sub_string(buf.bytes, 0, buf.ind);
}

function char_of_fconv(fconv) {
  switch (fconv) {
    case /* Float_f */0 :
    case /* Float_pf */1 :
    case /* Float_sf */2 :
        return /* "f" */102;
    case /* Float_e */3 :
    case /* Float_pe */4 :
    case /* Float_se */5 :
        return /* "e" */101;
    case /* Float_E */6 :
    case /* Float_pE */7 :
    case /* Float_sE */8 :
        return /* "E" */69;
    case /* Float_g */9 :
    case /* Float_pg */10 :
    case /* Float_sg */11 :
        return /* "g" */103;
    case /* Float_G */12 :
    case /* Float_pG */13 :
    case /* Float_sG */14 :
        return /* "G" */71;
    case /* Float_F */15 :
        return /* "F" */70;
    case /* Float_h */16 :
    case /* Float_ph */17 :
    case /* Float_sh */18 :
        return /* "h" */104;
    case /* Float_H */19 :
    case /* Float_pH */20 :
    case /* Float_sH */21 :
        return /* "H" */72;
    
  }
}

function bprint_fconv_flag(buf, fconv) {
  switch (fconv) {
    case /* Float_f */0 :
    case /* Float_e */3 :
    case /* Float_E */6 :
    case /* Float_g */9 :
    case /* Float_G */12 :
    case /* Float_F */15 :
    case /* Float_h */16 :
    case /* Float_H */19 :
        return /* () */0;
    case /* Float_pf */1 :
    case /* Float_pe */4 :
    case /* Float_pE */7 :
    case /* Float_pg */10 :
    case /* Float_pG */13 :
    case /* Float_ph */17 :
    case /* Float_pH */20 :
        return buffer_add_char(buf, /* "+" */43);
    case /* Float_sf */2 :
    case /* Float_se */5 :
    case /* Float_sE */8 :
    case /* Float_sg */11 :
    case /* Float_sG */14 :
    case /* Float_sh */18 :
    case /* Float_sH */21 :
        return buffer_add_char(buf, /* " " */32);
    
  }
}

function string_of_formatting_lit(formatting_lit) {
  if (typeof formatting_lit === "number") {
    switch (formatting_lit) {
      case /* Close_box */0 :
          return "@]";
      case /* Close_tag */1 :
          return "@}";
      case /* FFlush */2 :
          return "@?";
      case /* Force_newline */3 :
          return "@\n";
      case /* Flush_newline */4 :
          return "@.";
      case /* Escaped_at */5 :
          return "@@";
      case /* Escaped_percent */6 :
          return "@%";
      
    }
  } else {
    switch (formatting_lit.tag | 0) {
      case /* Break */0 :
      case /* Magic_size */1 :
          return formatting_lit[0];
      case /* Scan_indic */2 :
          return "@" + bytes_to_string(make(1, formatting_lit[0]));
      
    }
  }
}

function bprint_fmtty(buf, _fmtty) {
  while(true) {
    var fmtty = _fmtty;
    if (typeof fmtty === "number") {
      return /* () */0;
    } else {
      switch (fmtty.tag | 0) {
        case /* Char_ty */0 :
            buffer_add_string(buf, "%c");
            _fmtty = fmtty[0];
            continue ;
        case /* String_ty */1 :
            buffer_add_string(buf, "%s");
            _fmtty = fmtty[0];
            continue ;
        case /* Int_ty */2 :
            buffer_add_string(buf, "%i");
            _fmtty = fmtty[0];
            continue ;
        case /* Int32_ty */3 :
            buffer_add_string(buf, "%li");
            _fmtty = fmtty[0];
            continue ;
        case /* Nativeint_ty */4 :
            buffer_add_string(buf, "%ni");
            _fmtty = fmtty[0];
            continue ;
        case /* Int64_ty */5 :
            buffer_add_string(buf, "%Li");
            _fmtty = fmtty[0];
            continue ;
        case /* Float_ty */6 :
            buffer_add_string(buf, "%f");
            _fmtty = fmtty[0];
            continue ;
        case /* Bool_ty */7 :
            buffer_add_string(buf, "%B");
            _fmtty = fmtty[0];
            continue ;
        case /* Format_arg_ty */8 :
            buffer_add_string(buf, "%{");
            bprint_fmtty(buf, fmtty[0]);
            buffer_add_string(buf, "%}");
            _fmtty = fmtty[1];
            continue ;
        case /* Format_subst_ty */9 :
            buffer_add_string(buf, "%(");
            bprint_fmtty(buf, fmtty[0]);
            buffer_add_string(buf, "%)");
            _fmtty = fmtty[2];
            continue ;
        case /* Alpha_ty */10 :
            buffer_add_string(buf, "%a");
            _fmtty = fmtty[0];
            continue ;
        case /* Theta_ty */11 :
            buffer_add_string(buf, "%t");
            _fmtty = fmtty[0];
            continue ;
        case /* Any_ty */12 :
            buffer_add_string(buf, "%?");
            _fmtty = fmtty[0];
            continue ;
        case /* Reader_ty */13 :
            buffer_add_string(buf, "%r");
            _fmtty = fmtty[0];
            continue ;
        case /* Ignored_reader_ty */14 :
            buffer_add_string(buf, "%_r");
            _fmtty = fmtty[0];
            continue ;
        
      }
    }
  }}

function symm(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case /* Char_ty */0 :
          return /* Char_ty */__(0, [symm(param[0])]);
      case /* String_ty */1 :
          return /* String_ty */__(1, [symm(param[0])]);
      case /* Int_ty */2 :
          return /* Int_ty */__(2, [symm(param[0])]);
      case /* Int32_ty */3 :
          return /* Int32_ty */__(3, [symm(param[0])]);
      case /* Nativeint_ty */4 :
          return /* Nativeint_ty */__(4, [symm(param[0])]);
      case /* Int64_ty */5 :
          return /* Int64_ty */__(5, [symm(param[0])]);
      case /* Float_ty */6 :
          return /* Float_ty */__(6, [symm(param[0])]);
      case /* Bool_ty */7 :
          return /* Bool_ty */__(7, [symm(param[0])]);
      case /* Format_arg_ty */8 :
          return /* Format_arg_ty */__(8, [
                    param[0],
                    symm(param[1])
                  ]);
      case /* Format_subst_ty */9 :
          return /* Format_subst_ty */__(9, [
                    param[1],
                    param[0],
                    symm(param[2])
                  ]);
      case /* Alpha_ty */10 :
          return /* Alpha_ty */__(10, [symm(param[0])]);
      case /* Theta_ty */11 :
          return /* Theta_ty */__(11, [symm(param[0])]);
      case /* Any_ty */12 :
          return /* Any_ty */__(12, [symm(param[0])]);
      case /* Reader_ty */13 :
          return /* Reader_ty */__(13, [symm(param[0])]);
      case /* Ignored_reader_ty */14 :
          return /* Ignored_reader_ty */__(14, [symm(param[0])]);
      
    }
  }
}

function fmtty_rel_det(param) {
  if (typeof param === "number") {
    return /* tuple */[
            (function (param) {
                return /* Refl */0;
              }),
            (function (param) {
                return /* Refl */0;
              }),
            (function (param) {
                return /* Refl */0;
              }),
            (function (param) {
                return /* Refl */0;
              })
          ];
  } else {
    switch (param.tag | 0) {
      case /* Char_ty */0 :
          var match = fmtty_rel_det(param[0]);
          var af = match[1];
          var fa = match[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match[2],
                  match[3]
                ];
      case /* String_ty */1 :
          var match$1 = fmtty_rel_det(param[0]);
          var af$1 = match$1[1];
          var fa$1 = match$1[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$1[2],
                  match$1[3]
                ];
      case /* Int_ty */2 :
          var match$2 = fmtty_rel_det(param[0]);
          var af$2 = match$2[1];
          var fa$2 = match$2[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$2[2],
                  match$2[3]
                ];
      case /* Int32_ty */3 :
          var match$3 = fmtty_rel_det(param[0]);
          var af$3 = match$3[1];
          var fa$3 = match$3[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$3, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af$3, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$3[2],
                  match$3[3]
                ];
      case /* Nativeint_ty */4 :
          var match$4 = fmtty_rel_det(param[0]);
          var af$4 = match$4[1];
          var fa$4 = match$4[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$4, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af$4, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$4[2],
                  match$4[3]
                ];
      case /* Int64_ty */5 :
          var match$5 = fmtty_rel_det(param[0]);
          var af$5 = match$5[1];
          var fa$5 = match$5[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$5, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af$5, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$5[2],
                  match$5[3]
                ];
      case /* Float_ty */6 :
          var match$6 = fmtty_rel_det(param[0]);
          var af$6 = match$6[1];
          var fa$6 = match$6[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$6, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af$6, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$6[2],
                  match$6[3]
                ];
      case /* Bool_ty */7 :
          var match$7 = fmtty_rel_det(param[0]);
          var af$7 = match$7[1];
          var fa$7 = match$7[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$7, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af$7, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$7[2],
                  match$7[3]
                ];
      case /* Format_arg_ty */8 :
          var match$8 = fmtty_rel_det(param[1]);
          var af$8 = match$8[1];
          var fa$8 = match$8[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$8, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af$8, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$8[2],
                  match$8[3]
                ];
      case /* Format_subst_ty */9 :
          var match$9 = fmtty_rel_det(param[2]);
          var de = match$9[3];
          var ed = match$9[2];
          var af$9 = match$9[1];
          var fa$9 = match$9[0];
          var ty = trans(symm(param[0]), param[1]);
          var match$10 = fmtty_rel_det(ty);
          var jd = match$10[3];
          var dj = match$10[2];
          var ga = match$10[1];
          var ag = match$10[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$9, /* Refl */0);
                      _1(ag, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(ga, /* Refl */0);
                      _1(af$9, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(ed, /* Refl */0);
                      _1(dj, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(jd, /* Refl */0);
                      _1(de, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      case /* Alpha_ty */10 :
          var match$11 = fmtty_rel_det(param[0]);
          var af$10 = match$11[1];
          var fa$10 = match$11[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$10, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af$10, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$11[2],
                  match$11[3]
                ];
      case /* Theta_ty */11 :
          var match$12 = fmtty_rel_det(param[0]);
          var af$11 = match$12[1];
          var fa$11 = match$12[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$11, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af$11, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$12[2],
                  match$12[3]
                ];
      case /* Any_ty */12 :
          var match$13 = fmtty_rel_det(param[0]);
          var af$12 = match$13[1];
          var fa$12 = match$13[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$12, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af$12, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$13[2],
                  match$13[3]
                ];
      case /* Reader_ty */13 :
          var match$14 = fmtty_rel_det(param[0]);
          var de$1 = match$14[3];
          var ed$1 = match$14[2];
          var af$13 = match$14[1];
          var fa$13 = match$14[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$13, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af$13, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(ed$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(de$1, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      case /* Ignored_reader_ty */14 :
          var match$15 = fmtty_rel_det(param[0]);
          var de$2 = match$15[3];
          var ed$2 = match$15[2];
          var af$14 = match$15[1];
          var fa$14 = match$15[0];
          return /* tuple */[
                  (function (param) {
                      _1(fa$14, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(af$14, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(ed$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      _1(de$2, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      
    }
  }
}

function trans(ty1, ty2) {
  var exit = 0;
  if (typeof ty1 === "number") {
    if (typeof ty2 === "number") {
      return /* End_of_fmtty */0;
    } else {
      switch (ty2.tag | 0) {
        case /* Format_arg_ty */8 :
            exit = 6;
            break;
        case /* Format_subst_ty */9 :
            exit = 7;
            break;
        case /* Alpha_ty */10 :
            exit = 1;
            break;
        case /* Theta_ty */11 :
            exit = 2;
            break;
        case /* Any_ty */12 :
            exit = 3;
            break;
        case /* Reader_ty */13 :
            exit = 4;
            break;
        case /* Ignored_reader_ty */14 :
            exit = 5;
            break;
        default:
          throw [
                assert_failure,
                /* tuple */[
                  "camlinternalFormat.ml",
                  846,
                  23
                ]
              ];
      }
    }
  } else {
    switch (ty1.tag | 0) {
      case /* Char_ty */0 :
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case /* Char_ty */0 :
                  return /* Char_ty */__(0, [trans(ty1[0], ty2[0])]);
              case /* Format_arg_ty */8 :
                  exit = 6;
                  break;
              case /* Format_subst_ty */9 :
                  exit = 7;
                  break;
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  exit = 2;
                  break;
              case /* Any_ty */12 :
                  exit = 3;
                  break;
              case /* Reader_ty */13 :
                  exit = 4;
                  break;
              case /* Ignored_reader_ty */14 :
                  exit = 5;
                  break;
              
            }
          }
          break;
      case /* String_ty */1 :
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case /* String_ty */1 :
                  return /* String_ty */__(1, [trans(ty1[0], ty2[0])]);
              case /* Format_arg_ty */8 :
                  exit = 6;
                  break;
              case /* Format_subst_ty */9 :
                  exit = 7;
                  break;
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  exit = 2;
                  break;
              case /* Any_ty */12 :
                  exit = 3;
                  break;
              case /* Reader_ty */13 :
                  exit = 4;
                  break;
              case /* Ignored_reader_ty */14 :
                  exit = 5;
                  break;
              
            }
          }
          break;
      case /* Int_ty */2 :
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case /* Int_ty */2 :
                  return /* Int_ty */__(2, [trans(ty1[0], ty2[0])]);
              case /* Format_arg_ty */8 :
                  exit = 6;
                  break;
              case /* Format_subst_ty */9 :
                  exit = 7;
                  break;
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  exit = 2;
                  break;
              case /* Any_ty */12 :
                  exit = 3;
                  break;
              case /* Reader_ty */13 :
                  exit = 4;
                  break;
              case /* Ignored_reader_ty */14 :
                  exit = 5;
                  break;
              
            }
          }
          break;
      case /* Int32_ty */3 :
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case /* Int32_ty */3 :
                  return /* Int32_ty */__(3, [trans(ty1[0], ty2[0])]);
              case /* Format_arg_ty */8 :
                  exit = 6;
                  break;
              case /* Format_subst_ty */9 :
                  exit = 7;
                  break;
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  exit = 2;
                  break;
              case /* Any_ty */12 :
                  exit = 3;
                  break;
              case /* Reader_ty */13 :
                  exit = 4;
                  break;
              case /* Ignored_reader_ty */14 :
                  exit = 5;
                  break;
              
            }
          }
          break;
      case /* Nativeint_ty */4 :
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case /* Nativeint_ty */4 :
                  return /* Nativeint_ty */__(4, [trans(ty1[0], ty2[0])]);
              case /* Format_arg_ty */8 :
                  exit = 6;
                  break;
              case /* Format_subst_ty */9 :
                  exit = 7;
                  break;
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  exit = 2;
                  break;
              case /* Any_ty */12 :
                  exit = 3;
                  break;
              case /* Reader_ty */13 :
                  exit = 4;
                  break;
              case /* Ignored_reader_ty */14 :
                  exit = 5;
                  break;
              
            }
          }
          break;
      case /* Int64_ty */5 :
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case /* Int64_ty */5 :
                  return /* Int64_ty */__(5, [trans(ty1[0], ty2[0])]);
              case /* Format_arg_ty */8 :
                  exit = 6;
                  break;
              case /* Format_subst_ty */9 :
                  exit = 7;
                  break;
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  exit = 2;
                  break;
              case /* Any_ty */12 :
                  exit = 3;
                  break;
              case /* Reader_ty */13 :
                  exit = 4;
                  break;
              case /* Ignored_reader_ty */14 :
                  exit = 5;
                  break;
              
            }
          }
          break;
      case /* Float_ty */6 :
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case /* Float_ty */6 :
                  return /* Float_ty */__(6, [trans(ty1[0], ty2[0])]);
              case /* Format_arg_ty */8 :
                  exit = 6;
                  break;
              case /* Format_subst_ty */9 :
                  exit = 7;
                  break;
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  exit = 2;
                  break;
              case /* Any_ty */12 :
                  exit = 3;
                  break;
              case /* Reader_ty */13 :
                  exit = 4;
                  break;
              case /* Ignored_reader_ty */14 :
                  exit = 5;
                  break;
              
            }
          }
          break;
      case /* Bool_ty */7 :
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case /* Bool_ty */7 :
                  return /* Bool_ty */__(7, [trans(ty1[0], ty2[0])]);
              case /* Format_arg_ty */8 :
                  exit = 6;
                  break;
              case /* Format_subst_ty */9 :
                  exit = 7;
                  break;
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  exit = 2;
                  break;
              case /* Any_ty */12 :
                  exit = 3;
                  break;
              case /* Reader_ty */13 :
                  exit = 4;
                  break;
              case /* Ignored_reader_ty */14 :
                  exit = 5;
                  break;
              
            }
          }
          break;
      case /* Format_arg_ty */8 :
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    832,
                    26
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case /* Format_arg_ty */8 :
                  return /* Format_arg_ty */__(8, [
                            trans(ty1[0], ty2[0]),
                            trans(ty1[1], ty2[1])
                          ]);
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  exit = 2;
                  break;
              case /* Any_ty */12 :
                  exit = 3;
                  break;
              case /* Reader_ty */13 :
                  exit = 4;
                  break;
              case /* Ignored_reader_ty */14 :
                  exit = 5;
                  break;
              default:
                throw [
                      assert_failure,
                      /* tuple */[
                        "camlinternalFormat.ml",
                        832,
                        26
                      ]
                    ];
            }
          }
          break;
      case /* Format_subst_ty */9 :
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    842,
                    28
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case /* Format_arg_ty */8 :
                  exit = 6;
                  break;
              case /* Format_subst_ty */9 :
                  var ty = trans(symm(ty1[1]), ty2[0]);
                  var match = fmtty_rel_det(ty);
                  _1(match[1], /* Refl */0);
                  _1(match[3], /* Refl */0);
                  return /* Format_subst_ty */__(9, [
                            ty1[0],
                            ty2[1],
                            trans(ty1[2], ty2[2])
                          ]);
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  exit = 2;
                  break;
              case /* Any_ty */12 :
                  exit = 3;
                  break;
              case /* Reader_ty */13 :
                  exit = 4;
                  break;
              case /* Ignored_reader_ty */14 :
                  exit = 5;
                  break;
              default:
                throw [
                      assert_failure,
                      /* tuple */[
                        "camlinternalFormat.ml",
                        842,
                        28
                      ]
                    ];
            }
          }
          break;
      case /* Alpha_ty */10 :
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    810,
                    21
                  ]
                ];
          } else if (ty2.tag === /* Alpha_ty */10) {
            return /* Alpha_ty */__(10, [trans(ty1[0], ty2[0])]);
          } else {
            throw [
                  assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    810,
                    21
                  ]
                ];
          }
      case /* Theta_ty */11 :
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    814,
                    21
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  return /* Theta_ty */__(11, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      assert_failure,
                      /* tuple */[
                        "camlinternalFormat.ml",
                        814,
                        21
                      ]
                    ];
            }
          }
          break;
      case /* Any_ty */12 :
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    818,
                    19
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  exit = 2;
                  break;
              case /* Any_ty */12 :
                  return /* Any_ty */__(12, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      assert_failure,
                      /* tuple */[
                        "camlinternalFormat.ml",
                        818,
                        19
                      ]
                    ];
            }
          }
          break;
      case /* Reader_ty */13 :
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    822,
                    22
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  exit = 2;
                  break;
              case /* Any_ty */12 :
                  exit = 3;
                  break;
              case /* Reader_ty */13 :
                  return /* Reader_ty */__(13, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      assert_failure,
                      /* tuple */[
                        "camlinternalFormat.ml",
                        822,
                        22
                      ]
                    ];
            }
          }
          break;
      case /* Ignored_reader_ty */14 :
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    827,
                    30
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case /* Alpha_ty */10 :
                  exit = 1;
                  break;
              case /* Theta_ty */11 :
                  exit = 2;
                  break;
              case /* Any_ty */12 :
                  exit = 3;
                  break;
              case /* Reader_ty */13 :
                  exit = 4;
                  break;
              case /* Ignored_reader_ty */14 :
                  return /* Ignored_reader_ty */__(14, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      assert_failure,
                      /* tuple */[
                        "camlinternalFormat.ml",
                        827,
                        30
                      ]
                    ];
            }
          }
          break;
      
    }
  }
  switch (exit) {
    case 1 :
        throw [
              assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                811,
                21
              ]
            ];
    case 2 :
        throw [
              assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                815,
                21
              ]
            ];
    case 3 :
        throw [
              assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                819,
                19
              ]
            ];
    case 4 :
        throw [
              assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                823,
                22
              ]
            ];
    case 5 :
        throw [
              assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                828,
                30
              ]
            ];
    case 6 :
        throw [
              assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                833,
                26
              ]
            ];
    case 7 :
        throw [
              assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                843,
                28
              ]
            ];
    case 8 :
        throw [
              assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                847,
                23
              ]
            ];
    
  }
}

var Type_mismatch = create("CamlinternalFormat.Type_mismatch");

function type_padding(pad, fmtty) {
  if (typeof pad === "number") {
    return /* Padding_fmtty_EBB */[
            /* No_padding */0,
            fmtty
          ];
  } else if (pad.tag) {
    if (typeof fmtty === "number") {
      throw Type_mismatch;
    } else if (fmtty.tag === /* Int_ty */2) {
      return /* Padding_fmtty_EBB */[
              /* Arg_padding */__(1, [pad[0]]),
              fmtty[0]
            ];
    } else {
      throw Type_mismatch;
    }
  } else {
    return /* Padding_fmtty_EBB */[
            /* Lit_padding */__(0, [
                pad[0],
                pad[1]
              ]),
            fmtty
          ];
  }
}

function type_padprec(pad, prec, fmtty) {
  var match = type_padding(pad, fmtty);
  if (typeof prec === "number") {
    if (prec !== 0) {
      var match$1 = match[1];
      if (typeof match$1 === "number") {
        throw Type_mismatch;
      } else if (match$1.tag === /* Int_ty */2) {
        return /* Padprec_fmtty_EBB */[
                match[0],
                /* Arg_precision */1,
                match$1[0]
              ];
      } else {
        throw Type_mismatch;
      }
    } else {
      return /* Padprec_fmtty_EBB */[
              match[0],
              /* No_precision */0,
              match[1]
            ];
    }
  } else {
    return /* Padprec_fmtty_EBB */[
            match[0],
            /* Lit_precision */[prec[0]],
            match[1]
          ];
  }
}

function type_ignored_format_substitution(sub_fmtty, fmt, fmtty) {
  if (typeof sub_fmtty === "number") {
    return /* Fmtty_fmt_EBB */[
            /* End_of_fmtty */0,
            type_format_gen(fmt, fmtty)
          ];
  } else {
    switch (sub_fmtty.tag | 0) {
      case /* Char_ty */0 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Char_ty */__(0, [match[0]]),
                    match[1]
                  ];
          }
      case /* String_ty */1 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* String_ty */1) {
            var match$1 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* String_ty */__(1, [match$1[0]]),
                    match$1[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Int_ty */2 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Int_ty */2) {
            var match$2 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int_ty */__(2, [match$2[0]]),
                    match$2[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Int32_ty */3 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Int32_ty */3) {
            var match$3 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int32_ty */__(3, [match$3[0]]),
                    match$3[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Nativeint_ty */4 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Nativeint_ty */4) {
            var match$4 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Nativeint_ty */__(4, [match$4[0]]),
                    match$4[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Int64_ty */5 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Int64_ty */5) {
            var match$5 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int64_ty */__(5, [match$5[0]]),
                    match$5[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Float_ty */6 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Float_ty */6) {
            var match$6 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Float_ty */__(6, [match$6[0]]),
                    match$6[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Bool_ty */7 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Bool_ty */7) {
            var match$7 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Bool_ty */__(7, [match$7[0]]),
                    match$7[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Format_arg_ty */8 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Format_arg_ty */8) {
            var sub2_fmtty$prime = fmtty[0];
            if (caml_notequal(/* Fmtty_EBB */[sub_fmtty[0]], /* Fmtty_EBB */[sub2_fmtty$prime])) {
              throw Type_mismatch;
            }
            var match$8 = type_ignored_format_substitution(sub_fmtty[1], fmt, fmtty[1]);
            return /* Fmtty_fmt_EBB */[
                    /* Format_arg_ty */__(8, [
                        sub2_fmtty$prime,
                        match$8[0]
                      ]),
                    match$8[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Format_subst_ty */9 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Format_subst_ty */9) {
            var sub2_fmtty$prime$1 = fmtty[1];
            var sub1_fmtty$prime = fmtty[0];
            if (caml_notequal(/* Fmtty_EBB */[erase_rel(sub_fmtty[0])], /* Fmtty_EBB */[erase_rel(sub1_fmtty$prime)])) {
              throw Type_mismatch;
            }
            if (caml_notequal(/* Fmtty_EBB */[erase_rel(sub_fmtty[1])], /* Fmtty_EBB */[erase_rel(sub2_fmtty$prime$1)])) {
              throw Type_mismatch;
            }
            var sub_fmtty$prime = trans(symm(sub1_fmtty$prime), sub2_fmtty$prime$1);
            var match$9 = fmtty_rel_det(sub_fmtty$prime);
            _1(match$9[1], /* Refl */0);
            _1(match$9[3], /* Refl */0);
            var match$10 = type_ignored_format_substitution(erase_rel(sub_fmtty[2]), fmt, fmtty[2]);
            return /* Fmtty_fmt_EBB */[
                    /* Format_subst_ty */__(9, [
                        sub1_fmtty$prime,
                        sub2_fmtty$prime$1,
                        symm(match$10[0])
                      ]),
                    match$10[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Alpha_ty */10 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Alpha_ty */10) {
            var match$11 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Alpha_ty */__(10, [match$11[0]]),
                    match$11[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Theta_ty */11 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Theta_ty */11) {
            var match$12 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Theta_ty */__(11, [match$12[0]]),
                    match$12[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Any_ty */12 :
          throw Type_mismatch;
      case /* Reader_ty */13 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Reader_ty */13) {
            var match$13 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Reader_ty */__(13, [match$13[0]]),
                    match$13[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Ignored_reader_ty */14 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Ignored_reader_ty */14) {
            var match$14 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Ignored_reader_ty */__(14, [match$14[0]]),
                    match$14[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      
    }
  }
}

function type_format_gen(fmt, fmtty) {
  if (typeof fmt === "number") {
    return /* Fmt_fmtty_EBB */[
            /* End_of_format */0,
            fmtty
          ];
  } else {
    switch (fmt.tag | 0) {
      case /* Char */0 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Char */__(0, [match[0]]),
                    match[1]
                  ];
          }
      case /* Caml_char */1 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match$1 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Caml_char */__(1, [match$1[0]]),
                    match$1[1]
                  ];
          }
      case /* String */2 :
          var match$2 = type_padding(fmt[0], fmtty);
          var match$3 = match$2[1];
          if (typeof match$3 === "number") {
            throw Type_mismatch;
          } else if (match$3.tag === /* String_ty */1) {
            var match$4 = type_format_gen(fmt[1], match$3[0]);
            return /* Fmt_fmtty_EBB */[
                    /* String */__(2, [
                        match$2[0],
                        match$4[0]
                      ]),
                    match$4[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Caml_string */3 :
          var match$5 = type_padding(fmt[0], fmtty);
          var match$6 = match$5[1];
          if (typeof match$6 === "number") {
            throw Type_mismatch;
          } else if (match$6.tag === /* String_ty */1) {
            var match$7 = type_format_gen(fmt[1], match$6[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Caml_string */__(3, [
                        match$5[0],
                        match$7[0]
                      ]),
                    match$7[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Int */4 :
          var match$8 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$9 = match$8[2];
          if (typeof match$9 === "number") {
            throw Type_mismatch;
          } else if (match$9.tag === /* Int_ty */2) {
            var match$10 = type_format_gen(fmt[3], match$9[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int */__(4, [
                        fmt[0],
                        match$8[0],
                        match$8[1],
                        match$10[0]
                      ]),
                    match$10[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Int32 */5 :
          var match$11 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$12 = match$11[2];
          if (typeof match$12 === "number") {
            throw Type_mismatch;
          } else if (match$12.tag === /* Int32_ty */3) {
            var match$13 = type_format_gen(fmt[3], match$12[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int32 */__(5, [
                        fmt[0],
                        match$11[0],
                        match$11[1],
                        match$13[0]
                      ]),
                    match$13[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Nativeint */6 :
          var match$14 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$15 = match$14[2];
          if (typeof match$15 === "number") {
            throw Type_mismatch;
          } else if (match$15.tag === /* Nativeint_ty */4) {
            var match$16 = type_format_gen(fmt[3], match$15[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Nativeint */__(6, [
                        fmt[0],
                        match$14[0],
                        match$14[1],
                        match$16[0]
                      ]),
                    match$16[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Int64 */7 :
          var match$17 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$18 = match$17[2];
          if (typeof match$18 === "number") {
            throw Type_mismatch;
          } else if (match$18.tag === /* Int64_ty */5) {
            var match$19 = type_format_gen(fmt[3], match$18[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int64 */__(7, [
                        fmt[0],
                        match$17[0],
                        match$17[1],
                        match$19[0]
                      ]),
                    match$19[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Float */8 :
          var match$20 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$21 = match$20[2];
          if (typeof match$21 === "number") {
            throw Type_mismatch;
          } else if (match$21.tag === /* Float_ty */6) {
            var match$22 = type_format_gen(fmt[3], match$21[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Float */__(8, [
                        fmt[0],
                        match$20[0],
                        match$20[1],
                        match$22[0]
                      ]),
                    match$22[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Bool */9 :
          var match$23 = type_padding(fmt[0], fmtty);
          var match$24 = match$23[1];
          if (typeof match$24 === "number") {
            throw Type_mismatch;
          } else if (match$24.tag === /* Bool_ty */7) {
            var match$25 = type_format_gen(fmt[1], match$24[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Bool */__(9, [
                        match$23[0],
                        match$25[0]
                      ]),
                    match$25[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Flush */10 :
          var match$26 = type_format_gen(fmt[0], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Flush */__(10, [match$26[0]]),
                  match$26[1]
                ];
      case /* String_literal */11 :
          var match$27 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* String_literal */__(11, [
                      fmt[0],
                      match$27[0]
                    ]),
                  match$27[1]
                ];
      case /* Char_literal */12 :
          var match$28 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Char_literal */__(12, [
                      fmt[0],
                      match$28[0]
                    ]),
                  match$28[1]
                ];
      case /* Format_arg */13 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Format_arg_ty */8) {
            var sub_fmtty$prime = fmtty[0];
            if (caml_notequal(/* Fmtty_EBB */[fmt[1]], /* Fmtty_EBB */[sub_fmtty$prime])) {
              throw Type_mismatch;
            }
            var match$29 = type_format_gen(fmt[2], fmtty[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Format_arg */__(13, [
                        fmt[0],
                        sub_fmtty$prime,
                        match$29[0]
                      ]),
                    match$29[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Format_subst */14 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Format_subst_ty */9) {
            var sub_fmtty1 = fmtty[0];
            if (caml_notequal(/* Fmtty_EBB */[erase_rel(fmt[1])], /* Fmtty_EBB */[erase_rel(sub_fmtty1)])) {
              throw Type_mismatch;
            }
            var match$30 = type_format_gen(fmt[2], erase_rel(fmtty[2]));
            return /* Fmt_fmtty_EBB */[
                    /* Format_subst */__(14, [
                        fmt[0],
                        sub_fmtty1,
                        match$30[0]
                      ]),
                    match$30[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Alpha */15 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Alpha_ty */10) {
            var match$31 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Alpha */__(15, [match$31[0]]),
                    match$31[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Theta */16 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Theta_ty */11) {
            var match$32 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Theta */__(16, [match$32[0]]),
                    match$32[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Formatting_lit */17 :
          var match$33 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Formatting_lit */__(17, [
                      fmt[0],
                      match$33[0]
                    ]),
                  match$33[1]
                ];
      case /* Formatting_gen */18 :
          var formatting_gen = fmt[0];
          var fmt0 = fmt[1];
          var fmtty0 = fmtty;
          if (formatting_gen.tag) {
            var match$34 = formatting_gen[0];
            var match$35 = type_format_gen(match$34[0], fmtty0);
            var match$36 = type_format_gen(fmt0, match$35[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Formatting_gen */__(18, [
                        /* Open_box */__(1, [/* Format */[
                              match$35[0],
                              match$34[1]
                            ]]),
                        match$36[0]
                      ]),
                    match$36[1]
                  ];
          } else {
            var match$37 = formatting_gen[0];
            var match$38 = type_format_gen(match$37[0], fmtty0);
            var match$39 = type_format_gen(fmt0, match$38[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Formatting_gen */__(18, [
                        /* Open_tag */__(0, [/* Format */[
                              match$38[0],
                              match$37[1]
                            ]]),
                        match$39[0]
                      ]),
                    match$39[1]
                  ];
          }
      case /* Reader */19 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Reader_ty */13) {
            var match$40 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Reader */__(19, [match$40[0]]),
                    match$40[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Scan_char_set */20 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* String_ty */1) {
            var match$41 = type_format_gen(fmt[2], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Scan_char_set */__(20, [
                        fmt[0],
                        fmt[1],
                        match$41[0]
                      ]),
                    match$41[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Scan_get_counter */21 :
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === /* Int_ty */2) {
            var match$42 = type_format_gen(fmt[1], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Scan_get_counter */__(21, [
                        fmt[0],
                        match$42[0]
                      ]),
                    match$42[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case /* Ignored_param */23 :
          var ign = fmt[0];
          var fmt$1 = fmt[1];
          var fmtty$1 = fmtty;
          if (typeof ign === "number") {
            if (ign === /* Ignored_reader */2) {
              if (typeof fmtty$1 === "number") {
                throw Type_mismatch;
              } else if (fmtty$1.tag === /* Ignored_reader_ty */14) {
                var match$43 = type_format_gen(fmt$1, fmtty$1[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Ignored_param */__(23, [
                            /* Ignored_reader */2,
                            match$43[0]
                          ]),
                        match$43[1]
                      ];
              } else {
                throw Type_mismatch;
              }
            } else {
              return type_ignored_param_one(ign, fmt$1, fmtty$1);
            }
          } else {
            switch (ign.tag | 0) {
              case /* Ignored_format_arg */8 :
                  return type_ignored_param_one(/* Ignored_format_arg */__(8, [
                                ign[0],
                                ign[1]
                              ]), fmt$1, fmtty$1);
              case /* Ignored_format_subst */9 :
                  var match$44 = type_ignored_format_substitution(ign[1], fmt$1, fmtty$1);
                  var match$45 = match$44[1];
                  return /* Fmt_fmtty_EBB */[
                          /* Ignored_param */__(23, [
                              /* Ignored_format_subst */__(9, [
                                  ign[0],
                                  match$44[0]
                                ]),
                              match$45[0]
                            ]),
                          match$45[1]
                        ];
              default:
                return type_ignored_param_one(ign, fmt$1, fmtty$1);
            }
          }
      case /* Scan_next_char */22 :
      case /* Custom */24 :
          throw Type_mismatch;
      
    }
  }
}

function type_ignored_param_one(ign, fmt, fmtty) {
  var match = type_format_gen(fmt, fmtty);
  return /* Fmt_fmtty_EBB */[
          /* Ignored_param */__(23, [
              ign,
              match[0]
            ]),
          match[1]
        ];
}

function type_format(fmt, fmtty) {
  var match = type_format_gen(fmt, fmtty);
  if (typeof match[1] === "number") {
    return match[0];
  } else {
    throw Type_mismatch;
  }
}

function recast(fmt, fmtty) {
  return type_format(fmt, erase_rel(symm(fmtty)));
}

function fix_padding(padty, width, str) {
  var len = str.length;
  var width$1 = abs(width);
  var padty$1 = width < 0 ? /* Left */0 : padty;
  if (width$1 <= len) {
    return str;
  } else {
    var res = make(width$1, padty$1 === /* Zeros */2 ? /* "0" */48 : /* " " */32);
    switch (padty$1) {
      case /* Left */0 :
          blit$1(str, 0, res, 0, len);
          break;
      case /* Right */1 :
          blit$1(str, 0, res, width$1 - len | 0, len);
          break;
      case /* Zeros */2 :
          if (len > 0 && (get(str, 0) === /* "+" */43 || get(str, 0) === /* "-" */45 || get(str, 0) === /* " " */32)) {
            res[0] = get(str, 0);
            blit$1(str, 1, res, (width$1 - len | 0) + 1 | 0, len - 1 | 0);
          } else if (len > 1 && get(str, 0) === /* "0" */48 && (get(str, 1) === /* "x" */120 || get(str, 1) === /* "X" */88)) {
            res[1] = get(str, 1);
            blit$1(str, 2, res, (width$1 - len | 0) + 2 | 0, len - 2 | 0);
          } else {
            blit$1(str, 0, res, width$1 - len | 0, len);
          }
          break;
      
    }
    return bytes_to_string(res);
  }
}

function fix_int_precision(prec, str) {
  var prec$1 = abs(prec);
  var len = str.length;
  var c = get(str, 0);
  var exit = 0;
  if (c >= 58) {
    if (c >= 71) {
      if (c > 102 || c < 97) {
        return str;
      } else {
        exit = 2;
      }
    } else if (c >= 65) {
      exit = 2;
    } else {
      return str;
    }
  } else if (c !== 32) {
    if (c >= 43) {
      switch (c - 43 | 0) {
        case 0 :
        case 2 :
            exit = 1;
            break;
        case 1 :
        case 3 :
        case 4 :
            return str;
        case 5 :
            if ((prec$1 + 2 | 0) > len && len > 1 && (get(str, 1) === /* "x" */120 || get(str, 1) === /* "X" */88)) {
              var res = make(prec$1 + 2 | 0, /* "0" */48);
              res[1] = get(str, 1);
              blit$1(str, 2, res, (prec$1 - len | 0) + 4 | 0, len - 2 | 0);
              return bytes_to_string(res);
            } else {
              exit = 2;
            }
            break;
        case 6 :
        case 7 :
        case 8 :
        case 9 :
        case 10 :
        case 11 :
        case 12 :
        case 13 :
        case 14 :
            exit = 2;
            break;
        
      }
    } else {
      return str;
    }
  } else {
    exit = 1;
  }
  switch (exit) {
    case 1 :
        if ((prec$1 + 1 | 0) > len) {
          var res$1 = make(prec$1 + 1 | 0, /* "0" */48);
          res$1[0] = c;
          blit$1(str, 1, res$1, (prec$1 - len | 0) + 2 | 0, len - 1 | 0);
          return bytes_to_string(res$1);
        } else {
          return str;
        }
    case 2 :
        if (prec$1 > len) {
          var res$2 = make(prec$1, /* "0" */48);
          blit$1(str, 0, res$2, prec$1 - len | 0, len);
          return bytes_to_string(res$2);
        } else {
          return str;
        }
    
  }
}

function string_to_caml_string(str) {
  var str$1 = escaped$2(str);
  var l = str$1.length;
  var res = make(l + 2 | 0, /* "\"" */34);
  caml_blit_string(str$1, 0, res, 1, l);
  return bytes_to_string(res);
}

function format_of_iconv(param) {
  switch (param) {
    case /* Int_d */0 :
        return "%d";
    case /* Int_pd */1 :
        return "%+d";
    case /* Int_sd */2 :
        return "% d";
    case /* Int_i */3 :
        return "%i";
    case /* Int_pi */4 :
        return "%+i";
    case /* Int_si */5 :
        return "% i";
    case /* Int_x */6 :
        return "%x";
    case /* Int_Cx */7 :
        return "%#x";
    case /* Int_X */8 :
        return "%X";
    case /* Int_CX */9 :
        return "%#X";
    case /* Int_o */10 :
        return "%o";
    case /* Int_Co */11 :
        return "%#o";
    case /* Int_u */12 :
        return "%u";
    
  }
}

function format_of_iconvL(param) {
  switch (param) {
    case /* Int_d */0 :
        return "%Ld";
    case /* Int_pd */1 :
        return "%+Ld";
    case /* Int_sd */2 :
        return "% Ld";
    case /* Int_i */3 :
        return "%Li";
    case /* Int_pi */4 :
        return "%+Li";
    case /* Int_si */5 :
        return "% Li";
    case /* Int_x */6 :
        return "%Lx";
    case /* Int_Cx */7 :
        return "%#Lx";
    case /* Int_X */8 :
        return "%LX";
    case /* Int_CX */9 :
        return "%#LX";
    case /* Int_o */10 :
        return "%Lo";
    case /* Int_Co */11 :
        return "%#Lo";
    case /* Int_u */12 :
        return "%Lu";
    
  }
}

function format_of_iconvl(param) {
  switch (param) {
    case /* Int_d */0 :
        return "%ld";
    case /* Int_pd */1 :
        return "%+ld";
    case /* Int_sd */2 :
        return "% ld";
    case /* Int_i */3 :
        return "%li";
    case /* Int_pi */4 :
        return "%+li";
    case /* Int_si */5 :
        return "% li";
    case /* Int_x */6 :
        return "%lx";
    case /* Int_Cx */7 :
        return "%#lx";
    case /* Int_X */8 :
        return "%lX";
    case /* Int_CX */9 :
        return "%#lX";
    case /* Int_o */10 :
        return "%lo";
    case /* Int_Co */11 :
        return "%#lo";
    case /* Int_u */12 :
        return "%lu";
    
  }
}

function format_of_iconvn(param) {
  switch (param) {
    case /* Int_d */0 :
        return "%nd";
    case /* Int_pd */1 :
        return "%+nd";
    case /* Int_sd */2 :
        return "% nd";
    case /* Int_i */3 :
        return "%ni";
    case /* Int_pi */4 :
        return "%+ni";
    case /* Int_si */5 :
        return "% ni";
    case /* Int_x */6 :
        return "%nx";
    case /* Int_Cx */7 :
        return "%#nx";
    case /* Int_X */8 :
        return "%nX";
    case /* Int_CX */9 :
        return "%#nX";
    case /* Int_o */10 :
        return "%no";
    case /* Int_Co */11 :
        return "%#no";
    case /* Int_u */12 :
        return "%nu";
    
  }
}

function format_of_fconv(fconv, prec) {
  if (fconv === /* Float_F */15) {
    return "%.12g";
  } else {
    var prec$1 = abs(prec);
    var symb = char_of_fconv(fconv);
    var buf = {
      ind: 0,
      bytes: caml_create_bytes(16)
    };
    buffer_add_char(buf, /* "%" */37);
    bprint_fconv_flag(buf, fconv);
    buffer_add_char(buf, /* "." */46);
    buffer_add_string(buf, String(prec$1));
    buffer_add_char(buf, symb);
    return buffer_contents(buf);
  }
}

function convert_int(iconv, n) {
  return caml_format_int(format_of_iconv(iconv), n);
}

function convert_int32(iconv, n) {
  return caml_int32_format(format_of_iconvl(iconv), n);
}

function convert_nativeint(iconv, n) {
  return caml_nativeint_format(format_of_iconvn(iconv), n);
}

function convert_int64(iconv, n) {
  return caml_int64_format(format_of_iconvL(iconv), n);
}

function convert_float(fconv, prec, x) {
  if (fconv >= 16) {
    var sign;
    if (fconv >= 17) {
      switch (fconv - 17 | 0) {
        case /* Float_sf */2 :
            sign = /* "-" */45;
            break;
        case /* Float_f */0 :
        case /* Float_e */3 :
            sign = /* "+" */43;
            break;
        case /* Float_pf */1 :
        case /* Float_pe */4 :
            sign = /* " " */32;
            break;
        
      }
    } else {
      sign = /* "-" */45;
    }
    var str = caml_hexstring_of_float(x, prec, sign);
    if (fconv >= 19) {
      return bytes_to_string(uppercase_ascii$1(bytes_of_string(str)));
    } else {
      return str;
    }
  } else {
    var str$1 = caml_format_float(format_of_fconv(fconv, prec), x);
    if (fconv !== /* Float_F */15) {
      return str$1;
    } else {
      var len = str$1.length;
      var is_valid = function (_i) {
        while(true) {
          var i = _i;
          if (i === len) {
            return false;
          } else {
            var match = get(str$1, i);
            var switcher = match - 46 | 0;
            if (switcher > 23 || switcher < 0) {
              if (switcher !== 55) {
                _i = i + 1 | 0;
                continue ;
              } else {
                return true;
              }
            } else if (switcher > 22 || switcher < 1) {
              return true;
            } else {
              _i = i + 1 | 0;
              continue ;
            }
          }
        }      };
      var match = classify_float(x);
      if (match !== 3) {
        if (match >= 4) {
          return "nan";
        } else if (is_valid(0)) {
          return str$1;
        } else {
          return str$1 + ".";
        }
      } else if (x < 0.0) {
        return "neg_infinity";
      } else {
        return "infinity";
      }
    }
  }
}

function format_caml_char(c) {
  var str = escaped(c);
  var l = str.length;
  var res = make(l + 2 | 0, /* "'" */39);
  caml_blit_string(str, 0, res, 1, l);
  return bytes_to_string(res);
}

function string_of_fmtty(fmtty) {
  var buf = {
    ind: 0,
    bytes: caml_create_bytes(16)
  };
  bprint_fmtty(buf, fmtty);
  return buffer_contents(buf);
}

function make_printf(_k, o, _acc, _fmt) {
  while(true) {
    var fmt = _fmt;
    var acc = _acc;
    var k = _k;
    if (typeof fmt === "number") {
      return _2(k, o, acc);
    } else {
      switch (fmt.tag | 0) {
        case /* Char */0 :
            var rest = fmt[0];
            return (function(k,acc,rest){
            return function (c) {
              var new_acc = /* Acc_data_char */__(5, [
                  acc,
                  c
                ]);
              return make_printf(k, o, new_acc, rest);
            }
            }(k,acc,rest));
        case /* Caml_char */1 :
            var rest$1 = fmt[0];
            return (function(k,acc,rest$1){
            return function (c) {
              var new_acc_001 = format_caml_char(c);
              var new_acc = /* Acc_data_string */__(4, [
                  acc,
                  new_acc_001
                ]);
              return make_printf(k, o, new_acc, rest$1);
            }
            }(k,acc,rest$1));
        case /* String */2 :
            return make_padding(k, o, acc, fmt[1], fmt[0], (function (str) {
                          return str;
                        }));
        case /* Caml_string */3 :
            return make_padding(k, o, acc, fmt[1], fmt[0], string_to_caml_string);
        case /* Int */4 :
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int, fmt[0]);
        case /* Int32 */5 :
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int32, fmt[0]);
        case /* Nativeint */6 :
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_nativeint, fmt[0]);
        case /* Int64 */7 :
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int64, fmt[0]);
        case /* Float */8 :
            var k$1 = k;
            var o$1 = o;
            var acc$1 = acc;
            var fmt$1 = fmt[3];
            var pad = fmt[1];
            var prec = fmt[2];
            var fconv = fmt[0];
            if (typeof pad === "number") {
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv){
                  return function (p, x) {
                    var str = convert_float(fconv, p, x);
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv){
                  return function (x) {
                    var str = convert_float(fconv, -6, x);
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv));
                }
              } else {
                var p = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,p){
                return function (x) {
                  var str = convert_float(fconv, p, x);
                  return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,p));
              }
            } else if (pad.tag) {
              var padty = pad[0];
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                  return function (w, p, x) {
                    var str = fix_padding(padty, w, convert_float(fconv, p, x));
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                  return function (w, x) {
                    var str = convert_float(fconv, -6, x);
                    var str$prime = fix_padding(padty, w, str);
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str$prime
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                }
              } else {
                var p$1 = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1){
                return function (w, x) {
                  var str = fix_padding(padty, w, convert_float(fconv, p$1, x));
                  return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1));
              }
            } else {
              var w = pad[1];
              var padty$1 = pad[0];
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                  return function (p, x) {
                    var str = fix_padding(padty$1, w, convert_float(fconv, p, x));
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                  return function (x) {
                    var str = convert_float(fconv, -6, x);
                    var str$prime = fix_padding(padty$1, w, str);
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str$prime
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                }
              } else {
                var p$2 = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2){
                return function (x) {
                  var str = fix_padding(padty$1, w, convert_float(fconv, p$2, x));
                  return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2));
              }
            }
        case /* Bool */9 :
            return make_padding(k, o, acc, fmt[1], fmt[0], string_of_bool);
        case /* Flush */10 :
            _fmt = fmt[0];
            _acc = /* Acc_flush */__(7, [acc]);
            continue ;
        case /* String_literal */11 :
            _fmt = fmt[1];
            _acc = /* Acc_string_literal */__(2, [
                acc,
                fmt[0]
              ]);
            continue ;
        case /* Char_literal */12 :
            _fmt = fmt[1];
            _acc = /* Acc_char_literal */__(3, [
                acc,
                fmt[0]
              ]);
            continue ;
        case /* Format_arg */13 :
            var rest$2 = fmt[2];
            var ty = string_of_fmtty(fmt[1]);
            return (function(k,acc,rest$2,ty){
            return function (str) {
              return make_printf(k, o, /* Acc_data_string */__(4, [
                            acc,
                            ty
                          ]), rest$2);
            }
            }(k,acc,rest$2,ty));
        case /* Format_subst */14 :
            var rest$3 = fmt[2];
            var fmtty = fmt[1];
            return (function(k,acc,fmtty,rest$3){
            return function (param) {
              return make_printf(k, o, acc, concat_fmt(recast(param[0], fmtty), rest$3));
            }
            }(k,acc,fmtty,rest$3));
        case /* Alpha */15 :
            var rest$4 = fmt[0];
            return (function(k,acc,rest$4){
            return function (f, x) {
              return make_printf(k, o, /* Acc_delay */__(6, [
                            acc,
                            (function (o) {
                                return _2(f, o, x);
                              })
                          ]), rest$4);
            }
            }(k,acc,rest$4));
        case /* Theta */16 :
            var rest$5 = fmt[0];
            return (function(k,acc,rest$5){
            return function (f) {
              return make_printf(k, o, /* Acc_delay */__(6, [
                            acc,
                            f
                          ]), rest$5);
            }
            }(k,acc,rest$5));
        case /* Formatting_lit */17 :
            _fmt = fmt[1];
            _acc = /* Acc_formatting_lit */__(0, [
                acc,
                fmt[0]
              ]);
            continue ;
        case /* Formatting_gen */18 :
            var match = fmt[0];
            if (match.tag) {
              var rest$6 = fmt[1];
              var k$prime = (function(k,acc,rest$6){
              return function k$prime(koc, kacc) {
                return make_printf(k, koc, /* Acc_formatting_gen */__(1, [
                              acc,
                              /* Acc_open_box */__(1, [kacc])
                            ]), rest$6);
              }
              }(k,acc,rest$6));
              _fmt = match[0][0];
              _acc = /* End_of_acc */0;
              _k = k$prime;
              continue ;
            } else {
              var rest$7 = fmt[1];
              var k$prime$1 = (function(k,acc,rest$7){
              return function k$prime$1(koc, kacc) {
                return make_printf(k, koc, /* Acc_formatting_gen */__(1, [
                              acc,
                              /* Acc_open_tag */__(0, [kacc])
                            ]), rest$7);
              }
              }(k,acc,rest$7));
              _fmt = match[0][0];
              _acc = /* End_of_acc */0;
              _k = k$prime$1;
              continue ;
            }
        case /* Reader */19 :
            throw [
                  assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    1525,
                    4
                  ]
                ];
        case /* Scan_char_set */20 :
            var rest$8 = fmt[2];
            var new_acc = /* Acc_invalid_arg */__(8, [
                acc,
                "Printf: bad conversion %["
              ]);
            return (function(k,rest$8,new_acc){
            return function (param) {
              return make_printf(k, o, new_acc, rest$8);
            }
            }(k,rest$8,new_acc));
        case /* Scan_get_counter */21 :
            var rest$9 = fmt[1];
            return (function(k,acc,rest$9){
            return function (n) {
              var new_acc_001 = caml_format_int("%u", n);
              var new_acc = /* Acc_data_string */__(4, [
                  acc,
                  new_acc_001
                ]);
              return make_printf(k, o, new_acc, rest$9);
            }
            }(k,acc,rest$9));
        case /* Scan_next_char */22 :
            var rest$10 = fmt[0];
            return (function(k,acc,rest$10){
            return function (c) {
              var new_acc = /* Acc_data_char */__(5, [
                  acc,
                  c
                ]);
              return make_printf(k, o, new_acc, rest$10);
            }
            }(k,acc,rest$10));
        case /* Ignored_param */23 :
            return make_ignored_param(k, o, acc, fmt[0], fmt[1]);
        case /* Custom */24 :
            return make_custom(k, o, acc, fmt[2], fmt[0], _1(fmt[1], /* () */0));
        
      }
    }
  }}

function make_ignored_param(k, o, acc, ign, fmt) {
  if (typeof ign === "number") {
    if (ign === /* Ignored_reader */2) {
      throw [
            assert_failure,
            /* tuple */[
              "camlinternalFormat.ml",
              1593,
              39
            ]
          ];
    } else {
      return make_invalid_arg(k, o, acc, fmt);
    }
  } else if (ign.tag === /* Ignored_format_subst */9) {
    return make_from_fmtty(k, o, acc, ign[1], fmt);
  } else {
    return make_invalid_arg(k, o, acc, fmt);
  }
}

function make_from_fmtty(k, o, acc, fmtty, fmt) {
  if (typeof fmtty === "number") {
    return make_invalid_arg(k, o, acc, fmt);
  } else {
    switch (fmtty.tag | 0) {
      case /* Char_ty */0 :
          var rest = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest, fmt);
            });
      case /* String_ty */1 :
          var rest$1 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$1, fmt);
            });
      case /* Int_ty */2 :
          var rest$2 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$2, fmt);
            });
      case /* Int32_ty */3 :
          var rest$3 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$3, fmt);
            });
      case /* Nativeint_ty */4 :
          var rest$4 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$4, fmt);
            });
      case /* Int64_ty */5 :
          var rest$5 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$5, fmt);
            });
      case /* Float_ty */6 :
          var rest$6 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$6, fmt);
            });
      case /* Bool_ty */7 :
          var rest$7 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$7, fmt);
            });
      case /* Format_arg_ty */8 :
          var rest$8 = fmtty[1];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$8, fmt);
            });
      case /* Format_subst_ty */9 :
          var rest$9 = fmtty[2];
          var ty = trans(symm(fmtty[0]), fmtty[1]);
          return (function (param) {
              return make_from_fmtty(k, o, acc, concat_fmtty(ty, rest$9), fmt);
            });
      case /* Alpha_ty */10 :
          var rest$10 = fmtty[0];
          return (function (param, param$1) {
              return make_from_fmtty(k, o, acc, rest$10, fmt);
            });
      case /* Theta_ty */11 :
          var rest$11 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$11, fmt);
            });
      case /* Any_ty */12 :
          var rest$12 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$12, fmt);
            });
      case /* Reader_ty */13 :
          throw [
                assert_failure,
                /* tuple */[
                  "camlinternalFormat.ml",
                  1616,
                  31
                ]
              ];
      case /* Ignored_reader_ty */14 :
          throw [
                assert_failure,
                /* tuple */[
                  "camlinternalFormat.ml",
                  1617,
                  31
                ]
              ];
      
    }
  }
}

function make_invalid_arg(k, o, acc, fmt) {
  return make_printf(k, o, /* Acc_invalid_arg */__(8, [
                acc,
                "Printf: bad conversion %_"
              ]), fmt);
}

function make_padding(k, o, acc, fmt, pad, trans) {
  if (typeof pad === "number") {
    return (function (x) {
        var new_acc_001 = _1(trans, x);
        var new_acc = /* Acc_data_string */__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  } else if (pad.tag) {
    var padty = pad[0];
    return (function (w, x) {
        var new_acc_001 = fix_padding(padty, w, _1(trans, x));
        var new_acc = /* Acc_data_string */__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  } else {
    var width = pad[1];
    var padty$1 = pad[0];
    return (function (x) {
        var new_acc_001 = fix_padding(padty$1, width, _1(trans, x));
        var new_acc = /* Acc_data_string */__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  }
}

function make_int_padding_precision(k, o, acc, fmt, pad, prec, trans, iconv) {
  if (typeof pad === "number") {
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (p, x) {
            var str = fix_int_precision(p, _2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (x) {
            var str = _2(trans, iconv, x);
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p = prec[0];
      return (function (x) {
          var str = fix_int_precision(p, _2(trans, iconv, x));
          return make_printf(k, o, /* Acc_data_string */__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  } else if (pad.tag) {
    var padty = pad[0];
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (w, p, x) {
            var str = fix_padding(padty, w, fix_int_precision(p, _2(trans, iconv, x)));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (w, x) {
            var str = fix_padding(padty, w, _2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p$1 = prec[0];
      return (function (w, x) {
          var str = fix_padding(padty, w, fix_int_precision(p$1, _2(trans, iconv, x)));
          return make_printf(k, o, /* Acc_data_string */__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  } else {
    var w = pad[1];
    var padty$1 = pad[0];
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (p, x) {
            var str = fix_padding(padty$1, w, fix_int_precision(p, _2(trans, iconv, x)));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (x) {
            var str = fix_padding(padty$1, w, _2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p$2 = prec[0];
      return (function (x) {
          var str = fix_padding(padty$1, w, fix_int_precision(p$2, _2(trans, iconv, x)));
          return make_printf(k, o, /* Acc_data_string */__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  }
}

function make_custom(k, o, acc, rest, arity, f) {
  if (arity) {
    var arity$1 = arity[0];
    return (function (x) {
        return make_custom(k, o, acc, rest, arity$1, _1(f, x));
      });
  } else {
    return make_printf(k, o, /* Acc_data_string */__(4, [
                  acc,
                  f
                ]), rest);
  }
}

function strput_acc(b, _acc) {
  while(true) {
    var acc = _acc;
    var exit = 0;
    if (typeof acc === "number") {
      return /* () */0;
    } else {
      switch (acc.tag | 0) {
        case /* Acc_formatting_lit */0 :
            var s = string_of_formatting_lit(acc[1]);
            strput_acc(b, acc[0]);
            return add_string(b, s);
        case /* Acc_formatting_gen */1 :
            var match = acc[1];
            var p = acc[0];
            strput_acc(b, p);
            if (match.tag) {
              add_string(b, "@[");
              _acc = match[0];
              continue ;
            } else {
              add_string(b, "@{");
              _acc = match[0];
              continue ;
            }
        case /* Acc_string_literal */2 :
        case /* Acc_data_string */4 :
            exit = 1;
            break;
        case /* Acc_char_literal */3 :
        case /* Acc_data_char */5 :
            exit = 2;
            break;
        case /* Acc_delay */6 :
            strput_acc(b, acc[0]);
            return add_string(b, _1(acc[1], /* () */0));
        case /* Acc_flush */7 :
            _acc = acc[0];
            continue ;
        case /* Acc_invalid_arg */8 :
            strput_acc(b, acc[0]);
            throw [
                  invalid_argument,
                  acc[1]
                ];
        
      }
    }
    switch (exit) {
      case 1 :
          strput_acc(b, acc[0]);
          return add_string(b, acc[1]);
      case 2 :
          strput_acc(b, acc[0]);
          return add_char(b, acc[1]);
      
    }
  }}
/* No side effect */

function ksprintf(k, param) {
  var k$prime = function (param, acc) {
    var buf = create$2(64);
    strput_acc(buf, acc);
    return _1(k, contents(buf));
  };
  return make_printf(k$prime, /* () */0, /* End_of_acc */0, param[0]);
}

function sprintf(fmt) {
  return ksprintf((function (s) {
                return s;
              }), fmt);
}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

var key_event = Decoder.map5((function (key_code, shift, ctrl, alt, meta) {
        return {
                key_code: key_code,
                shift: shift,
                ctrl: ctrl,
                alt: alt,
                meta: meta
              };
      }), Decoder.field("keyCode", Decoder.$$int), Decoder.field("shiftKey", Decoder.bool), Decoder.field("ctrlKey", Decoder.bool), Decoder.field("altKey", Decoder.bool), Decoder.field("metaKey", Decoder.bool));

function registerGlobal(name, key, tagger) {
  var enableCall = function (callbacks_base) {
    var callbacks = {
      contents: callbacks_base
    };
    var fn = function (ev) {
      var match = Decoder.decodeEvent(key_event, ev);
      if (match.tag) {
        return ;
      } else {
        return some(_1(tagger, match[0]));
      }
    };
    var handler = /* EventHandlerCallback */__(0, [
        key,
        fn
      ]);
    var elem = document;
    var cache = eventHandler_Register(callbacks, elem, name, handler);
    return (function (param) {
        eventHandler_Unregister(elem, name, cache);
        return /* () */0;
      });
  };
  return registration(key, enableCall);
}

function downs($staropt$star, tagger) {
  var key = $staropt$star !== undefined ? $staropt$star : "";
  return registerGlobal("keydown", key, tagger);
}
/* key_event Not a pure module */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

function init(param) {
  return /* tuple */[
          {
            size: {
              x: 3,
              y: 3
            },
            board: make_matrix(3, 3, /* Dead */0),
            previous: /* [] */0,
            seeds: /* :: */[
              {
                name: "Glisseur 1",
                str: "[[0,1,0],[1,0,0],[1,1,1]]"
              },
              /* :: */[
                {
                  name: "Mathusalem 1",
                  str: "[[0,0,1,0],[0,1,0,0],[1,1,1,0]]"
                },
                /* [] */0
              ]
            ]
          },
          /* NoCmd */0
        ];
}

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
          var match = state.previous;
          previous = match ? match[1] : /* [] */0;
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
  var size_x = board.length;
  var size_y = board.length === 0 ? 0 : caml_array_get(board, 0).length;
  var size = {
    x: size_x,
    y: size_y
  };
  return /* tuple */[
          {
            size: size,
            board: board,
            previous: previous,
            seeds: seeds
          },
          /* NoCmd */0
        ];
}

function view_button(title, msg) {
  return button(undefined, undefined, /* :: */[
              onClick(msg),
              /* :: */[
                class$prime("flex-1"),
                /* [] */0
              ]
            ], /* :: */[
              text(title),
              /* [] */0
            ]);
}

function view_link(title, msg) {
  return p(undefined, undefined, /* [] */0, /* :: */[
              a(undefined, undefined, /* :: */[
                    href("#"),
                    /* :: */[
                      onClick(msg),
                      /* [] */0
                    ]
                  ], /* :: */[
                    text(title),
                    /* [] */0
                  ]),
              /* [] */0
            ]);
}

function view(model) {
  return div$1(undefined, undefined, /* :: */[
              id$1("container"),
              /* :: */[
                class$prime("flex"),
                /* [] */0
              ]
            ], /* :: */[
              div$1(undefined, undefined, /* :: */[
                    id$1("left-side"),
                    /* :: */[
                      class$prime("flex-1"),
                      /* [] */0
                    ]
                  ], map$1((function (s) {
                          return view_link(s.name, /* SetBoardFromSeed */__(4, [s.str]));
                        }), model.seeds)),
              /* :: */[
                div$1(undefined, undefined, /* :: */[
                      id$1("center"),
                      /* :: */[
                        class$prime("flex-1"),
                        /* [] */0
                      ]
                    ], /* :: */[
                      div$1(undefined, undefined, /* :: */[
                            class$prime("flex"),
                            /* [] */0
                          ], /* :: */[
                            div$1(undefined, undefined, /* :: */[
                                  class$prime("flex-1 centered"),
                                  /* :: */[
                                    id$1("size"),
                                    /* [] */0
                                  ]
                                ], /* :: */[
                                  p(undefined, undefined, /* [] */0, /* :: */[
                                        text(_2(sprintf(/* Format */[
                                                      /* String_literal */__(11, [
                                                          "Size : ",
                                                          /* Int */__(4, [
                                                              /* Int_d */0,
                                                              /* No_padding */0,
                                                              /* No_precision */0,
                                                              /* Char_literal */__(12, [
                                                                  /* "x" */120,
                                                                  /* Int */__(4, [
                                                                      /* Int_d */0,
                                                                      /* No_padding */0,
                                                                      /* No_precision */0,
                                                                      /* End_of_format */0
                                                                    ])
                                                                ])
                                                            ])
                                                        ]),
                                                      "Size : %dx%d"
                                                    ]), model.size.x, model.size.y)),
                                        /* [] */0
                                      ]),
                                  /* [] */0
                                ]),
                            /* :: */[
                              div$1(undefined, undefined, /* :: */[
                                    class$prime("flex-1 centered"),
                                    /* :: */[
                                      id$1("population"),
                                      /* [] */0
                                    ]
                                  ], /* :: */[
                                    p(undefined, undefined, /* [] */0, /* :: */[
                                          text("My Pop"),
                                          /* [] */0
                                        ]),
                                    /* [] */0
                                  ]),
                              /* [] */0
                            ]
                          ]),
                      /* :: */[
                        div$1(undefined, undefined, /* :: */[
                              class$prime("board"),
                              /* [] */0
                            ], draw_html(model)),
                        /* :: */[
                          div$1(undefined, undefined, /* :: */[
                                class$prime("flex"),
                                /* [] */0
                              ], /* :: */[
                                view_button("Reset", /* Reset */3),
                                /* :: */[
                                  view_button("Previous", /* Previous */2),
                                  /* :: */[
                                    view_button("Next", /* Next */1),
                                    /* [] */0
                                  ]
                                ]
                              ]),
                          /* [] */0
                        ]
                      ]
                    ]),
                /* :: */[
                  div$1(undefined, undefined, /* :: */[
                        id$1("right-side"),
                        /* :: */[
                          class$prime("flex-1"),
                          /* [] */0
                        ]
                      ], /* :: */[
                        div$1(undefined, undefined, /* :: */[
                              class$prime("flex"),
                              /* [] */0
                            ], /* :: */[
                              span(undefined, undefined, /* :: */[
                                    class$prime("flex-1"),
                                    /* [] */0
                                  ], /* :: */[
                                    text("x = "),
                                    /* [] */0
                                  ]),
                              /* :: */[
                                input$prime(undefined, undefined, /* :: */[
                                      class$prime("flex-1"),
                                      /* :: */[
                                        type$prime("text"),
                                        /* :: */[
                                          value$1(String(model.size.x)),
                                          /* :: */[
                                            onInput(undefined, (function (x) {
                                                    return /* SetX */__(6, [caml_int_of_string(x)]);
                                                  })),
                                            /* [] */0
                                          ]
                                        ]
                                      ]
                                    ], /* [] */0),
                                /* :: */[
                                  span(undefined, undefined, /* :: */[
                                        class$prime("flex-1"),
                                        /* [] */0
                                      ], /* :: */[
                                        text("y = "),
                                        /* [] */0
                                      ]),
                                  /* :: */[
                                    input$prime(undefined, undefined, /* :: */[
                                          class$prime("flex-1"),
                                          /* :: */[
                                            type$prime("text"),
                                            /* :: */[
                                              value$1(String(model.size.y)),
                                              /* :: */[
                                                onInput(undefined, (function (y) {
                                                        return /* SetY */__(7, [caml_int_of_string(y)]);
                                                      })),
                                                /* [] */0
                                              ]
                                            ]
                                          ]
                                        ], /* [] */0),
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ]),
                        /* [] */0
                      ]),
                  /* [] */0
                ]
              ]
            ]);
}

function subscriptions(param) {
  return downs(undefined, (function (k) {
                return /* KeyPressed */__(8, [k]);
              }));
}

function partial_arg_shutdown(param) {
  return /* NoCmd */0;
}

var partial_arg = {
  init: init,
  update: update$2,
  view: view,
  subscriptions: subscriptions,
  shutdown: partial_arg_shutdown
};

function main(param, param$1) {
  return program(partial_arg, param, param$1);
}
/* Draw Not a pure module */

export { init, main, subscriptions, update$2 as update, view, view_button, view_link };
