import defaultConfig from './phaser.config.js'

const configs = {}

const phaserConfig = {
    // config: defaultConfig,
    operator: (node) => {
        if (window.Phaser) {
            const parent = node.graph.parentNode

            if (typeof configs[node.tag] === 'function') return configs[node.tag](parent) // generate if required
            else {
                configs[node.tag].parent = parent
                return configs[node.tag] 
            }
        }
    },
    oncreate: (node) => {
        configs[node.tag] = node.config ?? defaultConfig
    }
}

export default phaserConfig