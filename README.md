# tdd -- A Test Framework for Deno

## Import

```js
import { expect } from 'https://deno.land/x/tdd/mod.ts'
```

## Example

tdd_test.js

```ts
import * as T from 'https://deno.land/x/tdd/mod.ts'

Deno.test("TDD", () => {
  T.ok(2>1)
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
$ deno test tdd_test.ts
running 1 test from file:///C:/ccc/code/deno/my/package/tdd/example/tdd_test.ts
test TDD ... ok (14ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (89ms)


$ deno test bdd_test.ts
running 1 test from file:///C:/ccc/code/deno/my/package/tdd/example/bdd_test.ts
test BDD ... ok (9ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (75ms)
```
