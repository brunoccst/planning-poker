// Override the `console.log` function to always include the date.
(function () {
    var _privateLog = console.log;
    console.log = function (message) {
        const formattedMessage = `[${new Date().toLocaleString()}] ${message}`;
        _privateLog(formattedMessage);
    };
})();

var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function (request, response) {
    console.log(`Received request for ${request.url}`);
    response.writeHead(404);
    response.end();
});

const port = 8080;
server.listen(port, function () {
    console.log(`Server is listening on port ${port}`);
});

wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
    return true;
}

const Game = require('./game').Game;
const game = new Game();

game.on('addPlayer', (player) => { console.log(`Player added: ${player.name}`) });
game.on('removePlayer', (player) => { console.log(`Player removed: ${player.name}`) });

wsServer.on('request', function (request) {
    if (!originIsAllowed(request.origin)) {
        request.reject();
        console.log(`Connection from origin ${request.origin} rejected.`);
        return;
    }

    var connection = request.accept('echo-protocol', request.origin);
    console.log(`Connection accepted from origin: ${request.origin}`);

    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);

            const command = JSON.parse(message.utf8Data);
            switch (command.type) {
                case "createPlayer":
                    game.addPlayer(request.remoteAddress, command.data);
                    break;
                case "removePlayer":
                    game.removePlayer(request.remoteAddress);
                    break;
                default:
                    throw Error('Unknown command type')
            }
        }
        else if (message.type === 'binary') {
            console.log(`Received a message of type ${message.type}, which is not understandable.`);
        }
    });

    connection.on('close', function (_reasonCode, _description) {
        console.log(`Peer ${connection.remoteAddress} disconnected.`);
    });
});