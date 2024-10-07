$(document).ready(function() {
    var displayValue = '';
    var decimalFlag = "none";
    total = 0;
    pre_value = null;
    now_value = "0";
    calcFlag = "none"
    let calcdir = {
        "plus": " + ",
        "minus": " - ",
        "multi": " * ",
        "div": " / ",
    };

    $('.numberButton').click(function() {
        var number = $(this).text();
        / 0であればそのまま、それ以外なら後ろに数を足す / 
        if (now_value == null || now_value == '0') {
            if (number == "00") {
                number = 0;
            }
            now_value = number;
        } else {
            now_value += number;
        }
        /calcflgが０じゃなくてなければ表示をプラスにする/ 
        if (calcFlag != "none" && pre_value != null) {
            displayValue = pre_value + calcdir[calcFlag] + now_value;
        } else {
            displayValue = now_value;
        }

        / デバッグ用の確認 /
        console.log("displayValue", displayValue);
        console.log("now_value", now_value);
        // console.log("number", number);
        /*if (now_value == null || now_value == '0') {
            if (number == "00") {
                number = 0;
            }
            now_value = number;
        } else {
            now_value += number;
        }
        
        if (displayValue == '0' && now_value == '0') {
            displayValue = number;
        } else {
            displayValue += number;
        }
        console.log("---------------------------------");
        console.log("displayValue", displayValue);
        console.log("now_value", now_value);
        console.log("number", number);*/
        $('#display').text(displayValue);
    });

    $('#decimalPoint').click(function() {
        if (decimalFlag == "none") {
            if (now_value != null) {
                now_value += '.';
                displayValue += '.';
                $('#display').text(displayValue);
                decimalFlag = "flg";
                console.log(now_value);
            }
        }
    });

    $('#plusButton').click(function() {
        if (calcFlag == "none") {
            calcFlag = "plus";
            pre_value = now_value;
            now_value = null;
            displayValue = pre_value + ' + '
            decimalFlag = "none";
            $('#display').text(displayValue);
        }
    });

    $('#minusButton').click(function() {
        if (calcFlag == "none") {
            calcFlag = "minus";
            pre_value = now_value;
            now_value = null;
            displayValue = pre_value + ' - '
            decimalFlag = "none";
            $('#display').text(displayValue);
        }
    });

    $('#multiButton').click(function() {
        if (calcFlag == "none") {
            calcFlag = "multi";
            pre_value = now_value;
            now_value = null;
            displayValue = pre_value + ' * '
            decimalFlag = "none";
            $('#display').text(displayValue);
        }
    });

    $('#divButton').click(function() {
        if (calcFlag == "none") {
            calcFlag = "div";
            pre_value = now_value;
            now_value = null;
            displayValue = pre_value + ' / '
            decimalFlag = "none";
            $('#display').text(displayValue);
        }
    });

    $('#clearButton').click(function() {
        displayValue = '';
        decimalFlag = "none";
        total = 0;
        pre_value = null;
        now_value = "0";
        calcFlag = "none"
        $('#display').text(displayValue);
    })

    $('#calcButton').click(function() {
        if (calcFlag != "none") {
            if (pre_value != null && now_value != null) {
                if (calcFlag == "plus") {
                    displayValue = parseFloat(pre_value) + parseFloat(now_value);
                    now_value = displayValue;
                    pre_value = null;
                    calcFlag = "none"
                    $('#display').text(displayValue);
                } else if (calcFlag == "minus") {
                    displayValue = parseFloat(pre_value) - parseFloat(now_value);
                    now_value = displayValue;
                    pre_value = null;
                    calcFlag = "none"
                    $('#display').text(displayValue);
                } else if (calcFlag == "multi") {
                    displayValue = parseFloat(pre_value) * parseFloat(now_value);
                    now_value = displayValue;
                    pre_value = null;
                    calcFlag = "none"
                    $('#display').text(displayValue);
                } else if (calcFlag == "div") {
                    var temp = parseFloat(pre_value) / parseFloat(now_value);
                    displayValue = parseFloat(temp.toFixed(10));
                    now_value = displayValue;
                    pre_value = null;
                    calcFlag = "none"
                    $('#display').text(displayValue);
                }
            }
        }
    });
});