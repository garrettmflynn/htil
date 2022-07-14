export default {
    operator: (input) => {
        console.log('Div', input)
        const div = document.createElement('div')
        div.style.background = 'red'
        div.style.width = div.style.height = '100px'
        return div
    }
}