import datastreams from "./plugins/datastreams/index.js"
import ui from "./plugins/ui/index.js"

// Devices
import synthetic from "../../devices/synthetic/index.js"
import ganglion from "../../devices/ganglion/index.js"


import pkg from './package.json' assert {type: 'json'};
import graph from './.brainsatplay/index.graph.json' assert {type: 'json'};
import plugins from './.brainsatplay/index.plugins.json' assert {type: 'json'};

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