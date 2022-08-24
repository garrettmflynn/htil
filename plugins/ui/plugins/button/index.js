// Element Specification
export const tagName = 'button'
export const attributes = {
    innerHTML: 'Click Me',
    onmousedown: function () {
        const pressed = this // this.nodes.get('pressed') ?? // TODO: populate argument nodes...
        pressed.run(true)
        const onMouseUp = () => {
            pressed.run(false)
            globalThis.removeEventListener('mouseup', onMouseUp)
        }
        globalThis.addEventListener('mouseup', onMouseUp)
    }
}

export default (pressed) => pressed