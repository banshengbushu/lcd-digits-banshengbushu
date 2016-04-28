describe('lcd-digits', function () {

    describe('integration testing', function () {
    var input;
    var LCDTotalDigits;

    beforeEach(function () {
        input = 613;
        LCDTotalDigits = loadLCDTotalDigits();
    });

        it('should print correct text', function () {
            spyOn(console, 'log');

            printLCDDigits(input);

            var expectDigits =
                '._.' + '...' + '._.' + '\n' +
                '|_.' + '..|' + '._|' + '\n' +
                '|_|' + '..|' + '._|';

            expect(console.log).toHavaBeenCalledWith(expectDigits);
        });

    });
});
