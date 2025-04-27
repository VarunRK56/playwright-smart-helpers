const chalk = require('chalk');

const log = {
  info: (msg) => console.log(chalk.blue('[INFO]'), msg),
  warn: (msg) => console.warn(chalk.yellow('[WARN]'), msg),
  error: (msg) => console.error(chalk.red('[ERROR]'), msg),
};

module.exports = log;
