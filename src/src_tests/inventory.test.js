
describe("Basic test for CircleCI testing", () => {



    test("that the meaning of life, the universe, and everything is 42", () => {
        
   
        const theAnswer = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(42);
            }, 2.3652); // *10^17ms ~ 7.5 million years
        }); 

        return expect(theAnswer).resolves.toBe(42);

    });
});