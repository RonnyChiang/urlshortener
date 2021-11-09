// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 restaurant model
const Urls = require('../../models/urls')
const shortenUrl = require("../../public/javascripts/shortenURL")

console.log(typeof (shortenUrl))
// creat shortUrl
router.post("/", (req, res) => {
  console.log(req.body.url)
  console.log(shortenUrl)
  return Urls.create({ shortURL: shortenUrl, originalURL: req.body.url })
    .then(() => res.redirect("/"))
    .catch(err => {
      console.log(err)
      res.render(
        'errorPage',
        { status: 500, error: err.message }
      )
    })
})