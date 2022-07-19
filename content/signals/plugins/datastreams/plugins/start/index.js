import dataDevices from "../index.js"


let self;

export default {
    tag: 'start',
    operator: async (input, ...data) => {

        if (input === 'data') return data
        else {
            // Activate the Specified Device
            return await dataDevices.getUserDevice(input).then(device => {

                // Begin Tracking the Device Data
                const ontrack = (track) => {
                    track.subscribe((data, timestamp) => {
                        if (self) self.graph.run(self, 'data', track.contentHint, data, timestamp)
                    })
                }
                
                device.stream.getTracks().forEach(ontrack)
                device.stream.ontrack = ontrack
                // return device
            })
        }
    },
    
    tagName: 'div',
    oncreate: (_, props) => {
        self = props.node
    }
}