const fs = require("fs/promises");

module.exports = (avatar) => {
    fs.unlink(`uploads/${avatar}`).catch((err) => console.error(err));
  };