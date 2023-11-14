import { expect } from "chai";
import ArrayWrapper from "./solution";

describe('ArrayWrapper', () => { it('ArrayWrapper()',()=>{
  const obj1 = new ArrayWrapper([1,2]);
  const obj2 = new ArrayWrapper([3,4]);

  const result = String(obj1);
  const result2 = String(obj2);

  expect(result).to.eql("[1,2]");
  expect(result2).to.eql("[3,4]");

}) })