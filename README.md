# tdd -- A Test Framework for Deno

## Import

```js
import { expect } from 'https://deno.land/x/tdd/mod.ts'
```

## Example

bdd_test.js

```js
import { expect } from 'https://deno.land/x/tdd/mod.ts'

Deno.test("expect", () => {
  expect(3).equal(3)
  expect(3).not.equal(4)
  expect('hello world!').contain('world')
  expect(3).is.a('number')
  expect([1,2,3]).is.a(Array)
})

```

## Test

```
$ deno test bdd_test.js
running 1 test from file:///C:/ccc/course/sa/js/package/user/bdd_test.js
test expect ... ok (21ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (80ms)
```
