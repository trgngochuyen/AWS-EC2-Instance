const express = require("express")
const app = express()
const os = require("os")
const port = 8088
app.get("/", (req, res) => {
  res.send(`Hello there from ${os.hostname()}`)
})
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})