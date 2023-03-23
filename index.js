const express = require("express")
const app = express()

const port = process.env.PORT || 3001

app.get("/", (req, res) => res.send('hello sunday'))
app.get("/ping", (req, res) => res.send('pong'))

app.listen(port, () => console.log(`Server is listening on port ${port}`))
