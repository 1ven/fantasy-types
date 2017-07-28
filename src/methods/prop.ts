import { PlainObject } from "../built-in/Object";

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
export default <T>(key: keyof typeof obj, obj: PlainObject<T>) => obj[key];
