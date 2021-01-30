const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser');
const socketio = require('socket.io');
const http = require("http");
const server = http.createServer(app);
const io = socketio(server);
const cors = require('cors');
const PORT = 8080 || process.env.PORT;

const webSocketsChat = require('./webSockets/webSocketsChat')
// const webSocketsVacation = require('./webSockets/webSocketsVacation')

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cookieParser());

webSocketsChat.initialize(server);
// webSocketsVacation.initialize(server);

app.use('/api', require('./ApiRouter'));

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
