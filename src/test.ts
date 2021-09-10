import { assertEquals, equal, assert } from "https://deno.land/std/testing/asserts.ts";
export * from "https://deno.land/std/testing/asserts.ts";

export var isEq = equal

export function isNear(a: number, b: number, delta: number = 0.001): boolean {
  return (Math.abs(a - b) < delta)
}

export function getType(o: any): string {
  let t = typeof o
  if (t !== 'object') return t
  return o.constructor.name
}

export function isType(o: any, type: any): boolean {
  if (typeof type === 'string' && getType(o).toLowerCase() === type.toLowerCase()) return true
  if (typeof o === 'object' && o instanceof type) return true
  return false
}

export function isMember(o: any, set: any): boolean {
  if (typeof set === 'string') return set.indexOf(o) >= 0
  if (Array.isArray(set)) return set.indexOf(o) >= 0
  if (set instanceof Set) return set.has(o)
  if (set instanceof Map) return set.get(o) != null
  if (typeof o == 'string') return set[o] != null
  return false
}

export function isContain(set: any, o: any): boolean {
  return isMember(o, set)
}

export function ok(cond: boolean) {
  return assert(cond);
}

export var eq = assertEquals

export function near(a: number, b: number) {
  ok(isNear(a, b))
}

export function type(o: any, type: any) {
  ok(isType(o, type))
}

export function member(o: any, set: any) {
  ok(isMember(o, set))
}

export function contain(set: any, o: any) {
  ok(isContain(o, set))
}

export function isFail(f:(...args:any)=>any, args:any[]) {
  try {
    f(args);
    return false
  } catch (e) {
    return true
  }
}

export function fail(f:()=>any, ...args:any[]) {
  if (!isFail(f, args)) throw Error(args.toString())
}

