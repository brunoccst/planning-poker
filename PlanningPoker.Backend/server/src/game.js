const EventEmitter = require('events').EventEmitter;
const Player = require('./player').Player;

class Game extends EventEmitter {
    _players = {}
    _ownerPlayer = null;

    constructor() {
        super();
    }

    _getPlayersCount = () => Object.keys(this._players).length;

    addPlayer = (ipAddress, name) => {
        // If there is already a player with this IP Address, throw error.
        if (this._players[ipAddress])
            throw Error("Player is already in game.");

        const newPlayer = new Player(ipAddress, name);

        // If it's the first player being added, set it as owner.
        if (!this._ownerPlayer)
            this._ownerPlayer = newPlayer;

        this._players[ipAddress] = newPlayer;
        this.emit('addPlayer', newPlayer);

    }

    removePlayer = (ipAddress) => {
        const player = this._players[ipAddress];
        delete this._players[ipAddress];
        this.emit('removePlayer', player);

        if (this._ownerPlayer.ipAddress === ipAddress)
            this.emit('gameOwnerLeft');
        else if (this._getPlayersCount() <= 0)
            this.emit('emptyPlayerList');
    }
}

module.exports = {
    Game
}