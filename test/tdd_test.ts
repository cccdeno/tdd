import * as T from '../mod.ts'

Deno.test("test", () => {
  T.ok(2>1)
  T.isNear(3.01, 3)
  T.isType([3], Object)
  T.isMember(3, [1,2,3,4])
})
