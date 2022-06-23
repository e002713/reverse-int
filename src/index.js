module.exports = function reverse (n) {
    const numberToString = n.toString();
    let reverseStr = '';

    for (let i = numberToString.length - 1; i >= 0; i--) {
        reverseStr += numberToString[i];
    }

    return parseInt(reverseStr);
}
