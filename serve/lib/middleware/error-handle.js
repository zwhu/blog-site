'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by zwhu on 15/12/7.
 */

// 捕获错误
// 推荐用法  https://github.com/koajs/koa/wiki/Error-Handling

exports.default = app => {

  // 错误处理
  app.on('error', (err, ctx) => {
    let status = err.status;
    let message = err.message;

    //TODO: logger

    console.error(`[Error]: ${ message }; [Status]: ${ status }`);
    console.error(ctx);
  });

  return function* (next) {
    try {
      yield next;
    } catch (err) {
      var _err$status = err.status;
      let status = _err$status === undefined ? 500 : _err$status;
      var _err$message = err.message;
      let message = _err$message === undefined ? 'server error!' : _err$message;

      this.status = status;
      this.type = 'json';
      this.body = {
        error: message
      };
      app.emit('error', err, this);
    }
  };
};