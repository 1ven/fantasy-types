export default function<T>(val: T) {
  return () => val;
}
