import datastreams from "./plugins/datastreams/index.js"
import ui from "./plugins/ui/index.js"

// Devices
import synthetic from "../../devices/synthetic/index.js"
import ganglion from "../../devices/ganglion/index.js"


import pkg from './package.json' assert {type: 'json'};
const plugins = (await import('./.brainsatplay/index.plugins.json', {assert: {type: 'json'}})).default
const graph = (await import('./.brainsatplay/index.graph.json', {assert: {type: 'json'}})).default

export default {
    datastreams, 
    ui,

    synthetic,
    ganglion,

    ['.brainsatplay']: {
        package: pkg,
        graph,
        plugins
    }
}