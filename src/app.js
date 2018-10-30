require('dotenv').config()
const express = require('express')
const TPLSmartDevice = require('tplink-lightbulb')
const light = new TPLSmartDevice(process.env.BULB_IP)
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const lightDetails = await light.details()
  .then(details => {
    return details
  })
  .catch(e => console.error(e))
  res.send({
    lightDetails
  })
})

app.get('/schedule', async (req, res) => {
  const lightSchedule = await light.schedule()
  .then(schedule => {
    return schedule
  })
  .catch(e => console.error(e))

  res.send({
    lightSchedule
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))