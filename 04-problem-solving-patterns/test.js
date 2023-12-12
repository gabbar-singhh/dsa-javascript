// algorithm for checking if the provided string is a anagram of another. (FREQUENCY COUNTER ALGO)

function validAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for (const char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
    for (const char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }
    
    for (const key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    
    return true;
}

console.log(validAnagrams("anagram", "nagaram"));