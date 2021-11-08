// used character 62
const allowedCharater = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const charaterArray = allowedCharater.split("");

// start short
shortenUrl(5)
console.log(shortenUrl(5))


// define shortenUrl function
function shortenUrl(numOfCharacter) {
  let shortUrl = []
  for (let i = 0; i < numOfCharacter; i++) {
    shortUrl += creatRandomUrl(charaterArray)
  }
  // return the generated password
  return shortUrl
}


// define creatRandomUrl function
function creatRandomUrl(charaterArray) {
  const randomIndex = Math.floor(Math.random() * charaterArray.length)
  return charaterArray[randomIndex]
}
