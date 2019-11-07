const { json } = require('mrm-core');

function tsconfigTask() {
  const config = json('.commitlintrc.json');

  config.merge({
    "extends": [
      "@commitlint/config-conventional"
    ]
  }).save();
}

tsconfigTask.description = 'adds commitlint config';
module.exports = tsconfigTask;
