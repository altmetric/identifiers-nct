# Identifiers - National Clinical Trials IDs [![Build Status](https://travis-ci.org/altmetric/identifiers-nct.svg?branch=master)](https://travis-ci.org/altmetric/identifiers-nct)

Extract, validate and normalize [National Clinical Trials IDs](https://clinicaltrials.gov/).

**Current version:** 0.1.0  
**Supported Node.js versions:** 4, 5, 6, 7

## Installation

Add the following to your `package.json` via `yarn add identifiers-nct` or `npm install --save identifiers-nct`:

```shell
"identifiers-nct": "^0.1.0"
```

## Usage

```javascript
const nct = require("identifiers-nct");

nct.extract("nct00000106\nnCt00000107");
//=> ["NCT00000106", "NCT00000107"]
```

## Other versions

We also maintain versions of this library for [Ruby](https://github.com/altmetric/identifiers) and [PHP](https://github.com/altmetric/php-identifiers).

## License

Copyright © 2017 Altmetric LLP

Distributed under the [MIT License](http://opensource.org/licenses/MIT).
