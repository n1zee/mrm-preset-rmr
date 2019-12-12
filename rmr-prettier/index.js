const { json, packageJson, install, markdown } = require("mrm-core");

function prettierTask() {
  packageJson()
    .appendScript(
      "format",
      `prettier --write "./src/**/**.{ts,tsx,js,jsx,json}"`
    )
    .save();

  install(
    {
      prettier: "^1.19.1",
      "lint-staged": "^9.5.0",
      husky: "^3.1.0"
    },
    { dev: true }
  );

  json(".prettierrc")
    .merge({
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      trailingComma: "all"
    })
    .save();

  json(".huskyrc")
    .merge({
      hooks: {
        "pre-commit": "lint-staged"
      }
    })
    .save();

  json(".lintstagedrc")
    .merge({
      "*.{ts,tsx,js,jsx, json}": ["prettier --write", "git add"],
      "{.huskyrc,.prettierrc,.lintstagedrc,.eslintrc}": [
        "prettier --write --parser json5",
        "git add"
      ]
    })
    .save();

  markdown("README.md")
    .addBadge(
      "https://img.shields.io/badge/code_style-prettier-ff69b4.svg",
      "http://prettier.io",
      "code style: prettier"
    )
    .save();
}

prettierTask.description = "adds .prettierrc";
module.exports = prettierTask;
