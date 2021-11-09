// used character 62
const allowedCharater = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const charaterArray = allowedCharater.split("");

// start short

// define shortenUrl function
module.exports = function shortenUrl(numOfCharacter) {
  let shortUrlIndex = []
  for (let i = 0; i < numOfCharacter; i++) {
    shortUrlIndex += creatRandomUrl(charaterArray)
  }
  // return the generated password
  JSON.stringify(shortUrlIndex)
  return shortUrlIndex
}

// define creatRandomUrl function
function creatRandomUrl(charaterArray) {
  const randomIndex = Math.floor(Math.random() * charaterArray.length)
  return charaterArray[randomIndex]
}


// /**
//  * 依照輸入的短網址長度，產生對應的亂數字串
//  * @param {number} shortenUrl_Length
//  */
// module.exports = (shortenUrl_Length) => {
//   /** 負責儲存對應的字元 */
//   let result = ""

//   for (let i = 0; i < shortenUrl_Length; i++) {
//     /** 產生亂數 Index */
//     const randomIndex = Math.floor(Math.random() * charaterArray.length)
//     /** 依照亂數表找出對應的字元 */
//     const shortUrlIndex = charaterArray[randomIndex]
//     /** 將對應字元放入 result */
//     result += shortUrlIndex
//   }

//   /** 回傳，即為亂數字串 */
//   return result
// }