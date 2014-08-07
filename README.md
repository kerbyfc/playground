# Playground



## New tasks
 1. Create the folder `/tasks/funkymonkey/` (required files: `funkymonkey.js`, `funkymonkey.html` and `funkymonkey.tests.js`)
 2. Add an entry to `/tasks/tasks.json`
 3. Send pull request

---


#### funkymonkey.js
```js
// Welcome text / Task description

var funkymonkey = function () {
	// ...
};


console.log(funkymonkey());
```


#### funkymonkey.html
HTML coding


#### funkymonkey.tests.js
Unit tests
```js
({
	"#1.equal": function () {
		return ["..", funkymonkey()]; // equal
	},

	"#2.ok": function () {
		return ".." === funkymonkey(); // ok
	},

	"#3.promise": function () {
		return new Promise(resolve, reject) {
			resolve(["..", funkymonkey()]); // equal
		});
	}
})
```
