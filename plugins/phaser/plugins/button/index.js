// Click to activate next node
const button = {
    operator: (pressed) => pressed,

    // Element Specification
    tagName: 'button',
    innerHTML: 'Click Me',
    attributes: {
        onmousedown: (ev) => {
            const pressed = ev.target.node.nodes.get('pressed')
            pressed.run(true)
            const onMouseUp = () => {
                pressed.run(false)
                globalThis.removeEventListener('mouseup', onMouseUp)
            }
            globalThis.addEventListener('mouseup', onMouseUp)
        }
    }
}

export default button