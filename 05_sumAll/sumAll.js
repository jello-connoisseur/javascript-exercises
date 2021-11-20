const sumAll = function(num1, num2) {
    let result = 0;
    let smallNum = 0;
    let bigNum = 0;

    if (typeof(num1 && num2) !== "number" || (num1 < 0 || num2 <0)){
        return "ERROR";
    }

    if (num1 > num2){
        bigNum = num1;
        smallNum = num2;
    } else if (num1 < num2){
        bigNum = num2;
        smallNum = num1;
    }




    for (i = smallNum; i <= bigNum; i++){
        result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
