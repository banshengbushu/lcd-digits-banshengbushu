describe('lcd-digits', function () {
    var input;
    input = 613;

    describe('intergration testing', function () {

        it('should print correct text', function () {
            spyOn(console, 'log');

            printLCDDigits(input);

            var expectText = '\n' + '._. ... ._. ' +
                             '\n' + '|_. ..| ._| ' +
                             '\n' + '|_| ..| ._| ';

            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });

    describe('unit testing', function () {

        describe('test buildLCDArray', function () {
            var input;
            input = 613;

            it('Return correct LCDArray', function () {
                var LCDArray = ['6', '1', '3'];

                expect(buildLCDArray(input)).toEqual(LCDArray);
            });
        });

        describe('test showLCDDigits', function () {
            var LCDArray = ['6', '1', '3'];
            var LCDTotalDigits = loadLCDTotalDigits();

            it('Return correct expectDigits', function () {

                expectDigits = '\n' + '._. ... ._. ' +
                               '\n' + '|_. ..| ._| ' +
                               '\n' + '|_| ..| ._| ';

                expect(showLCDDigits(LCDArray, LCDTotalDigits)).toEqual(expectDigits);
            });
        });
    });
});
