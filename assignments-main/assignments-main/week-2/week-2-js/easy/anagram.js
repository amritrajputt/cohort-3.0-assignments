/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  const arr1 = Array.from(str1).sort()
  const arr2 = Array.from(str2).sort()
  if(arr1.join() == arr2.join()) return true
  return false
}

const result = isAnagram("sms","mss")
console.log(result);

module.exports = isAnagram;
