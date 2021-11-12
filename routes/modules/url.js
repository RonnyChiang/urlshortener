// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 restaurant model
const Urls = require('../../models/urls')
const shortenUrl = require("../../public/javascripts/shortenURL")

// connect shortUrl
router.get("/:shortURL", (req, res) => {
  const shortUrl = req.params.shortURL

  return Urls.findOne({ shortURL: shortUrl })
    .lean()
    .then(link => {
      if (!link) {
        return res.render("error", {
          errorMsg: "Can't found the URL",
          errorURL: req.headers.host + "/" + shortUrl,
        })
      }
      res.redirect(link.originalURL)
    })
  // .catch(err => {
  //   console.log(err)
  //   res.render(
  //     'errorPage',
  //     { status: 500, error: err.message }
  //   )
  // })
})

// 匯出路由模組
module.exports = router