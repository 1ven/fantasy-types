export default function(this: Function, other: Function) {
  return <T>(x: T) => other(this(x));
}
