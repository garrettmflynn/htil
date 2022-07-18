import dataDevices from "../index.js"

export default {
    tag: 'load',
    operator: async (info) => {
        console.log('Device loaded', info)
        const res = await dataDevices.load(info) // Load the specified device into the API
        console.log('Success', res)
        return true
    }
}