const removeFromArray = function() {
    let args = [...arguments];

    for (let i = 0; i<args[0].length; i++){
        for (let k = 1; k<args.length; k++){
            if (args[0][i] === args[k]){
            args[0].splice(i, 1);
            i--;
            }
        }
    }

    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
