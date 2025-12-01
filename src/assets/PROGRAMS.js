// 1. Reverse a string
// hello---->"olleh"
function reversString(str) {
  return [...str].reverse().join("");
}
console.log(reversString("hello"));

function reverseString2(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString2("hello"));

function reverseString3(str) {
  let revstr = "";
  for (let char of str) {
    revstr = char + revstr;
  }
  return revstr;
}
console.log(reverseString3("hello"));

// ---------------------------------------------
// 2. Check palindrome
function isPalindrome(str) {
  const revstr = str.split("").reverse().join("");
  return revstr === str;
}
console.log(isPalindrome("madam"));
// ---------------------------------------------
// 3. Find factorial using recursion
// 5 = 5 × 4 × 3 × 2 × 1 = 120
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(7));
// ---------------------------------------------
// 5. Find largest and smallest number in an array
function chckMaxMin(arr) {
  if (arr.length === 0) {
    return { min: null, max: null };
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { min, max };
}
console.log(chckMaxMin([3, 5, 1, 8, 0, -2, 7]));

function findMinMax(arr) {
  if (arr.length === 0) {
    return { min: null, max: null };
  }
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
}
console.log(findMinMax([4, 2, 9, 1, 7, -5]));
// ---------------------------------------------
// 6. Remove duplicates from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 6, 6, 7]));

console.log(removeDuplicates(["a", "b", "a", "c"]));

function removeDuplicates2(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates2([1, 2, 2, 3, 4, 5, 6, 6, 7]));

console.log(removeDuplicates2(["a", "b", "a", "c"]));

// ---------------------------------------------
// 7. Find missing number in an array
// ----------------------------------------------
// 8. Count occurrences of each character in a string
// "aaaabbbcca"{ a: 5, b: 3, c: 2, a: 1 } → { a: 5, b: 3, c: 2 }
function countCharOccurrences(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}
console.log(countCharOccurrences("aaaabbbcca"));

// ---------------------------------------------
// 10. Sort array without using sort()
// ---------------------------------------------
// 11. Implement custom map(), filter(), reduce()

// 1. Custom map()
Array.prototype.myMap = function(callback, thisArg) {
    const result = [];
    
    for (let i = 0; i < this.length; i++) {
        result.push(callback.call(thisArg, this[i], i, this));
    }
    
    return result;
};

// 2. Custom filter()
Array.prototype.myFilter = function(callback, thisArg) {
    const result = [];
    
    for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            result.push(this[i]);
        }
    }
    
    return result;
};

// 3. Custom reduce()
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    const startIndex = initialValue === undefined ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    
    return accumulator;
};
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.myMap(x => x * 2));

console.log(numbers.myFilter(x => x > 3));

console.log(numbers.myReduce((acc, curr) => acc + curr, 0));

console.log(numbers.myReduce((acc, curr) => acc * curr, 1));

// Real ones for comparison
console.log(numbers.map(x => x * 2));     // [2, 4, 6, 8, 10]
console.log(numbers.filter(x => x > 3));  // [4, 5]
console.log(numbers.reduce((a,b) => a+b, 0)); // 15
// ---------------------------------------------
// 12. Swap two variables without third variable
let a=10;
let b=20;
[a,b]=[b,a];
console.log("a "+a);
console.log("b "+b);

a=a*b;
b=a/b;
a=a/b;
console.log(a, b); 
// ---------------------------------------------
// 13. Check prime number
// Fun Fact: There are infinitely many prime numbers! The first 10 are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.
function isPrime(num){
    if(num<2)return false;
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }return true;
}
console.log(isPrime(4));   // true
// ---------------------------------------------
// Bonus: Print First 20 Prime Numbers
function getFirstnPrime(n){
    const prime=[];
    let num=2;
    while(prime.length<n){
        if(isPrime(num)) prime.push(num)
            num++;
    }
    return prime;
}
console.log(getFirstnPrime(2));
// ---------------------------------------------
// 14. Reverse words in a sentence
function reverseWords(sentence){
    return sentence.trim().split(/\s+/).reverse().join(' ');

}
console.log(reversString("gopal koli"));
// ---------------------------------------------
// 15. Find second largest number in array
function findSecondLargest(arr){
    let max=Math.max(...arr);
    let filtered=arr.filter(num=>num!==max);
    if(filtered.length===0)return -1;
    return Math.max(...filtered)
}
console.log(findSecondLargest([10,22,22,32,35])) 
// ---------------------------------------------

