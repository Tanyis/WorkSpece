const EventEmitter = require('events');

const events = new EventEmitter();

events.on('click', function (data) {
    console.log('打印数据' + data.userId);
});

events.emit('click', { userId: 1234 });

events.off('remove', function (data) {
    console.log('数据已经被删除')
});

const userId = {
    username: 'tanyi',
    password: '123456'
}
events.emit('remove', { userId });
