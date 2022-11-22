const {createFile} = require('./helpers/multiplication');
const colors = require('colors');

const argv = require('./config/yargs');

require('./config/yargs');



console.clear()

createFile(argv.b, argv.l)
    .then(fileName => console.log(fileName, 'created'))
    .catch(err => console.log(err)); 