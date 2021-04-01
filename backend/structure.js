function matrixBuilder(m, n) {
    return Array.from({
      length: m
    }, () => new Array(n).fill(0));
};

module.exports.matrixBuilder = matrixBuilder;