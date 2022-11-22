const fs = require('fs');
const colors = require('./config/yargs');

const createFile = async (base = 5, list = false) => {

    let output = '';
    // error handling

    try {
        for (let i = 1; i <= 10; i++) {
            output += `${base} ${'*'.green} ${i} = ${base * i}\n`;
        }

        if (list) {
            console.log('===================='.green);
            console.log('  Table of the:'.green, colors.blue(base));
            console.log('===================='.green);
            console.log(output);
        }
        
        fs.writeFileSync(`./files/table-${base}.txt`, output);

        return `table-${base}.txt`;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    createFile
}