const { json } = require('mrm-core');

function tsconfigTask() {
  const config = json('tslint.json');
  if (config.exists()) return;

  config
    .merge({
      extends: ['rmr-tslint-config'],
    })
    .save();
}

tsconfigTask.description = 'adds tslint config if not exist';
module.exports = tsconfigTask;
