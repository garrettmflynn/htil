
// State (TODO: Do these overlap?)
export const tagName = 'div'
export const style = {
    width: '300px',
    height: '100px',
    padding: '25px'
}

export function oncreate() {
    this.paragraphs = {}
}

export default function(id, data) {

    if (!this.paragraphs[id]) {
        this.paragraphs[id] = document.createElement('p')
        this.element.appendChild(this.paragraphs[id])
    }
    
    this.paragraphs[id].innerHTML = `<b>${id}:</b> ${data}`
}