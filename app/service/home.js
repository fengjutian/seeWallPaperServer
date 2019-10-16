'use strict';
const fs = require('fs');
const Service = require('egg').Service;
class HomeService extends Service {
  async getImgList() {
    const fsImg = await fs.readFile('./public/assets/');
    // console.log(888, fsImg);
    return fsImg;
  }
}

module.exports = HomeService;
