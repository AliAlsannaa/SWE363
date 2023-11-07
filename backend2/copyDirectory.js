const fs = require('fs')
const path = require('path')

if (process.argv.length !== 4) {
    console.error('Usage: node copyDirectory.js <directory>');
    process.exit(1);
}

const directory = process.argv[2];
const directory2 = process.argv[3];

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        process.exit(1);
    }
    const ext = '.txt'
    const ext2 = '.jpg'
    const tfiles = files.filter(file =>
            {
                return( path.extname(file).toLowerCase() === ext || path.extname(file).toLowerCase() === ext2)
            })
            for (let step = 0; step < tfiles.length; step++){
                let d = directory + '/'+tfiles[step]
                fs.copyFile(d, directory2, (err) => {
                    if (err) throw err;
                    console.log('source.txt was copied to destination.txt');
                  });}
                  
    }
)

