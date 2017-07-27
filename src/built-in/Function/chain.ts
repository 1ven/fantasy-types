import { curry } from "../../methods";

export default curry((f: <T>(x: T) => Function, func: Function) => <T>(y: T) =>
  f(func(y))(y)
);
