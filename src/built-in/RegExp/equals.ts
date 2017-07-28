export default (a: RegExp, b: RegExp) =>
  a.source === b.source &&
  a.global === b.global &&
  a.ignoreCase === b.ignoreCase &&
  a.multiline === b.multiline &&
  a.sticky === b.sticky &&
  a.unicode === b.unicode;
