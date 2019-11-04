const { json } = require('mrm-core');

function tsconfigTask() {
  const config = json('tsconfig.json');
  if (config.exists()) return;

  config.merge({
    "compilerOptions": {
      "baseUrl": ".",
      "incremental": true,
      "outDir": "build/dist",
      "module": "esnext",
      "target": "esnext",
      "lib": [
        "es2018",
        "esnext",
        "dom",
        "dom.iterable"
      ],
      "sourceMap": true,
      "allowJs": true,
      "jsx": "react",
      "moduleResolution": "node",
      "rootDirs": [
        "src",
        "config"
      ],
      "forceConsistentCasingInFileNames": true,
      "noImplicitReturns": false,
      "noImplicitThis": true,
      "noImplicitAny": false,
      "importHelpers": true,
      "strictNullChecks": true,
      "suppressImplicitAnyIndexErrors": true,
      "noUnusedLocals": false,
      "types": [
        "styled-components",
        "react",
        "react-dom",
        "jest",
        "react-transition-group/Transition"
      ]
    },
    "exclude": [
      "node_modules",
      "build"
    ]
  }).save();
}

tsconfigTask.description = 'adds tsconfig if not exist';
module.exports = tsconfigTask;
