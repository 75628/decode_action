//Sun Jul 28 2024 01:15:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  sign,
  getToken,
  wait,
  checkCk,
  validateCarmeWithType,
  User_Agent,
  getCookies,
  checkCarmeCount,
  getUserInfo,
  tryCatchPromise,
  getCookieMap
} = require("./common.js");
const {
  sendNotify
} = require("./sendNotify1.js");
const request = require("request");
const GAME_TYEP = 10;
const EXCEPTION_STR = "异常";
let CookieEles = getCookies();
const kami = process.env.ELE_CARME;
var markdownStr = "| 昵称          | 乐园币    | 总吃货豆 |余额 |\n| ------------- | ------------------ | ---------|---------|\n";
function formateDate() {
  const _0x280f90 = new Date();
  return _0x280f90.getFullYear() + "-" + (_0x280f90.getMonth() + 1) + "-" + _0x280f90.getDate();
}
function getCurrentTime() {
  var _0x44e342 = new Date(),
    _0x21f643 = _0x44e342.getMonth() + 1,
    _0x43d7d0 = _0x44e342.getDate();
  _0x21f643 <= 9 && (_0x21f643 = "0" + _0x21f643);
  _0x43d7d0 <= 9 && (_0x43d7d0 = "0" + _0x43d7d0);
  return _0x44e342.getFullYear() + "-" + _0x21f643 + "-" + _0x43d7d0;
}
function getMoney(_0x55961d) {
  const _0x42ee3f = {
    url: "https://httpizza.ele.me/walletUserV2/storedcard/queryBalanceBycardType?cardType=platform",
    headers: {}
  };
  _0x42ee3f.headers.Cookie = _0x55961d;
  _0x42ee3f.headers["User-Agent"] = User_Agent;
  _0x42ee3f.headers.referer = "https://r.ele.me/alsc-wallet/home.html?channel=grzx";
  return tryCatchPromise(_0x522909 => {
    request(_0x42ee3f, async (_0x532a8c, _0x64e6ee, _0x34148d) => {
      if (!_0x532a8c && _0x64e6ee.statusCode == 200) {
        const _0xdca2b8 = JSON.parse(_0x34148d);
        try {
          _0x522909(_0xdca2b8.data.totalAmount);
        } catch (_0x2b460c) {
          console.log(_0x34148d);
          _0x522909(null);
        }
      } else {
        _0x522909(null);
      }
    });
  });
}
function getCoupsRecord(_0x489c44) {
  const _0x542e9c = {
    Cookie: _0x489c44,
    "User-Agent": User_Agent
  };
  const _0x21a64b = {
    url: "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?latitude=30.153352&limit=20&longitude=104.153352&offset=0",
    headers: _0x542e9c
  };
  return tryCatchPromise(_0x2bd33f => {
    request(_0x21a64b, async (_0x33b6a9, _0x3832c2, _0x245447) => {
      if (!_0x33b6a9 && _0x3832c2.statusCode == 200) {
        const _0x2744f5 = JSON.parse(_0x245447);
        try {
          _0x2bd33f(_0x2744f5.peaCount);
        } catch (_0x5f2c3d) {
          console.log(_0x245447);
          _0x2bd33f(null);
        }
      } else {
        _0x2bd33f(null);
      }
    });
  });
}
async function getMonthRecord(_0x225780) {
  const _0x432875 = {
    "content-type": "application/json",
    Cookie: _0x225780,
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36"
  };
  s = _0x432875;
  r = "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?offset=0&limit=100&longitude=39.916527&latitude=116.397128";
  const _0x3c9b35 = {
    url: r,
    headers: s
  };
  return tryCatchPromise(_0x131296 => {
    request(_0x3c9b35, async (_0x401e21, _0x4a8d04, _0x46f9bb) => {
      if (!_0x401e21 && _0x4a8d04.statusCode == 200) {
        const _0xe37b7a = JSON.parse(_0x46f9bb);
        try {
          for (var _0x3a60ce = getCurrentTime(), _0x4ebb62 = _0xe37b7a.records, _0x2fcb90 = 0, _0x1c9b00 = 0; _0x1c9b00 < _0x4ebb62.length; _0x1c9b00++) {
            _0x4ebb62[_0x1c9b00].createdTime.indexOf(_0x3a60ce) > -1 && 1 == _0x4ebb62[_0x1c9b00].optType && (_0x2fcb90 += _0x4ebb62[_0x1c9b00].count);
          }
          _0x131296(_0x2fcb90);
        } catch (_0xb26789) {
          console.log(_0x46f9bb);
          _0x131296(null);
        }
      } else {
        _0x131296(null);
      }
    });
  });
}
async function queryintegralproperty(_0x26d19b) {
  const _0x353800 = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"ggetGold\"}",
    bizMethod: "queryIndex"
  };
  const _0x48434c = await gameRequest(_0x26d19b, _0x353800);
  return _0x48434c.num;
}
async function gameRequest(_0x33d032, _0x3620a7) {
  const _0x156413 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x33d032,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x3a09ba = new Date().getTime();
  const _0x461cb9 = 12574478;
  var _0x4cef27 = "data=" + encodeURIComponent(JSON.stringify(_0x3620a7));
  const _0x14c778 = getToken(_0x33d032),
    _0x2f213c = _0x14c778.split("_")[0];
  const _0x31650f = await sign(_0x2f213c + "&" + _0x3a09ba + "&" + _0x461cb9 + "&" + JSON.stringify(_0x3620a7), kami);
  const _0x236b64 = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x3a09ba + "&sign=" + _0x31650f + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: _0x156413,
    body: _0x4cef27
  };
  return tryCatchPromise(_0x59431e => {
    request(_0x236b64, async (_0x8dd4fb, _0x199916, _0x14f9df) => {
      if (!_0x8dd4fb && _0x199916.statusCode == 200) {
        try {
          const _0x142a6c = JSON.parse(_0x14f9df);
          const _0x244eec = JSON.parse(_0x142a6c.data.data);
          _0x59431e(_0x244eec);
        } catch (_0x13312e) {
          console.log(_0x14f9df);
          _0x59431e(null);
        }
      } else {
        _0x59431e(null);
      }
    });
  });
}
async function querypropertydetail(_0x1b5e47, _0x20f5c5) {
  const _0x80b4b1 = {
    authority: "mtop.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x1b5e47,
    origin: "https://tb.ele.me",
    pragma: "no-cache",
    referer: "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x37a397 = {
    templateId: "1404",
    bizScene: "game_center",
    convertType: "GAME_CENTER",
    startTime: formateDate() + " 00:00:00",
    pageNo: _0x20f5c5,
    pageSize: "50"
  };
  const _0x90abfa = new Date().getTime();
  const _0x574b43 = 12574478;
  var _0x40c760 = "data=" + encodeURIComponent(JSON.stringify(_0x37a397));
  const _0x20fc55 = getToken(_0x1b5e47),
    _0x41edec = _0x20fc55.split("_")[0];
  const _0x381f9a = await sign(_0x41edec + "&" + _0x90abfa + "&" + _0x574b43 + "&" + JSON.stringify(_0x37a397), kami);
  const _0x3551de = {
    url: "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.querypropertydetail/1.0/?jsv=2.7.1&appKey=12574478&t=" + _0x90abfa + "&sign=" + _0x381f9a + "&api=mtop.koubei.interaction.center.common.querypropertydetail&v=1.0",
    method: "POST",
    headers: _0x80b4b1,
    body: _0x40c760
  };
  return tryCatchPromise(_0x5e87c3 => {
    request(_0x3551de, async (_0x209fb3, _0x235c92, _0x465d10) => {
      if (!_0x209fb3 && _0x235c92.statusCode == 200) {
        const _0x3b5f08 = JSON.parse(_0x465d10);
        try {
          if (_0x3b5f08.data) {
            var _0x4c9ffd = 0;
            for (let _0x22faa9 = 0; _0x22faa9 < _0x3b5f08.data.list.length; _0x22faa9++) {
              const _0x127232 = _0x3b5f08.data.list[_0x22faa9];
              if (_0x127232.detailType == "GRANT") {
                _0x4c9ffd += Number(_0x127232.amount);
              }
            }
          }
          _0x5e87c3(_0x4c9ffd);
        } catch (_0x388da2) {
          console.log(_0x465d10);
        }
        _0x5e87c3(_0x3b5f08);
      } else {
        _0x5e87c3(null);
      }
    });
  });
}
async function assestNotify(_0x40ef74, _0x1a751e) {
  const _0x2d8c43 = getCookieMap(_0x40ef74);
  if (!_0x2d8c43.has("wxUid")) {
    console.log("没有获取到推送 uid，不推送消息\n");
  } else {
    await sendNotify("饿了么资产推送", _0x1a751e, {
      uid: _0x2d8c43.get("wxUid")
    });
  }
}
async function start() {
  await validateCarmeWithType(kami, 1);
  for (let _0x1dc7b7 = 0; _0x1dc7b7 < CookieEles.length; _0x1dc7b7++) {
    let _0x2a860a = CookieEles[_0x1dc7b7];
    _0x2a860a = await checkCk(_0x2a860a);
    if (!_0x2a860a) {
      continue;
    }
    let _0x11eaa1 = await getUserInfo(_0x2a860a);
    if (!_0x11eaa1.username) {
      console.log("第", _0x1dc7b7 + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    const _0x5b8b5a = _0x11eaa1.user_id;
    await checkCarmeCount(kami, _0x5b8b5a, GAME_TYEP);
    console.log("******开始【饿了么账号", _0x1dc7b7 + 1, "】", _0x11eaa1.username, "*********");
    var _0x4ee0ad = await getMoney(_0x2a860a);
    if (!_0x4ee0ad) {
      _0x4ee0ad = EXCEPTION_STR;
    } else {
      _0x4ee0ad = _0x4ee0ad / 100;
    }
    let _0x5d74fa = await getCoupsRecord(_0x2a860a);
    if (!_0x5d74fa) {
      _0x5d74fa = EXCEPTION_STR;
    }
    let _0x2c333a = await querypropertydetail(_0x2a860a, 1);
    let _0x4d071f = await querypropertydetail(_0x2a860a, 2);
    let _0x2bc913 = _0x2c333a + _0x4d071f;
    if (!_0x2bc913) {
      _0x2bc913 = EXCEPTION_STR;
    }
    var _0x3d13b0 = await queryintegralproperty(_0x2a860a);
    if (!_0x3d13b0) {
      _0x3d13b0 = EXCEPTION_STR;
    }
    console.log("乐园币：" + _0x2bc913);
    console.log("当前乐园币：" + _0x3d13b0);
    console.log("总吃货豆：" + _0x5d74fa);
    console.log("余额：" + _0x4ee0ad);
    var _0x4428ec = "###资产推送\n" + markdownStr + "|" + _0x11eaa1.username + "|" + _0x2bc913 + "/" + _0x3d13b0 + "|" + _0x5d74fa + "|" + _0x4ee0ad + "|";
    await assestNotify(_0x2a860a, _0x4428ec);
    await wait(10);
  }
  process.exit(0);
}
start();
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
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
        s.call(this, t, (t, s, r) => {
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
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
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
        return !1;
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
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
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
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
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
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
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
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
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
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}