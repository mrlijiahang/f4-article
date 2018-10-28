'use strict';
const Controller = require('egg').Controller;

class RoleController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.createRule = {
      name: { type: 'string', required: true, allowEmpty: false },
      access: { type: 'string', required: true, allowEmpty: false },
    };
  }

  // 创建角色
  async create() {
    const { ctx, service } = this;

    ctx.validate(this.createRule);

    const payload = ctx.request.body || {};
    const res = await service.role.create(payload);

    ctx.helper.success(ctx, res);
  }

  // 删除单个角色
  async destroy() {
    const { ctx, service } = this;

    const { id } = ctx.params;

    await service.role.destroy(id);

    ctx.helper.success(ctx);
  }

  // 修改角色
  async update() {
    const { ctx, service } = this;

    ctx.validate(this.createRule);

    const { id } = ctx.params;
    const payload = ctx.request.body || {};

    await service.role.update(id, payload);

    ctx.helper.success(ctx);
  }

  // 获取单个角色
  async show() {
    const { ctx, service } = this;

    const { id } = ctx.params;

    const res = await service.role.show(id);

    ctx.helper.success(ctx, res);
  }

  // 获取所有角色(分页/模糊)
  async index() {
    const { ctx, service } = this;

    const payload = ctx.query;

    const res = await service.role.index(payload);

    ctx.helper.success(ctx, res);
  }

  // 删除所选角色(条件id[])
  async removes() {
    const { ctx, service } = this;

    const { id } = ctx.request.body;
    const payload = id.split(',') || [];

    await service.role.removes(payload);

    ctx.helper.success(ctx);
  }
}

module.exports = RoleController;
