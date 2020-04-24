/**
    Input: address = "1.1.1.1"
    Output: "1[.]1[.]1[.]1"
    Input: address = "255.100.50.0"
    Output: "255[.]100[.]50[.]0"
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let s = address.replace(/\./gi, '[.]')
    return s
};

console.log(defangIPaddr('1.1.1.1'))