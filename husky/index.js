const { json } = require('mrm-core');

function huskyTask() {
  json('.huskyrc').merge({
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }).save();
}

huskyTask.description = 'adds .huskyrc';
module.exports = huskyTask;
