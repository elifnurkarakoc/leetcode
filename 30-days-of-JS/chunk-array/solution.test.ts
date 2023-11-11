import { expect } from "chai";
import chunk from "./solution";


describe('chunk', () => { it('chunk()',()=>{
  const arr = [1,2,3,4,5];
  const size = 1;

  const result = chunk(arr,size);

  expect(result).to.deep.equal([ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ])
}) })