'use strict';

const Service = require('egg').Service;

class UserService extends Service {

  async create(payload) {
    const { ctx, service } = this;
    const role = await service.role.show(payload.role);
    if (!role) {
      ctx.throw('404', 'role is not found');
    }
    payload.password = ctx.getHash(payload.password);
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
