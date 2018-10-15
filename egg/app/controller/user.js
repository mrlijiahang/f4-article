'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
    /**
     * 手机，密码，昵称
     */
    this.UserCreateRules = {
      mobile: { type: 'string', required: true, allowEmpty: false, format: /^[0-9]{11}$/ },
      password: { type: 'password', required: true, allowEmpty: false, min: 6 },
      realName: { type: 'string', required: true, allowEmpty: false },
    };
  }

  async index() {
    const { ctx } = this;
    ctx.helper.success(ctx, 'index');
  }

  /**
   * 创建用户
   */
  async create() {
    const { ctx } = this;
    ctx.validate(this.UserCreateRules);
    ctx.helper.success(ctx, 'create');
  }
}

module.exports = UserController;
