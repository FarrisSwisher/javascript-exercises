const palindromes = function (string) {
    const regex = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    string = string.replace(regex, '');
    string = string.toLowerCase();
    if (string === string.split("").reverse().join("")) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
