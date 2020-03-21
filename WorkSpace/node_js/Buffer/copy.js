const fs = require('fs');

const readStram = fs.createReadStream('./test.text');

const writeStram = fs.createWriteStream('./test1.text');

readStram.on('data', function (data) {
    writeStram.write(data)
});

readStram.on('end', function () {
    console.log('结束');

    writeStram.close();
})

readStram.pipe(writeStram)