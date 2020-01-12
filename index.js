(function () {
  'use strict';

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

  function caml_array_blit(a1, i1, a2, i2, len) {
    if (i2 <= i1) {
      for(var j = 0 ,j_finish = len - 1 | 0; j <= j_finish; ++j){
        a2[j + i2 | 0] = a1[j + i1 | 0];
      }
      return /* () */0;
    } else {
      for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
        a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
      }
      return /* () */0;
    }
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

  function rev_map(f, l) {
    var _accu = /* [] */0;
    var _param = l;
    while(true) {
      var param = _param;
      var accu = _accu;
      if (param) {
        _param = param[1];
        _accu = /* :: */[
          _1(f, param[0]),
          accu
        ];
        continue ;
      } else {
        return accu;
      }
    }}

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

  function find(p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var x = param[0];
        if (_1(p, x)) {
          return x;
        } else {
          _param = param[1];
          continue ;
        }
      } else {
        throw not_found;
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

  function make_matrix(sx, sy, init) {
    var res = caml_make_vect(sx, /* array */[]);
    for(var x = 0 ,x_finish = sx - 1 | 0; x <= x_finish; ++x){
      res[x] = caml_make_vect(sy, init);
    }
    return res;
  }

  function blit(a1, ofs1, a2, ofs2, len) {
    if (len < 0 || ofs1 < 0 || ofs1 > (a1.length - len | 0) || ofs2 < 0 || ofs2 > (a2.length - len | 0)) {
      throw [
            invalid_argument,
            "Array.blit"
          ];
    }
    return caml_array_blit(a1, ofs1, a2, ofs2, len);
  }

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

  function exists(p, a) {
    var n = a.length;
    var _i = 0;
    while(true) {
      var i = _i;
      if (i === n) {
        return false;
      } else if (_1(p, a[i])) {
        return true;
      } else {
        _i = i + 1 | 0;
        continue ;
      }
    }}

  var Bottom = create("Array.Bottom");
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

  function to_string(b) {
    return bytes_to_string(copy(b));
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
  /* No side effect */

  function make$1(n, c) {
    return bytes_to_string(make(n, c));
  }

  function sub$1(s, ofs, len) {
    return bytes_to_string(sub(bytes_of_string(s), ofs, len));
  }

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

  function split_on_char(sep, s) {
    var r = /* [] */0;
    var j = s.length;
    for(var i = s.length - 1 | 0; i >= 0; --i){
      if (s.charCodeAt(i) === sep) {
        r = /* :: */[
          sub$1(s, i + 1 | 0, (j - i | 0) - 1 | 0),
          r
        ];
        j = i;
      }
      
    }
    return /* :: */[
            sub$1(s, 0, j),
            r
          ];
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

  function explode(s) {
    var _i = s.length - 1 | 0;
    var _l = /* [] */0;
    while(true) {
      var l = _l;
      var i = _i;
      if (i < 0) {
        return l;
      } else {
        _l = /* :: */[
          get(s, i),
          l
        ];
        _i = i - 1 | 0;
        continue ;
      }
    }}

  function implode(l) {
    var res = caml_create_bytes(length(l));
    var imp = function (_i, _param) {
      while(true) {
        var param = _param;
        var i = _i;
        if (param) {
          res[i] = param[0];
          _param = param[1];
          _i = i + 1 | 0;
          continue ;
        } else {
          return res;
        }
      }  };
    return to_string(imp(0, l));
  }

  function parse_int(l) {
    var f = function (_acc, _l2) {
      while(true) {
        var l2 = _l2;
        var acc = _acc;
        if (l2) {
          var i = l2[0];
          if (i > 57 || i < 48) {
            return /* tuple */[
                    l2,
                    rev(acc)
                  ];
          } else {
            _l2 = l2[1];
            _acc = /* :: */[
              i,
              acc
            ];
            continue ;
          }
        } else {
          return /* tuple */[
                  l2,
                  rev(acc)
                ];
        }
      }  };
    var match = f(/* [] */0, l);
    return /* tuple */[
            match[0],
            caml_int_of_string(implode(match[1]))
          ];
  }

  function parse_header(_o, _l) {
    while(true) {
      var l = _l;
      var o = _o;
      var match = o.state;
      var exit = 0;
      if (l) {
        var switcher = l[0] - 32 | 0;
        if (switcher > 12 || switcher < 0) {
          if (switcher !== 29) {
            exit = 2;
          } else {
            _l = l[1];
            continue ;
          }
        } else if (switcher > 11 || switcher < 1) {
          _l = l[1];
          continue ;
        } else {
          exit = 2;
        }
      } else {
        exit = 2;
      }
      if (exit === 2) {
        switch (match) {
          case /* FindX */0 :
              if (l && l[0] === 120) {
                _l = l[1];
                _o = {
                  state: /* ParseX */1,
                  line: o.line,
                  grid: o.grid,
                  x: o.x,
                  y: o.y
                };
                continue ;
              }
              break;
          case /* ParseX */1 :
              if (l && (l[0] - 48 >>> 0) <= 9) {
                var match$1 = parse_int(l);
                _l = match$1[0];
                _o = {
                  state: /* FindY */2,
                  line: o.line,
                  grid: o.grid,
                  x: match$1[1],
                  y: o.y
                };
                continue ;
              }
              break;
          case /* FindY */2 :
              if (l && l[0] === 121) {
                _l = l[1];
                _o = {
                  state: /* ParseY */3,
                  line: o.line,
                  grid: o.grid,
                  x: o.x,
                  y: o.y
                };
                continue ;
              }
              break;
          case /* ParseY */3 :
              if (l && (l[0] - 48 >>> 0) <= 9) {
                var match$2 = parse_int(l);
                _l = match$2[0];
                _o = {
                  state: /* Reading */4,
                  line: o.line,
                  grid: o.grid,
                  x: o.x,
                  y: match$2[1]
                };
                continue ;
              }
              break;
          case /* Reading */4 :
              return o;
          
        }
      }
      if (l) {
        throw [
              invalid_argument,
              make$1(1, l[0])
            ];
      }
      throw [
            failure,
            "Incomplete header"
          ];
    }}

  function parse_map(o, l) {
    var _n = 1;
    var _o = o;
    var _l = l;
    while(true) {
      var l$1 = _l;
      var o$1 = _o;
      var n = _n;
      if (l$1) {
        var c = l$1[0];
        if (c >= 48) {
          if (c !== 98) {
            if (c !== 111) {
              if (c >= 58) {
                throw [
                      invalid_argument,
                      make$1(1, c)
                    ];
              }
              var match = parse_int(l$1);
              _l = match[0];
              _n = match[1];
              continue ;
            } else {
              var line = $at(init(n, (function (param) {
                          return /* Alive */1;
                        })), o$1.line);
              _l = l$1[1];
              _o = {
                state: o$1.state,
                line: line,
                grid: o$1.grid,
                x: o$1.x,
                y: o$1.y
              };
              _n = 1;
              continue ;
            }
          } else {
            var line$1 = $at(init(n, (function (param) {
                        return /* Dead */0;
                      })), o$1.line);
            _l = l$1[1];
            _o = {
              state: o$1.state,
              line: line$1,
              grid: o$1.grid,
              x: o$1.x,
              y: o$1.y
            };
            _n = 1;
            continue ;
          }
        } else if (c !== 33) {
          if (c !== 36) {
            throw [
                  invalid_argument,
                  make$1(1, c)
                ];
          }
          var grid_000 = o$1.line;
          var grid_001 = o$1.grid;
          var grid = /* :: */[
            grid_000,
            grid_001
          ];
          _l = l$1[1];
          _o = {
            state: o$1.state,
            line: /* [] */0,
            grid: grid,
            x: o$1.x,
            y: o$1.y
          };
          _n = 1;
          continue ;
        } else {
          _l = l$1[1];
          _o = {
            state: /* End */5,
            line: o$1.line,
            grid: o$1.grid,
            x: o$1.x,
            y: o$1.y
          };
          _n = 1;
          continue ;
        }
      } else {
        return o$1;
      }
    }}

  function parse_line(o, s) {
    var l = explode(s);
    if (l === /* [] */0) {
      return o;
    } else {
      var c = hd(l);
      if (c === /* "#" */35) {
        return o;
      } else if (o.state === /* FindX */0) {
        return parse_header(o, l);
      } else {
        return parse_map(o, l);
      }
    }
  }

  function parse_lines(_o, _ss) {
    while(true) {
      var ss = _ss;
      var o = _o;
      if (ss) {
        _ss = ss[1];
        _o = parse_line(o, ss[0]);
        continue ;
      } else {
        return o;
      }
    }}

  function to_array(o) {
    o.x - length(o.grid) | 0;
    var grid = o.grid;
    var partial_arg = o.x;
    var grid2 = map((function (param) {
            var n = partial_arg;
            var l = param;
            var n2 = length(l);
            if (n2 < n) {
              return append(l, init(n - n2 | 0, (function (param) {
                                return /* Dead */0;
                              })));
            } else {
              return l;
            }
          }), grid);
    var grid3 = map(rev, grid2);
    return of_list(rev_map(of_list, grid3));
  }

  function parse(text) {
    var ss = split_on_char(/* "\n" */10, text);
    return to_array(parse_lines({
                    state: /* FindX */0,
                    line: /* [] */0,
                    grid: /* [] */0,
                    x: 0,
                    y: 0
                  }, ss));
  }
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
                                concat("", map((function (p) {
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
                                                                  concat(";", map((function (param) {
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
                                    concat("", map(renderToHtmlString, param[5])),
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
      var match = patchVNodesOnElems_Properties(callbacks, newChild, map((function (param) {
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
            var match = patchVNodesOnElems_Properties(callbacks, newChild, map((function (param) {
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

  function msg(msg$1) {
    return /* EnqueueCall */__(2, [(function (callbacks) {
                  return _1(callbacks.contents.enqueue, msg$1);
                })]);
  }

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

  function find$1(x, _param) {
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
    find: find$1,
    find_opt: find_opt,
    find_first: find_first,
    find_first_opt: find_first_opt,
    find_last: find_last,
    find_last_opt: find_last_opt,
    map: map$2,
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
                    var match = get$1(o, k);
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

  function text(str) {
    return /* Text */__(1, [str]);
  }

  function div($staropt$star, $staropt$star$1, props, nodes) {
    var key = $staropt$star !== undefined ? $staropt$star : "";
    var unique = $staropt$star$1 !== undefined ? $staropt$star$1 : "";
    return fullnode("", "div", key, unique, props, nodes);
  }

  function span($staropt$star, $staropt$star$1, props, nodes) {
    var key = $staropt$star !== undefined ? $staropt$star : "";
    var unique = $staropt$star$1 !== undefined ? $staropt$star$1 : "";
    return fullnode("", "span", key, unique, props, nodes);
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

  function select($staropt$star, $staropt$star$1, props, nodes) {
    var key = $staropt$star !== undefined ? $staropt$star : "";
    var unique = $staropt$star$1 !== undefined ? $staropt$star$1 : "";
    return fullnode("", "select", key, unique, props, nodes);
  }

  function option$prime($staropt$star, $staropt$star$1, props, nodes) {
    var key = $staropt$star !== undefined ? $staropt$star : "";
    var unique = $staropt$star$1 !== undefined ? $staropt$star$1 : "";
    return fullnode("", "option", key, unique, props, nodes);
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

  function onChangeOpt($staropt$star, msg) {
    var key = $staropt$star !== undefined ? $staropt$star : "";
    return onCB("change", key, (function (ev) {
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

  function onChange($staropt$star, msg) {
    var key = $staropt$star !== undefined ? $staropt$star : "";
    return onChangeOpt(key, (function (ev) {
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

  function max(value) {
    return /* Attribute */__(1, [
              "",
              "max",
              value
            ]);
  }

  function min(value) {
    return /* Attribute */__(1, [
              "",
              "min",
              value
            ]);
  }

  function step(value) {
    return /* Attribute */__(1, [
              "",
              "step",
              value
            ]);
  }

  function disabled(b) {
    if (b) {
      return /* Attribute */__(1, [
                "",
                "disabled",
                "true"
              ]);
    } else {
      return /* NoProp */0;
    }
  }

  function selected(b) {
    if (b) {
      return /* Attribute */__(1, [
                "",
                "selected",
                "true"
              ]);
    } else {
      return /* NoProp */0;
    }
  }

  function acceptCharset(c) {
    return /* Attribute */__(1, [
              "",
              "accept-charset",
              c
            ]);
  }

  function rel(value) {
    return /* Attribute */__(1, [
              "",
              "rel",
              value
            ]);
  }

  var Attributes = {
    max: max,
    min: min,
    step: step,
    disabled: disabled,
    selected: selected,
    acceptCharset: acceptCharset,
    rel: rel
  };
  /* targetValue Not a pure module */

  // Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

  function draw_html(state) {
    var draw_line = function (i, line) {
      return div(undefined, undefined, /* :: */[
                  class$prime("flex-1 flex"),
                  /* [] */0
                ], to_list(mapi((function (param, param$1) {
                            var i$1 = i;
                            var j = param;
                            var e = param$1;
                            return div(undefined, undefined, /* :: */[
                                        class$prime(e === /* Alive */1 ? "alive" : "dead"),
                                        /* :: */[
                                          onClick(/* Flip */__(0, [
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

  function lifeData(param_0) {
    return /* LifeData */__(10, [param_0]);
  }

  var rule_list = /* :: */[
    /* tuple */[
      "B3S23",
      /* B3S23 */0,
      0
    ],
    /* :: */[
      /* tuple */[
        "B36S23",
        /* B36S23 */1,
        1
      ],
      /* [] */0
    ]
  ];

  var seed_list = /* :: */[
    /* tuple */[
      "Test",
      "test.rle"
    ],
    /* :: */[
      /* tuple */[
        "Elephant",
        "elephant.rle"
      ],
      /* :: */[
        /* tuple */[
          "UFO",
          "ufo.rle"
        ],
        /* :: */[
          /* tuple */[
            "Bob",
            "bob.rle"
          ],
          /* [] */0
        ]
      ]
    ]
  ];
  /* No side effect */

  // Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

  var make$2 = make_matrix;

  function width(a) {
    return a.length;
  }

  function height$1(a) {
    var width = a.length;
    if (width === 0) {
      return 0;
    } else {
      return caml_array_get(a, 0).length;
    }
  }

  function mapij(f, matrix) {
    return mapi((function (i, row) {
                  return mapi((function (j, e) {
                                return _3(f, i, j, e);
                              }), row);
                }), matrix);
  }

  function findi(f, a) {
    var f$1 = f;
    var a$1 = a;
    var _i = 0;
    while(true) {
      var i = _i;
      if (i >= a$1.length) {
        throw not_found;
      }
      if (exists(f$1, caml_array_get(a$1, i))) {
        return i;
      } else {
        _i = i + 1 | 0;
        continue ;
      }
    }}

  function findri(f, a) {
    var f$1 = f;
    var a$1 = a;
    var _i = a.length - 1 | 0;
    while(true) {
      var i = _i;
      if (i < 0) {
        throw not_found;
      }
      if (exists(f$1, caml_array_get(a$1, i))) {
        return i;
      } else {
        _i = i - 1 | 0;
        continue ;
      }
    }}

  function vfindi(f, a) {
    if (a.length === 0) {
      throw not_found;
    }
    var length = caml_array_get(a, 0).length;
    var f$1 = f;
    var a$1 = a;
    var _i = 0;
    while(true) {
      var i = _i;
      if (i >= length) {
        throw not_found;
      }
      var found = false;
      for(var j = 0 ,j_finish = a$1.length - 1 | 0; j <= j_finish; ++j){
        if (_1(f$1, caml_array_get(caml_array_get(a$1, j), i))) {
          found = true;
        }
        
      }
      if (found) {
        return i;
      } else {
        _i = i + 1 | 0;
        continue ;
      }
    }}

  function vfindri(f, a) {
    if (a.length === 0) {
      throw not_found;
    }
    var length = caml_array_get(a, 0).length;
    var f$1 = f;
    var a$1 = a;
    var _i = length - 1 | 0;
    while(true) {
      var i = _i;
      if (i < 0) {
        throw not_found;
      }
      var found = false;
      for(var j = 0 ,j_finish = a$1.length - 1 | 0; j <= j_finish; ++j){
        if (_1(f$1, caml_array_get(caml_array_get(a$1, j), i))) {
          found = true;
        }
        
      }
      if (found) {
        return i;
      } else {
        _i = i - 1 | 0;
        continue ;
      }
    }}

  function blit$1(m1, x1, y1, m2, x2, y2, w, h) {
    for(var i = 0 ,i_finish = w - 1 | 0; i <= i_finish; ++i){
      blit(caml_array_get(m1, x1 + i | 0), y1, caml_array_get(m2, x2 + i | 0), y2, h);
    }
    return /* () */0;
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

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

  function seed_link(param) {
    return div(undefined, undefined, /* [] */0, /* :: */[
                a(undefined, undefined, /* :: */[
                      href("#"),
                      /* :: */[
                        onClick(/* Fetch */__(9, [param[1]])),
                        /* [] */0
                      ]
                    ], /* :: */[
                      text(param[0]),
                      /* [] */0
                    ]),
                /* [] */0
              ]);
  }

  function select_rule(model) {
    var rules_option = function (param) {
      return option$prime(undefined, undefined, /* :: */[
                  value$1(String(param[2])),
                  /* :: */[
                    Attributes.selected(model.rule === param[1]),
                    /* [] */0
                  ]
                ], /* :: */[
                  text(param[0]),
                  /* [] */0
                ]);
    };
    return select(undefined, undefined, /* :: */[
                onChange(undefined, (function (v) {
                        var i = caml_int_of_string(v);
                        var match = find((function (param) {
                                return i === param[2];
                              }), rule_list);
                        return /* SetRule */__(7, [match[1]]);
                      })),
                /* [] */0
              ], map(rules_option, rule_list));
  }

  function params_form(model) {
    return div(undefined, undefined, /* :: */[
                class$prime("flex"),
                /* [] */0
              ], /* :: */[
                select_rule(model),
                /* :: */[
                  span(undefined, undefined, /* :: */[
                        class$prime("label-i"),
                        /* [] */0
                      ], /* :: */[
                        text("x = "),
                        /* [] */0
                      ]),
                  /* :: */[
                    input$prime(undefined, undefined, /* :: */[
                          type$prime("text"),
                          /* :: */[
                            class$prime("small-i"),
                            /* :: */[
                              value$1(String(width(model.board))),
                              /* :: */[
                                onInput(undefined, (function (x) {
                                        return /* Resize */__(4, [
                                                  caml_int_of_string(x),
                                                  height$1(model.board)
                                                ]);
                                      })),
                                /* [] */0
                              ]
                            ]
                          ]
                        ], /* [] */0),
                    /* :: */[
                      span(undefined, undefined, /* :: */[
                            class$prime("label-i"),
                            /* [] */0
                          ], /* :: */[
                            text("y = "),
                            /* [] */0
                          ]),
                      /* :: */[
                        input$prime(undefined, undefined, /* :: */[
                              type$prime("text"),
                              /* :: */[
                                class$prime("small-i"),
                                /* :: */[
                                  value$1(String(height$1(model.board))),
                                  /* :: */[
                                    onInput(undefined, (function (y) {
                                            return /* Resize */__(4, [
                                                      width(model.board),
                                                      caml_int_of_string(y)
                                                    ]);
                                          })),
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ], /* [] */0),
                        /* :: */[
                          view_button("Resize", /* Clamp */5),
                          /* :: */[
                            model.auto_clamp ? view_button("Auto: On", /* ToggleAutoClamp */4) : view_button("Auto: Off", /* ToggleAutoClamp */4),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]);
  }

  function view(model) {
    return div(undefined, undefined, /* :: */[
                id$1("container"),
                /* :: */[
                  class$prime("flex"),
                  /* [] */0
                ]
              ], /* :: */[
                div(undefined, undefined, /* :: */[
                      id$1("left-side"),
                      /* [] */0
                    ], /* :: */[
                      params_form(model),
                      /* :: */[
                        div(undefined, undefined, /* [] */0, map(seed_link, seed_list)),
                        /* [] */0
                      ]
                    ]),
                /* :: */[
                  div(undefined, undefined, /* :: */[
                        id$1("center"),
                        /* [] */0
                      ], /* :: */[
                        div(undefined, undefined, /* :: */[
                              class$prime("board"),
                              /* [] */0
                            ], draw_html(model)),
                        /* :: */[
                          div(undefined, undefined, /* :: */[
                                class$prime("flex"),
                                /* [] */0
                              ], /* :: */[
                                view_button("Reset", /* Reset */1),
                                /* :: */[
                                  view_button("Previous", /* Previous */3),
                                  /* :: */[
                                    view_button("Next", /* Next */2),
                                    /* [] */0
                                  ]
                                ]
                              ]),
                          /* [] */0
                        ]
                      ]),
                  /* [] */0
                ]
              ]);
  }
  /* Draw Not a pure module */

  // Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

  function flip(i, j, board) {
    return mapij((function (i2, j2, e) {
                  if (i === i2 && j === j2) {
                    if (e) {
                      return /* Dead */0;
                    } else {
                      return /* Alive */1;
                    }
                  } else {
                    return e;
                  }
                }), board);
  }

  function reset(board) {
    return make$2(width(board), height$1(board), /* Dead */0);
  }

  function resize(board, x, y) {
    var w = width(board);
    var h = height$1(board);
    var a = make$2(x, y, /* Dead */0);
    blit$1(board, 0, 0, a, 0, 0, x < w ? x : w, y < h ? y : h);
    return a;
  }

  function clamp(board) {
    var is_alive = function (param) {
      return /* Alive */1 === param;
    };
    var match;
    try {
      match = /* tuple */[
        findi(is_alive, board),
        findri(is_alive, board),
        vfindi(is_alive, board),
        vfindri(is_alive, board)
      ];
    }
    catch (exn){
      if (exn === not_found) {
        match = /* tuple */[
          0,
          0,
          0,
          0
        ];
      } else {
        throw exn;
      }
    }
    var y1 = match[2];
    var x1 = match[0];
    var w = match[1] - x1 | 0;
    var h = match[3] - y1 | 0;
    var a = make_matrix(w + 3 | 0, h + 3 | 0, /* Dead */0);
    blit$1(board, x1, y1, a, 1, 1, w + 1 | 0, h + 1 | 0);
    return a;
  }

  function next(rule, board) {
    var is_inside = function (param) {
      var j = param[1];
      var i = param[0];
      if (i >= 0 && i < width(board) && j >= 0) {
        return j < height$1(board);
      } else {
        return false;
      }
    };
    var sum_neighbourg = function (x, y) {
      var neighbourg = map((function (param) {
              var param$1 = /* tuple */[
                x + param[0] | 0,
                y + param[1] | 0
              ];
              var j = param$1[1];
              var i = param$1[0];
              if (is_inside(/* tuple */[
                      i,
                      j
                    ])) {
                var match = caml_array_get(caml_array_get(board, i), j);
                if (match) {
                  return 1;
                } else {
                  return 0;
                }
              } else {
                return 0;
              }
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
      } else if (n !== 3 && (n !== 6 || !rule)) {
        return /* Dead */0;
      } else {
        return /* Alive */1;
      }
    };
    return mapij(next_one, board);
  }

  function update$1(state, param) {
    if (typeof param === "number") {
      switch (param) {
        case /* Reset */1 :
            return clamp(reset(state.board));
        case /* Next */2 :
            return next(state.rule, state.board);
        case /* Clamp */5 :
            return clamp(state.board);
        default:
          return state.board;
      }
    } else {
      switch (param.tag | 0) {
        case /* Flip */0 :
            return clamp(flip(param[0], param[1], state.board));
        case /* Resize */4 :
            return resize(state.board, param[0], param[1]);
        default:
          return state.board;
      }
    }
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


  function append$1(key, value, f) {
    return f.append(key, value);
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

  function getAllResponseHeaders(x) {
    var match = x.getAllResponseHeaders();
    if (match !== null) {
      if (match === "") {
        return /* Error */__(1, [/* NetworkError */1]);
      } else {
        return /* Ok */__(0, [match]);
      }
    } else {
      return /* Error */__(1, [/* IncompleteResponse */0]);
    }
  }

  function getAllResponseHeadersAsList(x) {
    var err = getAllResponseHeaders(x);
    if (err.tag) {
      return err;
    } else {
      return /* Ok */__(0, [map((function (param) {
                        if (param.length !== 2) {
                          throw [
                                failure,
                                "Cannot happen, already checked length"
                              ];
                        }
                        var key = param[0];
                        var value = param[1];
                        return /* tuple */[
                                key,
                                value
                              ];
                      }), filter((function (a) {
                              return a.length === 2;
                            }))(to_list(map$1((function (param) {
                                    return param.split(": ", 2);
                                  }), err[0].split("\r\n")))))]);
    }
  }

  function getAllResponseHeadersAsDict(x) {
    var height = function (param) {
      if (param) {
        return param[/* h */4];
      } else {
        return 0;
      }
    };
    var create = function (l, x, d, r) {
      var hl = height(l);
      var hr = height(r);
      return /* Node */[
              /* l */l,
              /* v */x,
              /* d */d,
              /* r */r,
              /* h */hl >= hr ? hl + 1 | 0 : hr + 1 | 0
            ];
    };
    var bal = function (l, x, d, r) {
      var hl = l ? l[/* h */4] : 0;
      var hr = r ? r[/* h */4] : 0;
      if (hl > (hr + 2 | 0)) {
        if (l) {
          var lr = l[/* r */3];
          var ld = l[/* d */2];
          var lv = l[/* v */1];
          var ll = l[/* l */0];
          if (height(ll) >= height(lr)) {
            return create(ll, lv, ld, create(lr, x, d, r));
          } else if (lr) {
            return create(create(ll, lv, ld, lr[/* l */0]), lr[/* v */1], lr[/* d */2], create(lr[/* r */3], x, d, r));
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
            return create(create(l, x, d, rl), rv, rd, rr);
          } else if (rl) {
            return create(create(l, x, d, rl[/* l */0]), rl[/* v */1], rl[/* d */2], create(rl[/* r */3], rv, rd, rr));
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
    };
    var add = function (x, data, m) {
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
    };
    var err = getAllResponseHeadersAsList(x);
    if (err.tag) {
      return err;
    } else {
      var insert = function (d, param) {
        return add(param[0], param[1], d);
      };
      return /* Ok */__(0, [fold_left(insert, /* Empty */0, err[0])]);
    }
  }

  function open_(method$prime, url, $staropt$star, $staropt$star$1, $staropt$star$2, x) {
    var async = $staropt$star !== undefined ? $staropt$star : true;
    var user = $staropt$star$1 !== undefined ? $staropt$star$1 : "";
    var password = $staropt$star$2 !== undefined ? $staropt$star$2 : "";
    return x.open(method$prime, url, async, user, password);
  }

  function send(body, x) {
    if (typeof body === "number") {
      if (body === /* EmptyBody */0) {
        return x.send();
      } else {
        return x.send(null);
      }
    } else {
      switch (body.tag | 0) {
        case /* StringBody */0 :
            return x.send(body[0]);
        case /* FormDataBody */1 :
            return x.send(body[0]);
        case /* FormListBody */2 :
            var form = fold_left((function (f, param) {
                    append$1(param[0], param[1], f);
                    return f;
                  }), new FormData(), body[0]);
            return x.send(form);
        case /* DocumentBody */3 :
            return x.send(body[0]);
        
      }
    }
  }

  function setRequestHeader(header, value, x) {
    return x.setRequestHeader(header, value);
  }

  function set_responseType(typ, x) {
    if (typeof typ === "number") {
      switch (typ) {
        case /* StringResponseType */0 :
            x.responseType = "";
            return /* () */0;
        case /* ArrayBufferResponseType */1 :
            x.responseType = "arraybuffer";
            return /* () */0;
        case /* BlobResponseType */2 :
            x.responseType = "blob";
            return /* () */0;
        case /* DocumentResponseType */3 :
            x.responseType = "document";
            return /* () */0;
        case /* JsonResponseType */4 :
            x.responseType = "json";
            return /* () */0;
        case /* TextResponseType */5 :
            x.responseType = "text";
            return /* () */0;
        
      }
    } else {
      x.responseType = typ[0];
      return /* () */0;
    }
  }

  function get_responseType(x) {
    var s = x.responseType;
    switch (s) {
      case "" :
          return /* StringResponseType */0;
      case "arraybuffer" :
          return /* ArrayBufferResponseType */1;
      case "blob" :
          return /* BlobResponseType */2;
      case "document" :
          return /* DocumentResponseType */3;
      case "json" :
          return /* JsonResponseType */4;
      case "text" :
          return /* TextResponseType */5;
      default:
        return /* RawResponseType */[s];
    }
  }

  function get_response(x) {
    var match = x.response;
    if (match !== null) {
      var match$1 = get_responseType(x);
      if (typeof match$1 === "number") {
        switch (match$1) {
          case /* StringResponseType */0 :
              return /* StringResponse */__(0, [match]);
          case /* ArrayBufferResponseType */1 :
              return /* ArrayBufferResponse */__(1, [match]);
          case /* BlobResponseType */2 :
              return /* BlobResponse */__(2, [match]);
          case /* DocumentResponseType */3 :
              return /* DocumentResponse */__(3, [match]);
          case /* JsonResponseType */4 :
              return /* JsonResponse */__(4, [match]);
          case /* TextResponseType */5 :
              return /* TextResponse */__(5, [match]);
          
        }
      } else {
        return /* RawResponse */__(6, [
                  match$1[0],
                  match
                ]);
      }
    } else {
      return /* NoResponse */0;
    }
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

  function expectStringResponse(func) {
    return /* Expect */[
            /* TextResponseType */5,
            (function (param) {
                var body = param.body;
                if (typeof body === "number" || body.tag !== /* TextResponse */5) {
                  return /* Error */__(1, ["Non-text response returned"]);
                } else {
                  return _1(func, body[0]);
                }
              })
          ];
  }

  var expectString = expectStringResponse((function (resString) {
          return /* Ok */__(0, [resString]);
        }));

  function getString(url) {
    return /* Request */[
            {
              "method'": "GET",
              headers: /* [] */0,
              url: url,
              body: /* EmptyBody */0,
              expect: expectString,
              timeout: undefined,
              withCredentials: false
            },
            undefined
          ];
  }

  function send$1(resultToMessage, param) {
    var maybeEvents = param[1];
    var request = param[0];
    var expect = request.expect;
    var responseToResult = expect[1];
    var typ = expect[0];
    var withCredentials = request.withCredentials;
    var timeout = request.timeout;
    var body = request.body;
    var url = request.url;
    var headers = request.headers;
    var method$prime = request["method'"];
    return /* EnqueueCall */__(2, [(function (callbacks) {
                  var enqRes = function (result, _ev) {
                    return _1(callbacks.contents.enqueue, _1(resultToMessage, result));
                  };
                  var enqResError = function (result) {
                    var partial_arg = /* Error */__(1, [result]);
                    return (function (param) {
                        return enqRes(partial_arg);
                      });
                  };
                  var enqResOk = function (result) {
                    var partial_arg = /* Ok */__(0, [result]);
                    return (function (param) {
                        return enqRes(partial_arg);
                      });
                  };
                  var xhr = new XMLHttpRequest();
                  if (maybeEvents !== undefined) {
                    var match = maybeEvents;
                    var mayCB = function (thenDo, param) {
                      if (param !== undefined) {
                        return _1(thenDo, _1(param, callbacks));
                      } else {
                        return /* () */0;
                      }
                    };
                    mayCB((function (param) {
                            xhr.onreadystatechange = param;
                            return /* () */0;
                          }), match.onreadystatechange);
                    mayCB((function (param) {
                            xhr.onprogress = param;
                            return /* () */0;
                          }), match.onprogress);
                  }
                  var partial_arg = /* Error */__(1, [/* NetworkError */1]);
                  var cb = function (param) {
                    return enqRes(partial_arg);
                  };
                  xhr.onerror = cb;
                  var partial_arg$1 = /* Error */__(1, [/* Timeout */0]);
                  var cb$1 = function (param) {
                    return enqRes(partial_arg$1);
                  };
                  xhr.ontimeout = cb$1;
                  var partial_arg$2 = /* Error */__(1, [/* Aborted */2]);
                  var cb$2 = function (param) {
                    return enqRes(partial_arg$2);
                  };
                  xhr.onabort = cb$2;
                  var cb$3 = function (_ev) {
                    var match = getAllResponseHeadersAsDict(xhr);
                    var headers;
                    headers = match.tag ? /* Empty */0 : match[0];
                    var response_url = xhr.responseURL;
                    var response_status = {
                      code: xhr.status,
                      message: xhr.statusText
                    };
                    var response_body = get_response(xhr);
                    var response = {
                      url: response_url,
                      status: response_status,
                      headers: headers,
                      body: response_body
                    };
                    if (response_status.code < 200 || 300 <= response_status.code) {
                      return enqResError(/* BadStatus */__(1, [response]))(/* () */0);
                    } else {
                      var match$1 = _1(responseToResult, response);
                      if (match$1.tag) {
                        return enqResError(/* BadPayload */__(2, [
                                        match$1[0],
                                        response
                                      ]))(/* () */0);
                      } else {
                        return enqResOk(match$1[0])(/* () */0);
                      }
                    }
                  };
                  xhr.onload = cb$3;
                  try {
                    open_(method$prime, url, undefined, undefined, undefined, xhr);
                  }
                  catch (exn){
                    enqResError(/* BadUrl */__(0, [url]))(/* () */0);
                  }
                  var setHeader = function (param) {
                    return setRequestHeader(param[0], param[1], xhr);
                  };
                  iter(setHeader, headers);
                  set_responseType(typ, xhr);
                  if (timeout !== undefined) {
                    xhr.timeout = timeout;
                  }
                  xhr.withCredentials = withCredentials;
                  send(body, xhr);
                  return /* () */0;
                })]);
  }
  /* expectString Not a pure module */

  // Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

  function init$1(param) {
    return /* tuple */[
            {
              board: /* array */[/* array */[/* Dead */0]],
              rule: /* B3S23 */0,
              geo: /* Infinite */0,
              previous: /* [] */0,
              auto_clamp: true
            },
            msg(/* Reset */1)
          ];
  }

  function subscriptions(param) {
    return downs(undefined, (function (k) {
                  return /* KeyPressed */__(8, [k]);
                }));
  }

  function update$2(state, $$event) {
    var state$1;
    var exit = 0;
    if (typeof $$event === "number") {
      switch ($$event) {
        case /* Previous */3 :
            var match = state.previous;
            var match$1 = match ? /* tuple */[
                match[0],
                match[1]
              ] : /* tuple */[
                make$2(0, 0, /* Dead */0),
                /* [] */0
              ];
            state$1 = {
              board: match$1[0],
              rule: state.rule,
              geo: state.geo,
              previous: match$1[1],
              auto_clamp: state.auto_clamp
            };
            break;
        case /* ToggleAutoClamp */4 :
            state$1 = {
              board: state.board,
              rule: state.rule,
              geo: state.geo,
              previous: state.previous,
              auto_clamp: !state.auto_clamp
            };
            break;
        case /* Reset */1 :
        case /* Next */2 :
        case /* Clamp */5 :
            exit = 1;
            break;
        default:
          state$1 = state;
      }
    } else {
      switch ($$event.tag | 0) {
        case /* Flip */0 :
        case /* Resize */4 :
            exit = 1;
            break;
        case /* SetRule */7 :
            state$1 = {
              board: state.board,
              rule: $$event[0],
              geo: state.geo,
              previous: state.previous,
              auto_clamp: state.auto_clamp
            };
            break;
        case /* LifeData */10 :
            var match$2 = $$event[0];
            state$1 = match$2.tag ? ({
                  board: make$2(0, 0, /* Dead */0),
                  rule: state.rule,
                  geo: state.geo,
                  previous: state.previous,
                  auto_clamp: state.auto_clamp
                }) : ({
                  board: parse(match$2[0]),
                  rule: state.rule,
                  geo: state.geo,
                  previous: state.previous,
                  auto_clamp: state.auto_clamp
                });
            break;
        default:
          state$1 = state;
      }
    }
    if (exit === 1) {
      state$1 = {
        board: update$1(state, $$event),
        rule: state.rule,
        geo: state.geo,
        previous: /* :: */[
          state.board,
          state.previous
        ],
        auto_clamp: state.auto_clamp
      };
    }
    var cmd;
    var exit$1 = 0;
    if (typeof $$event === "number") {
      if ($$event === /* Next */2) {
        exit$1 = 1;
      } else {
        cmd = /* NoCmd */0;
      }
    } else {
      switch ($$event.tag | 0) {
        case /* Flip */0 :
            exit$1 = 1;
            break;
        case /* KeyPressed */8 :
            var match$3 = $$event[0].key_code;
            cmd = match$3 !== 13 && match$3 !== 32 ? /* NoCmd */0 : msg(/* Next */2);
            break;
        case /* Fetch */9 :
            cmd = send$1(lifeData, getString($$event[0]));
            break;
        case /* LifeData */10 :
            if ($$event[0].tag) {
              cmd = /* NoCmd */0;
            } else {
              exit$1 = 1;
            }
            break;
        default:
          cmd = /* NoCmd */0;
      }
    }
    if (exit$1 === 1) {
      cmd = state$1.geo === /* Infinite */0 ? msg(/* Clamp */5) : /* NoCmd */0;
    }
    return /* tuple */[
            state$1,
            cmd
          ];
  }

  function partial_arg_shutdown(param) {
    return /* NoCmd */0;
  }

  var partial_arg = {
    init: init$1,
    update: update$2,
    view: view,
    subscriptions: subscriptions,
    shutdown: partial_arg_shutdown
  };

  function main(param, param$1) {
    return program(partial_arg, param, param$1);
  }
  /* View Not a pure module */

  main(document.getElementById("app"));

}());
