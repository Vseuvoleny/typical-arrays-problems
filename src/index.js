exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    }
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        return max;
    }
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total = total + array[i];
        }
        return total / array.length;
    }
};
