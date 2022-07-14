// ------------ Initialize Data Device ------------
import * as datastreams from 'https://cdn.jsdelivr.net/npm/datastreams-api/dist/index.esm.js'
console.log('datastreams', datastreams)

const dataDevices = new datastreams.DataDevices()
console.log(dataDevices)
export default dataDevices