
// Load Phaser
const script = document.createElement('script')
script.src = 'https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser-arcade-physics.min.js'
document.head.appendChild(script)


// Handle async loading
let nodes = {}
let onResolve = null
script.onload = function () {
    if (onResolve instanceof Function) onResolve(window.Phaser) // resolve previous promise
    for (let tag in nodes)  nodes[tag].run() // run created nodes when initialized
};

// Return an instance of Phaser to signal the existence of the window variable
const operator = () => {
    if (window.Phaser) return window.Phaser
    else return new Promise(resolve => onResolve = resolve)
}

export const oncreate = (node) => {
    if (window.Phaser) node.run() // run node if phaser exists
    else {
        nodes[node.tag] = node // set link to node
    }
}

export default operator