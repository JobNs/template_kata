const templateFunction = require('../src/template');


describe('This test suites tests...', () => {
    describe('First describe:', () => {
        it('- First test', () => {
            expect(templateFunction(1)).toEqual(1);
        });
        it('- Second test', () => {
            expect(templateFunction(2)).toEqual(2);
        });
    });
});