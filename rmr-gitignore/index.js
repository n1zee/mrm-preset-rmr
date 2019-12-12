const { lines } = require('mrm-core');
const fetch = require('node-fetch');

async function gitignore() {
  const file = await fetch(
    'http://gitignore.io/api/node,linux,macos,windows,visualstudiocode',
  ).then(r => r.text());

  const arr = file.split('\n').filter(el => !!el && el.indexOf('#') !== 0);

  lines('.gitignore')
    .add('# Start generated by mrm rmr-gitignore')
    .add(arr.concat('.idea/').sort())
    .add('# End generated by mrm rmr-gitignore')
    .save();
}

gitignore.description = 'Adds .gitignore';
module.exports = gitignore;