const { lessThan } =require('./less-than')

describe("less than rule",()=>{

    it("lessThan-grather value-returns true",()=>{
        expect(lessThan(10,5)).toBe(true);
    });

})