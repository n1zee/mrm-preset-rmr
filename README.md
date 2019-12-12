# RMR auto config

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](http://prettier.io)

Create and update config files in any project.

## Installation

1. Install mrm package  `npm install -g mrm`
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
1. [**package**](https://github.com/n1zee/rmr-auto-config/blob/master/package/index.js "**package**") - creates or updates *package.json*
2. [**editor**](https://github.com/n1zee/rmr-auto-config/blob/master/editor/index.js "**editor**") - creates or updates *.editorconfig*
3. [**gitignore**](https://github.com/n1zee/rmr-auto-config/blob/master/gitignore/index.js "***gitignore***") - creates *.gitignore* from http://gitignore.io/api/node,linux,macos,windows
4. [**husky**](https://github.com/n1zee/rmr-auto-config/blob/master/husky/index.js "***husky***") - creates *.huskyrc*
5. [**lintStaged**](https://github.com/n1zee/rmr-auto-config/blob/master/lintStaged/index.js "***lintStaged***") - creates *.lintstagedrc*
6. [**prettier**](https://github.com/n1zee/rmr-auto-config/blob/master/prettier/index.js "***prettier***") - creates *.prettierrc*
7. [**tsconfig**](https://github.com/n1zee/rmr-auto-config/blob/master/tsconfig/index.js "***tsconfig***") -  if not exists, creates *tsconfig.json* with default configuration
8. [**tslint**](https://github.com/n1zee/rmr-auto-config/blob/master/tslint/index.js "***tslint***") -  if not exists, creates *tslint.json* with default configuration from https://www.npmjs.com/package/rmr-tslint-config
8. [**eslint**](https://github.com/n1zee/rmr-auto-config/blob/master/eslint/index.js "***eslint***") -  if not exists, creates *.eslintrc*. By default lints only js/ts files.
9. [**commitlint**](https://github.com/n1zee/rmr-auto-config/blob/master/commitlint/index.js "***commitlint***") -  creates *.commitlint.json* with configuration 
[@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) 

## How to create your own package
Guide: https://github.com/sapegin/mrm-core
