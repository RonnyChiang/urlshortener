// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 urls model
const Urls = require('../../models/urls')
const shortenUrl = require("../../public/javascripts/shortenUrl")


// 定義首頁路由
router.get('/', (req, res) => {
  res.render("index")
})

// creat shortUrl
router.post("/", (req, res) => {
  if (!req.body.url) return res.redirect("/")
  const shortUrl = shortenUrl(5)
  // check existed url
  Urls.findOne({ originalURL: req.body.url })
    .then(url =>
      // if existed, take from database
      url ? url : Urls.create({
        // if no exist, create a new one to database
        shortURL: shortUrl, originalURL: req.body.url
      }))
    // render index
    .then(url => res.render("index", {
      originalURL: req.body.url,
      origin: req.headers.origin,
      shortURL: url.shortURL,
    }))
    .catch(err => {
      console.log(err)
      res.render(
        'errorPage',
        { status: 500, error: err.message }
      )
    })
})

// 匯出路由模組
module.exports = router