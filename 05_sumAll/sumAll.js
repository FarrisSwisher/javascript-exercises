const sumAll = function(num1, num2) {
    let sum = 0;
    let lowNum, highNum;

    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number"){
        return 'ERROR';
    }

    if (num1 > num2){
        lowNum = num2;
        highNum = num1;
    } else {
        lowNum = num1;
        highNum = num2;
    }

    for (let i = lowNum; i <= highNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
