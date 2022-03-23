var isNumber = function(s) {
    if (s === "Infinity" || s === "-Infinity" || s === "+Infinity") {
        return false
    }
    if (Number.isNaN(Number(s))) {
        return false

    }

    return true
};


console.log(isNumber('.'));