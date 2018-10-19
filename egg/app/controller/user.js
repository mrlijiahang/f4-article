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
    const payload = ctx.query;
    const res = await ctx.service.user.index(payload);
    ctx.helper.success(ctx, res);
  }

  async show() {
    const { ctx } = this;
    const payload = ctx.query;
    const res = await ctx.service.user.show(payload);
    ctx.helper.success(ctx, res);
  }

  async update() {
    const { ctx } = this;
    const payload = ctx.query;
    const res = await ctx.service.user.update(payload);
    ctx.helper.success(ctx, res);
  }

  async create() {
    const { ctx } = this;
    ctx.validate(this.UserCreateRules);
    const payload = ctx.body;
    const res = await ctx.service.user.create(payload);
    ctx.helper.success(ctx, res);
  }

  async destory(payload) {
    const { ctx } = this;
    await ctx.service.user.destory(payload);
  }

  async removes(payload) {
    const { ctx } = this;
    await ctx.service.user.removes(payload);
  }
}

module.exports = UserController;
