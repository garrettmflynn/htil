
import start from './plugins/start/index.js'
import load from './plugins/load/index.js'

const pkg = (await import('./package.json', {assert: {type: 'json'}})).default
const plugins = (await import('./.brainsatplay/index.plugins.json', {assert: {type: 'json'}})).default
const graph = (await import('./.brainsatplay/index.graph.json', {assert: {type: 'json'}})).default

const datastreams = {
    start,
    load,
    ['.brainsatplay']: {
        package: pkg,
        graph,
        plugins
    }
}

export default datastreams