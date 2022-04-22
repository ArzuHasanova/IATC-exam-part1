function filterNumbers(array){
    var numbers = []
    var strings = []
    array.forEach((item) => {

        if (Number.isInteger(item)) {

            numbers.push(item)
        } else {

            strings.push(item)
        }
    })
    return numbers.concat(strings)
}
