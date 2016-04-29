describe('lcd-digits', function () {
    var input;
    var LCDTotalDigits;

    beforeEach(function () {
        input = 613;
        LCDTotalDigits = loadLCDTotalDigits();
    });

    describle('buildLCDArray', function () {

        it('should print correct text', function () {
            var LCDArray = [6, 1, 3];
            expect(buildLCDArray(input)).toEqual(LCDArray);
        });
    });

    describle('showLCDDigits', function () {
        it('should print correct text', function () {
            var expectDigits = ['._. ... ._.',
                                '|_. ..| ._|',
                                '|_| ..| ._|'];
            expect(showLC0DDigits(LCDArray, LCDTotalDigits)).toEqual(expectDigits);
        });

    });

    describle('should print correct text', function () {

        it('should print correct text', function () {
            spyOn(console, 'log');

            printLCDDigits(input);

            var print =
                '._.' + '...' + '._.' + '\n' +
                '|_.' + '..|' + '._|' + '\n' +
                '|_|' + '..|' + '._|';

            expect(console.log).toHavaBeenCalledWith(print);
        });
    });
});
