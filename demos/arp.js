var arp = require('node-arp');

arp.getMAC('192.168.0.1', function(err, mac) {
    if (!err) {
        console.log(mac);
    } else {
        console.log('mac is:', mac);
    }
});