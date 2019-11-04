# RMR auto config

Create and update config files in any project.

## Installation

1. Install mrm package  `npm install -g mrm`
2. Clone rmr-auto-config repo to `~/.mrm`
3. Run `npm install`

## Usage

1. **Show all available packages**`mrm`
2. **Install all config files** `mrm rmr` inside project dirrectory
3. **Install single package** `mrm [package]`

## Available packages
1. [**package**](https://github.com/n1zee/rmr-auto-config/package/index.js "**package**") - creates or updates *package.json*
2. [**editor**](https://github.com/n1zee/rmr-auto-config/editor/index.js "**editor**") - creates or updates *.editorconfig*
3. [**gitignore**](https://github.com/n1zee/rmr-auto-config/gitignore/index.js "***gitignore***") - creates *.gitignore* from http://gitignore.io/api/node,linux,macos,windows
4. [**husky**](https://github.com/n1zee/rmr-auto-config/husky/index.js "***husky***") - creates *.huskyrc*
5. [**lintStaged**](https://github.com/n1zee/rmr-auto-config/lintStaged/index.js "***lintStaged***") - creates *.lintstagedrc*
6. [**prettier**](https://github.com/n1zee/rmr-auto-config/prettier/index.js "***prettier***") - creates *.prettierrc*
7. [**tsconfig**](https://github.com/n1zee/rmr-auto-config/tsconfig/index.js "***tsconfig***") -  if not exists, creates *tsconfig.json* with default configuration
8. [**tslint**](https://github.com/n1zee/rmr-auto-config/tslint/index.js "***tsconfig***") -  if not exists, creates *tslint.json* with default configuration from https://www.npmjs.com/package/rmr-tslint-config

## How to create your own package
Guide: https://github.com/sapegin/mrm-core
