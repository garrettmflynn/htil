import dataDevices from "../index.js"

export default {
    tag: 'start',
    operator: async (constraints) => {

        console.log('Trying to start', constraints)
        if (constraints){
            // Activate the Specified Device
            return await dataDevices.getUserDevice(constraints).then(device => {
                console.log('Device connected!')

                // Begin Tracking the Device Data
                const ontrack = (track) => {
                    track.subscribe((data, timestamp) => {
                        console.log(`[${track.contentHint}]: ${data} - ${timestamp}`)
                    })
                }
                
                device.stream.getTracks().forEach(ontrack)
                device.stream.ontrack = ontrack
                return device
            })
        }
    }
}