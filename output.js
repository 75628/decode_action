//Thu Aug 06 2026 07:05:22 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("掌上瓯海");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a3) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a6) {
        return typeof a6;
      } : function (a6) {
        return a6 && "function" == typeof Symbol && a6.constructor === Symbol && a6 !== Symbol.prototype ? "symbol" : typeof a6;
      };
      return b(a3);
    }
  }
  function c(a3, a4) {
    {
      var a6 = "undefined" != typeof Symbol && a3[Symbol.iterator] || a3["@@iterator"];
      if (!a6) {
        {
          if (Array.isArray(a3) || (a6 = d(a3)) || a4 && a3 && "number" == typeof a3.length) {
            {
              a6 && (a3 = a6);
              var a7 = 0;
              var a8 = function () {};
              return {
                s: a8,
                n: function () {
                  {
                    var ae = {
                      done: true
                    };
                    return a7 >= a3.length ? ae : {
                      done: false,
                      value: a3[a7++]
                    };
                  }
                },
                e: function (ae) {
                  {
                    throw ae;
                  }
                },
                f: a8
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var a9;
      var aa = true;
      var ab = false;
      return {
        s: function () {
          {
            a6 = a6.call(a3);
          }
        },
        n: function () {
          {
            var ag = a6.next();
            aa = ag.done;
            return ag;
          }
        },
        e: function (af) {
          {
            ab = true;
            a9 = af;
          }
        },
        f: function () {
          {
            try {
              {
                aa || null == a6.return || a6.return();
              }
            } finally {
              {
                if (ab) {
                  throw a9;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(a3, a4) {
    {
      if (a3) {
        {
          if ("string" == typeof a3) {
            return f(a3, a4);
          }
          var a5 = {}.toString.call(a3).slice(8, -1);
          "Object" === a5 && a3.constructor && (a5 = a3.constructor.name);
          return "Map" === a5 || "Set" === a5 ? Array.from(a3) : "Arguments" === a5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a5) ? f(a3, a4) : undefined;
        }
      }
    }
  }
  function f(a3, a4) {
    {
      (null == a4 || a4 > a3.length) && (a4 = a3.length);
      for (var a5 = 0, a6 = Array(a4); a5 < a4; a5++) {
        a6[a5] = a3[a5];
      }
      return a6;
    }
  }
  function g() {
    "use strict";

    var a3 = {
      EbZAm: function (aA, aB) {
        return aA == aB;
      },
      VwdYp: "VKMYg",
      alAne: function (aA, aB) {
        return aA === aB;
      },
      xmyEs: "uIOsU",
      NxhGz: function (aA, aB) {
        return aA == aB;
      },
      nSgre: "function",
      QnrRV: function (aA, aB) {
        return aA === aB;
      },
      aQhEW: function (aA, aB) {
        return aA !== aB;
      },
      GLops: "symbol",
      tTcQn: function (aA, aB) {
        return aA(aB);
      },
      Xdntc: " API请求失败，请检查网路重试",
      lyAhr: function (aA, aB) {
        return aA(aB);
      },
      hrPOF: function (aA, aB, aC, aD, aE) {
        return aA(aB, aC, aD, aE);
      },
      Bhdup: "throw",
      LkvGc: "KCDaq",
      BLmHi: function (aA, aB) {
        return aA === aB;
      },
      IDHWJ: function (aA, aB) {
        return aA === aB;
      },
      jPYao: "Ylyxn",
      UkYYb: "Iwaha",
      CLLmi: function (aA, aB) {
        return aA instanceof aB;
      },
      LAMDh: function (aA, aB, aC, aD) {
        return aA(aB, aC, aD);
      },
      WFXTD: "_invoke",
      rToul: function (aA, aB) {
        return aA in aB;
      },
      AQQYX: function (aA, aB) {
        return aA === aB;
      },
      Bzkwu: function (aA, aB) {
        return aA >= aB;
      },
      jAtYl: function (aA, aB) {
        return aA in aB;
      },
      ngOlj: "end",
      fRjbQ: "iterator result is not an object",
      Lajvm: function (aA, aB) {
        return aA === aB;
      },
      Lwguc: "QHCBM",
      HZVIf: "joUzv",
      rUhDY: "Generator is already running",
      hmpbl: function (aA, aB) {
        return aA === aB;
      },
      KkxPY: "KYTJk",
      bjzxG: "fpepS",
      zrGrp: "pUeOW",
      JmFjP: "JpVXQ",
      QICbV: "next",
      eLkRn: "FTiDN",
      ePCep: function (aA, aB) {
        return aA === aB;
      },
      NscDH: "normal",
      VqLrv: "iZjDV",
      IVJQg: "SioQz",
      FfoYS: function (aA, aB) {
        return aA === aB;
      },
      xKBIh: function (aA, aB) {
        return aA !== aB;
      },
      pBQmP: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
      rDZcn: "vTAPi",
      fRdoq: function (aA, aB) {
        return aA === aB;
      },
      XGifY: function (aA, aB) {
        return aA === aB;
      },
      BHsgP: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      OzgLP: function (aA, aB) {
        return aA !== aB;
      },
      AzvdT: function (aA, aB) {
        return aA + aB;
      },
      WfVmR: "The iterator does not provide a '",
      jcNws: "' method",
      TKxxf: function (aA, aB, aC, aD) {
        return aA(aB, aC, aD);
      },
      oMhdv: function (aA, aB) {
        return aA === aB;
      },
      mkCqz: function (aA, aB) {
        return aA in aB;
      },
      ExokS: "GtcoX",
      MPywT: "uMsdk",
      GGkUS: function (aA, aB) {
        return aA in aB;
      },
      XiXyE: function (aA, aB) {
        return aA in aB;
      },
      uYsrl: "xhqxc",
      nzURE: function (aA, aB) {
        return aA === aB;
      },
      HjzwJ: function (aA, aB) {
        return aA !== aB;
      },
      iEZFA: "yxVjl",
      nfiyN: function (aA, aB) {
        return aA < aB;
      },
      QAzUq: "EAcIQ",
      QfMpi: "Qxtqg",
      ZPxcm: function (aA, aB) {
        return aA !== aB;
      },
      NUHvb: "IfbqP",
      DKsCW: " is not iterable",
      tcIfe: "string",
      JJlBg: "Object",
      KGidw: function (aA, aB) {
        return aA === aB;
      },
      KJAQn: function (aA, aB) {
        return aA === aB;
      },
      aKOgR: "lXGNS",
      bUsaS: function (aA, aB) {
        return aA == aB;
      },
      IFGha: function (aA, aB) {
        return aA === aB;
      },
      MaRwm: "bRRAc",
      dTmQP: "CtOsr",
      yxkAc: "GeneratorFunction",
      tAIVy: function (aA, aB) {
        return aA === aB;
      },
      Tjvhy: "kRWpR",
      dNRhD: function (aA, aB) {
        return aA * aB;
      },
      gsJVz: function (aA, aB) {
        return aA > aB;
      },
      PFhWT: function (aA, aB) {
        return aA < aB;
      },
      rmyuj: "PBgQi",
      hXIwc: "TAqhr",
      ocsqB: "Qvene",
      ejoul: "QZpzn",
      QAPOY: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      CCQfD: function (aA, aB) {
        return aA === aB;
      },
      aSkWp: "Map",
      bOMwj: "Set",
      IsXDX: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      unnCx: function (aA, aB) {
        return aA >= aB;
      },
      zhEvT: function (aA, aB) {
        return aA === aB;
      },
      gREYs: function (aA, aB) {
        return aA(aB);
      },
      hVLnd: function (aA, aB) {
        return aA === aB;
      },
      PNPKa: "isxVj",
      boLRq: function (aA, aB) {
        return aA === aB;
      },
      zGFLv: function (aA, aB, aC, aD) {
        return aA(aB, aC, aD);
      },
      vogis: "lheUO",
      Lutel: function (aA, aB) {
        return aA === aB;
      },
      Btdab: function (aA) {
        return aA();
      },
      ORBSy: "WMsbM",
      QzAjY: function (aA, aB) {
        return aA - aB;
      },
      rMWaM: function (aA, aB) {
        return aA >= aB;
      },
      SQgBF: "WMpWj",
      eiHXv: "oCPlm",
      LCfbW: function (aA, aB) {
        return aA === aB;
      },
      RPJZm: "root",
      XbAQS: function (aA, aB) {
        return aA <= aB;
      },
      mMIzz: "bCbNw",
      bRvKr: "NblVW",
      nCLnl: "catchLoc",
      pjKsv: "finallyLoc",
      YgADk: function (aA, aB) {
        return aA && aB;
      },
      rRpqk: function (aA, aB) {
        return aA !== aB;
      },
      aTVxM: "DPpBr",
      AcTkt: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      EQhNS: function (aA, aB) {
        return aA < aB;
      },
      KrMio: function (aA, aB) {
        return aA === aB;
      },
      bHZvT: "QeCGa",
      fHHCR: "dCxgE",
      yepsP: function (aA, aB) {
        return aA(aB);
      },
      GZrdi: "try statement without catch or finally",
      EPalw: function (aA, aB) {
        return aA(aB);
      },
      tVUXF: "bZeKN",
      byMWe: function (aA, aB) {
        return aA >= aB;
      },
      uTDVC: "MuTHW",
      WoBiC: "dieRn",
      FCwvx: function (aA, aB) {
        return aA(aB);
      },
      ynjjf: function (aA, aB) {
        return aA === aB;
      }
    };
    g = function () {
      {
        return a5;
      }
    };
    var a4;
    var a5 = {
      wrap: ae
    };
    var a6 = Object.prototype;
    var a7 = a6.hasOwnProperty;
    var a8 = Object.defineProperty || function (aA, aB, aC) {
      {
        aA[aB] = aC.value;
      }
    };
    var a9 = "function" == typeof Symbol ? Symbol : {};
    var aa = a9.iterator || "@@iterator";
    var ab = a9.asyncIterator || "@@asyncIterator";
    var ac = a9.toStringTag || "@@toStringTag";
    function ad(aA, aB, aC) {
      {
        var aE = {
          value: aC,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aA, aB, aE);
        return aA[aB];
      }
    }
    try {
      {
        ad({}, "");
      }
    } catch (aB) {
      ad = function (aD, aE, aF) {
        {
          return aD[aE] = aF;
        }
      };
    }
    function ae(aD, aE, aF, aG) {
      {
        var aI = aE && aE.prototype instanceof al ? aE : al;
        var aJ = Object.create(aI.prototype);
        var aK = new ay(aG || []);
        a8(aJ, "_invoke", {
          value: au(aD, aF, aK)
        });
        return aJ;
      }
    }
    function af(aD, aE, aF) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aD.call(aE, aF)
            };
          }
        } catch (aK) {
          {
            var aH = {
              type: "throw",
              arg: aK
            };
            return aH;
          }
        }
      }
    }
    var ag = "suspendedStart";
    var ah = "suspendedYield";
    var ai = "executing";
    var aj = "completed";
    var ak = {};
    function al() {}
    function am() {}
    function an() {}
    var ao = {};
    ad(ao, aa, function () {
      {
        return this;
      }
    });
    var ap = Object.getPrototypeOf;
    var aq = ap && ap(ap(az([])));
    aq && aq !== a6 && a7.call(aq, aa) && (ao = aq);
    an.prototype = al.prototype = Object.create(ao);
    var ar = an.prototype;
    function as(aD) {
      {
        ["next", "throw", "return"].forEach(function (aF) {
          {
            ad(aD, aF, function (aI) {
              return this._invoke(aF, aI);
            });
          }
        });
      }
    }
    function at(aD, aE) {
      {
        function aI(aJ, aK, aL, aM) {
          {
            var aO = af(aD[aJ], aD, aK);
            if ("throw" !== aO.type) {
              {
                var aP = aO.arg;
                var aQ = aP.value;
                return aQ && "object" == b(aQ) && a7.call(aQ, "__await") ? aE.resolve(aQ.__await).then(function (aS) {
                  aI("next", aS, aL, aM);
                }, function (aS) {
                  {
                    aI("throw", aS, aL, aM);
                  }
                }) : aE.resolve(aQ).then(function (aS) {
                  {
                    aP.value = aS;
                    aL(aP);
                  }
                }, function (aS) {
                  {
                    return aI("throw", aS, aL, aM);
                  }
                });
              }
            }
            aM(aO.arg);
          }
        }
        var aG;
        a8(this, "_invoke", {
          value: function (aJ, aK) {
            {
              function aN() {
                {
                  return new aE(function (aQ, aR) {
                    {
                      aI(aJ, aK, aQ, aR);
                    }
                  });
                }
              }
              return aG = aG ? aG.then(aN, aN) : aN();
            }
          }
        });
      }
    }
    function au(aD, aE, aF) {
      {
        var aH = ag;
        return function (aI, aJ) {
          {
            if (aH === ai) {
              throw Error("Generator is already running");
            }
            if (aH === aj) {
              {
                if ("throw" === aI) {
                  throw aJ;
                }
                var aL = {
                  value: a4,
                  done: true
                };
                return aL;
              }
            }
            for (aF.method = aI, aF.arg = aJ;;) {
              {
                var aM = aF.delegate;
                if (aM) {
                  {
                    var aN = av(aM, aF);
                    if (aN) {
                      {
                        if (aN === ak) {
                          continue;
                        }
                        return aN;
                      }
                    }
                  }
                }
                if ("next" === aF.method) {
                  aF.sent = aF._sent = aF.arg;
                } else {
                  if ("throw" === aF.method) {
                    {
                      if (aH === ag) {
                        throw aH = aj, aF.arg;
                      }
                      aF.dispatchException(aF.arg);
                    }
                  } else {
                    "return" === aF.method && aF.abrupt("return", aF.arg);
                  }
                }
                aH = ai;
                var aO = af(aD, aE, aF);
                if ("normal" === aO.type) {
                  {
                    if (aH = aF.done ? aj : ah, aO.arg === ak) {
                      continue;
                    }
                    var aP = {
                      value: aO.arg,
                      done: aF.done
                    };
                    return aP;
                  }
                }
                "throw" === aO.type && (aH = aj, aF.method = "throw", aF.arg = aO.arg);
              }
            }
          }
        };
      }
    }
    function av(aD, aE) {
      {
        var aJ = aE.method;
        var aK = aD.iterator[aJ];
        if (aK === a4) {
          aE.delegate = null;
          "throw" === aJ && aD.iterator.return && (aE.method = "return", aE.arg = a4, av(aD, aE), "throw" === aE.method) || "return" !== aJ && (aE.method = "throw", aE.arg = new TypeError("The iterator does not provide a '" + aJ + "' method"));
          return ak;
        }
        var aL = af(aK, aD.iterator, aE.arg);
        if ("throw" === aL.type) {
          aE.method = "throw";
          aE.arg = aL.arg;
          aE.delegate = null;
          return ak;
        }
        var aM = aL.arg;
        return aM ? aM.done ? (aE[aD.resultName] = aM.value, aE.next = aD.nextLoc, "return" !== aE.method && (aE.method = "next", aE.arg = a4), aE.delegate = null, ak) : aM : (aE.method = "throw", aE.arg = new TypeError("iterator result is not an object"), aE.delegate = null, ak);
      }
    }
    function aw(aD) {
      {
        var aG = {
          tryLoc: aD[0]
        };
        1 in aD && (aG.catchLoc = aD[1]);
        2 in aD && (aG.finallyLoc = aD[2], aG.afterLoc = aD[3]);
        this.tryEntries.push(aG);
      }
    }
    function ax(aD) {
      {
        var aF = aD.completion || {};
        aF.type = "normal";
        delete aF.arg;
        aD.completion = aF;
      }
    }
    function ay(aD) {
      {
        var aE = {
          tryLoc: "root"
        };
        this.tryEntries = [aE];
        aD.forEach(aw, this);
        this.reset(true);
      }
    }
    function az(aD) {
      {
        if (aD || "" === aD) {
          {
            var aF = aD[aa];
            if (aF) {
              return aF.call(aD);
            }
            if ("function" == typeof aD.next) {
              return aD;
            }
            if (!isNaN(aD.length)) {
              {
                var aG = -1;
                var aH = function aI() {
                  {
                    for (; ++aG < aD.length;) {
                      if (a7.call(aD, aG)) {
                        aI.value = aD[aG];
                        aI.done = false;
                        return aI;
                      }
                    }
                    aI.value = a4;
                    aI.done = true;
                    return aI;
                  }
                };
                return aH.next = aH;
              }
            }
          }
        }
        throw new TypeError(b(aD) + " is not iterable");
      }
    }
    am.prototype = an;
    a8(ar, "constructor", {
      value: an,
      configurable: true
    });
    a8(an, "constructor", {
      value: am,
      configurable: true
    });
    am.displayName = ad(an, ac, "GeneratorFunction");
    a5.isGeneratorFunction = function (aD) {
      {
        var aF = "function" == typeof aD && aD.constructor;
        return !!aF && (aF === am || "GeneratorFunction" === (aF.displayName || aF.name));
      }
    };
    a5.mark = function (aD) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aD, an) : (aD.__proto__ = an, ad(aD, ac, "GeneratorFunction"));
      aD.prototype = Object.create(ar);
      return aD;
    };
    a5.awrap = function (aD) {
      {
        var aE = {
          __await: aD
        };
        return aE;
      }
    };
    as(at.prototype);
    ad(at.prototype, ab, function () {
      {
        return this;
      }
    });
    a5.AsyncIterator = at;
    a5.async = function (aD, aE, aF, aG, aH) {
      {
        undefined === aH && (aH = Promise);
        var aJ = new at(ae(aD, aE, aF, aG), aH);
        return a5.isGeneratorFunction(aE) ? aJ : aJ.next().then(function (aL) {
          return aL.done ? aL.value : aJ.next();
        });
      }
    };
    as(ar);
    ad(ar, ac, "Generator");
    ad(ar, aa, function () {
      {
        return this;
      }
    });
    ad(ar, "toString", function () {
      return "[object Generator]";
    });
    a5.keys = function (aD) {
      {
        var aF = Object(aD);
        var aG = [];
        for (var aH in aF) aG.push(aH);
        aG.reverse();
        return function aI() {
          {
            for (; aG.length;) {
              {
                var aK = aG.pop();
                if (aK in aF) {
                  aI.value = aK;
                  aI.done = false;
                  return aI;
                }
              }
            }
            aI.done = true;
            return aI;
          }
        };
      }
    };
    a5.values = az;
    ay.prototype = {
      constructor: ay,
      reset: function (aD) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = a4, this.done = false, this.delegate = null, this.method = "next", this.arg = a4, this.tryEntries.forEach(ax), !aD) {
            for (var aE in this) "t" === aE.charAt(0) && a7.call(this, aE) && !isNaN(+aE.slice(1)) && (this[aE] = a4);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aD = this.tryEntries[0].completion;
          if ("throw" === aD.type) {
            throw aD.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aD) {
        {
          if (this.done) {
            throw aD;
          }
          var aF = this;
          function aM(aN, aO) {
            aI.type = "throw";
            aI.arg = aD;
            aF.next = aN;
            aO && (aF.method = "next", aF.arg = a4);
            return !!aO;
          }
          for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
            {
              var aH = this.tryEntries[aG];
              var aI = aH.completion;
              if ("root" === aH.tryLoc) {
                return aM("end");
              }
              if (aH.tryLoc <= this.prev) {
                {
                  var aJ = a7.call(aH, "catchLoc");
                  var aK = a7.call(aH, "finallyLoc");
                  if (aJ && aK) {
                    {
                      if (this.prev < aH.catchLoc) {
                        return aM(aH.catchLoc, true);
                      }
                      if (this.prev < aH.finallyLoc) {
                        return aM(aH.finallyLoc);
                      }
                    }
                  } else {
                    if (aJ) {
                      {
                        if (this.prev < aH.catchLoc) {
                          return aM(aH.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aK) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aH.finallyLoc) {
                          return aM(aH.finallyLoc);
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
      abrupt: function (aD, aE) {
        {
          for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
            {
              var aH = this.tryEntries[aG];
              if (aH.tryLoc <= this.prev && a7.call(aH, "finallyLoc") && this.prev < aH.finallyLoc) {
                {
                  var aI = aH;
                  break;
                }
              }
            }
          }
          aI && ("break" === aD || "continue" === aD) && aI.tryLoc <= aE && aE <= aI.finallyLoc && (aI = null);
          var aJ = aI ? aI.completion : {};
          aJ.type = aD;
          aJ.arg = aE;
          return aI ? (this.method = "next", this.next = aI.finallyLoc, ak) : this.complete(aJ);
        }
      },
      complete: function (aD, aE) {
        {
          if ("throw" === aD.type) {
            throw aD.arg;
          }
          "break" === aD.type || "continue" === aD.type ? this.next = aD.arg : "return" === aD.type ? (this.rval = this.arg = aD.arg, this.method = "return", this.next = "end") : "normal" === aD.type && aE && (this.next = aE);
          return ak;
        }
      },
      finish: function (aD) {
        {
          for (var aF = this.tryEntries.length - 1; aF >= 0; --aF) {
            {
              var aG = this.tryEntries[aF];
              if (aG.finallyLoc === aD) {
                this.complete(aG.completion, aG.afterLoc);
                ax(aG);
                return ak;
              }
            }
          }
        }
      },
      catch: function (aD) {
        {
          for (var aF = this.tryEntries.length - 1; aF >= 0; --aF) {
            {
              var aG = this.tryEntries[aF];
              if (aG.tryLoc === aD) {
                {
                  var aH = aG.completion;
                  if ("throw" === aH.type) {
                    {
                      var aI = aH.arg;
                      ax(aG);
                    }
                  }
                  return aI;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aD, aE, aF) {
        this.delegate = {
          iterator: az(aD),
          resultName: aE,
          nextLoc: aF
        };
        "next" === this.method && (this.arg = a4);
        return ak;
      }
    };
    return a5;
  }
  function h(a3, a4, a5, a6, a7, a8, a9) {
    {
      try {
        {
          var ab = a3[a8](a9);
          var ac = ab.value;
        }
      } catch (af) {
        {
          return void a5(af);
        }
      }
      ab.done ? a4(ac) : Promise.resolve(ac).then(a6, a7);
    }
  }
  function i(a3) {
    return function () {
      var a6 = this;
      var a7 = arguments;
      return new Promise(function (a8, a9) {
        var ab = a3.apply(a6, a7);
        function ac(ae) {
          {
            h(ab, a8, a9, ac, ad, "next", ae);
          }
        }
        function ad(ae) {
          {
            h(ab, a8, a9, ac, ad, "throw", ae);
          }
        }
        ac(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.OuHai : $.getdata("OuHai")) || "";
  var k = undefined;
  window = {};
  var l = "";
  var m = "";
  var n = "";
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "78";
  var x = "10032";
  var y = "FR*r!isE5W";
  function z() {
    return A.apply(this, arguments);
  }
  function A() {
    {
      A = i(g().mark(function a4() {
        {
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
          var aA;
          var aB;
          return g().wrap(function (aD) {
            {
              for (;;) {
                switch (aD.prev = aD.next) {
                  case 0:
                    if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                      {
                        aD.next = 6;
                        break;
                      }
                    }
                    console.log("先去boxjs填写账号密码");
                    aD.next = 5;
                    return a1("先去boxjs填写账号密码");
                  case 5:
                    return aD.abrupt("return");
                  case 6:
                    aD.next = 8;
                    return Z();
                  case 8:
                    k = aD.sent;
                    a6 = j.split(" ");
                    a7 = c(a6);
                    aD.prev = 11;
                    a7.s();
                  case 13:
                    if ((a8 = a7.n()).done) {
                      {
                        aD.next = 107;
                        break;
                      }
                    }
                    a9 = a8.value;
                    console.log("随机生成UA");
                    aa = X();
                    r = aa.ua;
                    s = aa.commonUa;
                    t = aa.uuid;
                    console.log(r);
                    console.log(s);
                    p = a9.split("&")[0];
                    q = a9.split("&")[1];
                    console.log("用户：".concat(p, "开始任务"));
                    console.log("获取sessionId");
                    aD.next = 28;
                    return H("/api/account/init");
                  case 28:
                    ab = aD.sent;
                    n = ab.data.session.id;
                    console.log(n);
                    console.log("获取signature_key");
                    aD.next = 34;
                    return B("/web/init?client_id=".concat(x));
                  case 34:
                    ac = aD.sent;
                    l = ac.data.client.signature_key;
                    console.log(l);
                    console.log("获取code");
                    aD.next = 40;
                    return D("/web/oauth/credential_auth");
                  case 40:
                    if (ad = aD.sent, ad.data) {
                      {
                        aD.next = 44;
                        break;
                      }
                    }
                    console.log(ad.message);
                    return aD.abrupt("continue", 105);
                  case 44:
                    ae = ad.data.authorization_code.code;
                    console.log(ae);
                    console.log("登录");
                    aD.next = 49;
                    return H("/api/zbtxz/login", "check_token=&code=".concat(ae, "&token=&type=-1&union_id="));
                  case 49:
                    af = aD.sent;
                    console.log("登录成功");
                    o = af.data.session.account_id;
                    n = af.data.session.id;
                    console.log("————————————");
                    console.log("阅读登录");
                    aD.next = 57;
                    return J("/customActivity/zjtm/autoLogin?_=".concat(Date.now(), "&sessionId=").concat(n, "&accountId=").concat(o, "&redirectUrl=https://94227.activity-42.m.duiba.com.cn/chw/visual-editor/skins?id=299044"));
                  case 57:
                    ag = aD.sent;
                    ah = ag.data;
                    u = "";
                    aD.next = 62;
                    return P(ah);
                  case 62:
                    u = aD.sent;
                    console.log("————————————");
                    console.log("夺宝");
                    aD.next = 67;
                    return N("https://94227.activity-42.m.duiba.com.cn/chw/visual-editor/skins?id=299044&from=login&spm=94227.1.1.1");
                  case 67:
                    ai = aD.sent;
                    aD.next = 70;
                    return L("/sign/treasure/homeInfo?_=".concat(Date.now(), "&id=").concat(ai));
                  case 70:
                    aj = aD.sent;
                    aD.next = 73;
                    return R("/sign/treasure/sign?_=".concat(Date.now()), "phaseId=".concat(aj.data.phaseId, "&id=").concat(ai));
                  case 73:
                    if (ak = aD.sent, !ak.success) {
                      {
                        aD.next = 82;
                        break;
                      }
                    }
                    console.log("签到成功");
                    aD.next = 78;
                    return L("/sign/treasure/getSignResult?_=".concat(Date.now(), "&logId=").concat(ak.data.logId));
                  case 78:
                    if (al = aD.sent, al.success) {
                      {
                        am = c(al.data.codes);
                        try {
                          {
                            for (am.s(); !(an = am.n()).done;) {
                              ao = an.value;
                              console.log("获得夺宝码：".concat(ao));
                            }
                          }
                        } catch (aL) {
                          {
                            am.e(aL);
                          }
                        } finally {
                          {
                            am.f();
                          }
                        }
                      }
                    } else {
                      console.log(al.desc);
                    }
                    aD.next = 83;
                    break;
                  case 82:
                    console.log(ak.desc);
                  case 83:
                    aD.next = 85;
                    return L("/sign/treasure/history?_=".concat(Date.now(), "&id=").concat(ai, "&pageNo=1&pageSize=20"));
                  case 85:
                    if (ap = aD.sent, ap.data.list) {
                      {
                        aq = c(ap.data.list);
                        try {
                          {
                            for (aq.s(); !(ar = aq.n()).done;) {
                              {
                                as = ar.value;
                                console.log("".concat(as.phaseNumber, "期"));
                                at = c(as.codes);
                                try {
                                  {
                                    for (at.s(); !(au = at.n()).done;) {
                                      av = au.value;
                                      0 != av.prizeLevel && (console.log("获得：".concat(av.prizeLevel, "等奖")), 1 == av.rewardStatus ? console.log("未领取") : console.log("已领取"));
                                    }
                                  }
                                } catch (aR) {
                                  {
                                    at.e(aR);
                                  }
                                } finally {
                                  {
                                    at.f();
                                  }
                                }
                              }
                            }
                          }
                        } catch (aU) {
                          aq.e(aU);
                        } finally {
                          {
                            aq.f();
                          }
                        }
                      }
                    }
                    aD.next = 89;
                    return L("/sign/treasure/waitWinRecord?_=".concat(Date.now(), "&id=").concat(ai));
                  case 89:
                    aw = aD.sent;
                    ax = c(aw.data);
                    try {
                      {
                        for (ax.s(); !(ay = ax.n()).done;) {
                          az = ay.value;
                          console.log("奖品：".concat(az.prizeName));
                          m += "用户：".concat(p, " 奖品：").concat(az.prizeName, "\n");
                        }
                      }
                    } catch (aZ) {
                      ax.e(aZ);
                    } finally {
                      ax.f();
                    }
                    console.log("————————————");
                    console.log("开始签到");
                    aD.next = 96;
                    return F("/api/user_mumber/sign");
                  case 96:
                    aA = aD.sent;
                    console.log("签到获得：".concat(aA.data.signIntegral, "积分"));
                    console.log("————————————");
                    console.log("查询积分");
                    aD.next = 102;
                    return F("/api/user_mumber/account_detail");
                  case 102:
                    aB = aD.sent;
                    console.log("拥有积分：".concat(aB.data.rst.total_integral, "\n"));
                    m += "用户：".concat(p, " 积分：").concat(aB.data.rst.total_integral, "\n");
                  case 105:
                    aD.next = 13;
                    break;
                  case 107:
                    aD.next = 112;
                    break;
                  case 109:
                    aD.prev = 109;
                    aD.t0 = aD.catch(11);
                    a7.e(aD.t0);
                  case 112:
                    aD.prev = 112;
                    a7.f();
                    return aD.finish(112);
                  case 115:
                    if (!m) {
                      {
                        aD.next = 118;
                        break;
                      }
                    }
                    aD.next = 118;
                    return a1(m);
                  case 118:
                  case "end":
                    return aD.stop();
                }
              }
            }
          }, a4, null, [[11, 109, 112, 115]]);
        }
      }));
      return A.apply(this, arguments);
    }
  }
  function B(a3) {
    return C.apply(this, arguments);
  }
  function C() {
    {
      C = i(g().mark(function a4(a5) {
        {
          return g().wrap(function (a7) {
            {
              for (;;) {
                switch (a7.prev = a7.next) {
                  case 0:
                    return a7.abrupt("return", new Promise(function (aa) {
                      {
                        var ac = {
                          url: "https://passport.tmuyun.com".concat(a5),
                          headers: {
                            Connection: "Keep-Alive",
                            "Cache-Control": "no-cache",
                            "X-REQUEST-ID": V(),
                            "Accept-Encoding": "gzip",
                            "user-agent": r
                          }
                        };
                        $.get(ac, function () {
                          {
                            var af = i(g().mark(function ah(ai, aj, ak) {
                              {
                                return g().wrap(function (am) {
                                  {
                                    for (;;) {
                                      switch (am.prev = am.next) {
                                        case 0:
                                          try {
                                            {
                                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ak));
                                            }
                                          } catch (ao) {
                                            {
                                              $.logErr(ao, aj);
                                            }
                                          } finally {
                                            {
                                              aa();
                                            }
                                          }
                                        case 1:
                                        case "end":
                                          return am.stop();
                                      }
                                    }
                                  }
                                }, ah);
                              }
                            }));
                            return function (ai, aj, ak) {
                              {
                                return af.apply(this, arguments);
                              }
                            };
                          }
                        }());
                      }
                    }));
                  case 1:
                  case "end":
                    return a7.stop();
                }
              }
            }
          }, a4);
        }
      }));
      return C.apply(this, arguments);
    }
  }
  function D(a3) {
    {
      return E.apply(this, arguments);
    }
  }
  function E() {
    E = i(g().mark(function a3(a4) {
      var a6;
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              a6 = T();
              return a7.abrupt("return", new Promise(function (a9) {
                var aa = {
                  url: "https://passport.tmuyun.com".concat(a4),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": a6.uuid,
                    "X-SIGNATURE": a6.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": r
                  },
                  body: a6.body
                };
                $.post(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    {
                      return g().wrap(function (ai) {
                        {
                          for (;;) {
                            switch (ai.prev = ai.next) {
                              case 0:
                                try {
                                  {
                                    ae ? (console.log("".concat(JSON.stringify(ae))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a9(JSON.parse(ag));
                                  }
                                } catch (am) {
                                  {
                                    $.logErr(am, af);
                                  }
                                } finally {
                                  {
                                    a9();
                                  }
                                }
                              case 1:
                              case "end":
                                return ai.stop();
                            }
                          }
                        }
                      }, ad);
                    }
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a7.stop();
          }
        }
      }, a3);
    }));
    return E.apply(this, arguments);
  }
  function F(a3) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function a4(a5) {
      var a7;
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              a7 = U(a5);
              return a8.abrupt("return", new Promise(function (a9) {
                var ab = {
                  url: "https://vapp.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a7.time,
                    "X-SESSION-ID": n,
                    "X-REQUEST-ID": a7.uuid,
                    "X-SIGNATURE": a7.signature,
                    "X-TENANT-ID": w,
                    "X-ACCOUNT-ID": o,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": s
                  }
                };
                $.get(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            if (aj.prev = 0, !af) {
                              aj.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aj.next = 9;
                            break;
                          case 6:
                            aj.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ah));
                          case 9:
                            aj.next = 14;
                            break;
                          case 11:
                            aj.prev = 11;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ag);
                          case 14:
                            aj.prev = 14;
                            a9();
                            return aj.finish(14);
                          case 17:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, ae, null, [[0, 11, 14, 17]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return G.apply(this, arguments);
  }
  function H(a3, a4) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a4(a5, a6) {
      var a7;
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              a7 = U(a5);
              return a8.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://vapp.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a7.time,
                    "X-SESSION-ID": n,
                    "X-REQUEST-ID": a7.uuid,
                    "X-SIGNATURE": a7.signature,
                    "X-TENANT-ID": w,
                    "X-ACCOUNT-ID": o,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": s
                  },
                  body: a6
                };
                $.post(ad, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !ai) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ab(JSON.parse(ak));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, aj);
                          case 14:
                            am.prev = 14;
                            ab();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ah, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return I.apply(this, arguments);
  }
  function J(a3) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a4(a5) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a8) {
                var aa = {
                  url: "https://activity.m.duiba.com.cn".concat(a5),
                  headers: {
                    accept: "*/*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_ouhai;xsb_ouhai;5.0.3;native_app;6.8.0",
                    "x-requested-with": "net.ohnews.www",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !ae) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 9;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            a8(JSON.parse(ag));
                          case 9:
                            ai.next = 14;
                            break;
                          case 11:
                            ai.prev = 11;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, af);
                          case 14:
                            ai.prev = 14;
                            a8();
                            return ai.finish(14);
                          case 17:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ad, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a7.stop();
          }
        }
      }, a4);
    }));
    return K.apply(this, arguments);
  }
  function L(a3) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a4(a5) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var a9 = {
                  url: "https://94227.activity-42.m.duiba.com.cn".concat(a5),
                  headers: {
                    accept: "*/*",
                    "simulated-parameters": "50b8d458fe9a96cd46945b0359cb93bd",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_ouhai;xsb_ouhai;5.0.3;native_app;6.8.0",
                    "x-requested-with": "net.ohnews.www",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://94227.activity-42.m.duiba.com.cn/galaxy/app/project/".concat(v, "/index.html"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: u
                  }
                };
                $.get(a9, function () {
                  var ab = i(g().mark(function ac(ad, ae, af) {
                    return g().wrap(function (ag) {
                      for (;;) {
                        switch (ag.prev = ag.next) {
                          case 0:
                            if (ag.prev = 0, !ad) {
                              ag.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ad)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ag.next = 9;
                            break;
                          case 6:
                            ag.next = 8;
                            return $.wait(2000);
                          case 8:
                            a8(JSON.parse(af));
                          case 9:
                            ag.next = 14;
                            break;
                          case 11:
                            ag.prev = 11;
                            ag.t0 = ag.catch(0);
                            $.logErr(ag.t0, ae);
                          case 14:
                            ag.prev = 14;
                            a8();
                            return ag.finish(14);
                          case 17:
                          case "end":
                            return ag.stop();
                        }
                      }
                    }, ac, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ad, ae, af) {
                    return ab.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a6.stop();
          }
        }
      }, a4);
    }));
    return M.apply(this, arguments);
  }
  function N(a3) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a3(a4) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var aa = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_ouhai;xsb_ouhai;5.0.3;native_app;6.8.0",
                  "x-requested-with": "net.ohnews.www",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: u
                };
                var ac = {
                  url: a4,
                  headers: aa
                };
                $.get(ac, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    var aj;
                    var ak;
                    var al;
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !ag) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ag)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 17;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj = /\/galaxy\/app\/project\/(\d+)\/index/;
                            ak = ai.match(aj);
                            ak && (v = ak[1]);
                            al = "";
                            aj = /sign%2Ftreasure%2Findex%3Fid%3D(\d+)/;
                            ak = ai.match(aj);
                            ak && (al = ak[1]);
                            console.log(al);
                            a8(al);
                          case 17:
                            am.next = 22;
                            break;
                          case 19:
                            am.prev = 19;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ah);
                          case 22:
                            am.prev = 22;
                            a8();
                            return am.finish(22);
                          case 25:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, af, null, [[0, 19, 22, 25]]);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a6.stop();
          }
        }
      }, a3);
    }));
    return O.apply(this, arguments);
  }
  function P(a3) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function a4(a5) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var aa = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_ouhai;xsb_ouhai;5.0.3;native_app;6.8.0",
                  "x-requested-with": "net.ohnews.www",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-user": "?1",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var ab = {
                  url: "https:".concat(a5),
                  headers: aa,
                  followRedirect: false
                };
                $.get(ab, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    var ai;
                    var aj;
                    var ak;
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ae) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 11;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (ai = "", $.isNode()) {
                              for (aj = af.headers["set-cookie"] || af.headers["Set-Cookie"], ak = 0; ak < aj.length; ak++) {
                                ai += aj[ak].split(";")[0] + ";";
                              }
                            } else {
                              ai = af.headers["set-cookie"] || af.headers["Set-Cookie"];
                              ai = Y(ai);
                            }
                            a8(ai);
                          case 11:
                            al.next = 16;
                            break;
                          case 13:
                            al.prev = 13;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, af);
                          case 16:
                            al.prev = 16;
                            a8();
                            return al.finish(16);
                          case 19:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ad, null, [[0, 13, 16, 19]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a6.stop();
          }
        }
      }, a4);
    }));
    return Q.apply(this, arguments);
  }
  function R(a3, a4) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function a3(a4, a5) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a9) {
                var ab = {
                  url: "https://94227.activity-42.m.duiba.com.cn".concat(a4),
                  headers: {
                    accept: "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://94227.activity-42.m.duiba.com.cn",
                    cookie: u,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://94227.activity-42.m.duiba.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: a5
                };
                $.post(ab, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !ae) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 9;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ag));
                          case 9:
                            ai.next = 14;
                            break;
                          case 11:
                            ai.prev = 11;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, af);
                          case 14:
                            ai.prev = 14;
                            a9();
                            return ai.finish(14);
                          case 17:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ad, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a7.stop();
          }
        }
      }, a3);
    }));
    return S.apply(this, arguments);
  }
  function T() {
    var a3 = new (k.loadJSEncrypt())();
    a3.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    q = a3.encrypt(q);
    var a4 = V();
    var a5 = "client_id=".concat(x, "&password=").concat(q, "&phone_number=").concat(p);
    var a6 = "post%%/web/oauth/credential_auth?".concat(a5, "%%").concat(a4, "%%");
    a5 = "client_id=".concat(x, "&password=").concat(encodeURIComponent(q), "&phone_number=").concat(p);
    CryptoJS = k.createCryptoJS();
    var a7 = CryptoJS.HmacSHA256(a6, l);
    var a8 = CryptoJS.enc.Hex.stringify(a7);
    var a9 = {
      uuid: a4,
      signature: a8,
      body: a5
    };
    return a9;
  }
  function U(a3) {
    var a4 = V();
    var a5 = Date.now();
    a3.indexOf("?") > 0 && (a3 = a3.substring(0, a3.indexOf("?")));
    CryptoJS = k.createCryptoJS();
    var a6 = CryptoJS.SHA256("".concat(a3, "&&").concat(n, "&&").concat(a4, "&&").concat(a5, "&&").concat(y, "&&").concat(w)).toString();
    var a7 = {
      uuid: a4,
      time: a5,
      signature: a6
    };
    return a7;
  }
  function V() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a3) {
      var a4 = 16 * Math.random() | 0;
      var a5 = "x" === a3 ? a4 : 3 & a4 | 8;
      return a5.toString(16);
    });
  }
  function W(a3) {
    return a3[Math.floor(Math.random() * a3.length)];
  }
  function X() {
    var a3 = "5.0.3";
    var a4 = V();
    var a5 = W(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var a6 = "Xiaomi " + a5;
    var a7 = "Android";
    var a8 = "".concat(a7.toUpperCase(), ";").concat("11", ";").concat(x, ";").concat(a3, ";1.0;null;").concat(a5);
    var a9 = "".concat(a3, ";").concat(a4, ";").concat(a6, ";").concat(a7, ";").concat("11", ";Release;").concat("6.8.0");
    var aa = {
      ua: a8,
      commonUa: a9,
      uuid: a4
    };
    return aa;
  }
  function Y(a3) {
    var a4 = a3.split(", ");
    var a5 = a4.map(function (a6) {
      var a7 = a6.split(";")[0];
      return a7.trim();
    });
    return a5.join(";");
  }
  function Z() {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function a4() {
      var a5;
      return g().wrap(function a6(a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              if (a5 = $.getdata("Utils_Code") || "", !a5 || !Object.keys(a5).length) {
                a7.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a5);
              return a7.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a7.abrupt("return", new Promise(function () {
                var aa = i(g().mark(function ab(ac) {
                  return g().wrap(function ae(af) {
                    for (;;) {
                      switch (af.prev = af.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ag) {
                            $.setdata(ag, "Utils_Code");
                            eval(ag);
                            console.log("✅ Utils加载成功, 请继续");
                            ac(creatUtils());
                          });
                        case 1:
                        case "end":
                          return af.stop();
                      }
                    }
                  }, ab);
                }));
                return function (ac) {
                  return aa.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a7.stop();
          }
        }
      }, a4);
    }));
    return a0.apply(this, arguments);
  }
  function a1(a3) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function a5(a6) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              if (!$.isNode()) {
                a7.next = 5;
                break;
              }
              a7.next = 3;
              return notify.sendNotify($.name, a6);
            case 3:
              a7.next = 6;
              break;
            case 5:
              $.msg($.name, "", a6);
            case 6:
            case "end":
              return a7.stop();
          }
        }
      }, a5);
    }));
    return a2.apply(this, arguments);
  }
  i(g().mark(function a3() {
    return g().wrap(function (a5) {
      for (;;) {
        switch (a5.prev = a5.next) {
          case 0:
            a5.next = 2;
            return z();
          case 2:
          case "end":
            return a5.stop();
        }
      }
    }, a3);
  }))().catch(function (a4) {
    $.log(a4);
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