// TODO: Modify this function
function generateShortCode(storeId, transactionId) {
    // Logic goes here
  storeId=storeId+10000;
  transactionId=transactionId+10000;
  var scode = String.fromCharCode(storeId).toString();
  var tcode = String.fromCharCode(transactionId).toString();
  var code  = scode+tcode;

    return code;
}          

// TODO: Modify this function
function decodeShortCode(shortCode) {
    // Logic goes here
  
    var sId= shortCode.charCodeAt(0);
  sId=sId-10000;
  var tId = shortCode.charCodeAt(1);
    tId=tId-10000;
    return {
        storeId: parseInt(sId), // store id goes here,
        shopDate: new Date(), // the date the customer shopped,
        transactionId: parseInt(tId), // transaction id goes here
    };
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {

    var storeIds = [175, 42, 0, 9]
    var transactionIds = [9675, 23, 123, 7]

    storeIds.forEach(function (storeId) {
        transactionIds.forEach(function (transactionId) {
            var shortCode = generateShortCode(storeId, transactionId);
            var decodeResult = decodeShortCode(shortCode);
            $("#test-results").append("<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>");
            AddTestResult("Length <= 9", shortCode.length <= 9);
            AddTestResult("Is String", (typeof shortCode === 'string'));
            AddTestResult("Is Today", IsToday(decodeResult.shopDate));
            AddTestResult("StoreId", storeId === decodeResult.storeId);
            AddTestResult("TransId", transactionId === decodeResult.transactionId);
        })
    })
}

function IsToday(inputDate) {
    // Get today's date
    var todaysDate = new Date();
    // call setHours to take the time out of the comparison
    return (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0));
}

function AddTestResult(testName, testResult) {
    var div = $("#test-results").append("<div class='" + (testResult ? "pass" : "fail") + "'><span class='tname'>- " + testName + "</span><span class='tresult'>" + testResult + "</span></div>");
}
