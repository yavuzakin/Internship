function palindrome(str) {
    let newStr = [...str.toLowerCase().split(/[\s.,(_)-]/).join("")].toString();
    let arr = [...str.toLowerCase().split(/[\s.,(_)-]/).join("")].reverse().toString();
    return newStr === arr ? true : false;
}
palindrome("eye");