const fs = require('fs');

const readStream = fs.createReadStream('./test.text');

readStream.on('data', function (data) {
    console.log(data.toString('utf-8'));
});

readStream.on('end', function () {
    console.log('结束读取')
});
