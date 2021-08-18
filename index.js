const path = require('path')
const sort = require('./app.js')
const path2000 = path.join(__dirname, '2000')
const path1800 = path.join(__dirname, '1800')

sort.femaleMv(path2000, path1800);
