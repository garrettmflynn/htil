
let self;
let element;

const paragraphs = {}

export default {
    operator: (id, data, time, test=100) => {
        if (!paragraphs[id]) {
            paragraphs[id] = document.createElement('p')
            element.appendChild(paragraphs[id])
        }
        paragraphs[id].innerHTML = `<b>${id}:</b> ${data} - ${test}`
    },

    tagName: 'div',
    style: {
        width: '300px',
        height: '100px',
        padding: '25px'
    },

    oncreate: (el, props) => {
        element = el
        self = props.node
    }
}