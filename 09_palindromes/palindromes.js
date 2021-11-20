const palindromes = function (str) {

    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let result = str.replace(regex, '');
    result = result.replace(/\s/g, '');
    result = result.toLowerCase();



    for(let i = 0 ; i < (result.length-1)/2; i++){
        if (result[i] === result[result.length-1-i]){
            return true;
        }
        else return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
