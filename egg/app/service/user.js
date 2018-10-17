'use strict';

const Service = require('egg').Service;

class UserService extends Service() {

  async index(payload) {
    console.log(payload);
  }
  async create(payload) {
    console.log(payload);
  }
}

module.exports = UserService;
