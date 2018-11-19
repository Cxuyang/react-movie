var express = require('express')
var bodyParser = require('body-parser')
// compression  nodejs开启gzip压缩
var compression = require('compression')
var axios = require('axios')
var app = express()
const Router = express.Router()
// 正在热映
Router.get('/in_theaters', function(req,res) {
  const url = 'https://api.douban.com/v2/movie/in_theaters'
  axios.get(url).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log(e)
  })
})
// 即将上映
Router.get('/coming_soon', function(req,res) {
  const url = 'https://api.douban.com/v2/movie/coming_soon'
  axios.get(url).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log(e)
  })
})
// TOP 250
Router.get('/top250', function(req,res) {
  const url = 'https://api.douban.com/v2/movie/top250'
  axios.get(url).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log(e)
  })
})
// 电影详情
Router.post('/detail', function(req,res) {
  const url = `https://api.douban.com/v2/movie/subject/${req.body.movieID}`
  axios.get(url).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log(e)
  })
})
app.use(bodyParser.json())
app.use('/api', Router)
app.use(compression())
const server = require('http').Server(app)
server.listen(9093, function(){
  console.log('node app start at port 9093')
})