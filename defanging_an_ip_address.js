/**
 * 1108. Defanging an IP Address
 * @namespace LEETCODE
 * @link https://leetcode.com/problems/defanging-an-ip-address/
 */

/**
    Input: address = "1.1.1.1"
    Output: "1[.]1[.]1[.]1"
    Input: address = "255.100.50.0"
    Output: "255[.]100[.]50[.]0"
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let result = ''
    let template = '[.]'

    for (let letter in address) {
        if (address[letter] === '.') {
            result += template
        } else {
            result += address[letter]
        }
    }
    return result
};

console.log(defangIPaddr('1.1.1.1'))
