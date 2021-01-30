const socketio = require('socket.io');

const ws = {
    io: null,
    sockets: [],
}
module.exports.initialize = (server) => {
    let userCount = 1;

    ws.io = socketio(server);
    ws.io.on('connection', socket => {
        console.log("created Vacation");
        userCount++;
        const userVacation = `Guest ${userCount}`;

        socket.emit('SET_VACATIION', userVacation);
        ws.io.sockets.emit('CREATE_VACATIION', {
            content: `${userVacation} connected`
        });

        socket.on('SEND_VACATIION', (vacationObject) => {
            ws.io.sockets.emit('CREATE_VACATIION', vacationObject);
        });

        // socket.on('disconnected', () => {
        //     ws.io.sockets.emit('CREATE_MESSAGE', {
        //         content: `${userVacation} disconnected`
        //     });
        // });
    });
}
module.exports.io = () => ws.io;

