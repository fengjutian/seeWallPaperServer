'use strict';
const fs = require('fs');
const Service = require('egg').Service;
class HomeService extends Service {
  async getImgList() {
    let filesList = [];
    const imgUrl = 'app/public/assets/';
    const curImg = 'http://127.0.0.1:7001/' + 'static/assets/';
    let files = fs.readdirSync(imgUrl);
    files.forEach(function(itm, index) {
    // let stat = fs.statSync(imgUrl + itm);
      let obj = {}; // 定义一个对象存放文件的路径和名字
      obj.path = curImg; // 路径
      obj.filename = itm; // 名字
      obj.url = curImg + itm;
    // obj.stat = stat;
      filesList.push(obj);
    })

    var result = await this.app.mongo.find("imgList");
    console.log(89, result)

    return result;
  }
}

module.exports = HomeService;
