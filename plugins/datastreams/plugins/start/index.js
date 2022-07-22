import dataDevices from "../index.js"

const startPlugin = {
    tag: 'start',

    operator: async (node, input, ...data) => {

        if (input === 'data') return data
        else {
            // Activate the Specified Device
            return await dataDevices.getUserDevice(input).then(device => {

                // Begin Tracking the Device Data
                const ontrack = (track) => {
                    track.subscribe((data, timestamp) => {
                        node.run('data', track.contentHint, data, timestamp)
                    })
                }
                
                device.stream.getTracks().forEach(ontrack)
                device.stream.onaddtrack = ontrack
                // return device
            })
        }
    },
    
    tagName: 'div'
}

export default startPlugin