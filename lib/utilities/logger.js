const werelogs = require('werelogs');

const _config = require('../Config.js').config;

const kafkaStream = require('./kafkaStream.js')

werelogs.configure({
    level: _config.log.logLevel,
    dump: _config.log.dumpLevel,
    streams : [new kafkaStream()],
});
const logger = new werelogs.Logger('S3');

module.exports = logger;
