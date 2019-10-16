'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async getImgs() {
    const { ctx } = this;
    const imgList = await ctx.service.home.getImgList();
    console.log('imgList', imgList);
    ctx.body = imgList;
  }
}

module.exports = HomeController;
