// Click to activate next node
const operator = (pressed) => pressed

// Element Specification
export const tagName = 'button'
export const innerHTML = 'Click Me'
export const attributes = {
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

export default operator