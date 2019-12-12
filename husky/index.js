const { json } = require('mrm-core');

function huskyTask() {
  json('.huskyrc')
    .merge({
      hooks: {
        'pre-commit': 'lint-staged',
        'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
      },
    })
    .save();
}

huskyTask.description = 'adds .huskyrc';
module.exports = huskyTask;
