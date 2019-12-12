const { json, packageJson, install, markdown } = require("mrm-core");

async function commits() {
  await packageJson()
    .appendScript("commit", "git-cz")
    .merge({
      config: {
        commitizen: {
          path: "cz-conventional-changelog"
        }
      }
    })
    .save();

  await install(
    {
      "@commitlint/cli": "8.2.0",
      "@commitlint/config-conventional": "8.2.0",
      "cz-conventional-changelog": "3.0.2",
      commitizen: "4.0.3",
      husky: "3.1.0"
    },
    { dev: true }
  );

  await json(".commitlintrc.json")
    .merge({ extends: ["@commitlint/config-conventional"] })
    .save();

  await json(".huskyrc")
    .merge({
      hooks: { "commit-msg": "commitlint -E HUSKY_GIT_PARAMS" }
    })
    .save();

  await markdown("README.md")
    .addBadge(
      "https://img.shields.io/badge/commitizen-friendly-brightgreen.svg",
      "http://commitizen.github.io/cz-cli/",
      "Commitizen friendly"
    )
    .addBadge(
      "https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg",
      "https://conventionalcommits.org",
      "Conventional Commits"
    )
    .save();
}

commits.description =
  "adds commitlint, husky, commitizen with conventional config";

module.exports = commits;
