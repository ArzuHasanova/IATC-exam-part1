function anagrams(str1, str2) {
    return unifyString(str1) === unifyString(str2);
  }
  
  function unifyString(str) {
    return str.toLowerCase().split('').sort().join('');
  }

