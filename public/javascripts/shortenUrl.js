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

