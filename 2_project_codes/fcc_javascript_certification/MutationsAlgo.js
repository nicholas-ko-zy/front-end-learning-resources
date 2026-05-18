function mutation (array) {
    let char_list = array[0].toLowerCase().split("");
    let string_2 = array[1].toLowerCase();
    let result = true;
    for (const char of string_2) {
        if (!char_list.includes(char)) {
            result = false
            break
        }
    }
    return result
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));