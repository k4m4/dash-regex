declare namespace dashRegex {
	interface Options {
		/**
		Only match an exact string. By default, it matches any Dash addresses in a string. Useful with `RegExp#test()` to check if a string is an Dash address.
		@default false
		*/
		readonly exact?: boolean;
	}
}

/**
Returns a regex for matching Dash addresses.
@example
```
import dashRegex = require('dash-regex')
dashRegex().test('nodejsrocks XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh');
//=> true
```
*/
declare function dashRegex(options?: dashRegex.Options): RegExp;

export = dashRegex;
