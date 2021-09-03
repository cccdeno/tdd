import * as T from 'https://deno.land/x/tdd/mod.ts'

Deno.test("TDD", () => {
  T.ok(2>1)
  T.isNear(3.01, 3)
  T.isType([3], Object)
  T.isMember(3, [1,2,3,4])
})
