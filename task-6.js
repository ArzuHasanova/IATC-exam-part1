function complete (array, n) {
    var missing = []
    for(var i = 1; i<= n; i++) {

        if (!array.includes(i)) {
            missing.push(i)
        }
    }

    return missing
} 
