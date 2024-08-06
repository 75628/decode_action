//Tue Aug 06 2024 02:15:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    sign: sign,
    getToken: getToken,
    wait: wait,
    checkCk: checkCk,
    getCookies: getCookies,
    getUserInfo: getUserInfo,
    tryCatchPromise: tryCatchPromise,
    checkMasterCk: checkMasterCk
  } = require("./common.js"),
  request = require("request"),
  https = require("https"),
  cheerio = require("cheerio");
let CookieEles = [];
const kami = process.env.ELE_TTCJ_CARME,
  carmiType = 4;
async function getCoordinates() {
  return new Promise((_0xf95e8a, _0x4d46b5) => {
    https.get("https://zh-hans.ipshu.com/my_info", _0xbe6ed4 => {
      let _0x2c7750 = "";
      _0xbe6ed4.on("data", _0xa200d1 => {
        _0x2c7750 += _0xa200d1;
      });
      _0xbe6ed4.on("end", () => {
        const _0x1c2c53 = cheerio.load(_0x2c7750),
          _0xa54b42 = _0x1c2c53(".widget_box.p-xs.small"),
          _0x1cb48f = _0xa54b42.find("li").eq(4).text().trim().split(":")[1],
          _0x8b7291 = _0xa54b42.find("li").eq(5).text().trim().split(":")[1],
          _0x51614b = {
            "latitude": _0x1cb48f,
            "longitude": _0x8b7291
          };
        _0xf95e8a(_0x51614b);
      });
    });
  });
}
async function commonRequest(_0x39dfa4, _0x3b8f56, _0x1bbf6c) {
  const _0x5452c5 = {
      "authority": "shopping.ele.me",
      "accept": "application/json",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "cookie": _0x39dfa4,
      "x-miniapp-id-taobao": "2021002148648263",
      "x-miniapp-version": "3.20230627.141210",
      "appid": "2021002148648263"
    },
    _0x344bad = new Date().getTime(),
    _0x294088 = 12574478;
  var _0x1f5634 = "data=" + encodeURIComponent(JSON.stringify(_0x1bbf6c));
  const _0x44be0a = getToken(_0x39dfa4),
    _0x437d62 = _0x44be0a.split("_")[0],
    _0x551a44 = await sign(_0x437d62 + "&" + _0x344bad + "&" + _0x294088 + "&" + JSON.stringify(_0x1bbf6c), kami, carmiType),
    _0x8443a = {
      "url": "https://shopping.ele.me/h5/mtop.alsc.growth.tangram.gateway/1.0/?jsv=2.6.1&appKey=12574478&asac=" + _0x3b8f56 + "&ttid=1601274958480%40eleme_android_10.14.3&t=" + _0x344bad + "&sign=" + _0x551a44 + "&api=mtop.alsc.growth.tangram.gateway",
      "method": "POST",
      "headers": _0x5452c5,
      "body": _0x1f5634
    };
  return tryCatchPromise(_0x4d632f => {
    request(_0x8443a, async (_0x31f215, _0x430ae8, _0x28ba10) => {
      if (!_0x31f215 && _0x430ae8.statusCode == 200) try {
        const _0x26d888 = JSON.parse(_0x28ba10);
        _0x4d632f(_0x26d888);
      } catch (_0x3fac6d) {
        console.log(_0x3fac6d);
        _0x4d632f(null);
      } else {
        _0x4d632f(null);
      }
    });
  });
}
function processUrl(_0xe1a6f1) {
  const _0x1fed35 = new Map(),
    _0x1e469d = _0xe1a6f1.split("?")[1].split("&");
  for (let _0x87de2c = 0; _0x87de2c < _0x1e469d.length; _0x87de2c++) {
    const [_0x26a7ef, _0x284333] = _0x1e469d[_0x87de2c].split("=");
    _0x1fed35.set(_0x26a7ef, _0x284333);
  }
  return _0x1fed35;
}
async function getShareId(_0x10abde, _0x30de31, _0x9af7da) {
  _0x10abde = await checkMasterCk(_0x10abde, kami, carmiType);
  !_0x10abde && (console.log("需要助力的账号失效！请重新登录！！！"), process.exit(0));
  var _0x2f011f;
  const _0x5efffa = {
      "api": "fissionDrawShare",
      "asac": "2A22C21KPW8PSOH8QMD4LM",
      "bizScene": "growth_fission_coupon",
      "instance": "INNER",
      "params": "{\"latitude\":\"" + _0x9af7da + "\",\"longitude\":\"" + _0x30de31 + "\",\"cityId\":\"\"}",
      "scene": "fissionDraw001"
    },
    _0x5307f4 = await commonRequest(_0x10abde, "2A22C21KPW8PSOH8QMD4LM", _0x5efffa);
  if (_0x5307f4.data && _0x5307f4.data.result) {
    const _0x22e50c = _0x5307f4.data.result;
    return _0x2f011f = processUrl(_0x22e50c.url).get("shareId"), console.log("获取到的助力 id 为", _0x2f011f), _0x2f011f;
  } else console.log("获取到助力 id 失败，程序退出"), process.exit(0);
}
async function jindu(_0x14c8da, _0x4a84ea, _0xe9ac18, _0x3f4adf) {
  _0x14c8da = await checkMasterCk(_0x14c8da, kami, carmiType);
  !_0x14c8da && (console.log("需要助力的账号失效！请重新登录！！！"), process.exit(0));
  const _0x151b4f = {
      "api": "fissionDrawHomePage",
      "asac": "2A22C216PW8PSO7H6J9G63",
      "bizScene": "growth_fission_coupon",
      "instance": "INNER",
      "params": "{\"latitude\":\"" + _0xe9ac18 + "\",\"longitude\":\"" + _0x4a84ea + "\",\"cityId\":\"\",\"shareId\":\"" + _0x3f4adf + "\"}",
      "scene": "fissionDraw001"
    },
    _0x4ca31e = await commonRequest(_0x14c8da, "2A22C216PW8PSO7H6J9G63", _0x151b4f);
  if (_0x4ca31e.data && _0x4ca31e.data.result) {
    let _0x3dc0c7 = _0x4ca31e.data.result.fixedPrize;
    console.log(_0x3dc0c7.title, _0x3dc0c7.reduction, _0x3dc0c7.threshold, "当前进度：" + _0x3dc0c7.amount);
    Number(_0x3dc0c7.amount) >= Number(_0x3dc0c7.maxAmount) && (console.log("🎉🎉 任务完成，已获得", _0x3dc0c7.reduction, _0x3dc0c7.threshold), process.exit(0));
  }
}
async function fridensHelper(_0x3721d0, _0x3152f4, _0x3c0623, _0x2737cc, _0x20e2d2) {
  try {
    _0x3152f4 = await checkMasterCk(_0x3152f4, kami, carmiType);
    const _0x5ea209 = {
        "api": "support",
        "bizScene": "growth_fission_coupon",
        "instance": "INNER",
        "params": "{\"latitude\":\"" + _0x20e2d2 + "\",\"longitude\":\"" + _0x2737cc + "\",\"cityId\":\"\",\"shareId\":\"" + _0x3c0623 + "\"}",
        "scene": "fissionDraw001"
      },
      _0x361a6b = await commonRequest(_0x3721d0, "2A22C21RPW8PSOJ9OFOQGY", _0x5ea209);
    if (_0x361a6b.data && _0x361a6b.data.result) {
      const _0x2787eb = _0x361a6b.data.result;
      console.log(_0x2787eb.title + "：" + _0x2787eb.subTitle);
      if (_0x2787eb.title.indexOf("无法助力") !== -1) console.log("防止黑号延时1-3秒"), await wait(getRandom(1, 3));else {
        if (_0x2787eb.title.indexOf("谢谢你为我助力") !== -1) {
          const _0x36a0bc = {
              "api": "drawAction",
              "asac": "2A22C21FPW8PSO7U202V54",
              "bizScene": "growth_fission_coupon",
              "instance": "INNER",
              "params": "{\"latitude\":\"" + _0x20e2d2 + "\",\"longitude\":\"" + _0x2737cc + "\",\"cityId\":\"\"}",
              "scene": "fissionDraw001"
            },
            _0x23e449 = await commonRequest(_0x3152f4, "2A22C21FPW8PSO7U202V54", _0x36a0bc);
          if (_0x23e449.data && _0x23e449.data.result) {
            const _0x584bff = _0x23e449.data.result,
              _0x391256 = _0x584bff.popWindow.content[0].amount;
            console.log(_0x584bff.popWindow.title + "：" + _0x391256);
            if (_0x23e449.data.success) {
              const _0x4ca533 = {
                  "api": "withdrawAction",
                  "bizScene": "growth_fission_coupon",
                  "instance": "INNER",
                  "params": "{\"latitude\":\"" + _0x20e2d2 + "\",\"longitude\":\"" + _0x2737cc + "\",\"cityId\":\"\",\"amount\":\"" + _0x391256 + "\"}",
                  "scene": "fissionDraw001"
                },
                _0x1c48ab = await commonRequest(_0x3152f4, "", _0x4ca533);
              if (_0x1c48ab.data && _0x1c48ab.data.result) {
                const _0x3e0918 = _0x1c48ab.data.result;
                console.log(_0x3e0918.popWindow.title + "：金额", _0x3e0918.popWindow.content[0].amount);
                console.log(_0x3e0918.popWindow.content[0].step2);
                await jindu(_0x3152f4, _0x2737cc, _0x20e2d2, _0x3c0623);
              } else console.log("提现：" + _0x23e449.ret[0]);
            } else console.log("抽奖：" + _0x23e449.ret[0]);
          } else {
            console.log("抽奖：" + _0x23e449.ret[0]);
          }
          console.log("防止黑号延时5-10秒");
          await wait(getRandom(5, 10));
        }
      }
    } else console.log("助力：" + drawRes.ret[0]);
  } catch (_0x304872) {}
}
(async function () {
  const _0x560abf = process.env.ownCookie;
  !_0x560abf && (console.log("未设置需助力的 ck，程序结束!"), process.exit(0));
  CookieEles = getCookies();
  const _0x2e1d7d = await getCoordinates(),
    _0x4fd91a = await getShareId(_0x560abf, _0x2e1d7d.longitude, _0x2e1d7d.latitude);
  for (let _0x427a57 = 0; _0x427a57 < CookieEles.length; _0x427a57++) {
    let _0x2fede5 = CookieEles[_0x427a57];
    _0x2fede5 = await checkCk(_0x2fede5, _0x427a57, kami, carmiType);
    if (!_0x2fede5) {
      continue;
    }
    let _0x52bf50 = await getUserInfo(_0x2fede5);
    if (!_0x52bf50.username) {
      console.log("第", _0x427a57 + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    await fridensHelper(_0x2fede5, _0x560abf, _0x4fd91a, _0x2e1d7d.longitude, _0x2e1d7d.latitude);
  }
  process.exit(0);
})();
function getRandom(_0x241bc2, _0x50aade) {
  return Math.floor(Math.random() * (_0x50aade - _0x241bc2 + 1) + _0x241bc2);
}