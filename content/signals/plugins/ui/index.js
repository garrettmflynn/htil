import button from "./plugins/button/index.js"
import data from "./plugins/data/index.js"
const pkg = (await import('./package.json', {assert: {type: 'json'}})).default
const plugins = (await import('./.brainsatplay/index.plugins.json', {assert: {type: 'json'}})).default
const graph = (await import('./.brainsatplay/index.graph.json', {assert: {type: 'json'}})).default

const ui = {
    button,
    data,
    ['.brainsatplay']: {
        package: pkg,
        graph,
        plugins
    }
}

export default ui