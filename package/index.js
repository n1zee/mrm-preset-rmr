const { packageJson, install } = require('mrm-core');
const { execSync } = require('child_process');

function packageJsonTask() {
  const packageJsonFile = packageJson();

  packageJsonFile.appendScript('lint', 'tslint "src/**/*.{ts,tsx}"');
  packageJsonFile.appendScript('lint:fix', 'tslint --quiet --fix');
  packageJsonFile.appendScript('lint:staged', 'lint-staged');
  packageJsonFile.save();

  install(
    {
      prettier: '1.18.2',
      tslint: '5.20.0',
      typescript: '3.6.4'
    },
    { dev: false }
  );

  install(
    {
      husky: '3.0.9',
      commitizen: '4.0.3',
      '@commitlint/cli': '8.2.0',
      '@commitlint/config-conventional': '8.3.3',
      'lint-staged': '10.0.0-1',
      'tslint-config-prettier': '1.18.0',
      'tslint-react': '4.1.0',
      'rmr-tslint-config': '1.0.1'
    },
  );

  execSync('commitizen init cz-conventional-changelog --save-dev --save-exact');
}

packageJsonTask.description = 'modify package.json';
module.exports = packageJsonTask;
