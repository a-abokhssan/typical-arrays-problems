exports.min = function min(array) {
    if (!arguments.length) return 0;
    if (array.length === 0) return 0;
    return array.reduce((a, b) => (a < b ? a : b));
};

exports.max = function max(array) {
    if (!arguments.length) return 0;
    if (array.length === 0) return 0;
    return array.reduce((a, b) => (a > b ? a : b));
};

exports.avg = function avg(array) {
    if (!arguments.length) return 0;
    if (array.length === 0) return 0;
    return array.reduce((a, b) => a + b, 0) / array.length;
};
