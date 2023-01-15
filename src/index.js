module.exports = function reverse(n) {
    n = Math.abs(n);
    let string = String(n);
    let arr = [];
    arr = Array.from(string);
    console.log(arr);
    return +arr.map
        .call(string, (x) => x)
        .reverse()
        .join("");
};
