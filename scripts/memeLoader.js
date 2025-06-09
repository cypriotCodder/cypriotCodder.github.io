const fs = require('fs');
const path = require("path");

window.addEventListener('DOMContentLoaded'), () => {
    memeFolder = __dirname;
    memeFolder = path.resolve(__dirname, "..");
    memeFolder = path.join(memeFolder, "/design/assets/memes");

    try {
    const files = fs.readdirSync(memeFolder, { withFileTypes: true });
    const fileList = files
      .filter(file => file.isFile())
      .map(file => path.join(memeFolder, file.name));

    console.log(fileList);
  } catch (err) {
    console.error("Error reading directory:", err);
  }

    console.log(fileList);
}