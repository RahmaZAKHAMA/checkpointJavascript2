/*Reverse a String: Write a function that reverses a given string.*/
function ReverseString(str) {
  var strReverse = "";
  for (var i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
  }
  return strReverse;
}
/*Count Characters: Create a function that counts the number of characters in a string.*/
function CountCharacters(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}
/*Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence. */
function CapitalizeWords(sentences) {
  var newsentences = "";
  var tab = sentences.split(" ");
  for (var i in tab) {
    if (i == tab.length - 1)
      newsentences += tab[i][0].toUpperCase() + tab[i].slice(1);
    else newsentences += tab[i][0].toUpperCase() + tab[i].slice(1) + " ";
  }
  return newsentences;
}
/*Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.*/
function MaxArray(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function MinArray(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length - 1; i++) if (arr[i] < min) min = arr[i];
  return min;
}
/*Sum of Array: Create a function that calculates the sum of all elements in an array.*/
function Sum(array) {
  var sum = 0;
  for (var i in array) sum += array[i];
  return sum;
}
/*Filter Array: Implement a function that filters out elements from an array based on a given condition.*/
function FilterArray(array) {
  for (var i in array) if (array[i] % 3 == 0) array.splice(i, 1);
  return array;
}
/*Factorial: Write a function to calculate the factorial of a given number.*/
function Factorial(number) {
  var fact = number;
  for (var i = number - 1; i >= 1; i--) fact *= i;
  return fact;
}

/*Prime Number Check: Create a function to check if a number is prime or not.*/

function PrimeNumberCheck(number) {
  var isPrime = true;
  for (var i = 2; i <= number / 2; i++) {
    if (number % i == 0) isPrime = false;
  }
  return isPrime;
}
/*Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )*/
function FibonacciSequence(number) {
  var fibonacci = [0, 1];
  for (var i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}
