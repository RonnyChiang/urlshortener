// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 restaurant model
const Urls = require('../../models/urls')
const shortenUrl = require("../../public/javascripts/shortenUrl")


// 定義首頁路由
router.get('/', (req, res) => {
  res.render("index")
})

// creat shortUrl
router.post("/", (req, res) => {
  const shortUrl = shortenUrl(5)
  return Urls.create({ shortURL: shortUrl, originalURL: req.body.url })
    .then(() => res.render("index", {
      originalURL: req.body.url,
      origin: req.headers.origin,
      shortURL: shortUrl,
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