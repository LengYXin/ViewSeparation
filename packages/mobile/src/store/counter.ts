import { observable } from 'mobx'
// mobx 没有启用严格模式
class Store {
  constructor() {
    setInterval(() => {
      this.time = DateFormat(Date.now(), "yyyy-MM-dd hh:mm:ss");
    }, 1000)
  }
  @observable
  counter = 0;
  @observable
  time = DateFormat(Date.now(), "yyyy-MM-dd hh:mm:ss");
  counterStore() {
    this.counter++
  }
  increment() {
    this.counter++
  }
  decrement() {
    this.counter--
  }
  async incrementAsync() {
    // 等待1秒
    await new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 1000)
    })
    this.counter++
  }
}
function DateFormat(date, fmt) {
  try {
    if (!date) {
      return date;
    }
    if (typeof date == "number") {
      date = new Date(date);
    }
    // console.log(date);
    var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  } catch (error) {
    return date;
  }
}
export default new Store()