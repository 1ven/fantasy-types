/**
 * Makes given function curried.
 * Returned function could accept various arguments.
 * 
 * @param fn Function to curry.
 *
 * @example
 * g(1, 2, 3) // 123
 * g(1)(2, 3) // 123
 * g(1, 2)(3) // 123
 * g(1)(2)(3) // 123
 */
export default function curry(fn: Function) {
  return (...args: any[]) =>
    args.length === fn.length ? fn(...args) : curry(fn.bind(void 0, ...args));
}
