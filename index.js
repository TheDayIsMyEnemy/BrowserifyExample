let writer = require('./writer');

class Game {
    start() {
        writer.log('Starting...');
    }
}
global.Game = Game;
module.exports = {
    Game
}