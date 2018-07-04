const path = require("path");
const blacklist = require("metro/src/blacklist");

module.exports = {
  getRoot() {
    return path.resolve(__dirname);
  },
  getProjectRoots() {
    return [path.resolve(__dirname), path.resolve(path.join(__dirname, "src"))];
  },
  getBlacklistRE() {
    return blacklist([/react-native\/local-cli\/core\/__fixtures__.*/]);
  }
};
