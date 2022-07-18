
    import * as brainsatplay from './external/brainsatplay/index.esm.js'
    import * as editorComponents from './external/editor/index.esm.js'

    import appInfo from './content/signals/index.js'

    const app = new brainsatplay.App(appInfo)
    // const app = new brainsatplay.editable.App(appInfo)
    const editor = new editorComponents.Editor()
    editor.setApp(app)


    const ui = document.createElement('div')
    editor.setUI(ui)

    app.setParent(ui)

    let activeApp = app
    if (activeApp.active) activeApp = activeApp.active
    app.onstart = editor.start
    

    app.start(appInfo).then(ok => {

        console.log('App', app)

        if (ok) editor.setGraph(activeApp.graph)

        const domService = app.graph.nodes.get('ui').source
        const buttonNode = domService.nodes.get('button')
        let buttonElementNode = null
        Object.keys(domService.elements).find(str => {
            if (str.includes('button')){
                buttonElementNode = domService.elements[str].node
                return true
            }
        })

    }).catch(e => console.error('Invalid App', e))


    document.getElementById('editor').appendChild(editor)

    // app.save() // Global save.