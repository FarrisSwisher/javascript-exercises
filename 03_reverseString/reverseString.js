const reverseString = function(string) {
    const chars = [];
    let revString = '';

    for (let i = 0; i<string.length; i++){
        chars[i] = string.charAt(i);
    }

    for (let i = 0; i<string.length; i++){
        revString += chars[chars.length-1-i];
    }

    return revString;
};

// Do not edit below this line
module.exports = reverseString;
