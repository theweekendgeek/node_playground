const express = require('express')

const app = express()

const PORT = 3090;


app.get('/express_test', (req, res) => {
    const {status} = {}
    console.log(status);
    res.status(702).json({status})

    // return 'hello'
})


app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})