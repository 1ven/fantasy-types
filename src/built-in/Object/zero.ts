export default function empty(this: ObjectConstructor) {
  return new this({}) as {};
}
