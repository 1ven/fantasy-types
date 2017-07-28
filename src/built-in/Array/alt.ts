export default <T>(a: T[], b: T[]) => Array.prototype.concat.apply(b, [a]);
