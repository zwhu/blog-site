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

let port = 8080
app.listen(port, () => {
  console.log(`server is open: ${port}`)
})
