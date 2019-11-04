const { json } = require('mrm-core');

function lintStagedTask() {

  json('.lintstagedrc').merge({
    "*.{ts,tsx}": [
      "npm run lint:fix",
      "git add --force"
    ]
  }).save();
}

lintStagedTask.description = 'adds lintStaged';
module.exports = lintStagedTask;
