function printLCDDigits(input) {
    var LCDTotalDigits = loadLCDTotalDigits();
    var LCDArray = buildLCDArray(input);
    var expectPrint = generateLCDDigits(LCDArray, LCDTotalDigits);
    print(expectPrint);
}

function buildLCDArray(input) {

    return input.toString().split('');
}

function generateLCDDigits(LCDArray, LCDTotalDigits) {
    var expectLCDDigits = [];
    for (var i = 0; i < LCDArray.length; i++) {
        var LCDDigits = findSameDigits(LCDArray[i], LCDTotalDigits);
        expectLCDDigits.push(LCDDigits);
    }
    return expectLCDDigits;
}

function findSameDigits(LCDArray, LCDTotalDigits) {
    var sameDigits;

    for (var j = 0; j < LCDTotalDigits.length; j++) {
        if (LCDTotalDigits[j].key === LCDArray) {
            sameDigits = LCDTotalDigits[j];
        }
    }

    return sameDigits;
}

function print(expectDigits) {
    var firstRow = '\n';
    var secondRow = '\n';
    var thirdRow = '\n';
    for (var i = 0; i < expectDigits.length; i++) {
        firstRow += expectDigits[i].value[0] + ' ';
        secondRow += expectDigits[i].value[1] + ' ';
        thirdRow += expectDigits[i].value[2] + ' ';
    }

    console.log(firstRow + secondRow + thirdRow);
}