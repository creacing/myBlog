const fs = require('fs')

const pictures = fs.readdirSync('./articlesPictures')
let count = 0
for (const picture of pictures) {
    console.log(picture);
    fs.renameSync(`./articlesPictures/${picture}`, `./articlesPictures/${count++}.jpg`)
}