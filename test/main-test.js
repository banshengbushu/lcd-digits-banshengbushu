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

        describe('test generateLCDDigits', function () {
            var LCDArray = ['6', '1', '3'];
            var LCDTotalDigits = loadLCDTotalDigits();

            it('Return correct expectDigits', function () {

                expectDigits = [
                    {key: "6", value: [["._."], ["|_."], ["|_|"]]},
                    {key: "1", value: [["..."], ["..|"], ["..|"]]},
                    {key: "3", value: [["._."], ["._|"], ["._|"]]}
                ];

                expect(generateLCDDigits(LCDArray, LCDTotalDigits)).toEqual(expectDigits);
            });
        });
    });
});
