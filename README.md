# qwebs-github-deploy

 [![NPM][npm-image]][npm-url]
 [![Build Status][travis-image]][travis-url]
 [![Coverage Status][coveralls-image]][coveralls-url]

## Features

  * [Qwebs](https://www.npmjs.com/package/qwebs)
    
### Add this github config in config.json

```json
{
	"github": {
        "connectionString": "mongodb://localhost:27017/database"
    },
}
```

### Declare and inject $mongo

```js
const Qwebs = require("qwebs");
const qwebs = new Qwebs();

qwebs.inject("$mongo" ,"qwebs-github-deploy");
```

## Installation

```bash
$ npm install qwebs-github-deploy
```

## Test

To run our tests, clone the qwebs-github-deploy repo and install the dependencies.

```bash
$ git clone https://github.com/BenoitClaveau/qwebs-github-deploy --depth 1
$ cd qwebs-github-deploy
$ npm install
$ mongod --dbpath ./data/db
$ node.exe "..\node_modules\jasmine-node\bin\jasmine-node" --verbose tests
```

[npm-image]: https://img.shields.io/npm/v/qwebs-github-deploy.svg
[npm-url]: https://npmjs.org/package/qwebs-github-deploy
[travis-image]: https://travis-ci.org/BenoitClaveau/qwebs-github-deploy.svg?branch=master
[travis-url]: https://travis-ci.org/BenoitClaveau/qwebs-github-deploy
[coveralls-image]: https://coveralls.io/repos/BenoitClaveau/qwebs-github-deploy/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/BenoitClaveau/qwebs-github-deploy?branch=master
