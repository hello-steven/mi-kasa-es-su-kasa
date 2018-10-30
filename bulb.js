require('dotenv').config()
const TPLSmartDevice = require('tplink-lightbulb')
const light = new TPLSmartDevice(process.env.BULB_IP)

light.details()
  .then(details => {
    console.log(details)
  })
  .catch(e => console.error(e))

light.schedule()
.then(schedule => {
  console.log(schedule)
})
.catch(e => console.error(e))

light.cloud()
  .then(info => {
    console.log(info)
  })
  .catch(e => console.error(e))
