const { lines } = require('mrm-core');
const fetch = require('node-fetch');

function task() {
  fetch('http://gitignore.io/api/node,linux,macos,windows')
    .then(res => res.text())
    .then(data => {
      const arr = data.split("\n").filter(el => !!el && el.indexOf('#') !== 0);
      lines('.gitignore')
        .add(arr)
        .save();
    });

}

task.description = 'Adds .gitignore';
module.exports = task;
