# js-deep-freeze

A tiny helper that recursively applies `Object.freeze` to an object and its nested objects.

**Note:** This repository is archived and read-only.

Package `@ralvarezdev/js-deep-freeze` (0.1.1, ES module, no dependencies).

## Installation

npm publication was not verified; installing from GitHub works regardless:

```bash
npm install github:ralvarezdev/js-deep-freeze
```

## Usage

```js
import DeepFreeze from "@ralvarezdev/js-deep-freeze";

const config = DeepFreeze({ db: { host: "localhost" }, debug: false });

config.db.host = "other"; // ignored (throws in strict mode)
```

`DeepFreeze(obj)` is the default export of `index.js`. It iterates the object's own enumerable keys, recurses into values whose `typeof` is `'object'` and that are not yet frozen, then returns `Object.freeze(obj)`. Functions are not frozen recursively.

There are no tests.

## License

GNU General Public License v3.0. `package.json` declares `GPL-3.0-only`, matching the `LICENSE` file.
