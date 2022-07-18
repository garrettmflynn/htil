
export default {
    operator: (pressed) => pressed, // Click to activate next node

    // Element Specification
    tagName: 'button',
    innerHTML: 'Click Me',
    oncreate: (self, props) => { 
        self.onmousedown = () => {

            props.node.run(true)

            const onMouseUp = () => {
                props.node.run(false)
                globalThis.removeEventListener('mouseup', onMouseUp)
            }
            globalThis.addEventListener('mouseup', onMouseUp)
        }
    }
}