
    import * as brainsatplay from './external/brainsatplay/index.esm.js'
    import * as editorComponents from './external/editor/index.esm.js'

    import appInfo from './content/signals/index.js'

    const app = new brainsatplay.App(appInfo)
    // const app = new brainsatplay.editable.App(appInfo)
    const editor = new editorComponents.Editor()
    editor.setApp(app)


    const ui = document.createElement('div')
    const button = document.createElement('button')
    button.innerHTML = 'Click me'
    ui.appendChild(button)

    editor.setUI(ui)

    let activeApp = app
    if (activeApp.active) activeApp = activeApp.active
    app.onstart = editor.start

    app.start(appInfo).then(ok => {

        if (ok) editor.setGraph(activeApp.graph)
        
    }).catch(e => console.error('Invalid App', e))


    document.getElementById('editor').appendChild(editor)

    // app.save() // Global save.