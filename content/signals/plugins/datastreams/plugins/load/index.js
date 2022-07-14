import dataDevices from "../index.js"

export default {
    tag: 'load',
    operator: async (info) => {
        console.log('Device loaded', info)
        return await dataDevices.load(info) // Load the specified device into the API
    }
}