const fs = require('fs')
const path = require('path')

exports.sortFiles = function (pathFrom, pathTo, sortBy) {
    const baseDirFrom = path.join(__dirname, pathFrom);
    const baseDirTo = path.join(__dirname, pathTo);
    fs.readdir(baseDirFrom, (err, files) => {
        files.forEach(file => {
            fullCurrPath = path.join(baseDirFrom, file);
            fullPathTo = path.join(baseDirTo, file);
            let text = fs.readFileSync(path.join(baseDirFrom, file));
            if ((/"male/.test(text.toString()) && sortBy != 'male') || (/"female/.test(text.toString()) && sortBy != 'female')) {
                fs.rename(fullCurrPath, fullPathTo, function (err) {
                    if (err) throw err
                    console.log(`success moved from ${sortBy} :` + file);
                });
            }

        })
    })

}
