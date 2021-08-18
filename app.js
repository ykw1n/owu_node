const fs = require('fs')
const path = require('path')

exports.femaleMv = function(pathToDirMale, pathToDirFemale){

    fs.readdir(pathToDirMale, (err, files) => {
        files.forEach( file => {
            currPath = path.join(pathToDirMale,file)
            pathToFemale = path.join(pathToDirFemale,file)
            let text = fs.readFileSync(path.join(pathToDirMale,file));
            if (text.toString().includes('female')) {
                fs.rename(currPath, pathToFemale, function (err)  {
                    if (err) throw err
                    console.log('success moved to girls:' + file)
                });
            }

        })
    })
    console.log(pathToDirFemale);
    console.log(pathToDirMale);
    fs.readdir(pathToDirFemale, (err, files) => {
        console.log(pathToDirFemale)
        files.forEach( file => {
            currPath = path.join(pathToDirFemale,file)
            pathToFemale = path.join(pathToDirMale,file)
            let text = fs.readFileSync(path.join(pathToDirFemale,file));
            console.log(text.toString())
            if (/"male/.test(text.toString())) {
                fs.rename(currPath, pathToFemale, function (err)  {
                    if (err) throw err
                    console.log('success moved to men:' + file)
                });
            }

        })
    })
}
