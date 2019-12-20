const { install, json } = require('mrm-core');

function linting() {
  const hasReact = Boolean(
    json('package.json').get(['dependencies', 'react']) ||
      json('package.json').get(['devDependencies', 'react']) ||
      json('package.json').get(['peerDependencies', 'react']),
  );

  install(
    {
      eslint: '^6.7.2',
      '@typescript-eslint/eslint-plugin': '^2.12.0',
      '@typescript-eslint/parser': '^2.12.0',
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

  json('.eslintrc.json').merge({
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      hasReact ? '@atomix/eslint-config-react' : '@atomix/eslint-config',
      'plugin:prettier/recommended',
    ],
  });
}

linting.description = 'add eslint with typescript with prettier config';

module.exports = linting;
