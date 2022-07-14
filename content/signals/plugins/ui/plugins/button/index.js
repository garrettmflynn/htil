export default {
    operator: (input) => {
        let button = document.createElement('button')
        button.innerText = 'Start data acquisition'
        console.log('Adding button', input)
        return button // Click to activate next node
    }
}