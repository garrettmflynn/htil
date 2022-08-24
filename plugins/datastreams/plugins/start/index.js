import dataDevices from "../index.js"


const operator = async function (input, ...recursiveData) {

    if (input === 'data') return recursiveData
    else {
        // Activate the Specified Device
        return await dataDevices.getUserDevice(input).then(device => {

            // Begin Tracking the Device Data
            const ontrack = (track) => {
                track.subscribe((data, timestamp) => {
                    console.log('running', data, timestamp)
                    this.run('data', track.contentHint, data, timestamp)
                })
            }
            
            device.stream.getTracks().forEach(ontrack)
            device.stream.onaddtrack = ontrack
            // return device
        })
    }
}

export const tagName = 'div'

export default operator