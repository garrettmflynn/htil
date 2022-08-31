
    import * as brainsatplay from './external/brainsatplay/index.esm.js'
    import * as editorComponents from './external/editor/index.esm.js'
    import WASL from './external/wasl/index.esm.js'

    // const info = 'https://raw.githubusercontent.com/garrettmflynn/phaser/nightly/index.wasl.json'
    // const info = 'https://raw.githubusercontent.com/brainsatplay/brainsatplay-starter-kit/nightly/index.wasl.json'
    // const info = './content/phaser/index.wasl.json'
    const info = './content/signals/index.wasl.json'

    const options = {
        relativeTo: import.meta.url
    }

    const app = new brainsatplay.App(info, options)

    
    // const app = new brainsatplay.editable.App()
    const editor = new editorComponents.Editor()
    editor.setApp(app)

    const ui = document.createElement('div')
    ui.style.width = ui.style.height = '100%'
    editor.setUI(ui)

    // app.setParent(ui)

    let activeApp = app
    if (activeApp.active) activeApp = activeApp.active
    app.onstart = editor.start

    options.parentNode = ui
    

    // app.start().then(ok => {

    //     console.log('App', app)

    //     if (ok) editor.setGraph(activeApp.graph)
    //     else {
    //         console.log('Errors', app.options.errors)
    //         console.log('Warnings', app.options.warnings)
    //     }

    //     console.log('files', app.options.files)

    // }).catch(e => console.error('Invalid App', e))



    // WASL
    console.log('WASL', info, options)
    const loader = new WASL(info, options)
    let wasl = await loader.init()
    console.log('load (import)', loader, wasl)

    console.error(loader.errors)
    console.warn(loader.warnings) 

    if (loader.errors.length === 0)  editor.setGraph(wasl.graph)

    await loader.start()

    

    document.getElementById('editor').appendChild(editor)

    // app.save() // Global save.