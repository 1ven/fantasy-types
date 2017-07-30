import { PlainObject } from "../built-in/Object";
import curry from "./curry";

export type PropFunction = {
  <O, K extends keyof O>(key: K, obj: O): O[K];
  <K extends string>(key: K): <V, O extends Record<K, V>>(obj: O) => O[K];
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
export default <PropFunction>curry((key, obj) => obj[key]);
