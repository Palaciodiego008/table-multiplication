const fs = require('fs');

const createFile = async (base = 5, list = false) => {

    let output = '';
    // error handling

    try {
        for (let i = 1; i <= 10; i++) {
            output += `${base} * ${i} = ${base * i}\n`;
        }

        if (list) {
            console.log('====================');
            console.log('  Table of the:', base);
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