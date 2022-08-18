
    import * as brainsatplay from './external/brainsatplay/index.esm.js'
    import * as editorComponents from './external/editor/index.esm.js'

    // const appInfo = '../brainsatplay-starter-kit/index.wasl.json'
    // const appInfo = './content/phaser/index.wasl.json'
    const appInfo = './content/signals/index.wasl.json'

    const app = new brainsatplay.App(appInfo, {
        relativeTo: import.meta.url
    })

    
    // const app = new brainsatplay.editable.App()
    const editor = new editorComponents.Editor()
    editor.setApp(app)

    const ui = document.createElement('div')
    ui.style.width = ui.style.height = '100%'
    editor.setUI(ui)

    app.setParent(ui)

    let activeApp = app
    if (activeApp.active) activeApp = activeApp.active
    app.onstart = editor.start
    

    app.start().then(ok => {

        console.log('App', app)

        if (ok) editor.setGraph(activeApp.graph)
        else {
            console.log('Errors', app.options.errors)
            console.log('Warnings', app.options.warnings)
        }

        console.log('files', app.options.files)

    }).catch(e => console.error('Invalid App', e))

    

    document.getElementById('editor').appendChild(editor)

    // app.save() // Global save.