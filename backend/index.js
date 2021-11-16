const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/summoners/:name', async (req, res) => {
    const {name} = req.params
    const data = await axios.get(`https://na.whatismymmr.com/api/v1/summoner?name=${name}`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })


    res.json(data)
})

app.listen(3001, () => {
    console.log('listening port 3001')
})