function repeatStringNumTimes(string, number) {
    let strings = "";
    if (number > 0) {
        for (let i = 0; i < number; i++) {
            strings += string
        }
    }
    return strings
}

console.log(repeatStringNumTimes("*", 3))