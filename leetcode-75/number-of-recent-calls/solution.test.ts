import { expect } from "chai";
import RecentCounter from "./solution";

describe('RecentCounter', () => { 

  it('RecentCounter()',()=> {
    const t=1;
    const obj = new RecentCounter()
    const param_1 = obj.ping(t)
    expect(param_1).to.eq(t)
   })
})