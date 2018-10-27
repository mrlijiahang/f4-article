'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  async create(payload) {
    return this.ctx.model.Role.create(payload);
  }
}

module.exports = RoleService;
