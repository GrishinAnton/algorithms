/**
    Input: "Hello"
    Output: "hello"
    Input: "here"
    Output: "here"
    Input: "LOVELY"
    Output: "lovely"
    65-90 - A-Z
    97-122 a-z
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    let result = ''
    const isLetterCapital = current => current >= 65 && current <= 90

    for (let i = 0; i < str.length; i++) {
        let current = str.charCodeAt(i)
        if (isLetterCapital(current)) {
            result += String.fromCharCode(current + 32)
            continue
        }
        result += str[i]
    }
    return result
};

console.log(toLowerCase("Hello"))