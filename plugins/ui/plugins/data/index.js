
// State (TODO: Do these overlap?)
export let paragraphs;
export let self;
export let element;

const operator = (id, data) => {

    if (!paragraphs[id]) {
        paragraphs[id] = document.createElement('p')
        element.appendChild(paragraphs[id])
    }
    paragraphs[id].innerHTML = `<b>${id}:</b> ${data}`
}

export const tagName = 'div'
export const style = {
    width: '300px',
    height: '100px',
    padding: '25px'
}

export const onrender = (el, props) => {
    element = el
    self = props.node
    paragraphs = {}
}

export default operator