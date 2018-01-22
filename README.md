# Terracoin Message Verification and Signing for Bitcore-Terracoin


[![NPM Package](https://img.shields.io/npm/v/bitcore-message-terracoin.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-message-terracoin)
[![Build Status](https://img.shields.io/travis/TheSin-/bitcore-message-terracoin.svg?branch=master&style=flat-square)](https://travis-ci.org/TheSin-/bitcore-message-terracoin)
[![Coverage Status](https://img.shields.io/coveralls/TheSin-/bitcore-message-terracoin.svg?style=flat-square)](https://coveralls.io/r/TheSin-/bitcore-message-terracoin?branch=master)

bitcore-message-terracoin adds support for verifying and signing terracoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bitcore-terracoin repo](https://github.com/TheSin-bitcore-terracoin) for more information.

## Getting Started

```sh
npm install bitcore-message-terracoin
```

```sh
bower install bitcore-message-terracoin
```

To sign a message:

```javascript
var bitcore = require('bitcore-lib-terracoin');
var Message = require('bitcore-message-terracoin');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/TheSin-/bitcore-terracoin/blob/master/CONTRIBUTING.md) on the main bitcore-terracoin repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

