//Thu Jul 11 2024 14:55:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x2cf5af = function () {
  let _0x368224 = true;
  return function (_0x43b9d4, _0x60a67) {
    const _0x3a450e = _0x368224 ? function () {
      if (_0x60a67) {
        const _0x2bc1c9 = _0x60a67.apply(_0x43b9d4, arguments);
        _0x60a67 = null;
        return _0x2bc1c9;
      }
    } : function () {};
    _0x368224 = false;
    return _0x3a450e;
  };
}();
const _0x4a4819 = _0x2cf5af(this, function () {
  const _0x21551e = function () {};
  let _0x4a96b0;
  try {
    const _0x2ba90a = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x4a96b0 = _0x2ba90a();
  } catch (_0x6f587a) {
    _0x4a96b0 = window;
  }
  if (!_0x4a96b0.console) {
    _0x4a96b0.console = function (_0x4cc2ba) {
      const _0x5d0b75 = {
        log: _0x4cc2ba,
        warn: _0x4cc2ba,
        debug: _0x4cc2ba,
        info: _0x4cc2ba,
        error: _0x4cc2ba,
        exception: _0x4cc2ba,
        table: _0x4cc2ba,
        trace: _0x4cc2ba
      };
      return _0x5d0b75;
    }(_0x21551e);
  } else {
    _0x4a96b0.console.log = _0x21551e;
    _0x4a96b0.console.warn = _0x21551e;
    _0x4a96b0.console.debug = _0x21551e;
    _0x4a96b0.console.info = _0x21551e;
    _0x4a96b0.console.error = _0x21551e;
    _0x4a96b0.console.exception = _0x21551e;
    _0x4a96b0.console.table = _0x21551e;
    _0x4a96b0.console.trace = _0x21551e;
  }
});
_0x4a4819();
const axios = require("axios");
const _0x9f8874 = {
  "User-Agent": "Mozilla/5.0 (iPad; CPU OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.48(0x18003030) NetType/WIFI Language/zh_CN miniProgram/",
  "X-Channel-Type": "1",
  "X-Channel": "40"
};
const fxhOpenIds = process.env.fxhOpenId;
const ql_fxh = async () => {
  if (fxhOpenIds && fxhOpenIds !== "") {
    const _0x15b620 = fxhOpenIds.includes("\n") ? fxhOpenIds.split("\n") : fxhOpenIds.split("@");
    for (const _0x5685ae of _0x15b620) {
      try {
        await points_detail(_0x5685ae);
        await qd_mission(_0x5685ae);
      } catch (_0x5339f9) {
        console.error("⚠️⚠️⚠️脚本报错执行下一个账号⚠️⚠️⚠️");
      }
    }
  }
};
const qd_mission = async _0x3aa158 => {
  const _0xd3a63e = "https://scrm.ocheng.me/v2/api/marketing/attendance/68/" + _0x3aa158 + "?openIdType=2";
  try {
    const _0x364689 = {
      headers: _0x9f8874
    };
    const _0x5288ee = await axios.post(_0xd3a63e, {}, _0x364689);
    const _0x860e30 = _0x5288ee.data;
    if (_0x860e30.success === true) {
      console.log("签到成功！");
      const _0x48bcc0 = _0x860e30.data.awardInfo;
      console.log("获得" + _0x48bcc0 + "积分");
    } else {
      if (_0x860e30.code === 158013) {
        console.log("今日已签到！");
      } else {
        console.log(_0x860e30);
      }
    }
  } catch (_0x5c6075) {
    if (_0x5c6075.response && _0x5c6075.response.status === 400) {
      console.log("今日已签到！");
    } else {
      console.error(_0x5c6075);
    }
  }
};
const points_detail = async _0x21835d => {
  const _0x1f7349 = "https://scrm.ocheng.me/v2/api/member/info?miniProgramOpenId=" + _0x21835d;
  const _0x2c8210 = {
    headers: _0x9f8874
  };
  const _0x110f18 = await axios.get(_0x1f7349, _0x2c8210);
  const _0x4625cb = _0x110f18.data;
  const _0x5093d8 = _0x4625cb.data.memberMultiBrandDO.memberPoints;
  const _0x13e868 = _0x4625cb.data.memberMultiBrandDO.phoneNumber;
  console.log("当前账号" + _0x13e868 + "， 当前积分：" + _0x5093d8);
};
const main = async () => {
  await ql_fxh();
};
main();