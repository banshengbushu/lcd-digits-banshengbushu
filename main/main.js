function printLCDDigits(input) {
    var LCDArray = buildLCDArray(input);
    var expectPrint = showLCDDigits(LCDArray);
    console.log(expectPrint);
}

function buildLCDArray(input) {

    return input.toString().split('');
}

function showLCDDigits(LCDArray) {
    var LCDTotalDigits = loadLCDTotalDigits();

    for (var i = 0; i < LCDArray.length; i++) {
        var expectDigits = "";

        expectDigits += LCDTotalDigits[LCDArray[i]][0] + '\n' +
                        LCDTotalDigits[LCDArray[i]][1] + '\n' +
                        LCDTotalDigits[LCDArray[i]][2];
    }
    return expectDigits;
}