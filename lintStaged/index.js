const { json } = require('mrm-core');

function lintStagedTask() {

  json('.lintstagedrc').merge({
    "*.{ts,tsx}": [
      "prettier --write",
      "npm run lint",
    ]
  }).save();
}

lintStagedTask.description = 'adds lintStaged';
module.exports = lintStagedTask;
