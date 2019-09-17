require('core-js');
const regeneratorRuntime = require("regenerator-runtime");
const writer = require('./writer');
var $ = require('jquery');

class Game {

    reset =  () => {
        writer.log('Reset')
    }

    async stop() {
        return Promise.resolve('');
    }

    async start() {
        if (jQuery){
            alert('jquery is loaded');
        }
        this.reset();
        await this.stop();
        writer.log('Starting...');
    }
}
global.Game = Game;
module.exports = {
    Game
}