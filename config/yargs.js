const argv = require('yargs').
    option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base of the multiplication table'
    }).check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'The base must be a number';
        }
        return true;
    }).option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Show the table in console'
    })
    .argv;

module.exports = argv;            