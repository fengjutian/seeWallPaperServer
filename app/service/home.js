'use strict';
const fs = require('fs');
const Service = require('egg').Service;
class HomeService extends Service {
  async getImgList() {
    let filesList = [];
    const imgUrl = 'app/public/assets/';
    let files = fs.readdirSync(imgUrl);
    files.forEach(function(itm, index) {
      let stat = fs.statSync(imgUrl + itm);
      let obj = {}; // 定义一个对象存放文件的路径和名字
      obj.path = imgUrl; // 路径
      obj.filename = itm; // 名字
      filesList.push(obj);
    })

    return filesList;
  }
}

module.exports = HomeService;
