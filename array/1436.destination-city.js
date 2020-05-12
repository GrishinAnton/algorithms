/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let output = {}
    let input = {}

    for (let i = 0; i < paths.length; i++) {
        let [o, inp] = paths[i]
        output[o] = 1
        input[inp] = 1
    }

    for (let out in input) {
        if (input[out] !== output[out]) {
            return out
        }
    }
};

// console.log(destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]));
// console.log(destCity([["B", "C"], ["D", "B"], ["C", "A"]]))
// console.log(destCity([["A", "Z"]]))
