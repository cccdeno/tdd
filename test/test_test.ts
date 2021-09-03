import * as T from '../src/test.ts'

Deno.test("test", () => {
  T.isNear(3.01, 3)
  T.isType([3], Object)
  T.isMember(3, [1,2,3,4])
})
