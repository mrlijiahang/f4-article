'use strict';

const Service = require('egg').Service;

class UserService extends Service {

  async create(payload) {
    return this.ctx.model.User.create(payload);
  }

  async index(payload) {
    console.log(payload);
  }

  async show(payload) {
    console.log(payload);
  }


  async removes(payload) {
    console.log(payload);
  }

  async update(payload) {
    console.log(payload);
  }

  async destory(payload) {
    console.log(payload);
  }
}

module.exports = UserService;
