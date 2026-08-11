//Tue Aug 11 2026 02:34:22 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("慈晓");
(() => {
  function b(F) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (H) {
        return typeof H;
      } : function (H) {
        {
          return H && "function" == typeof Symbol && H.constructor === Symbol && H !== Symbol.prototype ? "symbol" : typeof H;
        }
      };
      return b(F);
    }
  }
  function c(F, G) {
    var H = {
      oIWSF: function (O, P) {
        return O === P;
      },
      rhlqc: "throw",
      BVEWU: function (O, P) {
        return O(P);
      },
      FQlmH: function (O, P) {
        return O === P;
      },
      uDDip: "Oxlcd",
      iWPYy: function (O, P) {
        return O >= P;
      },
      KWlLC: function (O, P) {
        return O | P;
      },
      idKho: function (O, P) {
        return O * P;
      },
      uvFKg: "xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx",
      wdotL: "ewxqT",
      VnEGG: "xPzpv",
      QPlmh: function (O, P) {
        return O == P;
      },
      JBfuW: "function",
      JgRYw: function (O, P) {
        return O + P;
      },
      wsyiL: " is not iterable",
      cqmuN: function (O, P) {
        return O === P;
      },
      fCVoe: function (O, P) {
        return O !== P;
      },
      bYqeh: "bmgru",
      XrzGz: "wkUvQ",
      GlauJ: "Sznsh",
      uolFN: "xlnsV",
      czagI: "rtrZG",
      CyiLH: "root"
    };
    {
      var I = "undefined" != typeof Symbol && F[Symbol.iterator] || F["@@iterator"];
      if (!I) {
        {
          if (Array.isArray(F) || (I = d(F)) || G && F && "number" == typeof F.length) {
            {
              I && (F = I);
              var J = 0;
              var K = function () {};
              return {
                s: K,
                n: function () {
                  {
                    var Q = {
                      done: true
                    };
                    return J >= F.length ? Q : {
                      done: false,
                      value: F[J++]
                    };
                  }
                },
                e: function (Q) {
                  {
                    throw Q;
                  }
                },
                f: K
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var L;
      var M = true;
      var N = false;
      return {
        s: function () {
          {
            I = I.call(F);
          }
        },
        n: function () {
          {
            var S = I.next();
            M = S.done;
            return S;
          }
        },
        e: function (Q) {
          {
            N = true;
            L = Q;
          }
        },
        f: function () {
          {
            try {
              {
                M || null == I.return || I.return();
              }
            } finally {
              {
                if (N) {
                  throw L;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(F, G) {
    {
      if (F) {
        {
          if ("string" == typeof F) {
            return f(F, G);
          }
          var H = {}.toString.call(F).slice(8, -1);
          "Object" === H && F.constructor && (H = F.constructor.name);
          return "Map" === H || "Set" === H ? Array.from(F) : "Arguments" === H || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H) ? f(F, G) : undefined;
        }
      }
    }
  }
  function f(F, G) {
    {
      (null == G || G > F.length) && (G = F.length);
      for (var H = 0, I = Array(G); H < G; H++) {
        I[H] = F[H];
      }
      return I;
    }
  }
  function g() {
    "use strict";

    g = function () {
      {
        return J;
      }
    };
    var H;
    var J = {};
    var K = Object.prototype;
    var M = K.hasOwnProperty;
    var N = Object.defineProperty || function (aj, ak, al) {
      {
        aj[ak] = al.value;
      }
    };
    var O = "function" == typeof Symbol ? Symbol : {};
    var P = O.iterator || "@@iterator";
    var Q = O.asyncIterator || "@@asyncIterator";
    var V = O.toStringTag || "@@toStringTag";
    function W(aj, ak, al) {
      {
        var am = {
          value: al,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aj, ak, am);
        return aj[ak];
      }
    }
    try {
      {
        W({}, "");
      }
    } catch (ak) {
      {
        W = function (al, am, an) {
          {
            return al[am] = an;
          }
        };
      }
    }
    function X(am, an, ao, ap) {
      {
        var ar = an && an.prototype instanceof a4 ? an : a4;
        var as = Object.create(ar.prototype);
        var at = new ah(ap || []);
        N(as, "_invoke", {
          value: ad(am, ao, at)
        });
        return as;
      }
    }
    function Y(am, an, ao) {
      {
        try {
          {
            return {
              type: "normal",
              arg: am.call(an, ao)
            };
          }
        } catch (as) {
          {
            var aq = {
              type: "throw",
              arg: as
            };
            return aq;
          }
        }
      }
    }
    J.wrap = X;
    var Z = "suspendedStart";
    var a0 = "suspendedYield";
    var a1 = "executing";
    var a2 = "completed";
    var a3 = {};
    function a4() {}
    function a5() {}
    function a6() {}
    var a7 = {};
    W(a7, P, function () {
      {
        return this;
      }
    });
    var a8 = Object.getPrototypeOf;
    var a9 = a8 && a8(a8(ai([])));
    a9 && a9 !== K && M.call(a9, P) && (a7 = a9);
    a6.prototype = a4.prototype = Object.create(a7);
    var aa = a6.prototype;
    function ab(am) {
      ["next", "throw", "return"].forEach(function (ao) {
        {
          W(am, ao, function (aq) {
            return this._invoke(ao, aq);
          });
        }
      });
    }
    function ac(am, an) {
      {
        function ar(as, at, au, av) {
          {
            var ax = Y(am[as], am, at);
            if ("throw" !== ax.type) {
              {
                var ay = ax.arg;
                var az = ay.value;
                return az && "object" == b(az) && M.call(az, "__await") ? an.resolve(az.__await).then(function (aA) {
                  {
                    ar("next", aA, au, av);
                  }
                }, function (aA) {
                  {
                    ar("throw", aA, au, av);
                  }
                }) : an.resolve(az).then(function (aA) {
                  {
                    ay.value = aA;
                    au(ay);
                  }
                }, function (aA) {
                  {
                    return ar("throw", aA, au, av);
                  }
                });
              }
            }
            av(ax.arg);
          }
        }
        var ap;
        N(this, "_invoke", {
          value: function (as, at) {
            {
              function aw() {
                {
                  return new an(function (ay, az) {
                    ar(as, at, ay, az);
                  });
                }
              }
              return ap = ap ? ap.then(aw, aw) : aw();
            }
          }
        });
      }
    }
    function ad(am, an, ao) {
      {
        var aq = Z;
        return function (as, at) {
          {
            if (aq === a1) {
              throw Error("Generator is already running");
            }
            if (aq === a2) {
              {
                if ("throw" === as) {
                  throw at;
                }
                var av = {
                  value: H,
                  done: true
                };
                return av;
              }
            }
            for (ao.method = as, ao.arg = at;;) {
              {
                var aw = ao.delegate;
                if (aw) {
                  {
                    var ax = ae(aw, ao);
                    if (ax) {
                      {
                        if (ax === a3) {
                          continue;
                        }
                        return ax;
                      }
                    }
                  }
                }
                if ("next" === ao.method) {
                  ao.sent = ao._sent = ao.arg;
                } else {
                  if ("throw" === ao.method) {
                    {
                      if (aq === Z) {
                        throw aq = a2, ao.arg;
                      }
                      ao.dispatchException(ao.arg);
                    }
                  } else {
                    "return" === ao.method && ao.abrupt("return", ao.arg);
                  }
                }
                aq = a1;
                var ay = Y(am, an, ao);
                if ("normal" === ay.type) {
                  {
                    if (aq = ao.done ? a2 : a0, ay.arg === a3) {
                      continue;
                    }
                    var az = {
                      value: ay.arg,
                      done: ao.done
                    };
                    return az;
                  }
                }
                "throw" === ay.type && (aq = a2, ao.method = "throw", ao.arg = ay.arg);
              }
            }
          }
        };
      }
    }
    function ae(am, an) {
      {
        var ao = an.method;
        var ap = am.iterator[ao];
        if (ap === H) {
          an.delegate = null;
          "throw" === ao && am.iterator.return && (an.method = "return", an.arg = H, ae(am, an), "throw" === an.method) || "return" !== ao && (an.method = "throw", an.arg = new TypeError("The iterator does not provide a '" + ao + "' method"));
          return a3;
        }
        var aq = Y(ap, am.iterator, an.arg);
        if ("throw" === aq.type) {
          an.method = "throw";
          an.arg = aq.arg;
          an.delegate = null;
          return a3;
        }
        var ar = aq.arg;
        return ar ? ar.done ? (an[am.resultName] = ar.value, an.next = am.nextLoc, "return" !== an.method && (an.method = "next", an.arg = H), an.delegate = null, a3) : ar : (an.method = "throw", an.arg = new TypeError("iterator result is not an object"), an.delegate = null, a3);
      }
    }
    function af(am) {
      {
        var ap = {
          tryLoc: am[0]
        };
        1 in am && (ap.catchLoc = am[1]);
        2 in am && (ap.finallyLoc = am[2], ap.afterLoc = am[3]);
        this.tryEntries.push(ap);
      }
    }
    function ag(am) {
      {
        var an = am.completion || {};
        an.type = "normal";
        delete an.arg;
        am.completion = an;
      }
    }
    function ah(am) {
      {
        var an = {
          tryLoc: "root"
        };
        this.tryEntries = [an];
        am.forEach(af, this);
        this.reset(true);
      }
    }
    function ai(am) {
      var an = {
        pROEq: function (ar, as) {
          return ar === as;
        },
        VKMex: function (ar, as) {
          return ar === as;
        },
        MaPfU: "return",
        LvCWr: function (ar, as, at) {
          return ar(as, at);
        },
        VqlIl: function (ar, as) {
          return ar === as;
        },
        eJNRm: "throw",
        FrYDo: function (ar, as) {
          return ar !== as;
        },
        AoOdx: function (ar, as) {
          return ar + as;
        },
        mMeoc: "The iterator does not provide a '",
        jwHRY: "' method",
        BadBA: function (ar, as, at, au) {
          return ar(as, at, au);
        },
        ihFsA: "next",
        OIHaN: "iterator result is not an object",
        vSUgL: "Utils_Code",
        IWRlv: function (ar, as) {
          return ar(as);
        },
        CGbFN: function (ar) {
          return ar();
        },
        EflIk: function (ar, as) {
          return ar(as);
        },
        PIoOO: function (ar, as) {
          return ar === as;
        },
        IOKZd: "hqGVU",
        rBqyN: "(((.+)+)+)+$"
      };
      {
        if (am || "" === am) {
          {
            var ao = am[P];
            if (ao) {
              return ao.call(am);
            }
            if ("function" == typeof am.next) {
              return am;
            }
            if (!isNaN(am.length)) {
              {
                var ap = -1;
                var aq = function at() {
                  {
                    for (; ++ap < am.length;) {
                      if (M.call(am, ap)) {
                        at.value = am[ap];
                        at.done = false;
                        return at;
                      }
                    }
                    at.value = H;
                    at.done = true;
                    return at;
                  }
                };
                return aq.next = aq;
              }
            }
          }
        }
        throw new TypeError(b(am) + " is not iterable");
      }
    }
    a5.prototype = a6;
    N(aa, "constructor", {
      value: a6,
      configurable: true
    });
    N(a6, "constructor", {
      value: a5,
      configurable: true
    });
    a5.displayName = W(a6, V, "GeneratorFunction");
    J.isGeneratorFunction = function (am) {
      {
        var an = "function" == typeof am && am.constructor;
        return !!an && (an === a5 || "GeneratorFunction" === (an.displayName || an.name));
      }
    };
    J.mark = function (am) {
      Object.setPrototypeOf ? Object.setPrototypeOf(am, a6) : (am.__proto__ = a6, W(am, V, "GeneratorFunction"));
      am.prototype = Object.create(aa);
      return am;
    };
    J.awrap = function (am) {
      var ao = {
        __await: am
      };
      return ao;
    };
    ab(ac.prototype);
    W(ac.prototype, Q, function () {
      {
        return this;
      }
    });
    J.AsyncIterator = ac;
    J.async = function (am, an, ao, ap, aq) {
      {
        undefined === aq && (aq = Promise);
        var ar = new ac(X(am, an, ao, ap), aq);
        return J.isGeneratorFunction(an) ? ar : ar.next().then(function (at) {
          {
            return at.done ? at.value : ar.next();
          }
        });
      }
    };
    ab(aa);
    W(aa, V, "Generator");
    W(aa, P, function () {
      {
        return this;
      }
    });
    W(aa, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    J.keys = function (am) {
      {
        var ao = Object(am);
        var ap = [];
        for (var aq in ao) ap.push(aq);
        ap.reverse();
        return function as() {
          {
            for (; ap.length;) {
              {
                var au = ap.pop();
                if (au in ao) {
                  as.value = au;
                  as.done = false;
                  return as;
                }
              }
            }
            as.done = true;
            return as;
          }
        };
      }
    };
    J.values = ai;
    ah.prototype = {
      constructor: ah,
      reset: function (am) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = H, this.done = false, this.delegate = null, this.method = "next", this.arg = H, this.tryEntries.forEach(ag), !am) {
            for (var an in this) "t" === an.charAt(0) && M.call(this, an) && !isNaN(+an.slice(1)) && (this[an] = H);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var an = this.tryEntries[0].completion;
          if ("throw" === an.type) {
            throw an.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (am) {
        {
          if (this.done) {
            throw am;
          }
          var ao = this;
          function av(aw, ax) {
            {
              ar.type = "throw";
              ar.arg = am;
              ao.next = aw;
              ax && (ao.method = "next", ao.arg = H);
              return !!ax;
            }
          }
          for (var ap = this.tryEntries.length - 1; ap >= 0; --ap) {
            {
              var aq = this.tryEntries[ap];
              var ar = aq.completion;
              if ("root" === aq.tryLoc) {
                return av("end");
              }
              if (aq.tryLoc <= this.prev) {
                {
                  var as = M.call(aq, "catchLoc");
                  var at = M.call(aq, "finallyLoc");
                  if (as && at) {
                    {
                      if (this.prev < aq.catchLoc) {
                        return av(aq.catchLoc, true);
                      }
                      if (this.prev < aq.finallyLoc) {
                        return av(aq.finallyLoc);
                      }
                    }
                  } else {
                    if (as) {
                      {
                        if (this.prev < aq.catchLoc) {
                          return av(aq.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!at) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aq.finallyLoc) {
                          return av(aq.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (am, an) {
        {
          for (var ao = this.tryEntries.length - 1; ao >= 0; --ao) {
            {
              var ap = this.tryEntries[ao];
              if (ap.tryLoc <= this.prev && M.call(ap, "finallyLoc") && this.prev < ap.finallyLoc) {
                {
                  var aq = ap;
                  break;
                }
              }
            }
          }
          aq && ("break" === am || "continue" === am) && aq.tryLoc <= an && an <= aq.finallyLoc && (aq = null);
          var ar = aq ? aq.completion : {};
          ar.type = am;
          ar.arg = an;
          return aq ? (this.method = "next", this.next = aq.finallyLoc, a3) : this.complete(ar);
        }
      },
      complete: function (am, an) {
        {
          if ("throw" === am.type) {
            throw am.arg;
          }
          "break" === am.type || "continue" === am.type ? this.next = am.arg : "return" === am.type ? (this.rval = this.arg = am.arg, this.method = "return", this.next = "end") : "normal" === am.type && an && (this.next = an);
          return a3;
        }
      },
      finish: function (am) {
        {
          for (var an = this.tryEntries.length - 1; an >= 0; --an) {
            {
              var ao = this.tryEntries[an];
              if (ao.finallyLoc === am) {
                this.complete(ao.completion, ao.afterLoc);
                ag(ao);
                return a3;
              }
            }
          }
        }
      },
      catch: function (am) {
        {
          for (var an = this.tryEntries.length - 1; an >= 0; --an) {
            {
              var ao = this.tryEntries[an];
              if (ao.tryLoc === am) {
                {
                  var ap = ao.completion;
                  if ("throw" === ap.type) {
                    {
                      var aq = ap.arg;
                      ag(ao);
                    }
                  }
                  return aq;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (am, an, ao) {
        {
          this.delegate = {
            iterator: ai(am),
            resultName: an,
            nextLoc: ao
          };
          "next" === this.method && (this.arg = H);
          return a3;
        }
      }
    };
    return J;
  }
  function h(F, G, H, I, J, K, L) {
    {
      try {
        {
          var N = F[K](L);
          var O = N.value;
        }
      } catch (Q) {
        return void H(Q);
      }
      N.done ? G(O) : Promise.resolve(O).then(I, J);
    }
  }
  function i(F) {
    return function () {
      var H = this;
      var I = arguments;
      return new Promise(function (J, K) {
        var M = F.apply(H, I);
        function N(P) {
          {
            h(M, J, K, N, O, "next", P);
          }
        }
        function O(P) {
          {
            h(M, J, K, N, O, "throw", P);
          }
        }
        N(undefined);
      });
    };
  }
  var j = $.getdata("CiXiao") || "";
  var k = undefined;
  var l = "";
  var m = "";
  var n = "";
  var o = "";
  function p() {
    {
      return q.apply(this, arguments);
    }
  }
  function q() {
    q = i(g().mark(function G() {
      var K;
      var Q;
      var V;
      var W;
      var X;
      var Y;
      var Z;
      var a0;
      var a1;
      var a2;
      var a3;
      var a4;
      var a5;
      var a6;
      var a7;
      var a8;
      var a9;
      var aa;
      var ab;
      var ac;
      var ad;
      var ae;
      var af;
      var ag;
      var ah;
      var ai;
      var aj;
      var ak;
      var al;
      var am;
      var an;
      var ao;
      var ap;
      var aq;
      var ar;
      var as;
      var at;
      var au;
      var av;
      var aw;
      var ax;
      var ay;
      var az;
      return g().wrap(function (aA) {
        for (;;) {
          switch (aA.prev = aA.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                {
                  aA.next = 6;
                  break;
                }
              }
              console.log("先去boxjs填写账号token");
              aA.next = 5;
              return D("先去boxjs填写账号token");
            case 5:
              return aA.abrupt("return");
            case 6:
              aA.next = 8;
              return B();
            case 8:
              k = aA.sent;
              K = j.split(" ");
              Q = c(K);
              aA.prev = 11;
              Q.s();
            case 13:
              if ((V = Q.n()).done) {
                {
                  aA.next = 144;
                  break;
                }
              }
              W = V.value;
              console.log("随机生成device");
              m = A();
              console.log(m);
              phone_number = W.split("&")[0];
              o = W.split("&")[1];
              console.log("用户：".concat(phone_number, "开始任务"));
              console.log("获取userinfoId");
              X = Date.now().toString() + w(5) + x();
              Y = k.md5("@#@$AXdm123%)(ds".concat(X, "api/UserInfo/GetRedNumberModel"));
              aA.next = 26;
              return t("/api/UserInfo/GetRedNumberModel?newspapergroupId=15403&sign=".concat(Y, "&stamp=").concat(X));
            case 26:
              if (Z = aA.sent, Z.success) {
                {
                  aA.next = 31;
                  break;
                }
              }
              aA.next = 30;
              return D("用户：".concat(phone_number, "\ntoken已过期，请重新获取"));
            case 30:
              return aA.abrupt("continue", 142);
            case 31:
              n = Z.data.userinfo.Id;
              console.log(n);
              aA.next = 35;
              return r("/ReadActivityTaskList?json=true");
            case 35:
              a0 = aA.sent;
              a1 = c(a0.data);
              aA.prev = 37;
              a1.s();
            case 39:
              if ((a2 = a1.n()).done) {
                {
                  aA.next = 107;
                  break;
                }
              }
              a3 = a2.value;
              console.log(a3.activityTypeName);
              aA.next = 44;
              return r("/ReadActivityTaskData?yunyingActivityTaskId=".concat(a3.yunyingActivityTaskId, "&json=true"));
            case 44:
              if (a4 = aA.sent, a4) {
                {
                  aA.next = 47;
                  break;
                }
              }
              return aA.abrupt("continue", 105);
            case 47:
              if (a4.data.totalCount != a4.data.completedCount) {
                {
                  aA.next = 50;
                  break;
                }
              }
              console.log("已完成");
              return aA.abrupt("continue", 105);
            case 50:
              a5 = c(a4.data.taskDetails);
              aA.prev = 51;
              a5.s();
            case 53:
              if ((a6 = a5.n()).done) {
                {
                  aA.next = 74;
                  break;
                }
              }
              if (a7 = a6.value, !a7.isComplete) {
                {
                  aA.next = 57;
                  break;
                }
              }
              return aA.abrupt("continue", 72);
            case 57:
              for (console.log("文章：".concat(a7.title)), a8 = a7.url.split("?")[1], a9 = {}, aa = a8.split("&"), ab = 0, ac = aa.length; ab < ac; ab++) {
                ad = aa[ab].split("=");
                a9[ad[0]] = ad[1];
              }
              ae = Date.now().toString() + w(5) + x();
              af = k.md5("@#@$AXdm123%)(ds".concat(ae, "api/Yunying/ReadArticle"));
              aA.next = 66;
              return t("api/Yunying/ReadArticle?articleType=1&newspapergroupId=".concat(a9.NewspaperGroupId, "&sign=").concat(af, "&stamp=").concat(ae, "&ArticleId=").concat(a7.articleId, "&taskDetailId=").concat(a7.taskDetailId));
            case 66:
              ag = aA.sent;
              console.log(ag.message);
              aA.next = 70;
              return r("/ChceckCompleteTaskDetail?taskDetailId=".concat(a7.taskDetailId, "&yunyingActivityTaskId=").concat(a3.yunyingActivityTaskId, "&round=").concat(a3.round, "&json=true"));
            case 70:
              ah = aA.sent;
              console.log(ah.success);
            case 72:
              aA.next = 53;
              break;
            case 74:
              aA.next = 79;
              break;
            case 76:
              aA.prev = 76;
              aA.t0 = aA.catch(51);
              a5.e(aA.t0);
            case 79:
              aA.prev = 79;
              a5.f();
              return aA.finish(79);
            case 82:
              aA.next = 84;
              return r("/CanDrawPrizeList?json=true");
            case 84:
              ai = aA.sent;
              console.log("拥有".concat(ai.data.length, "次抽奖"));
              aj = c(ai.data);
              aA.prev = 87;
              aj.s();
            case 89:
              if ((ak = aj.n()).done) {
                {
                  aA.next = 97;
                  break;
                }
              }
              al = ak.value;
              aA.next = 93;
              return r("/DrawAward?awardRecordId=".concat(al.awardRecordId, "&json=true"));
            case 93:
              am = aA.sent;
              1 == am.data.awardType ? (console.log("抽奖获得：".concat(null == am || null === (an = am.data) || undefined === an ? undefined : an.award).concat(null == am || null === (ao = am.data) || undefined === ao ? undefined : ao.name)), l += "用户：".concat(phone_number, " 抽奖获得：").concat(null == am || null === (ap = am.data) || undefined === ap ? undefined : ap.award).concat(null == am || null === (aq = am.data) || undefined === aq ? undefined : aq.name, "\n")) : 2 == am.data.awardType ? (console.log("抽奖获得：".concat(null == am || null === (ar = am.data) || undefined === ar ? undefined : ar.scoreAward).concat(null == am || null === (as = am.data) || undefined === as ? undefined : as.name)), l += "用户：".concat(phone_number, " 抽奖获得：").concat(null == am || null === (at = am.data) || undefined === at ? undefined : at.scoreAward).concat(null == am || null === (au = am.data) || undefined === au ? undefined : au.name, "\n")) : (console.log("谢谢参与"), l += "用户：".concat(phone_number, " 抽奖获得：谢谢参与\n"));
            case 95:
              aA.next = 89;
              break;
            case 97:
              aA.next = 102;
              break;
            case 99:
              aA.prev = 99;
              aA.t1 = aA.catch(87);
              aj.e(aA.t1);
            case 102:
              aA.prev = 102;
              aj.f();
              return aA.finish(102);
            case 105:
              aA.next = 39;
              break;
            case 107:
              aA.next = 112;
              break;
            case 109:
              aA.prev = 109;
              aA.t2 = aA.catch(37);
              a1.e(aA.t2);
            case 112:
              aA.prev = 112;
              a1.f();
              return aA.finish(112);
            case 115:
              aA.next = 117;
              return r("/MyAwardList?page=1&json=true");
            case 117:
              if (av = aA.sent, null == av || !av.data) {
                {
                  aA.next = 142;
                  break;
                }
              }
              aw = c(av.data);
              aA.prev = 120;
              aw.s();
            case 122:
              if ((ax = aw.n()).done) {
                aA.next = 134;
                break;
              }
              if (ay = ax.value, 1 != ay.awardType || 4 == ay.awardState) {
                aA.next = 132;
                break;
              }
              console.log("奖品：".concat(ay.award).concat(ay.name));
              console.log("领取奖品");
              aA.next = 129;
              return r("/GrantAward?awardRecordId=".concat(ay.awardRecordId, "&json=true"));
            case 129:
              az = aA.sent;
              console.log("领取结果：".concat(az.message));
              l += "用户：".concat(phone_number, " 奖品：").concat(ay.award).concat(ay.name, " 领取结果：").concat(az.message, "\n");
            case 132:
              aA.next = 122;
              break;
            case 134:
              aA.next = 139;
              break;
            case 136:
              aA.prev = 136;
              aA.t3 = aA.catch(120);
              aw.e(aA.t3);
            case 139:
              aA.prev = 139;
              aw.f();
              return aA.finish(139);
            case 142:
              aA.next = 13;
              break;
            case 144:
              aA.next = 149;
              break;
            case 146:
              aA.prev = 146;
              aA.t4 = aA.catch(11);
              Q.e(aA.t4);
            case 149:
              aA.prev = 149;
              Q.f();
              return aA.finish(149);
            case 152:
              if (!l) {
                aA.next = 155;
                break;
              }
              aA.next = 155;
              return D(l);
            case 155:
            case "end":
              return aA.stop();
          }
        }
      }, G, null, [[11, 146, 149, 152], [37, 109, 112, 115], [51, 76, 79, 82], [87, 99, 102, 105], [120, 136, 139, 142]]);
    }));
    return q.apply(this, arguments);
  }
  function r(F) {
    return s.apply(this, arguments);
  }
  function s() {
    s = i(g().mark(function F(G) {
      return g().wrap(function (I) {
        for (;;) {
          switch (I.prev = I.next) {
            case 0:
              return I.abrupt("return", new Promise(function (K) {
                var M = {
                  url: "https://cxh5.xiaodingkeji.com/h5api/api/YunyingV720".concat(G),
                  headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache",
                    accept: "application/json, text/plain, */*",
                    "x-token": o,
                    "x-requested-with": "XMLHttpRequest",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 GdyBridgeWebView;xdinformation;x-token:[" + o + "];x-userinfoId:[" + n + "];x-device:[" + m + "]"
                  }
                };
                $.get(M, function () {
                  var O = i(g().mark(function P(Q, R, S) {
                    return g().wrap(function (T) {
                      for (;;) {
                        switch (T.prev = T.next) {
                          case 0:
                            if (T.prev = 0, !Q) {
                              T.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(Q)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            T.next = 9;
                            break;
                          case 6:
                            T.next = 8;
                            return $.wait(2000);
                          case 8:
                            K(JSON.parse(S));
                          case 9:
                            T.next = 14;
                            break;
                          case 11:
                            T.prev = 11;
                            T.t0 = T.catch(0);
                            $.logErr(T.t0, R);
                          case 14:
                            T.prev = 14;
                            K();
                            return T.finish(14);
                          case 17:
                          case "end":
                            return T.stop();
                        }
                      }
                    }, P, null, [[0, 11, 14, 17]]);
                  }));
                  return function (Q, R, S) {
                    return O.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return I.stop();
          }
        }
      }, F);
    }));
    return s.apply(this, arguments);
  }
  function t(F) {
    return u.apply(this, arguments);
  }
  function u() {
    u = i(g().mark(function G(H) {
      return g().wrap(function (J) {
        for (;;) {
          switch (J.prev = J.next) {
            case 0:
              return J.abrupt("return", new Promise(function (L) {
                var N = {
                  url: "https://cxapi.xiaodingkeji.com/".concat(H),
                  headers: {
                    "accept-version": "200",
                    "x-version": "730",
                    version: "7.17.7",
                    "x-token": o,
                    Connection: "Keep-Alive",
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/3.11.0"
                  }
                };
                $.get(N, function () {
                  var P = i(g().mark(function Q(R, S, T) {
                    return g().wrap(function (V) {
                      for (;;) {
                        switch (V.prev = V.next) {
                          case 0:
                            if (V.prev = 0, !R) {
                              V.next = 12;
                              break;
                            }
                            if (!T) {
                              V.next = 8;
                              break;
                            }
                            V.next = 5;
                            return $.wait(2000);
                          case 5:
                            L(JSON.parse(T));
                            V.next = 10;
                            break;
                          case 8:
                            console.log("".concat(JSON.stringify(R)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                          case 10:
                            V.next = 15;
                            break;
                          case 12:
                            V.next = 14;
                            return $.wait(2000);
                          case 14:
                            L(JSON.parse(T));
                          case 15:
                            V.next = 20;
                            break;
                          case 17:
                            V.prev = 17;
                            V.t0 = V.catch(0);
                            $.logErr(V.t0, S);
                          case 20:
                            V.prev = 20;
                            L();
                            return V.finish(20);
                          case 23:
                          case "end":
                            return V.stop();
                        }
                      }
                    }, Q, null, [[0, 17, 20, 23]]);
                  }));
                  return function (R, S, T) {
                    return P.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return J.stop();
          }
        }
      }, G);
    }));
    return u.apply(this, arguments);
  }
  function v() {
    var F = new Date();
    var G = function (N) {
      return N.toString().padStart(2, "0");
    };
    var H = F.getFullYear();
    var I = G(F.getMonth() + 1);
    var J = G(F.getDate());
    var K = G(F.getHours());
    var L = G(F.getMinutes());
    var M = G(F.getSeconds());
    return "".concat(H).concat(I).concat(J).concat(K).concat(L).concat(M);
  }
  function w(F) {
    for (var G = "abcdefghijklmnopqrstuvwxyz0123456789", H = "", I = 0; I < F; I++) {
      H += G.charAt(Math.floor(36 * Math.random()));
    }
    return H;
  }
  function x() {
    var F = v();
    F || (F = w(8));
    return w(2) + F.substring(3) + w(3);
  }
  function y() {
    for (var F = "", G = 0; G < 16; G++) {
      var H = Math.floor(16 * Math.random());
      F += "0123456789abcdef"[H];
    }
    return F;
  }
  function z() {
    return "xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (F) {
      var G = 16 * Math.random() | 0;
      var H = "x" === F ? G : 3 & G | 8;
      return H.toString(16);
    });
  }
  function A() {
    var F = y();
    var G = z().replace(/-/g, "");
    CryptoJS = k.createCryptoJS();
    return CryptoJS.SHA1("".concat(F, "|unknown|").concat(G)).toString().toUpperCase();
  }
  function B() {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function F() {
      var H;
      return g().wrap(function I(J) {
        for (;;) {
          switch (J.prev = J.next) {
            case 0:
              if (H = $.getdata("Utils_Code") || "", !H || !Object.keys(H).length) {
                J.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(H);
              return J.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return J.abrupt("return", new Promise(function () {
                var L = i(g().mark(function M(N) {
                  return g().wrap(function O(P) {
                    for (;;) {
                      switch (P.prev = P.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (R) {
                            $.setdata(R, "Utils_Code");
                            eval(R);
                            console.log("✅ Utils加载成功, 请继续");
                            N(creatUtils());
                          });
                        case 1:
                        case "end":
                          return P.stop();
                      }
                    }
                  }, M);
                }));
                return function (N) {
                  return L.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return J.stop();
          }
        }
      }, F);
    }));
    return C.apply(this, arguments);
  }
  function D(F) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function G(H) {
      return g().wrap(function (K) {
        for (;;) {
          switch (K.prev = K.next) {
            case 0:
              $.msg($.name, "", H);
            case 1:
            case "end":
              return K.stop();
          }
        }
      }, G);
    }));
    return E.apply(this, arguments);
  }
  i(g().mark(function F() {
    return g().wrap(function (G) {
      for (;;) {
        switch (G.prev = G.next) {
          case 0:
            G.next = 2;
            return p();
          case 2:
          case "end":
            return G.stop();
        }
      }
    }, F);
  }))().catch(function (G) {
    $.log(G);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      const o = new Promise((e, o) => {
        s.call(this, t, (t, s, i) => {
          t ? o(t) : e(s);
        });
      });
      return t.timeout ? ((t, e = 1000) => Promise.race([t, new Promise((t, s) => {
        setTimeout(() => {
          s(new Error("请求超时"));
        }, e);
      })]))(o, t.timeout) : o;
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, o) => e(o));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        o = o ? o.replace(/\n/g, "").trim() : o;
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        i = i ? 1 * i : 20;
        i = e && e.timeout ? e.timeout : i;
        const [r, a] = o.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: i
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          policy: "DIRECT",
          timeout: i
        };
        this.post(n, (t, e, o) => s(o));
      }).catch(t => this.logErr(t));
    }
    lodash_get(t, e, s = undefined) {
      const o = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let i = t;
      for (const t of o) if (i = Object(i)[t], undefined === i) {
        return s;
      }
      return i;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, o) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[o + 1]) >> 0 == +e[o + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, o] = /^@(.*?)\.(.*?)$/.exec(t);
        const i = s ? this.getval(s) : "";
        if (i) {
          try {
            const t = JSON.parse(i);
            e = t ? this.lodash_get(t, o, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, o, i] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(o);
        const a = o ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, i, t);
          s = this.setval(JSON.stringify(e), o);
        } catch (e) {
          const r = {};
          this.lodash_set(r, i, t);
          s = this.setval(JSON.stringify(r), o);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, o) => {
            !t && s && (s.body = o, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, o);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: i,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: o,
              headers: i,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, o) => {
            !t && s && (s.body = o, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, o);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: i,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: o,
              headers: i,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let o = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in o) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? o[e] : ("00" + o[e]).substr(("" + o[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let o = t[s];
        null != o && "" !== o && ("object" == typeof o && (o = JSON.stringify(o)), e += `${s}=${o}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", o = "", i = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: o,
          $mediaMime: i
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), o) {
                    let t;
                    let e;
                    let s;
                    if (o.startsWith("http")) {
                      t = o;
                    } else {
                      if (o.startsWith("data:")) {
                        const [t] = o.split(";");
                        const [, i] = o.split(",");
                        e = i;
                        s = t.replace("data:", "");
                      } else {
                        e = o;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(o);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": i ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let i = t.openUrl || t.url || t["open-url"] || e;
                  i && Object.assign(s, {
                    openUrl: i
                  });
                  let r = t.mediaUrl || t["media-url"];
                  o?.startsWith("http") && (r = o);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const i = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(i, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  o?.startsWith("http") && (a = o);
                  a && Object.assign(i, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(i, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(i));
                  return i;
                }
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, o, r(i));
            break;
          case "Quantumult X":
            $notify(e, s, o, r(i));
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        o && t.push(o);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      this.getEnv();
      this.log("", `❗️${this.name}, 错误!`, e, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`);
      this.log();
      this.getEnv();
      $done(t);
    }
  }(t, e);
}