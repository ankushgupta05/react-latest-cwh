/* 
express 
source link 'https://expressjs.com/en/starter/hello-world.html'

install this :- npm i express@4
*/

// const express = require('express')
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
    console.log(req.body)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


/* // agar tumko khabi is prakaar ka error aaye to resolve kare is prakaar.

const express = require('express')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'E:\latest react CWH\vidio_119 handling form\first-app\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.


sollution :-


[ import express from "express" ] write this in place of [ const express = require('express')  ]


*/