export default function(this: Function, f: <T>(x: T) => Function) {
  return <T>(y: T) => this(f(y));
}
