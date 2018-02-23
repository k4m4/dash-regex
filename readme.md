# dash-regex [![Build Status](https://travis-ci.org/k4m4/dash-regex.svg?branch=master)](https://travis-ci.org/k4m4/dash-regex)

> Regular expression for matching Dash addresses.


## Install

```
~ ❯❯❯ npm install dash-regex
```


## Usage

```js
const dashRegex = require('dash-regex');

dashRegex().test('nodejsrocks XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh');
//=> true

dashRegex({exact: true}).test('nodejsrocks XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh foo');
//=> false

dashRegex({exact: true}).test('XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh');
//=> true

'nodejsrocks XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh unicorn Xm9TJiJ7nWjme8K7iEPUGsC5JjYGzPk2QU rainbow'.match(dashRegex());
//=> ['XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh', 'Xm9TJiJ7nWjme8K7iEPUGsC5JjYGzPk2QU']
```


## API

### dashRegex([options])

Returns a regex for matching Dash addresses.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any DASH address in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is an DASH address.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)