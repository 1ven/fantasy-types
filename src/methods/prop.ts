import { PlainObject } from "../built-in/Object";
import curry from "./curry";

export type F = {
  <T, O extends PlainObject<T>, K extends keyof O>(key: string, obj: O): O[K];
  (key: string): <T, O extends PlainObject<T>, K extends keyof O>(
    obj: O
  ) => O[K];
};

/**
 * Returns value of given object by key.
 * 
 * @param key Key of object.
 * @param obj Input object.
 *
 * @example
 * prop('name', { name: "John" }) // "John"
 * prop('age', { name: "John" }) // "undefined"
 */
export default <F>curry((key, obj) => obj[key]);
