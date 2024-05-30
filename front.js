const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.post('/sign-in', function(request, response) {

    if(request.body.user_name === 'shri' && request.body.password === '1234') {
        response.json({
            "status" : "Valid User"
        })
    } else {
        response.json({
            "status" : "Invalid User"
        })
    }
})

app.post('/get-details', function(request, response) {
    response.json({
        "user name" : request.query.name
    })
})


app.post('/get-data/:username', function(request, response) {
    response.json({
        "username" : request.params.username
    })
})

const port = 4000
app.listen(port, function() {
    console.log(`Listening on port ${port}...`)
})