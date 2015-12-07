/**
 * Created by zwhu on 15/12/7.
 */

import koa from 'koa'
import responseTime from 'koa-response-time'

import errorHandling from './middleware/error-handle'

const app = koa()

app.use(errorHandling(app))

// header 加入响应时间
app.use(responseTime())

app.use(function* (next) {

  this.throw(401, 'access_denied', {error: 'hello,world!'})
  yield next
})

app.use(function* (next) {
  console.log(123)
  yield next
})


let port = 8080
app.listen(port, () => {
  console.log(`server is open: ${port}`)
})
