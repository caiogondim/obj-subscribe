# obj-subscribe

## Install

```bash
npm install --save obj-subscribe
```

## Usage

```js
const objSubscribe = require('obj-subscribe')

function callback(obj) {
  // Callback code
}

const obj = objSubscribe({
  a: 1,
  b: 2
}, callback)

obj.a = 3 // Callback will be executed
```

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
