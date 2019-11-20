const { packageJson, install } = require('mrm-core');
const { execSync } = require('child_process');

function packageJsonTask(config) {
  const packageJsonFile = packageJson();

  packageJsonFile.appendScript('lint', 'tslint "src/**/*.{ts,tsx}"');
  packageJsonFile.appendScript('lint:fix', 'tslint --quiet --fix');
  packageJsonFile.appendScript('lint:staged', 'lint-staged');
  packageJsonFile.save();

  const { lintType } = config.values();

  const defaultEslintPackages = {
    'eslint-plugin-prettier': '3.1.1',
    'eslint-plugin-unicorn': '13.0.0',
  };

  const getEslintDependencies = type => {
    if (type === 'react') {
      return {
        ...defaultEslintPackages,
        'eslint-plugin-jest': '23.0.0',
        'eslint-plugin-jsx-a11y': '6.2.3',
        'eslint-plugin-react': '7.16.0',
      };
    }

    return defaultEslintPackages;
  };

  install(
    {
      prettier: '1.19.1',
      tslint: '5.20.0',
      typescript: '3.7.2'
    },
    { dev: false }
  );

  install(
    {
      'husky': '3.0.9',
      'commitizen': '4.0.3',
      '@commitlint/cli': '8.2.0',
      '@commitlint/config-conventional': '8.3.3',
      'lint-staged': '10.0.0-1',
      'tslint-config-prettier': '1.18.0',
      'tslint-react': '4.1.0',
      "eslint": "6.6.0",
      '@typescript-eslint/parser': '2.8.0',
      '@typescript-eslint/eslint-plugin': '2.8.0',
      'eslint-config-prettier': '6.7.0',
      'eslint-plugin-import': '2.18.2',
      '@atomix/eslint-config': '7.1.0',
      ...getEslintDependencies(lintType),
    },
  );

  execSync('commitizen init cz-conventional-changelog --save-dev --save-exact');
}

packageJsonTask.description = 'modify package.json';
module.exports = packageJsonTask;
