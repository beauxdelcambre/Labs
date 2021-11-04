const encode = string => {
    let key1 = "abcdefghijklmnopqrstuvwxyz";
    let key2 = "wvutsrqponmlkjihgfedcbazyx";
    let codedString = string.split('').map(elem => key2[key1.indexOf(elem)]);
    return codedString.join('');
}
const decode = string =>{
    let key1 = "wvutsrqponmlkjihgfedcbazyx";
    let key2 = "abcdefghijklmnopqrstuvwxyz";
    let codedString = string.split('').map(elem => key2[key1.indexOf(elem)]);
    return codedString.join('');
}

console.log(encode("I love cryptography!"))