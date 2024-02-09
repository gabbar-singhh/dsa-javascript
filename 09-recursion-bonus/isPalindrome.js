function isPalindrome(str) {
    str = str.toLowerCase();
    if (str.length === 0) return true;
    if (str.length === 1) return true;

    if (str[0] === str[str.length - 1]) {
        str = str.slice(0,-1); // removing last char
        str = str.slice(1) // removing first char
        return isPalindrome(str);
    } else {
        return false;
    }
}

console.log(isPalindrome('yu'))
console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false