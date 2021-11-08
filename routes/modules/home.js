// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 restaurant model
const Urls = require('../../models/urls')
// 定義首頁路由
router.get('/', (req, res) => {

  Urls.find({})
    .lean()
    .then(url => res.render("index", { url }))
    .catch(err => {
      console.log(err)
      // 前端顯示
      res.render(
        'errorPage',
        { status: 500, error: err.message }
      )
    })
})
// 匯出路由模組
module.exports = router