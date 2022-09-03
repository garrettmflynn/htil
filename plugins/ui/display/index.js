
export const tagName = 'div'
export const style = {
    width: '300px',
    height: '100px',
    padding: '25px'
}

export const paragraphs = {}

export default function(data, time, id) {

    if (!this.paragraphs[id]) {
        this.paragraphs[id] = document.createElement('p')
        this.element.appendChild(this.paragraphs[id])
    }
    
    this.paragraphs[id].innerHTML = `<b>${id}:</b> ${data}`
}