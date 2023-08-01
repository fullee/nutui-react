import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
var Utils = {
  /**
   * 是否为闫年
   * @return {Boolse} true|false
   */
  isLeapYear: function isLeapYear(y) {
    return y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
  },
  /**
   * 返回星期数
   * @return {String}
   */
  getWhatDay: function getWhatDay(year, month, day) {
    var date = /* @__PURE__ */ new Date("".concat(year, "/").concat(month, "/").concat(day));
    var index = date.getDay();
    var dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    return dayNames[index];
  },
  /**
   * 返回上一个月在当前面板中的天数
   * @return {Number}
   */
  getMonthPreDay: function getMonthPreDay(year, month) {
    var date = /* @__PURE__ */ new Date("".concat(year, "/").concat(month, "/01"));
    var day = date.getDay();
    if (day === 0) {
      day = 7;
    }
    return day;
  },
  /**
   * 返回月份天数
   * @return {Number}
   */
  getMonthDays: function getMonthDays(year, month) {
    if (/^0/.test(month)) {
      month = month.split("")[1];
    }
    return [0, 31, this.isLeapYear(Number(year)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  },
  /**
   * 补齐数字位数
   * @return {string}
   */
  getNumTwoBit: function getNumTwoBit(n) {
    n = Number(n);
    return (n > 9 ? "" : "0") + n;
  },
  /**
   * 日期对象转成字符串
   * @return {string}
   */
  date2Str: function date2Str(date, split) {
    split = split || "-";
    var y = date.getFullYear();
    var m = this.getNumTwoBit(date.getMonth() + 1);
    var d = this.getNumTwoBit(date.getDate());
    return [y, m, d].join(split);
  },
  /**
   * 返回日期格式字符串
   * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
   * @return {string} '2014-12-31'
   */
  getDay: function getDay(i) {
    i = i || 0;
    var date = /* @__PURE__ */ new Date();
    var diff = i * (1e3 * 60 * 60 * 24);
    date = new Date(date.getTime() + diff);
    return this.date2Str(date);
  },
  /**
   * 时间比较
   * @return {Boolean}
   */
  compareDate: function compareDate(date1, date2) {
    var startTime = new Date(date1.replace("-", "/").replace("-", "/"));
    var endTime = new Date(date2.replace("-", "/").replace("-", "/"));
    if (startTime >= endTime) {
      return false;
    }
    return true;
  },
  /**
   * 时间是否相等
   * @return {Boolean}
   */
  isEqual: function isEqual() {
    var date1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var date2 = arguments.length > 1 ? arguments[1] : void 0;
    var startTime = new Date(date1.replace("-", "/")).getTime();
    var endTime = new Date(date2.replace("-", "/")).getTime();
    if (startTime === endTime) {
      return true;
    }
    return false;
  },
  getMonthWeek: function getMonthWeek(year, month, date) {
    var firstDayOfWeek = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    var dateNow = new Date(Number(year), parseInt(month) - 1, Number(date));
    var w = dateNow.getDay();
    var d = dateNow.getDate();
    var remainder = 6 - w;
    if (firstDayOfWeek !== 0) {
      w = w === 0 ? 7 : w;
      remainder = 7 - w;
    }
    return Math.ceil((d + remainder) / 7);
  },
  getYearWeek: function getYearWeek(year, month, date) {
    var firstDayOfWeek = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    var dateNow = new Date(Number(year), parseInt(month) - 1, Number(date));
    var dateFirst = new Date(Number(year), 0, 1);
    var dataNumber = Math.round((dateNow.valueOf() - dateFirst.valueOf()) / 864e5);
    return Math.ceil((dataNumber + (dateFirst.getDay() + 1 - 1)) / 7);
  },
  getWeekDate: function getWeekDate(year, month, date) {
    var firstDayOfWeek = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    var dateNow = new Date(Number(year), parseInt(month) - 1, Number(date));
    var nowTime = dateNow.getTime();
    var day = dateNow.getDay();
    if (firstDayOfWeek === 0) {
      var oneDayTime2 = 24 * 60 * 60 * 1e3;
      var SundayTime2 = nowTime - day * oneDayTime2;
      var SaturdayTime = nowTime + (6 - day) * oneDayTime2;
      var sunday2 = this.date2Str(new Date(SundayTime2));
      var saturday = this.date2Str(new Date(SaturdayTime));
      return [sunday2, saturday];
    }
    day = day === 0 ? 7 : day;
    var oneDayTime = 24 * 60 * 60 * 1e3;
    var MondayTime = nowTime - (day - 1) * oneDayTime;
    var SundayTime = nowTime + (7 - day) * oneDayTime;
    var monday = this.date2Str(new Date(MondayTime));
    var sunday = this.date2Str(new Date(SundayTime));
    return [monday, sunday];
  },
  formatResultDate: function formatResultDate(date) {
    var days = _toConsumableArray(date.split("-"));
    days[2] = Utils.getNumTwoBit(Number(days[2]));
    days[3] = "".concat(days[0], "-").concat(days[1], "-").concat(days[2]);
    days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2]);
    return days;
  }
};
var getCurrMonthData = function getCurrMonthData2(type, year, month) {
  switch (type) {
    case "prev":
      month === 1 && (year -= 1);
      month = month === 1 ? 12 : --month;
      break;
    case "next":
      month === 12 && (year += 1);
      month = month === 12 ? 1 : ++month;
      break;
  }
  return [year, Utils.getNumTwoBit(month), Utils.getMonthDays(String(year), String(month))];
};
var getDaysStatus = function getDaysStatus2(type, year, month) {
  var days = Utils.getMonthDays("".concat(year), "".concat(month));
  if (type === "prev" && days >= 7) {
    days -= 7;
  }
  return Array.from(Array(days), function(v, k) {
    return {
      day: k + 1,
      type,
      year,
      month
    };
  });
};
var getPreMonthDates = function getPreMonthDates2(type, year, month, firstDayOfWeek) {
  var preMonth = +month - 1;
  var preYear = year;
  if (preMonth <= 0) {
    preMonth = 12;
    preYear += 1;
  }
  var days = Utils.getMonthPreDay(+year, +month);
  days -= firstDayOfWeek;
  if (type === "prev" && days >= 7) {
    days -= 7;
  }
  var preDates = Utils.getMonthDays("".concat(preYear), "".concat(preMonth));
  var months = Array.from(Array(preDates), function(v, k) {
    return {
      day: k + 1,
      type,
      preYear,
      preMonth
    };
  });
  return months.slice(preDates - days);
};
export {
  Utils as U,
  getDaysStatus as a,
  getCurrMonthData as b,
  getPreMonthDates as g
};
