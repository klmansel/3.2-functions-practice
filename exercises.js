(function(){
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
  function max(number1, number2){
      return Math.max(number1,number2);
  }
  console.log(max(21,3));
  console.log(max(13,134));


  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
  function maxOfThree(num1, num2, num3){
     return Math.max(num1,num2,num3);
   }
  console.log(maxOfThree(12, 9, 1));
  console.log(maxOfThree(12,19,4));
  console.log(maxOfThree(12,19,39));

  // ---------------------
  // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

function isVowel(char){
  if (char ==='a'||char ==='e'||char ==='i'||char ==='o'||char ==='u') {
    return true;
  }
  else if (char === 'y'){
    return "Sometimes!";
  }
  else {
    return false;
  }
}
console.log(isVowel('a'));
console.log(isVowel('r'));
console.log(isVowel('y'));


// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// --


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
function reverse(myWord) {
  var o = '';
  for (var i = myWord.length - 1; i >= 0; i--)
    o += myWord[i];
  return o;
}

console.log(reverse('kara'));
console.log(reverse('engineer'));

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
function findLongestWord(words){
  
}
}());
