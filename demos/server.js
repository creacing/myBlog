//引入net模块
const net = require('net');
//创建TCP服务器
const server = net.createServer(function(socket) {
    console.log('有新的客户端接入');
});
//设置监听端口
server.listen(8001, function() {
    console.log('服务正在监听中。。。')
});