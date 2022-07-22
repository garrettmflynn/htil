import defaultConfig from './phaser.config.js'

// const configs = {}

const merge = (base, newObj) => {
    const copy = Object.assign({}, base)
    const copyKeys = Object.keys(copy)
    const newKeys = Object.keys(newObj).filter(key => !copyKeys.includes(key))

    // Copy Matching Base Keys
    copyKeys.forEach(k => {
        if (typeof newObj[k] === 'object') {
            merge(base[k], newObj[k])
        } else {
            if (newObj[k]) base[k] = newObj[k]
        }
    })

    // Copy New Keys
    newKeys.forEach(k => copy[k] = newObj[k])

    return copy
}

const phaserConfig = {
    config: {},
    operator: (node) => {
        if (window.Phaser) {
            let config = node.config;
            const dflt = defaultConfig(); // generate a new default config
            config = merge(dflt, config) // merge config with default config
            config.parent =  node.graph.parentNode // set parent node
            return config
        }
    },
}

export default phaserConfig