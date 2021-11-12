# URL Shortener

此專案使用了Node.js 及 Express架構，可提供使用者縮網址功能。

## 功能列表

1. 將網址轉換成五碼短網址
2. 可按下複製鈕快速複製
3. 如有已經創立過的網址，將會出現相同的短網址


### 安裝資料庫

請先確認安裝有安裝mongoDB(4.2.17)

1.至官網下載4.2.17版本https://www.mongodb.com/download-center/community

2.將資料夾移動至/Users/[你的使用者名稱]/改名為"mongodb"，並於同階層新增"mongodb-data"資料夾

3.執行mongoDB
```
cd ~/mongodb/bin/       // 切換到 mongodb 目錄
```
```
./mongod --dbpath /Users/[你的使用者名稱]/mongodb-data
```
若能於系統訊息中查詢到"waiting for connections on port 27017"，即表示資料庫成功連接。

### 安裝

1.開啟終端機(Terminal)cd 到存放專案本機位置並執行:

```
git clone https://github.com/RonnyChiang/urlshortener.git
```

2.初始

```
cd urlshortener  //切至專案資料夾
```

```
npm install  //安裝套件
```

```
npm install nodemon -g              // -g 安裝在全域
```

3.開啟程式

```
npm run start
```

當終端機(terminal)出現以下文字，代表伺服器已啟動
```
Express is running on http://localhost:3000
```
若要暫停使用
```
ctrl + c
```

# 專案開發人員
[Ronny Chiang](https://github.com/RonnyChiang)

## Screen Photo

not yet

## 版本更新 

2021.11.09 21:57 - 改善使用者體驗-- 將reset按鈕移除，改設立清除按鈕，以方便使用者想要再度使用時清空input

2021.11.12 12:47 - 修正問題 -- 
  任何縮網址皆導向資料庫第一筆：在使用findOne功能時未注意到資料庫key與變數名稱不同，完成修正。

2021.11.12 13:26
增加功能：若資料庫中無此縮網址，顯示error page
## 已知的BUG

~~原網址input short後，reset鈕即失效。~~ (2021.11.09 21:57)

~~使用任何縮網址都會導向資料庫中第一筆的網頁~~ (2021.11.12 12:47)

## 使用工具

- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [node.js 14.16.0](https://nodejs.org/en/) - 開發環境
- [Express 4.17.1](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-handlebars 5.3.4](https://www.npmjs.com/package/express) - 樣版引擎
- [mongoose 6.0.12](https://www.npmjs.com/package/express) - Object Document Mapper
- [mongoDB 4.2.17](https://www.mongodb.com/download-center/community) - 非關聯式資料庫
- [Robo 3T Only](https://robomongo.org/download/) - 資料庫圖形介面軟體

