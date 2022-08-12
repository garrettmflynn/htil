import merge from './merge.js';
import defaultConfig from './phaser.config.js'

export const config = {}
const operator = (node) => {
    if (window.Phaser) {
        let config = node.config;
        const dflt = defaultConfig(); // generate a new default config
        config = merge(dflt, config) // merge config with default config
        config.parent =  node.graph.parentNode // set parent node
        return config
    }
}

export default operator