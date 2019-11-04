const { json } = require('mrm-core');

function prettierTask() {
  
  json('.prettierrc').merge({
    "printWidth": 80,
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all"
  }).save();
}

prettierTask.description = 'adds .prettierrc';
module.exports = prettierTask;
