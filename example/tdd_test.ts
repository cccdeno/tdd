import * as T from 'https://deno.land/x/tdd/mod.ts'

Deno.test("TDD", () => {
  T.ok(2>1)
  T.near(3.0000001, 3)
  T.type([3], Object)
  T.member(3, [1,2,3,4])
  T.fail(()=>{throw Error()})
})
