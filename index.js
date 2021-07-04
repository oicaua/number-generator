const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

router.get('/src/script/numgenerator.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/script/numgenerator.js'))
})

router.get('/src/css/style.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/style.css'))
})

router.get('/src/css/footer.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/footer.css'))
})

router.get('/src/css/header.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/header.css'))
})

router.get('/src/css/mainContent.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/mainContent.css'))
})

router.get('/src/css/mediaMobile.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/mediaMobile.css'))
})

app.use('/', router)

app.listen(process.env.port || 8080)