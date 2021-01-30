const socketio = require('socket.io');

const ws = {
    io: null,
    sockets: [],
}
module.exports.initialize = (server) => {
    let userCount = 1;

    ws.io = socketio(server);
    ws.io.on('connection', socket => {
        userCount++;
        const username = `Guest ${userCount}`;

        socket.emit('SET_USERNAME', username);
        ws.io.sockets.emit('CREATE_MESSAGE', {
            content: `${username} connected`
        });

        socket.on('SEND_MESSAGE', (messageObject) => {
            ws.io.sockets.emit('CREATE_MESSAGE', messageObject);
        });

        socket.on('disconnected', () => {
            ws.io.sockets.emit('CREATE_MESSAGE', {
                content: `${username} disconnected`
            });
        });
    });
}
module.exports.io = () => ws.io;

