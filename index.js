import express from "express"
import adb_devices from "./cmd-src/devices.mjs"
import adb_startServer from "./cmd-src/startServer.mjs"

const app = express()
const port = 8080

app.get('/start-server', async (req, res) => {
    const result = await adb_startServer();
    res.send(result);
  
})
app.get('/devices', async (req, res) => {
    const devices = await adb_devices();
    res.send(devices);
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})