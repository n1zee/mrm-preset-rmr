const { json } = require('mrm-core');

function tsconfigTask(options) {
  const config = json('.eslintrc');
  if (config.exists()) return;

  const { lintType } = options.values();
  const defaultAtomicConfig = '@atomix/eslint-config';

  const atomicConfig =
    lintType === 'react'
      ? [defaultAtomicConfig, '@atomix/eslint-config-react']
      : [defaultAtomicConfig];

  config
    .merge({
      extends: [...atomicConfig, 'prettier', 'prettier/@typescript-eslint'],
    })
    .save();
}

tsconfigTask.description = 'adds eslint config if not exist';
module.exports = tsconfigTask;
