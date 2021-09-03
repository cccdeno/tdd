# tdd -- A Test Framework for Deno

## Import

```js
import { expect } from 'https://deno.land/x/tdd/mod.ts'
```

## Example

tdd_test.js

```ts
import * as T from 'https://deno.land/x/tdd/mod.ts'

Deno.test("test", () => {
  T.isNear(3.01, 3)
  T.isType([3], Object)
  T.isMember(3, [1,2,3,4])
})
```

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
running 1 test from file:///C:/ccc/course/sa/js/package/tdd/example/bdd_test.js
test expect ... ok (18ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (94ms)
```
