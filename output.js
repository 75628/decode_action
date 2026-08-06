//Thu Aug 06 2026 08:28:20 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("今日越城");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ao) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ap) {
      {
        return typeof ap;
      }
    } : function (ap) {
      {
        return ap && "function" == typeof Symbol && ap.constructor === Symbol && ap !== Symbol.prototype ? "symbol" : typeof ap;
      }
    };
    return b(ao);
  }
  function c(ao, ap) {
    {
      var ar = "undefined" != typeof Symbol && ao[Symbol.iterator] || ao["@@iterator"];
      if (!ar) {
        {
          if (Array.isArray(ao) || (ar = g(ao)) || ap && ao && "number" == typeof ao.length) {
            {
              ar && (ao = ar);
              var as = 0;
              var at = function () {};
              return {
                s: at,
                n: function () {
                  {
                    var ay = {
                      done: true
                    };
                    return as >= ao.length ? ay : {
                      done: false,
                      value: ao[as++]
                    };
                  }
                },
                e: function (ay) {
                  {
                    throw ay;
                  }
                },
                f: at
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var au;
      var av = true;
      var aw = false;
      return {
        s: function () {
          {
            ar = ar.call(ao);
          }
        },
        n: function () {
          {
            var aB = ar.next();
            av = aB.done;
            return aB;
          }
        },
        e: function (aA) {
          {
            aw = true;
            au = aA;
          }
        },
        f: function () {
          {
            try {
              {
                av || null == ar.return || ar.return();
              }
            } finally {
              {
                if (aw) {
                  throw au;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(ao, ap) {
    {
      return j(ao) || i(ao, ap) || g(ao, ap) || f();
    }
  }
  function f() {
    {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
  }
  function g(ao, ap) {
    {
      if (ao) {
        {
          if ("string" == typeof ao) {
            return h(ao, ap);
          }
          var aq = {}.toString.call(ao).slice(8, -1);
          "Object" === aq && ao.constructor && (aq = ao.constructor.name);
          return "Map" === aq || "Set" === aq ? Array.from(ao) : "Arguments" === aq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(aq) ? h(ao, ap) : undefined;
        }
      }
    }
  }
  function h(ao, ap) {
    {
      (null == ap || ap > ao.length) && (ap = ao.length);
      for (var ar = 0, as = Array(ap); ar < ap; ar++) {
        as[ar] = ao[ar];
      }
      return as;
    }
  }
  function i(ao, ap) {
    {
      var ar = null == ao ? null : "undefined" != typeof Symbol && ao[Symbol.iterator] || ao["@@iterator"];
      if (null != ar) {
        var as;
        var at;
        var au;
        var av;
        var aw = [];
        var ax = true;
        var ay = false;
        try {
          {
            if (au = (ar = ar.call(ao)).next, 0 === ap) {
              if (Object(ar) !== ar) {
                return;
              }
              ax = false;
            } else {
              for (; !(ax = (as = au.call(ar)).done) && (aw.push(as.value), aw.length !== ap); ax = true) {}
            }
          }
        } catch (aB) {
          {
            ay = true;
            at = aB;
          }
        } finally {
          {
            try {
              {
                if (!ax && null != ar.return && (av = ar.return(), Object(av) !== av)) {
                  return;
                }
              }
            } finally {
              {
                if (ay) {
                  throw at;
                }
              }
            }
          }
        }
        return aw;
      }
    }
  }
  function j(ao) {
    {
      if (Array.isArray(ao)) {
        return ao;
      }
    }
  }
  function k() {
    "use strict";

    k = function () {
      return aq;
    };
    var ap;
    var aq = {
      wrap: az,
      isGeneratorFunction: function (aY) {
        {
          var aZ = "function" == typeof aY && aY.constructor;
          return !!aZ && (aZ === aH || "GeneratorFunction" === (aZ.displayName || aZ.name));
        }
      },
      mark: function (aY) {
        Object.setPrototypeOf ? Object.setPrototypeOf(aY, aI) : (aY.__proto__ = aI, ay(aY, ax, "GeneratorFunction"));
        aY.prototype = Object.create(aM);
        return aY;
      },
      awrap: function (aY) {
        {
          var aZ = {
            __await: aY
          };
          return aZ;
        }
      },
      AsyncIterator: aO,
      async: function (aY, aZ, b0, b1, b2) {
        {
          undefined === b2 && (b2 = Promise);
          var b4 = new aO(az(aY, aZ, b0, b1), b2);
          return aq.isGeneratorFunction(aZ) ? b4 : b4.next().then(function (b5) {
            {
              return b5.done ? b5.value : b4.next();
            }
          });
        }
      }
    };
    var ar = Object.prototype;
    var as = ar.hasOwnProperty;
    var at = Object.defineProperty || function (aV, aW, aX) {
      {
        aV[aW] = aX.value;
      }
    };
    var au = "function" == typeof Symbol ? Symbol : {};
    var av = au.iterator || "@@iterator";
    var aw = au.asyncIterator || "@@asyncIterator";
    var ax = au.toStringTag || "@@toStringTag";
    function ay(aV, aW, aX) {
      {
        var b0 = {
          value: aX,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aV, aW, b0);
        return aV[aW];
      }
    }
    try {
      {
        ay({}, "");
      }
    } catch (aW) {
      {
        ay = function (aX, aY, aZ) {
          {
            return aX[aY] = aZ;
          }
        };
      }
    }
    function az(aY, aZ, b0, b1) {
      {
        var b2 = aZ && aZ.prototype instanceof aG ? aZ : aG;
        var b3 = Object.create(b2.prototype);
        var b4 = new aT(b1 || []);
        at(b3, "_invoke", {
          value: aP(aY, b0, b4)
        });
        return b3;
      }
    }
    function aA(aY, aZ, b0) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aY.call(aZ, b0)
            };
          }
        } catch (b5) {
          {
            var b2 = {
              type: "throw",
              arg: b5
            };
            return b2;
          }
        }
      }
    }
    var aB = "suspendedStart";
    var aC = "suspendedYield";
    var aD = "executing";
    var aE = "completed";
    var aF = {};
    function aG() {}
    function aH() {}
    function aI() {}
    var aJ = {};
    ay(aJ, av, function () {
      return this;
    });
    var aK = Object.getPrototypeOf;
    var aL = aK && aK(aK(aU([])));
    aL && aL !== ar && as.call(aL, av) && (aJ = aL);
    aI.prototype = aG.prototype = Object.create(aJ);
    var aM = aI.prototype;
    function aN(aY) {
      {
        ["next", "throw", "return"].forEach(function (b1) {
          {
            ay(aY, b1, function (b3) {
              {
                return this._invoke(b1, b3);
              }
            });
          }
        });
      }
    }
    function aO(aY, aZ) {
      {
        function b2(b3, b4, b5, b6) {
          {
            var b8 = aA(aY[b3], aY, b4);
            if ("throw" !== b8.type) {
              {
                var b9 = b8.arg;
                var ba = b9.value;
                return ba && "object" == b(ba) && as.call(ba, "__await") ? aZ.resolve(ba.__await).then(function (bc) {
                  {
                    b2("next", bc, b5, b6);
                  }
                }, function (bc) {
                  {
                    b2("throw", bc, b5, b6);
                  }
                }) : aZ.resolve(ba).then(function (bc) {
                  {
                    b9.value = bc;
                    b5(b9);
                  }
                }, function (bc) {
                  {
                    return b2("throw", bc, b5, b6);
                  }
                });
              }
            }
            b6(b8.arg);
          }
        }
        var b1;
        at(this, "_invoke", {
          value: function (b3, b4) {
            {
              function b6() {
                {
                  return new aZ(function (b7, b8) {
                    {
                      b2(b3, b4, b7, b8);
                    }
                  });
                }
              }
              return b1 = b1 ? b1.then(b6, b6) : b6();
            }
          }
        });
      }
    }
    function aP(aY, aZ, b0) {
      {
        var b2 = aB;
        return function (b4, b5) {
          {
            if (b2 === aD) {
              throw Error("Generator is already running");
            }
            if (b2 === aE) {
              {
                if ("throw" === b4) {
                  throw b5;
                }
                var b7 = {
                  value: ap,
                  done: true
                };
                return b7;
              }
            }
            for (b0.method = b4, b0.arg = b5;;) {
              {
                var b8 = b0.delegate;
                if (b8) {
                  {
                    var b9 = aQ(b8, b0);
                    if (b9) {
                      {
                        if (b9 === aF) {
                          continue;
                        }
                        return b9;
                      }
                    }
                  }
                }
                if ("next" === b0.method) {
                  b0.sent = b0._sent = b0.arg;
                } else {
                  if ("throw" === b0.method) {
                    {
                      if (b2 === aB) {
                        throw b2 = aE, b0.arg;
                      }
                      b0.dispatchException(b0.arg);
                    }
                  } else {
                    "return" === b0.method && b0.abrupt("return", b0.arg);
                  }
                }
                b2 = aD;
                var ba = aA(aY, aZ, b0);
                if ("normal" === ba.type) {
                  {
                    if (b2 = b0.done ? aE : aC, ba.arg === aF) {
                      continue;
                    }
                    var bb = {
                      value: ba.arg,
                      done: b0.done
                    };
                    return bb;
                  }
                }
                "throw" === ba.type && (b2 = aE, b0.method = "throw", b0.arg = ba.arg);
              }
            }
          }
        };
      }
    }
    function aQ(aY, aZ) {
      {
        var b0 = aZ.method;
        var b1 = aY.iterator[b0];
        if (b1 === ap) {
          aZ.delegate = null;
          "throw" === b0 && aY.iterator.return && (aZ.method = "return", aZ.arg = ap, aQ(aY, aZ), "throw" === aZ.method) || "return" !== b0 && (aZ.method = "throw", aZ.arg = new TypeError("The iterator does not provide a '" + b0 + "' method"));
          return aF;
        }
        var b2 = aA(b1, aY.iterator, aZ.arg);
        if ("throw" === b2.type) {
          aZ.method = "throw";
          aZ.arg = b2.arg;
          aZ.delegate = null;
          return aF;
        }
        var b3 = b2.arg;
        return b3 ? b3.done ? (aZ[aY.resultName] = b3.value, aZ.next = aY.nextLoc, "return" !== aZ.method && (aZ.method = "next", aZ.arg = ap), aZ.delegate = null, aF) : b3 : (aZ.method = "throw", aZ.arg = new TypeError("iterator result is not an object"), aZ.delegate = null, aF);
      }
    }
    function aR(aY) {
      {
        var b1 = {
          tryLoc: aY[0]
        };
        1 in aY && (b1.catchLoc = aY[1]);
        2 in aY && (b1.finallyLoc = aY[2], b1.afterLoc = aY[3]);
        this.tryEntries.push(b1);
      }
    }
    function aS(aY) {
      {
        var aZ = aY.completion || {};
        aZ.type = "normal";
        delete aZ.arg;
        aY.completion = aZ;
      }
    }
    function aT(aY) {
      {
        var b0 = {
          tryLoc: "root"
        };
        this.tryEntries = [b0];
        aY.forEach(aR, this);
        this.reset(true);
      }
    }
    function aU(aY) {
      {
        if (aY || "" === aY) {
          {
            var b0 = aY[av];
            if (b0) {
              return b0.call(aY);
            }
            if ("function" == typeof aY.next) {
              return aY;
            }
            if (!isNaN(aY.length)) {
              {
                var b1 = -1;
                var b2 = function b6() {
                  {
                    for (; ++b1 < aY.length;) {
                      if (as.call(aY, b1)) {
                        b6.value = aY[b1];
                        b6.done = false;
                        return b6;
                      }
                    }
                    b6.value = ap;
                    b6.done = true;
                    return b6;
                  }
                };
                return b2.next = b2;
              }
            }
          }
        }
        throw new TypeError(b(aY) + " is not iterable");
      }
    }
    aH.prototype = aI;
    at(aM, "constructor", {
      value: aI,
      configurable: true
    });
    at(aI, "constructor", {
      value: aH,
      configurable: true
    });
    aH.displayName = ay(aI, ax, "GeneratorFunction");
    aN(aO.prototype);
    ay(aO.prototype, aw, function () {
      {
        return this;
      }
    });
    aN(aM);
    ay(aM, ax, "Generator");
    ay(aM, av, function () {
      {
        return this;
      }
    });
    ay(aM, "toString", function () {
      return "[object Generator]";
    });
    aq.keys = function (aY) {
      {
        var b0 = Object(aY);
        var b1 = [];
        for (var b2 in b0) b1.push(b2);
        b1.reverse();
        return function b4() {
          {
            for (; b1.length;) {
              {
                var b6 = b1.pop();
                if (b6 in b0) {
                  b4.value = b6;
                  b4.done = false;
                  return b4;
                }
              }
            }
            b4.done = true;
            return b4;
          }
        };
      }
    };
    aq.values = aU;
    aT.prototype = {
      constructor: aT,
      reset: function (aY) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = ap, this.done = false, this.delegate = null, this.method = "next", this.arg = ap, this.tryEntries.forEach(aS), !aY) {
            for (var aZ in this) "t" === aZ.charAt(0) && as.call(this, aZ) && !isNaN(+aZ.slice(1)) && (this[aZ] = ap);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aY = this.tryEntries[0].completion;
          if ("throw" === aY.type) {
            throw aY.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aY) {
        {
          if (this.done) {
            throw aY;
          }
          var b0 = this;
          function b7(b8, b9) {
            {
              b3.type = "throw";
              b3.arg = aY;
              b0.next = b8;
              b9 && (b0.method = "next", b0.arg = ap);
              return !!b9;
            }
          }
          for (var b1 = this.tryEntries.length - 1; b1 >= 0; --b1) {
            {
              var b2 = this.tryEntries[b1];
              var b3 = b2.completion;
              if ("root" === b2.tryLoc) {
                return b7("end");
              }
              if (b2.tryLoc <= this.prev) {
                {
                  var b4 = as.call(b2, "catchLoc");
                  var b5 = as.call(b2, "finallyLoc");
                  if (b4 && b5) {
                    {
                      if (this.prev < b2.catchLoc) {
                        return b7(b2.catchLoc, true);
                      }
                      if (this.prev < b2.finallyLoc) {
                        return b7(b2.finallyLoc);
                      }
                    }
                  } else {
                    if (b4) {
                      {
                        if (this.prev < b2.catchLoc) {
                          return b7(b2.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!b5) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < b2.finallyLoc) {
                          return b7(b2.finallyLoc);
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
      abrupt: function (aY, aZ) {
        {
          for (var b0 = this.tryEntries.length - 1; b0 >= 0; --b0) {
            {
              var b1 = this.tryEntries[b0];
              if (b1.tryLoc <= this.prev && as.call(b1, "finallyLoc") && this.prev < b1.finallyLoc) {
                {
                  var b2 = b1;
                  break;
                }
              }
            }
          }
          b2 && ("break" === aY || "continue" === aY) && b2.tryLoc <= aZ && aZ <= b2.finallyLoc && (b2 = null);
          var b3 = b2 ? b2.completion : {};
          b3.type = aY;
          b3.arg = aZ;
          return b2 ? (this.method = "next", this.next = b2.finallyLoc, aF) : this.complete(b3);
        }
      },
      complete: function (aY, aZ) {
        {
          if ("throw" === aY.type) {
            throw aY.arg;
          }
          "break" === aY.type || "continue" === aY.type ? this.next = aY.arg : "return" === aY.type ? (this.rval = this.arg = aY.arg, this.method = "return", this.next = "end") : "normal" === aY.type && aZ && (this.next = aZ);
          return aF;
        }
      },
      finish: function (aY) {
        {
          for (var b0 = this.tryEntries.length - 1; b0 >= 0; --b0) {
            {
              var b1 = this.tryEntries[b0];
              if (b1.finallyLoc === aY) {
                this.complete(b1.completion, b1.afterLoc);
                aS(b1);
                return aF;
              }
            }
          }
        }
      },
      catch: function (aY) {
        {
          for (var b1 = this.tryEntries.length - 1; b1 >= 0; --b1) {
            {
              var b2 = this.tryEntries[b1];
              if (b2.tryLoc === aY) {
                {
                  var b3 = b2.completion;
                  if ("throw" === b3.type) {
                    {
                      var b4 = b3.arg;
                      aS(b2);
                    }
                  }
                  return b4;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aY, aZ, b0) {
        {
          this.delegate = {
            iterator: aU(aY),
            resultName: aZ,
            nextLoc: b0
          };
          "next" === this.method && (this.arg = ap);
          return aF;
        }
      }
    };
    return aq;
  }
  function l(ao, ap, aq, ar, as, at, au) {
    {
      try {
        {
          var ax = ao[at](au);
          var ay = ax.value;
        }
      } catch (aB) {
        return void aq(aB);
      }
      ax.done ? ap(ay) : Promise.resolve(ay).then(ar, as);
    }
  }
  function m(ao) {
    return function () {
      var ar = this;
      var as = arguments;
      return new Promise(function (at, au) {
        var aw = ao.apply(ar, as);
        function ax(az) {
          {
            l(aw, at, au, ax, ay, "next", az);
          }
        }
        function ay(az) {
          l(aw, at, au, ax, ay, "throw", az);
        }
        ax(undefined);
      });
    };
  }
  var n = ($.isNode() ? process.env.YueCheng : $.getdata("YueCheng")) || "";
  var o = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live";
  var p = ($.isNode() ? process.env.YueCheng_Ua : $.getdata("YueCheng_Ua")) || "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_yuecheng;xsb_yuecheng;1.7.0;native_app;6.12.0";
  window = {};
  var q = undefined;
  var r = "";
  var s = "";
  var t = "";
  var u = "31";
  var v = "";
  var w = "48";
  var x = "FR*r!isE5W";
  var y = "";
  var z = "";
  var A = "";
  var B = "";
  var C = "";
  var D = "";
  var E = "";
  var F = "";
  var G = "";
  var H = "K8tbWP2J0x3uCITGYEhL";
  var I = "35c782a2";
  var J = "";
  var K = "";
  var L = "";
  var M = "";
  function N() {
    return O.apply(this, arguments);
  }
  function O() {
    {
      O = m(k().mark(function ap() {
        {
          var ar;
          var as;
          var at;
          var au;
          var av;
          var aw;
          var ax;
          var ay;
          var az;
          var aA;
          var aB;
          var aC;
          var aD;
          var aE;
          var aF;
          var aG;
          var aH;
          var aI;
          var aJ;
          var aK;
          var aL;
          var aM;
          var aN;
          var aO;
          var aP;
          var aQ;
          var aR;
          var aS;
          var aT;
          var aU;
          var aV;
          var aW;
          var aX;
          var aY;
          var aZ;
          var b0;
          var b1;
          var b2;
          var b3;
          var b4;
          var b5;
          var b6;
          var b7;
          var b8;
          var b9;
          var ba;
          var bb;
          var bc;
          var bd;
          var be;
          var bf;
          var bg;
          var bh;
          var bi;
          var bj;
          var bk;
          var bl;
          var bm;
          var bn;
          var bo;
          var bp;
          var bq;
          var br;
          var bs;
          var bt;
          var bu;
          var bv;
          var bw;
          var bx;
          var by;
          var bz;
          var bA;
          var bB;
          var bC;
          return k().wrap(function bD(bE) {
            {
              for (;;) {
                switch (bE.prev = bE.next) {
                  case 0:
                    if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                      {
                        bE.next = 6;
                        break;
                      }
                    }
                    console.log("先去boxjs填写账号密码");
                    bE.next = 5;
                    return am("先去boxjs填写账号密码");
                  case 5:
                    return bE.abrupt("return");
                  case 6:
                    bE.next = 8;
                    return ak();
                  case 8:
                    q = bE.sent;
                    ar = n.split(" ");
                    as = c(ar);
                    bE.prev = 11;
                    as.s();
                  case 13:
                    if ((at = as.n()).done) {
                      {
                        bE.next = 311;
                        break;
                      }
                    }
                    au = at.value;
                    console.log("随机生成UA");
                    av = ai();
                    C = av.ua;
                    D = av.commonUa;
                    E = av.uuid;
                    console.log(C);
                    console.log(D);
                    y = au.split("&")[0];
                    z = au.split("&")[1];
                    A = au.split("&")[2];
                    B = au.split("&")[3] || y;
                    console.log("用户：".concat(y, "开始任务"));
                    console.log("获取sessionId");
                    bE.next = 30;
                    return V("/api/account/init");
                  case 30:
                    aw = bE.sent;
                    t = aw.data.session.id;
                    console.log(t);
                    console.log("获取signature_key");
                    bE.next = 36;
                    return P("/web/init?client_id=".concat(w));
                  case 36:
                    ax = bE.sent;
                    r = ax.data.client.signature_key;
                    console.log(r);
                    console.log("获取code");
                    bE.next = 42;
                    return R("/web/oauth/credential_auth");
                  case 42:
                    if (ay = bE.sent, ay.data) {
                      {
                        bE.next = 46;
                        break;
                      }
                    }
                    console.log(ay.message);
                    return bE.abrupt("continue", 309);
                  case 46:
                    az = ay.data.authorization_code.code;
                    console.log(az);
                    console.log("登录");
                    bE.next = 51;
                    return V("/api/zbtxz/login", "check_token=&code=".concat(az, "&token=&type=-1&union_id="));
                  case 51:
                    if (aA = bE.sent, console.log("登录成功"), v = aA.data.session.account_id, t = aA.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), F) {
                      {
                        bE.next = 65;
                        break;
                      }
                    }
                    bE.next = 61;
                    return T("/api/minus1floor/config");
                  case 61:
                    aB = bE.sent;
                    aC = /\/m-study-yuecheng\/home\?id=(\d+)/;
                    aD = JSON.stringify(aB).match(aC);
                    aD && (F = aD[1]);
                  case 65:
                    if (!F) {
                      {
                        bE.next = 183;
                        break;
                      }
                    }
                    var bG = {
                      debug: 0,
                      userId: ""
                    };
                    console.log(F);
                    console.log("获取key和token");
                    bE.next = 70;
                    return X("/api/member/login", bG);
                  case 70:
                    aE = bE.sent;
                    I = aE.data.key;
                    J = "Bearer " + aE.data.token;
                    console.log(I);
                    console.log(J);
                    console.log("获取抽奖id");
                    bE.next = 78;
                    return Z("/api/study/detail?id=".concat(F), {
                      id: F
                    });
                  case 78:
                    aF = bE.sent;
                    aG = aF.data.lottery.lottery_id;
                    console.log(aG);
                    console.log("开始阅读");
                    aH = c(aF.data.levels);
                    bE.prev = 83;
                    aH.s();
                  case 85:
                    if ((aI = aH.n()).done) {
                      {
                        bE.next = 127;
                        break;
                      }
                    }
                    aJ = aI.value;
                    bE.next = 89;
                    return Z("/api/study/level?id=".concat(aJ.id), {
                      id: aJ.id
                    });
                  case 89:
                    if (aK = bE.sent, console.log(aK.data.level.name), aK.data.level.task_num != aK.data.completedTasks.length) {
                      {
                        bE.next = 94;
                        break;
                      }
                    }
                    console.log("已完成");
                    return bE.abrupt("continue", 125);
                  case 94:
                    aL = c(aK.data.tasks);
                    bE.prev = 95;
                    aL.s();
                  case 97:
                    if ((aM = aL.n()).done) {
                      {
                        bE.next = 117;
                        break;
                      }
                    }
                    for (aN = aM.value, aO = aN.link.split("?")[1], aP = {}, aQ = aO.split("&"), aR = 0, aS = aQ.length; aR < aS; aR++) {
                      aT = aQ[aR].split("=");
                      aP[aT[0]] = aT[1];
                    }
                    bE.next = 105;
                    return T("/api/article/detail?id=".concat(aP.id));
                  case 105:
                    aU = bE.sent;
                    console.log("文章：".concat(aU.data.article.list_title));
                    bE.next = 109;
                    return T("/api/article/read_time?channel_article_id=".concat(aP.id, "&read_time=5938"));
                  case 109:
                    var bH = {
                      id: aN.id
                    };
                    aV = bE.sent;
                    console.log("阅读：".concat(aV.message));
                    bE.next = 113;
                    return X("/api/study/task/complete", bH);
                  case 113:
                    aW = bE.sent;
                    console.log("完成任务：".concat(aW.message));
                  case 115:
                    bE.next = 97;
                    break;
                  case 117:
                    bE.next = 122;
                    break;
                  case 119:
                    bE.prev = 119;
                    bE.t0 = bE.catch(95);
                    aL.e(bE.t0);
                  case 122:
                    bE.prev = 122;
                    aL.f();
                    return bE.finish(122);
                  case 125:
                    bE.next = 85;
                    break;
                  case 127:
                    bE.next = 132;
                    break;
                  case 129:
                    bE.prev = 129;
                    bE.t1 = bE.catch(83);
                    aH.e(bE.t1);
                  case 132:
                    bE.prev = 132;
                    aH.f();
                    return bE.finish(132);
                  case 135:
                    bE.next = 137;
                    return X("/api/lotterybigwheel/_ac_lottery_count", {
                      id: aG,
                      module: "study"
                    });
                  case 137:
                    aX = bE.sent;
                    console.log("拥有".concat(aX.data.count, "次抽奖"));
                    aY = 0;
                  case 140:
                    if (!(aY < aX.data.count)) {
                      {
                        bE.next = 181;
                        break;
                      }
                    }
                    var bI = {
                      id: aG,
                      app_id: H,
                      module: "study",
                      optionHash: ""
                    };
                    bE.next = 143;
                    return X("/api/lotterybigwheel/_ac_lottery", bI);
                  case 143:
                    if (aZ = bE.sent, 10000 != aZ.code) {
                      {
                        bE.next = 177;
                        break;
                      }
                    }
                    var bJ = {
                      activity_id: aG,
                      module: "bigWheel"
                    };
                    console.log(aZ.message);
                    bE.next = 148;
                    return X("/api/captcha/get", bJ);
                  case 148:
                    b0 = bE.sent;
                    b1 = b0.data.jigsawImageUrl;
                    b2 = b0.data.originalImageUrl;
                    console.log("滑块：".concat(b1));
                    console.log("背景：".concat(b2));
                    b3 = b0.data.token;
                    b4 = b0.data.secretKey;
                    console.log("秘钥：".concat(b4));
                    bE.next = 158;
                    return a9({
                      slidingImage: b1,
                      backImage: b2
                    });
                  case 158:
                    if (b5 = bE.sent, b5) {
                      {
                        bE.next = 164;
                        break;
                      }
                    }
                    console.log("ddddocr服务异常");
                    bE.next = 163;
                    return am("ddddocr服务异常");
                  case 163:
                    return bE.abrupt("continue", 178);
                  case 164:
                    console.log(b5);
                    b6 = ac(JSON.stringify({
                      x: b5.result,
                      y: 5
                    }), b4);
                    bE.next = 168;
                    return X("/api/captcha/check", {
                      activity_id: aG,
                      module: "bigWheel",
                      cap_token: b3,
                      point: b6
                    });
                  case 168:
                    if (b7 = bE.sent, console.log("验证滑块：" + b7.message), "操作成功" != b7.message) {
                      {
                        bE.next = 175;
                        break;
                      }
                    }
                    bE.next = 173;
                    return X("/api/lotterybigwheel/_ac_lottery", {
                      id: aG,
                      app_id: H,
                      module: "study",
                      optionHash: ""
                    });
                  case 173:
                    aZ = bE.sent;
                    aZ.data.code ? (console.log("抽奖获得：".concat(aZ.data.title)), s += "用户：".concat(y, " 抽奖获得：").concat(aZ.data.title, "\n")) : (console.log("抽奖获得：".concat(aZ.data.tip_title)), s += "用户：".concat(y, " 抽奖获得：").concat(aZ.data.tip_title, "\n"));
                  case 175:
                    bE.next = 178;
                    break;
                  case 177:
                    aZ.data.code ? (console.log("抽奖获得：".concat(aZ.data.title)), s += "用户：".concat(y, " 抽奖获得：").concat(aZ.data.title, "\n")) : (console.log("抽奖获得：".concat(aZ.data.tip_title)), s += "用户：".concat(y, " 抽奖获得：").concat(aZ.data.tip_title, "\n"));
                  case 178:
                    aY++;
                    bE.next = 140;
                    break;
                  case 181:
                    bE.next = 184;
                    break;
                  case 183:
                    console.log("未匹配到id");
                  case 184:
                    if (console.log("————————————"), console.log("动动手指赢红包"), console.log("获取readId"), G) {
                      {
                        bE.next = 194;
                        break;
                      }
                    }
                    bE.next = 190;
                    return T("/api/minus1floor/config");
                  case 190:
                    b8 = bE.sent;
                    b9 = /\/webDetails\/subject\?id=(\d+)/;
                    ba = JSON.stringify(b8).match(b9);
                    ba && (G = ba[1]);
                  case 194:
                    if (!G) {
                      {
                        bE.next = 308;
                        break;
                      }
                    }
                    console.log(G);
                    bE.next = 198;
                    return T("/api/article/detail?id=".concat(G));
                  case 198:
                    bb = bE.sent;
                    bE.next = 201;
                    return T("/api/article/subject_group_list?group_id=".concat(bb.data.article.subject_groups[0].group_id));
                  case 201:
                    bc = bE.sent;
                    bd = c(bc.data.article_list);
                    bE.prev = 203;
                    bd.s();
                  case 205:
                    if ((be = bd.n()).done) {
                      {
                        bE.next = 298;
                        break;
                      }
                    }
                    if (bf = be.value, aj(bf.published_at)) {
                      {
                        bE.next = 209;
                        break;
                      }
                    }
                    return bE.abrupt("break", 298);
                  case 209:
                    console.log("文章：".concat(bf.list_title));
                    bE.next = 212;
                    return T("/api/article/detail?id=".concat(bf.id));
                  case 212:
                    if (bg = bE.sent, bh = bg.data.article.content, bi = bh.match(/id%3D(\d+)%26dbnewopen/), !bi) {
                      {
                        bE.next = 220;
                        break;
                      }
                    }
                    L = bi[1];
                    console.log("activityId：".concat(L));
                    bE.next = 222;
                    break;
                  case 220:
                    console.log("未匹配到activityId");
                    return bE.abrupt("continue", 296);
                  case 222:
                    console.log("阅读登录");
                    bE.next = 225;
                    return a1("/customActivity/zjtm/autoLogin?_=".concat(Date.now(), "&sessionId=").concat(t, "&accountId=").concat(v, "&redirectUrl=https://95337.activity-42.m.duiba.com.cn/hdtool/index?id=").concat(L, "&dbnewopen"));
                  case 225:
                    bj = bE.sent;
                    bk = bj.data;
                    K = "";
                    bE.next = 230;
                    return a5(bk);
                  case 230:
                    K = bE.sent;
                    console.log("获取抽奖key");
                    bE.next = 234;
                    return a7("https://95337.activity-42.m.duiba.com.cn/hdtool/index?id=".concat(L, "&dbnewopen&from=login&spm=95337.1.1.1"));
                  case 234:
                    if (bl = bE.sent, bl) {
                      {
                        bE.next = 237;
                        break;
                      }
                    }
                    return bE.abrupt("continue", 296);
                  case 237:
                    bE.next = 239;
                    return a3("/hdtool/ctoken/getTokenNew", "timestamp=".concat(Date.now(), "&activityId=").concat(L, "&activityType=hdtool&consumerId=").concat(M));
                  case 239:
                    bm = bE.sent;
                    eval(bm.token);
                    bn = window[bl];
                    bE.next = 244;
                    return a3("/hdtool/dy/doJoin?dpm=95337.3.1.0&activityId=".concat(L, "&_=").concat(Date.now()), "actId=".concat(L, "&oaId=").concat(L, "&activityType=hdtool&consumerId=").concat(M, "&token=").concat(bn));
                  case 244:
                    if (bo = bE.sent, !bo.success) {
                      {
                        bE.next = 293;
                        break;
                      }
                    }
                    if (bo.orderId) {
                      {
                        bE.next = 249;
                        break;
                      }
                    }
                    console.log(bo.message);
                    return bE.abrupt("continue", 296);
                  case 249:
                    bp = bo.orderId;
                    bq = 0;
                  case 251:
                    if (0 != bq) {
                      {
                        bE.next = 291;
                        break;
                      }
                    }
                    bE.next = 254;
                    return a3("/hdtool/getOrderStatus?_=".concat(Date.now()), "orderId=".concat(bp, "&adslotId="));
                  case 254:
                    if (br = bE.sent, bq = br.result, 0 != bq) {
                      {
                        bE.next = 260;
                        break;
                      }
                    }
                    console.log(br.message);
                    bE.next = 289;
                    break;
                  case 260:
                    if ("thanks" == br.lottery.type && console.log("谢谢参与"), "alipay" != br.lottery.type) {
                      {
                        bE.next = 289;
                        break;
                      }
                    }
                    for (console.log("抽奖获得支付宝红包：".concat(br.lottery.title)), s += "用户：".concat(y, " 抽奖获得支付宝红包：").concat(br.lottery.title, "\n"), bs = br.lottery.link, bt = bs.split("?")[1], bu = {}, bv = bt.split("&"), bw = 0, bx = bv.length; bw < bx; bw++) {
                      by = bv[bw].split("=");
                      bu[by[0]] = by[1];
                    }
                    if (bz = bu.recordId, !A || !B) {
                      {
                        bE.next = 288;
                        break;
                      }
                    }
                    console.log("获取兑换key");
                    bE.next = 274;
                    return a7("https://95337.activity-42.m.duiba.com.cn/activity/takePrizeNew?recordId=".concat(bz, "&dbnewopen"));
                  case 274:
                    if (bl = bE.sent, bl) {
                      {
                        bE.next = 277;
                        break;
                      }
                    }
                    return bE.abrupt("continue", 251);
                  case 277:
                    bE.next = 279;
                    return a3("/ctoken/getToken.do");
                  case 279:
                    bA = bE.sent;
                    eval(bA.token);
                    bB = window[bl];
                    bE.next = 284;
                    return a3("/activity/doTakePrize", "alipay=".concat(B, "&realname=").concat(encodeURI(A), "&recordId=").concat(bz, "&token=").concat(bB));
                  case 284:
                    bC = bE.sent;
                    console.log(bC.message);
                    bE.next = 289;
                    break;
                  case 288:
                    console.log("请设置支付宝姓名和账号");
                  case 289:
                    bE.next = 251;
                    break;
                  case 291:
                    bE.next = 294;
                    break;
                  case 293:
                    console.log(bo.message);
                  case 294:
                    bE.next = 296;
                    return $.wait(2000);
                  case 296:
                    bE.next = 205;
                    break;
                  case 298:
                    bE.next = 303;
                    break;
                  case 300:
                    bE.prev = 300;
                    bE.t2 = bE.catch(203);
                    bd.e(bE.t2);
                  case 303:
                    bE.prev = 303;
                    bd.f();
                    return bE.finish(303);
                  case 306:
                    bE.next = 309;
                    break;
                  case 308:
                    console.log("未匹配到readId");
                  case 309:
                    bE.next = 13;
                    break;
                  case 311:
                    bE.next = 316;
                    break;
                  case 313:
                    bE.prev = 313;
                    bE.t3 = bE.catch(11);
                    as.e(bE.t3);
                  case 316:
                    bE.prev = 316;
                    as.f();
                    return bE.finish(316);
                  case 319:
                    if (!s) {
                      {
                        bE.next = 322;
                        break;
                      }
                    }
                    bE.next = 322;
                    return am(s);
                  case 322:
                  case "end":
                    return bE.stop();
                }
              }
            }
          }, ap, null, [[11, 313, 316, 319], [83, 129, 132, 135], [95, 119, 122, 125], [203, 300, 303, 306]]);
        }
      }));
      return O.apply(this, arguments);
    }
  }
  function P(ao) {
    {
      return Q.apply(this, arguments);
    }
  }
  function Q() {
    Q = m(k().mark(function ap(aq) {
      return k().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              return ar.abrupt("return", new Promise(function (at) {
                {
                  var av = {
                    url: "https://passport.tmuyun.com".concat(aq),
                    headers: {
                      Connection: "Keep-Alive",
                      "Cache-Control": "no-cache",
                      "X-REQUEST-ID": ag(),
                      "Accept-Encoding": "gzip",
                      "user-agent": C
                    }
                  };
                  $.get(av, function () {
                    {
                      var ax = m(k().mark(function az(aA, aB, aC) {
                        {
                          return k().wrap(function (aE) {
                            {
                              for (;;) {
                                switch (aE.prev = aE.next) {
                                  case 0:
                                    try {
                                      {
                                        aA ? (console.log("".concat(JSON.stringify(aA))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : at(JSON.parse(aC));
                                      }
                                    } catch (aG) {
                                      {
                                        $.logErr(aG, aB);
                                      }
                                    } finally {
                                      {
                                        at();
                                      }
                                    }
                                  case 1:
                                  case "end":
                                    return aE.stop();
                                }
                              }
                            }
                          }, az);
                        }
                      }));
                      return function (aA, aB, aC) {
                        {
                          return ax.apply(this, arguments);
                        }
                      };
                    }
                  }());
                }
              }));
            case 1:
            case "end":
              return ar.stop();
          }
        }
      }, ap);
    }));
    return Q.apply(this, arguments);
  }
  function R(ao) {
    return S.apply(this, arguments);
  }
  function S() {
    S = m(k().mark(function ap(aq) {
      var as;
      return k().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              as = ad();
              return at.abrupt("return", new Promise(function (av) {
                var aw = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": as.uuid,
                  "X-SIGNATURE": as.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": C
                };
                var ax = {
                  url: "https://passport.tmuyun.com".concat(aq),
                  headers: aw,
                  body: as.body
                };
                $.post(ax, function () {
                  var az = m(k().mark(function aA(aB, aC, aD) {
                    return k().wrap(function (aE) {
                      for (;;) {
                        switch (aE.prev = aE.next) {
                          case 0:
                            try {
                              aB ? (console.log("".concat(JSON.stringify(aB))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : av(JSON.parse(aD));
                            } catch (aF) {
                              $.logErr(aF, aC);
                            } finally {
                              av();
                            }
                          case 1:
                          case "end":
                            return aE.stop();
                        }
                      }
                    }, aA);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return S.apply(this, arguments);
  }
  function T(ao) {
    return U.apply(this, arguments);
  }
  function U() {
    U = m(k().mark(function ap(aq) {
      var ar;
      return k().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              ar = af(aq);
              return as.abrupt("return", new Promise(function (au) {
                var av = {
                  url: "https://vapp.tmuyun.com".concat(aq),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ar.time,
                    "X-SESSION-ID": t,
                    "X-REQUEST-ID": ar.uuid,
                    "X-SIGNATURE": ar.signature,
                    "X-TENANT-ID": u,
                    "X-ACCOUNT-ID": v,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": D
                  }
                };
                $.get(av, function () {
                  var ax = m(k().mark(function ay(az, aA, aB) {
                    return k().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !az) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 9;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            au(JSON.parse(aB));
                          case 9:
                            aC.next = 14;
                            break;
                          case 11:
                            aC.prev = 11;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, aA);
                          case 14:
                            aC.prev = 14;
                            au();
                            return aC.finish(14);
                          case 17:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ay, null, [[0, 11, 14, 17]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return U.apply(this, arguments);
  }
  function V(ao, ap) {
    return W.apply(this, arguments);
  }
  function W() {
    W = m(k().mark(function ap(aq, ar) {
      var as;
      return k().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              as = af(aq);
              return at.abrupt("return", new Promise(function (av) {
                var ax = {
                  url: "https://vapp.tmuyun.com".concat(aq),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": as.time,
                    "X-SESSION-ID": t,
                    "X-REQUEST-ID": as.uuid,
                    "X-SIGNATURE": as.signature,
                    "X-TENANT-ID": u,
                    "X-ACCOUNT-ID": v,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": D
                  },
                  body: ar
                };
                $.post(ax, function () {
                  var ay = m(k().mark(function az(aA, aB, aC) {
                    return k().wrap(function (aE) {
                      for (;;) {
                        switch (aE.prev = aE.next) {
                          case 0:
                            if (aE.prev = 0, !aA) {
                              aE.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aA)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aE.next = 9;
                            break;
                          case 6:
                            aE.next = 8;
                            return $.wait(2000);
                          case 8:
                            av(JSON.parse(aC));
                          case 9:
                            aE.next = 14;
                            break;
                          case 11:
                            aE.prev = 11;
                            aE.t0 = aE.catch(0);
                            $.logErr(aE.t0, aB);
                          case 14:
                            aE.prev = 14;
                            av();
                            return aE.finish(14);
                          case 17:
                          case "end":
                            return aE.stop();
                        }
                      }
                    }, az, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aA, aB, aC) {
                    return ay.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return W.apply(this, arguments);
  }
  function X(ao, ap) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = m(k().mark(function ap(aq, ar) {
      var as;
      return k().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              as = ae(ar);
              return at.abrupt("return", new Promise(function (av) {
                var ax = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(aq),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": E,
                    "access-auth-id": v,
                    "access-api-signature": as.signature,
                    "access-nonce-str": as.uuid,
                    authorization: J,
                    "access-app-id": H,
                    "access-timestamp": as.time,
                    "access-api-token": t,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_yuecheng;xsb_yuecheng;1.7.0;native_app;6.12.0",
                    "content-type": "application/json; charset=UTF-8",
                    origin: "https://op-h5.cloud.jinhua.com.cn",
                    "x-requested-with": "com.zjonline.zhuji",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://op-h5.cloud.jinhua.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ar)
                };
                $.post(ax, function () {
                  var az = m(k().mark(function aA(aB, aC, aD) {
                    return k().wrap(function (aE) {
                      for (;;) {
                        switch (aE.prev = aE.next) {
                          case 0:
                            if (aE.prev = 0, !aB) {
                              aE.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aB)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aE.next = 9;
                            break;
                          case 6:
                            aE.next = 8;
                            return $.wait(2000);
                          case 8:
                            av(JSON.parse(aD));
                          case 9:
                            aE.next = 14;
                            break;
                          case 11:
                            aE.prev = 11;
                            aE.t0 = aE.catch(0);
                            $.logErr(aE.t0, aC);
                          case 14:
                            aE.prev = 14;
                            av();
                            return aE.finish(14);
                          case 17:
                          case "end":
                            return aE.stop();
                        }
                      }
                    }, aA, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return Y.apply(this, arguments);
  }
  function Z(ao, ap) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = m(k().mark(function aq(ar, as) {
      var au;
      return k().wrap(function (av) {
        for (;;) {
          switch (av.prev = av.next) {
            case 0:
              au = ae(as);
              return av.abrupt("return", new Promise(function (aw) {
                var ay = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(ar),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": E,
                    "access-auth-id": v,
                    "access-api-signature": au.signature,
                    "access-nonce-str": au.uuid,
                    authorization: J,
                    "access-app-id": H,
                    "access-timestamp": au.time,
                    "access-api-token": t,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_yuecheng;xsb_yuecheng;1.7.0;native_app;6.12.0",
                    origin: "https://op-h5.cloud.jinhua.com.cn",
                    "x-requested-with": "com.zjonline.zhuji",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://op-h5.cloud.jinhua.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ay, function () {
                  var az = m(k().mark(function aA(aB, aC, aD) {
                    return k().wrap(function (aF) {
                      for (;;) {
                        switch (aF.prev = aF.next) {
                          case 0:
                            if (aF.prev = 0, !aB) {
                              aF.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aB)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aF.next = 9;
                            break;
                          case 6:
                            aF.next = 8;
                            return $.wait(2000);
                          case 8:
                            aw(JSON.parse(aD));
                          case 9:
                            aF.next = 14;
                            break;
                          case 11:
                            aF.prev = 11;
                            aF.t0 = aF.catch(0);
                            $.logErr(aF.t0, aC);
                          case 14:
                            aF.prev = 14;
                            aw();
                            return aF.finish(14);
                          case 17:
                          case "end":
                            return aF.stop();
                        }
                      }
                    }, aA, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return av.stop();
          }
        }
      }, aq);
    }));
    return a0.apply(this, arguments);
  }
  function a1(ao) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = m(k().mark(function ap(aq) {
      return k().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (at) {
                var av = {
                  url: "https://95337.activity-42.m.duiba.com.cn".concat(aq),
                  headers: {
                    accept: "*/*",
                    "user-agent": p,
                    "x-requested-with": "com.zjonline.yuecheng",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(av, function () {
                  var ax = m(k().mark(function ay(az, aA, aB) {
                    return k().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !az) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 9;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            at(JSON.parse(aB));
                          case 9:
                            aC.next = 14;
                            break;
                          case 11:
                            aC.prev = 11;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, aA);
                          case 14:
                            aC.prev = 14;
                            at();
                            return aC.finish(14);
                          case 17:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ay, null, [[0, 11, 14, 17]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return a2.apply(this, arguments);
  }
  function a3(ao, ap) {
    return a4.apply(this, arguments);
  }
  function a4() {
    a4 = m(k().mark(function ap(aq, ar) {
      return k().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              return at.abrupt("return", new Promise(function (av) {
                var ax = {
                  url: "https://95337.activity-42.m.duiba.com.cn".concat(aq),
                  headers: {
                    accept: "application/json",
                    "user-agent": p,
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://95337.activity-42.m.duiba.com.cn",
                    cookie: K,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://95337.activity-42.m.duiba.com.cn/hdtool/index?id=".concat(L, "&dbnewopen&from=login&spm=95337.1.1.1"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: ar
                };
                $.post(ax, function () {
                  var az = m(k().mark(function aA(aB, aC, aD) {
                    return k().wrap(function (aE) {
                      for (;;) {
                        switch (aE.prev = aE.next) {
                          case 0:
                            if (aE.prev = 0, !aB) {
                              aE.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aB)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aE.next = 9;
                            break;
                          case 6:
                            aE.next = 8;
                            return $.wait(2000);
                          case 8:
                            av(JSON.parse(aD));
                          case 9:
                            aE.next = 14;
                            break;
                          case 11:
                            aE.prev = 11;
                            aE.t0 = aE.catch(0);
                            $.logErr(aE.t0, aC);
                          case 14:
                            aE.prev = 14;
                            av();
                            return aE.finish(14);
                          case 17:
                          case "end":
                            return aE.stop();
                        }
                      }
                    }, aA, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return a4.apply(this, arguments);
  }
  function a5(ao) {
    return a6.apply(this, arguments);
  }
  function a6() {
    a6 = m(k().mark(function ap(aq) {
      return k().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              return at.abrupt("return", new Promise(function (av) {
                var aw = {
                  accept: "*/*",
                  "user-agent": p,
                  "x-requested-with": "com.zjonline.yuecheng",
                  "sec-fetch-site": "same-origin",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var ax = {
                  url: "https:".concat(aq),
                  headers: aw,
                  followRedirect: false
                };
                $.get(ax, function () {
                  var az = m(k().mark(function aA(aB, aC, aD) {
                    var aE;
                    var aF;
                    return k().wrap(function (aG) {
                      for (;;) {
                        switch (aG.prev = aG.next) {
                          case 0:
                            if (aG.prev = 0, !aB) {
                              aG.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aB)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aG.next = 10;
                            break;
                          case 6:
                            aG.next = 8;
                            return $.wait(2000);
                          case 8:
                            if ($.isNode()) {
                              for (aE = aC.headers["set-cookie"] || aC.headers["Set-Cookie"], aF = 0; aF < aE.length; aF++) {
                                K += aE[aF].split(";")[0] + ";";
                              }
                            } else {
                              K = aC.headers["set-cookie"] || aC.headers["Set-Cookie"];
                              K = ab(K);
                            }
                            av(K);
                          case 10:
                            aG.next = 15;
                            break;
                          case 12:
                            aG.prev = 12;
                            aG.t0 = aG.catch(0);
                            $.logErr(aG.t0, aC);
                          case 15:
                            aG.prev = 15;
                            av();
                            return aG.finish(15);
                          case 18:
                          case "end":
                            return aG.stop();
                        }
                      }
                    }, aA, null, [[0, 12, 15, 18]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return a6.apply(this, arguments);
  }
  function a7(ao) {
    return a8.apply(this, arguments);
  }
  function a8() {
    a8 = m(k().mark(function ao(ap) {
      return k().wrap(function ar(as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (at) {
                var av = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": p,
                  "x-requested-with": "com.zjonline.yuecheng",
                  "sec-fetch-site": "same-origin",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  referer: "https://95337.activity-42.m.duiba.com.cn/",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: K
                };
                var ax = {
                  url: ap,
                  headers: av
                };
                $.get(ax, function () {
                  var az = m(k().mark(function aA(aB, aC, aD) {
                    var aE;
                    var aF;
                    var aG;
                    var aH;
                    return k().wrap(function aI(aJ) {
                      for (;;) {
                        switch (aJ.prev = aJ.next) {
                          case 0:
                            if (aJ.prev = 0, !aB) {
                              aJ.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aB)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aJ.next = 22;
                            break;
                          case 6:
                            aJ.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (aD) {
                              aJ.next = 12;
                              break;
                            }
                            console.log("获取key失败");
                            at("");
                            return aJ.abrupt("return");
                          case 12:
                            aE = /<script type\b[^>]*>\s*var([\s\S]*?)<\/script>/.exec(aD)[1];
                            eval(aE);
                            aF = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
                            console.log(aF);
                            console.log("获取consumerId");
                            aG = /consumerId:'(\d+)'/;
                            aH = aD.match(aG);
                            M = aH ? aH[1] : "4135312778";
                            console.log(M);
                            at(aF);
                          case 22:
                            aJ.next = 27;
                            break;
                          case 24:
                            aJ.prev = 24;
                            aJ.t0 = aJ.catch(0);
                            $.logErr(aJ.t0, aC);
                          case 27:
                            aJ.prev = 27;
                            at();
                            return aJ.finish(27);
                          case 30:
                          case "end":
                            return aJ.stop();
                        }
                      }
                    }, aA, null, [[0, 24, 27, 30]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ao);
    }));
    return a8.apply(this, arguments);
  }
  function a9(ao) {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = m(k().mark(function ao(ap) {
      return k().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              return ar.abrupt("return", new Promise(function (as) {
                var au = {
                  "Content-Type": "application/json"
                };
                var av = {
                  url: "".concat(o, "/capcode"),
                  headers: au,
                  body: JSON.stringify(ap)
                };
                $.post(av, function (aw, ax, ay) {
                  try {
                    aw ? (console.log("".concat(JSON.stringify(aw))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : as(JSON.parse(ay));
                  } catch (az) {
                    $.logErr(az, ax);
                  } finally {
                    as();
                  }
                });
              }));
            case 1:
            case "end":
              return ar.stop();
          }
        }
      }, ao);
    }));
    return aa.apply(this, arguments);
  }
  function ab(ao) {
    var ap = ao.split(", ");
    var aq = ap.map(function (ar) {
      var as = ar.split(";")[0];
      return as.trim();
    });
    return aq.join(";");
  }
  function ac(ao, ap) {
    CryptoJS = q.createCryptoJS();
    var aq = CryptoJS.enc.Utf8.parse(ap);
    var ar = CryptoJS.enc.Utf8.parse(ao);
    var as = CryptoJS.AES.encrypt(ar, aq, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return as.toString();
  }
  function ad() {
    var aq = new (q.loadJSEncrypt())();
    aq.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    z = aq.encrypt(z);
    var as = ag();
    var at = "client_id=".concat(w, "&password=").concat(z, "&phone_number=").concat(y);
    var au = "post%%/web/oauth/credential_auth?".concat(at, "%%").concat(as, "%%");
    at = "client_id=".concat(w, "&password=").concat(encodeURIComponent(z), "&phone_number=").concat(y);
    CryptoJS = q.createCryptoJS();
    var av = CryptoJS.HmacSHA256(au, r);
    var aw = CryptoJS.enc.Hex.stringify(av);
    var ar = {
      uuid: as,
      signature: aw,
      body: at
    };
    return ar;
  }
  function ae(ao) {
    var aw = ag();
    var ax = Date.now();
    var ay = {
      app_id: H,
      device_id: E,
      nonce_str: aw,
      source_type: "app",
      timestamp: ax,
      auth_id: v,
      token: t
    };
    Object.entries(ao).forEach(function (az) {
      var aA = d(az, 2);
      var aB = aA[0];
      var aC = aA[1];
      ay[aB] = aC;
    });
    var au = Object.keys(ay).sort();
    var av = au.map(function (az) {
      return "".concat(az, "=").concat(ay[az]);
    }).join("&&");
    av = av + "&&" + I;
    CryptoJS = q.createCryptoJS();
    var as = CryptoJS.SHA256(av).toString();
    var at = {
      uuid: aw,
      time: ax,
      signature: as
    };
    return at;
  }
  function af(ao) {
    var ap = ag();
    var aq = Date.now();
    ao.indexOf("?") > 0 && (ao = ao.substring(0, ao.indexOf("?")));
    CryptoJS = q.createCryptoJS();
    var ar = CryptoJS.SHA256("".concat(ao, "&&").concat(t, "&&").concat(ap, "&&").concat(aq, "&&").concat(x, "&&").concat(u)).toString();
    var as = {
      uuid: ap,
      time: aq,
      signature: ar
    };
    return as;
  }
  function ag() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ap) {
      var aq = 16 * Math.random() | 0;
      var ar = "x" === ap ? aq : 3 & aq | 8;
      return ar.toString(16);
    });
  }
  function ah(ao) {
    return ao[Math.floor(Math.random() * ao.length)];
  }
  function ai() {
    var ao = "1.7.0";
    var ap = ag();
    var aq = ah(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var ar = "Xiaomi " + aq;
    var as = "Android";
    var at = "".concat(as.toUpperCase(), ";").concat("11", ";").concat(w, ";").concat(ao, ";1.0;null;").concat(aq);
    var au = "".concat(ao, ";").concat(ap, ";").concat(ar, ";").concat(as, ";").concat("11", ";").concat("Release", ";").concat("6.12.0");
    var av = {
      ua: at,
      commonUa: au,
      uuid: ap
    };
    return av;
  }
  function aj(ao) {
    var ap = new Date(ao);
    var aq = new Date();
    return ap.getFullYear() === aq.getFullYear() && ap.getMonth() === aq.getMonth() && ap.getDate() === aq.getDate();
  }
  function ak() {
    return al.apply(this, arguments);
  }
  function al() {
    al = m(k().mark(function ap() {
      var ar;
      return k().wrap(function as(at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              if (ar = $.getdata("Utils_Code") || "", !ar || !Object.keys(ar).length) {
                at.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ar);
              return at.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return at.abrupt("return", new Promise(function () {
                var av = m(k().mark(function aw(ax) {
                  return k().wrap(function az(aA) {
                    for (;;) {
                      switch (aA.prev = aA.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (aC) {
                            $.setdata(aC, "Utils_Code");
                            eval(aC);
                            console.log("✅ Utils加载成功, 请继续");
                            ax(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aA.stop();
                      }
                    }
                  }, aw);
                }));
                return function (ax) {
                  return av.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return al.apply(this, arguments);
  }
  function am(ao) {
    return an.apply(this, arguments);
  }
  function an() {
    an = m(k().mark(function ap(aq) {
      return k().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              if (!$.isNode()) {
                ar.next = 5;
                break;
              }
              ar.next = 3;
              return notify.sendNotify($.name, aq);
            case 3:
              ar.next = 6;
              break;
            case 5:
              $.msg($.name, "", aq);
            case 6:
            case "end":
              return ar.stop();
          }
        }
      }, ap);
    }));
    return an.apply(this, arguments);
  }
  m(k().mark(function ao() {
    return k().wrap(function (ap) {
      for (;;) {
        switch (ap.prev = ap.next) {
          case 0:
            ap.next = 2;
            return N();
          case 2:
          case "end":
            return ap.stop();
        }
      }
    }, ao);
  }))().catch(function (ap) {
    $.log(ap);
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
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
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
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
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
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
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
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
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
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
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
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
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
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
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
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
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
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
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
              case "Node.js":
                return;
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
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
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
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
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
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
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
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
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
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}