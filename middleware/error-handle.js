/**
 * Created by zwhu on 15/12/7.
 */

// 捕获错误
// 推荐用法  https://github.com/koajs/koa/wiki/Error-Handling
export default (app) => {

  // 错误处理
  app.on('error', (err, ctx)=> {
    let {status, message} = err

    //TODO: logger
    console.error(`[Error]: ${message}; [Status]: ${status}`)
    console.error(ctx)
  })

  return function* (next) {
    try {
      yield next
    } catch (err) {
      let {status = 500, message = 'server error!'} = err
      this.status = status
      this.type   = 'json'
      this.body   = {
        error: message
      }
      app.emit('error', err, this)
    }
  }

}
