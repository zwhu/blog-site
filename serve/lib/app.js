'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaResponseTime = require('koa-response-time');

var _koaResponseTime2 = _interopRequireDefault(_koaResponseTime);

var _errorHandle = require('./middleware/error-handle');

var _errorHandle2 = _interopRequireDefault(_errorHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _koa2.default)(); /**
                                   * Created by zwhu on 15/12/7.
                                   */

app.use((0, _errorHandle2.default)(app));

// header 加入响应时间
app.use((0, _koaResponseTime2.default)());

const port = 8080;
app.listen(port, function () {
  console.log('Server listening on: ' + port);
});