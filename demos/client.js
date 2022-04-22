// const net = require("net");
// //124.223.36.76:6666
// net.createConnection(6666, '124.223.36.76', res => {
//     console.log('res is:', res);
// })

//引入net模块
const net = require('net');
//创建TCP客户端
const client = new net.Socket();
//设置连接的服务器
//本地
// client.connect(8001, '127.0.0.1', function() {
//     console.log("连接服务器成功");
// });

client.connect(6666, '124.223.36.76', function(res) {
    console.log('res', res);
    console.log("连接服务器成功");
});