/**
 * Created by zwhu on 15/12/7.
 */

require('babel-register')
var app = require('./app.js')

var port = 8080
app.listen(port, function() {
    console.log('Server listening on: ' + port)
})
