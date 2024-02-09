function naiveStringSearch(str, shortStr) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (shortStr[j] !== str[j + i]) break;
      if (j === shortStr.length - 1) count++;
    }
  }

  return count;
}

console.log(naiveStringSearch("lorie loled", "lol"));
