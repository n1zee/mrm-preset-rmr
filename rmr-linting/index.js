const { install, json, packageJson } = require('mrm-core');

function linting() {
  const hasReact = hasDependency('react');
  const hasTypescript = hasDependency('typescript');

  packageJson()
    .appendScript('lint', 'eslint ./')
    .save();

  install(
    {
      eslint: '^6.7.2',
      ...(hasTypescript
        ? {
            '@typescript-eslint/eslint-plugin': '^2.12.0',
            '@typescript-eslint/parser': '^2.12.0',
          }
        : {}),
      'eslint-plugin-import': '^2.19.1',
      'eslint-plugin-prettier': '^3.1.2',
      'eslint-config-prettier': '^3.1.2',
      'eslint-plugin-unicorn': '^14.0.1',
      ...(hasReact
        ? {
            '@atomix/eslint-config-react': '^8.0.0',
            'eslint-plugin-jsx-a11y': '^6.2.1',
            'eslint-plugin-react': '^7.12.4',
          }
        : {
            '@atomix/eslint-config': '^8.0.0',
          }),
    },
    { dev: true },
  );

  json('.eslintrc.json')
    .merge({
      ...(hasTypescript
        ? {
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint/eslint-plugin'],
          }
        : {}),
      extends: [
        ...(hasTypescript
          ? [
              'plugin:@typescript-eslint/eslint-plugin/recommended',
              'plugin:@typescript-eslint/eslint-plugin/eslint-recommended',
            ]
          : []),
        hasReact ? '@atomix/eslint-config-react' : '@atomix/eslint-config',
        'plugin:prettier/recommended',
      ],
      rules: {
        'import/extensions': ['error', 'ignorePackages'],
        ...(hasTypescript
          ? {
              '@typescript-eslint/no-use-before-define': 'off',
            }
          : {}),
      },
    })
    .save();

  const lintstagedrc = json('.lintstagedrc').get();
  const stagedFormat = lintstagedrc['*.{ts,tsx,js,jsx,mjs,json}'] || [];

  json('.lintstagedrc')
    .set({
      ...lintstagedrc,
      '*.{ts,tsx,js,jsx,mjs,json}': ['eslint --fix'].concat(stagedFormat),
    })
    .save();
}

linting.description = 'add eslint with typescript with prettier config';

module.exports = linting;

function hasDependency(name) {
  return Boolean(
    json('package.json').get(['dependencies', name]) ||
      json('package.json').get(['devDependencies', name]) ||
      json('package.json').get(['peerDependencies', name]),
  );
}
