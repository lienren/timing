# timing-simple

timing simple plug-in

[![npm](https://img.shields.io/npm/v/timing-simple.svg)](https://www.npmjs.com/package/timing-simple)
[![npm](https://img.shields.io/badge/license-MIT-blue.svg)](https://www.npmjs.com/package/timing-simple)

this is a timing simple plug-in

Github: [https://github.com/lienren/timing](https://github.com/lienren/timing)

# Installation

```bash
$ npm install timing-simple
```

# Examples

Before running the examples ensure you have [timing-simple](https://www.npmjs.com/package/timing-simple) installed and enabled at the top of your script:

```bash
const timing = require('timing-simple');
```

## Initialization & Run

```bash
let t = timing()
  .init()
  .run((count, time, unixtime) => {
    console.log('count:%s,time:%s,unixtime:%s', count, time, unixtime);
    return true;
  });
```

> Default run frequency is 1 / sec, can be modified, see to Other Initialization

## Stop

```bash
t.stop();
```

## Run again

```bash
t.run((count, time, unixtime) => {
  console.log('count:%s,time:%s,unixtime:%s', count, time, unixtime);
  return true;
});
```

> ### Return parameter
>
> count: run times
>
> time: now time, format: YYYY-MM-DD HH:mm:ss.SSS, for example: 2018-01-26 06:06:06.666
>
> unixtime: now Unix time stamp

## Other Initialization

```bash
let t = timing()
    .init(2000)
    ...
```

# License

MIT - see LICENSE.md
