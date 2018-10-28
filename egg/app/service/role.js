'use strict';

const Service = require('egg').Service;

class RoleService extends Service {

  async create(payload) {
    return this.ctx.model.Role.create(payload);
  }

  async destroy(_id) {
    const { ctx } = this;
    const role = await ctx.service.role.find(_id);
    if (!role) {
      ctx.throw(404, 'role not found');
    }
    return ctx.model.Role.findByIdAndRemove(_id);
  }

  async update(_id, payload) {
    const { ctx } = this;
    const role = await ctx.service.role.find(_id);
    if (!role) {
      ctx.throw(404, 'role not found');
    }
    return ctx.model.Role.findByIdAndUpdate(_id, payload);
  }

  async show(_id) {
    const role = await this.ctx.service.role.find(_id);
    if (!role) {
      this.ctx.throw(404, 'role not found');
    }
    return this.ctx.model.Role.findById(_id);
  }

  async index(payload) {
    const { currentPage, pageSize, isPaging, search } = payload;
    let res = [];
    let count = 0;
    const skip = ((Number(currentPage)) - 1) * Number(pageSize || 10);
    if (isPaging) {
      if (search) {
        res = await this.ctx.model.Role.find({ name: { $regex: search } }).skip(skip).limit(Number(pageSize))
          .sort({ createdAt: -1 })
          .exec();
        count = res.length;
      } else {
        res = await this.ctx.model.Role.find({}).skip(skip).limit(Number(pageSize))
          .sort({ createdAt: -1 })
          .exec();
        count = await this.ctx.model.Role.count({}).exec();
      }
    } else {
      if (search) {
        res = await this.ctx.model.Role.find({ name: { $regex: search } }).sort({ createdAt: -1 }).exec();
        count = res.length;
      } else {
        res = await this.ctx.model.Role.find({}).sort({ createdAt: -1 }).exec();
        count = await this.ctx.model.Role.count({}).exec();
      }
    }
    // 整理数据源 -> Ant Design Pro
    const data = res.map((e, i) => {
      const jsonObject = Object.assign({}, e._doc);
      jsonObject.key = i;
      jsonObject.createdAt = this.ctx.helper.formatTime(e.createdAt);
      return jsonObject;
    });

    return { count, list: data, pageSize: Number(pageSize), currentPage: Number(currentPage) };
  }
}

module.exports = RoleService;
