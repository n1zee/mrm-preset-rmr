const { json, packageJson, install, markdown } = require('mrm-core');

function prettierTask(options) {
  const { readmeFile = 'README.md' } = options
    .defaults({ readmeFile: 'README.md' })
    .values();

  packageJson()
    .appendScript(
      'format',
      `prettier --write "./src/**/**.{ts,tsx,js,jsx,json}"`,
    )
    .save();

  install(
    {
      prettier: '^1.19.1',
      'lint-staged': '^9.5.0',
      husky: '^3.1.0',
    },
    { dev: true },
  );

  json('.prettierrc')
    .merge({
      arrowParens: 'always',
      printWidth: 80,
      semi: true,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'all',
      useTabs: false,
    })
    .save();

  json('.huskyrc')
    .merge({
      hooks: {
        'pre-commit': 'lint-staged',
      },
    })
    .save();

  json('.lintstagedrc')
    .merge({
      '*.{ts,tsx,js,jsx,mjs}': ['prettier --write', 'git add'],
      '{*.json,.huskyrc,.prettierrc,.lintstagedrc,.eslintrc}': [
        'prettier --write --parser json',
        'git add',
      ],
    })
    .save();

  markdown(readmeFile)
    .addBadge(
      'https://img.shields.io/badge/code_style-prettier-ff69b4.svg',
      'http://prettier.io',
      'code style: prettier',
    )
    .save();
}

prettierTask.description = 'adds .prettierrc';
module.exports = prettierTask;
