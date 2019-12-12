# RMR auto config

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](http://prettier.io)

Create and update config files in any project.

## Installation

1. Install mrm package `npm install -g mrm`
2. Clone rmr-auto-config repo to `~/.mrm`
3. Run `npm install`

## Usage

1. **Show all available packages**`mrm`
2. **Install all config files** `mrm rmr` inside project directory
3. **Install single package** `mrm [package]`

## Eslint config

Default eslint config supports only .js/.ts files. To enable full support (react + js) run

`mrm rmr --config:lintType 'react'`

## Available packages

1. [**package**](./package/index.js) - creates or updates _package.json_
2. [**editor**](./editor/index.js) - creates or updates _.editorconfig_
3. [**gitignore**](./gitignore/index.js) - creates _.gitignore_ from http://gitignore.io/api/node,linux,macos,windows
4. [**husky**](./husky/index.js) - creates _.huskyrc_
5. [**lintStaged**](./lintStaged/index.js) - creates _.lintstagedrc_
6. [**prettier**](./prettier/index.js) - creates _.prettierrc_
7. [**tsconfig**](./tsconfig/index.js) - if not exists, creates _tsconfig.json_ with default configuration
8. [**tslint**](./tslint/index.js) - if not exists, creates _tslint.json_ with default configuration from https://www.npmjs.com/package/rmr-tslint-config
9. [**eslint**](./eslint/index.js) - if not exists, creates _.eslintrc_. By default lints only js/ts files.
10. [**commitlint**](./commitlint/index.js) - creates _.commitlint.json_ with configuration
    [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)

## How to create your own package

Guide: https://github.com/sapegin/mrm-core
