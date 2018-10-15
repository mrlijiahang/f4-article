'use strict';

exports.success = (ctx, result = null, message = '请求成功', status = 200) => {
  ctx.body = {
    code: 200,
    message,
    data: result,
  };
  ctx.status = status;
};

exports.error = (ctx, code, message) => {
  ctx.body = {
    code,
    message,
  };
  ctx.status = code;
};

// 获取 Token
exports.getAccessToken = ctx => {
  const bearerToken = ctx.request.header.authorization;
  return bearerToken && bearerToken.replace('Bearer ', '');
};
