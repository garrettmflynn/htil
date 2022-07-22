
    import * as brainsatplay from './external/brainsatplay/index.esm.js'
    import * as editorComponents from './external/editor/index.esm.js'

    import appInfo from './content/phaser/index.js'
    // import appInfo from './content/signals/index.js'
    // import appInfo from '../brainsatplay-starter-kit/index.js'

    const app = new brainsatplay.App()
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
    

    app.start(appInfo).then(ok => {

        console.log('App', app)

        if (ok) editor.setGraph(activeApp.graph)

    }).catch(e => console.error('Invalid App', e))


    document.getElementById('editor').appendChild(editor)

    // app.save() // Global save.