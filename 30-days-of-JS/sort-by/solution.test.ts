import { expect } from "chai";
import sortBy from "./solution";

describe('sortBy', () => { it('sortBy()',()=>{
  const arr=[{"x":1},{"x": 0},{"x": -1}]

  const func =(x) => x.x;

  const result=sortBy(arr,func);

  expect(result).to.deep.eq([{"x":-1},{"x":0},{"x":1}])
}) })