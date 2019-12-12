const { execSync } = require("child_process");
const { json, install, packageJson, file, markdown } = require("mrm-core");

async function commitizen() {
  const isYarn = file("yarn.lock").exists();

  try {
    if (isYarn) {
      execSync(
        "commitizen init cz-conventional-changelog --yarn --dev --exact"
      );
    } else {
      execSync(
        "commitizen init cz-conventional-changelog --save-dev --save-exact"
      );
    }
  } catch (error) {}

  await json(".huskyrc")
    .merge({
      hooks: {
        "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
      }
    })
    .save();

  await markdown("README.md")
    .addBadge(
      "https://img.shields.io/badge/commitizen-friendly-brightgreen.svg",
      "http://commitizen.github.io/cz-cli/",
      "Commitizen friendly"
    )
    .save();
}

commitizen.description = "adds commitizen with husky and npm script";

module.exports = commitizen;
