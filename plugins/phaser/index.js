import button from "./plugins/button/index.js"
import data from "./plugins/data/index.js"

import phaserObject from "./plugins/phaser/index.js"
import game from "./plugins/game/index.js"
import config from "./plugins/config/index.js"

import pkg from './package.json' assert {type: 'json'};
import graph from './.brainsatplay/index.graph.json' assert {type: 'json'};

const phaserPlugin = {
    phaserObject,
    game,
    config,

    button,
    data,

    ['.brainsatplay']: {
        package: pkg,
        graph,
    }
}

export default phaserPlugin