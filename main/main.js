function printLCDDigits(input) {
    var LCDTotalDigits = loadLCDTotalDigits();
    var LCDArray = buildLCDArray(input);
    var expectPrint = showLCDDigits(LCDArray, LCDTotalDigits);
    console.log(expectPrint);
}

function buildLCDArray(input) {

    return parseInt(input.toString().split(''));
}

function showLCDDigits(LCDArray,LCDTotalDigits) {
  
    for (var i = 0; i < LCDArray.length; i++) {
		var expectDigits = [];
			expectDigits[i] = LCDTotalDigits[i][LCDArray[0]]+ ' '+
							  LCDTotalDigits[i][LCDArray[1]] + ' ' +
						      LCDTotalDigits[i][LCDArray[2]];
		}
	
    return expectDigits;
}