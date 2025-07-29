
/* var filter = function(arr, fn) {
    const returnedArray = [];

    arr.filter((el, i) => {
        if(fn(el, i)){
returnedArray.push(el)
        }  
    });
  
 return returnedArray;
};

const result = filter([-2,-1,0,1,2], function(n) {
   return n + 1; 
});
console.log(result);  */


// 2626. Array Reduce Transformation
/* var reduce = function(nums, fn, init) {
    let res = init;
    
        for(let i = 0; i < nums.length; i++){
            res =  fn(res, nums[i]);
        }
    return res;
};

const result = reduce([1,2,3], function sum(accum, curr)
 { 
    return accum + curr;
 },2);
console.log(result);  */

// 2629. Function Composition

/* var compose = function (functions) {

    return function (x) {

        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    }
};
const fn = compose([])
fn(4);  */// 9

// 2703. Return Length of Arguments Passed

/* var argumentsLength = function(...args) {
let count = args.toString().split(',').length;
return count;
};

argumentsLength(53,535,3,214,24,25,6,2,[3,2]); // 3 */

// 2666. Allow One Function Call

/* var once = function(fn) {
    let flag = false;
    return function(...args){
        if(!flag){
            flag = true;
            return fn(...args);
            
        }
        console.log('It can not be run because it has been run');
    }
};
const runOnce = once((a,b) => a + b);
runOnce(2,3);
runOnce(2,3); */

// 2623. Memoize

/* function memoize(fn) {
    let cache = {};
    return function(...args) {
       const key = JSON.stringify(args);
       if(cache.hasOwnProperty(key)){
        console.log("Fetching from cache...");
        return cache[key];
       }else{
        console.log("Calculating and caching...");
        const result = fn(...args);
        cache[key] = result;
        return result;
       }
    };
}

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 3)); 
console.log(memoizedSum(2, 3)); 
console.log(memoizedSum(3, 2));  */

/* function smallestMult(n) {
 let primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  let result = 1;

for (let i = 0; i < primes.length; i++) {
   let p = primes[i];
  let maxPower = Math.floor(Math.log(n) / Math.log(p));
  result *= Math.pow(p, maxPower);
}
 return result;

}
smallestMult(20); // 2,3,5,7,11,13,17,19
 */


// Problem 6: Sum square difference freecodecamp 

/* function sumSquareDifference(n) {
  const squareofInd = [];
let sumofAlln = 0;
for(let i = 1; i <= n; i++){
squareofInd.push(i*i);
}
for(let i = 1; i <= n; i++){
sumofAlln += i;
}
const sumofInd = squareofInd.reduce((acc,curr) => {
  return acc + curr;
},0)
  return Math.pow(sumofAlln,2) - sumofInd;
}

sumSquareDifference(10); */

// Problem 7: 10001st prime

// Problem 7: 10001st prime


/* 
const isPrime = (num) => {
  let prime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
function nthPrime(n) {
  let num = 2;
  let count = 0;

  while (true) {
    if (isPrime(num)) {
      count++;
      if (count === n) return num;
    }
    num++;
  }
}

nthPrime(6); 2, 3, 5, 7, 11, 13
 */

// Problem 8: Largest product in a series

/* function largestProductinaSeries(n) {

let maxProduct = 0;
  let thousandDigits = [7, 3, 1, 6, 7, 1, 7, 6, 5, 3, 1, 3, 3, 0, 6, 2, 4, 9, 1, 9, 2, 2, 5, 1, 1, 9, 6, 7, 4, 4, 2, 6, 5, 7, 4, 7, 4, 2, 3, 5, 5, 3, 4, 9, 1, 9, 4, 9, 3, 4, 9, 6, 9, 8, 3, 5, 2, 0, 3, 1, 2, 7, 7, 4, 5, 0, 6, 3, 2, 6, 2, 3, 9, 5, 7, 8, 3, 1, 8, 0, 1, 6, 9, 8, 4, 8, 0, 1, 8, 6, 9, 4, 7, 8, 8, 5, 1, 8, 4, 3, 8, 5, 8, 6, 1, 5, 6, 0, 7, 8, 9, 1, 1, 2, 9, 4, 9, 4, 9, 5, 4, 5, 9, 5, 0, 1, 7, 3, 7, 9, 5, 8, 3, 3, 1, 9, 5, 2, 8, 5, 3, 2, 0, 8, 8, 0, 5, 5, 1, 1, 1, 2, 5, 4, 0, 6, 9, 8, 7, 4, 7, 1, 5, 8, 5, 2, 3, 8, 6, 3, 0, 5, 0, 7, 1, 5, 6, 9, 3, 2, 9, 0, 9, 6, 3, 2, 9, 5, 2, 2, 7, 4, 4, 3, 0, 4, 3, 5, 5, 7, 6, 6, 8, 9, 6, 6, 4, 8, 9, 5, 0, 4, 4, 5, 2, 4, 4, 5, 2, 3, 1, 6, 1, 7, 3, 1, 8, 5, 6, 4, 0, 3, 0, 9, 8, 7, 1, 1, 1, 2, 1, 7, 2, 2, 3, 8, 3, 1, 1, 3, 6, 2, 2, 2, 9, 8, 9, 3, 4, 2, 3, 3, 8, 0, 3, 0, 8, 1, 3, 5, 3, 3, 6, 2, 7, 6, 6, 1, 4, 2, 8, 2, 8, 0, 6, 4, 4, 4, 4, 8, 6, 6, 4, 5, 2, 3, 8, 7, 4, 9, 3, 0, 3, 5, 8, 9, 0, 7, 2, 9, 6, 2, 9, 0, 4, 9, 1, 5, 6, 0, 4, 4, 0, 7, 7, 2, 3, 9, 0, 7, 1, 3, 8, 1, 0, 5, 1, 5, 8, 5, 9, 3, 0, 7, 9, 6, 0, 8, 6, 6, 7, 0, 1, 7, 2, 4, 2, 7, 1, 2, 1, 8, 8, 3, 9, 9, 8, 7, 9, 7, 9, 0, 8, 7, 9, 2, 2, 7, 4, 9, 2, 1, 9, 0, 1, 6, 9, 9, 7, 2, 0, 8, 8, 8, 0, 9, 3, 7, 7, 6, 6, 5, 7, 2, 7, 3, 3, 3, 0, 0, 1, 0, 5, 3, 3, 6, 7, 8, 8, 1, 2, 2, 0, 2, 3, 5, 4, 2, 1, 8, 0, 9, 7, 5, 1, 2, 5, 4, 5, 4, 0, 5, 9, 4, 7, 5, 2, 2, 4, 3, 5, 2, 5, 8, 4, 9, 0, 7, 7, 1, 1, 6, 7, 0, 5, 5, 6, 0, 1, 3, 6, 0, 4, 8, 3, 9, 5, 8, 6, 4, 4, 6, 7, 0, 6, 3, 2, 4, 4, 1, 5, 7, 2, 2, 1, 5, 5, 3, 9, 7, 5, 3, 6, 9, 7, 8, 1, 7, 9, 7, 7, 8, 4, 6, 1, 7, 4, 0, 6, 4, 9, 5, 5, 1, 4, 9, 2, 9, 0, 8, 6, 2, 5, 6, 9, 3, 2, 1, 9, 7, 8, 4, 6, 8, 6, 2, 2, 4, 8, 2, 8, 3, 9, 7, 2, 2, 4, 1, 3, 7, 5, 6, 5, 7, 0, 5, 6, 0, 5, 7, 4, 9, 0, 2, 6, 1, 4, 0, 7, 9, 7, 2, 9, 6, 8, 6, 5, 2, 4, 1, 4, 5, 3, 5, 1, 0, 0, 4, 7, 4, 8, 2, 1, 6, 6, 3, 7, 0, 4, 8, 4, 4, 0, 3, 1, 9, 9, 8, 9, 0, 0, 0, 8, 8, 9, 5, 2, 4, 3, 4, 5, 0, 6, 5, 8, 5, 4, 1, 2, 2, 7, 5, 8, 8, 6, 6, 6, 8, 8, 1, 1, 6, 4, 2, 7, 1, 7, 1, 4, 7, 9, 9, 2, 4, 4, 4, 2, 9, 2, 8, 2, 3, 0, 8, 6, 3, 4, 6, 5, 6, 7, 4, 8, 1, 3, 9, 1, 9, 1, 2, 3, 1, 6, 2, 8, 2, 4, 5, 8, 6, 1, 7, 8, 6, 6, 4, 5, 8, 3, 5, 9, 1, 2, 4, 5, 6, 6, 5, 2, 9, 4, 7, 6, 5, 4, 5, 6, 8, 2, 8, 4, 8, 9, 1, 2, 8, 8, 3, 1, 4, 2, 6, 0, 7, 6, 9, 0, 0, 4, 2, 2, 4, 2, 1, 9, 0, 2, 2, 6, 7, 1, 0, 5, 5, 6, 2, 6, 3, 2, 1, 1, 1, 1, 1, 0, 9, 3, 7, 0, 5, 4, 4, 2, 1, 7, 5, 0, 6, 9, 4, 1, 6, 5, 8, 9, 6, 0, 4, 0, 8, 0, 7, 1, 9, 8, 4, 0, 3, 8, 5, 0, 9, 6, 2, 4, 5, 5, 4, 4, 4, 3, 6, 2, 9, 8, 1, 2, 3, 0, 9, 8, 7, 8, 7, 9, 9, 2, 7, 2, 4, 4, 2, 8, 4, 9, 0, 9, 1, 8, 8, 8, 4, 5, 8, 0, 1, 5, 6, 1, 6, 6, 0, 9, 7, 9, 1, 9, 1, 3, 3, 8, 7, 5, 4, 9, 9, 2, 0, 0, 5, 2, 4, 0, 6, 3, 6, 8, 9, 9, 1, 2, 5, 6, 0, 7, 1, 7, 6, 0, 6, 0, 5, 8, 8, 6, 1, 1, 6, 4, 6, 7, 1, 0, 9, 4, 0, 5, 0, 7, 7, 5, 4, 1, 0, 0, 2, 2, 5, 6, 9, 8, 3, 1, 5, 5, 2, 0, 0, 0, 5, 5, 9, 3, 5, 7, 2, 9, 7, 2, 5, 7, 1, 6, 3, 6, 2, 6, 9, 5, 6, 1, 8, 8, 2, 6, 7, 0, 4, 2, 8, 2, 5, 2, 4, 8, 3, 6, 0, 0, 8, 2, 3, 2, 5, 7, 5, 3, 0, 4, 2, 0, 7, 5, 2, 9, 6, 3, 4, 5, 0];
 for(let i = 0; i < thousandDigits.length - n; i++){
  let product = 1;
for(let j = i; j < i + n; j++){
  if(thousandDigits[j] === 0){
    break;
  }
  let digit = thousandDigits[j];
  product *= digit;
}
if(product > maxProduct){
  maxProduct = product;
}
 }
  return maxProduct;
}

largestProductinaSeries(4); */

// Problem 9: Special Pythagorean triplet

/* function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
   let c; 
 for(let i = 1; i <= n; i++){
let a = i;
for(let j = i + 1; j <= n; j++){
   let b = j;
  c = n - a - b;

if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
  console.log(`${a}, ${b} and ${c}`);
  return a*b*c;
}
}

 }
 console.log('no triplet found for' + n);
}

specialPythagoreanTriplet(1651); */


// Problem 10: Summation of primes

/* const isPrime = (num) => {
  let prime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
} */


/* The Sieve of Eratosthenes is a fundamental and efficient algorithm for 
generating all prime numbers below a given limit n. */

/* const isPrime = (num) => {
  const primeArray = [0, 0];
  for(let i = 2; i < num + 1; i++){
    primeArray.push(1);
  }
  for(let p = 2; p <= Math.sqrt(num); p++){
   
      if(primeArray[p] === 1){
        for(let multiple = p * p; multiple <= num; multiple += p){
          primeArray[multiple] = 0;
        }
      }
}
return primeArray[num] === 1;
}
isPrime(324); */

/* function primeSummation(n) {
let sum = 0;
for(let i = 2; i < n; i++){
if(isPrime(i)){
sum += i;
}
}
return sum;
}

primeSummation(17);*/


/* const data = [
  [835, 750, 876],
  [1, 93, 731],
  [7, 59, 72],
  [934, 926, 915],
  [56, 61, 55],
  [99, 8, 18],
  [8, 20, 14],
  [1, 7, 17],
  [77, 138, 85],
  [38, 34, 620],
  [12, 22, 4],
  [6, 103, 24],
  [95, 371, 94],
  [106, 64, 63],
  [113, 203, 1099],
  [679, 1206, 2],
  [63, 102, 105],
  [346, 353, 362],
  [988, 1045, 620],
  [846, 9, 771]
];

const sorted = data.map(innerArray => quickSort(innerArray));


function quickSort(arr) {
 if(arr.length === 0 || arr.length === 1) return arr;
 let pivot = arr[arr.length - 1];
 const left = [];
 const right = [];
 for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
 }
 return [...quickSort(left), pivot, ...quickSort(right)];
}

const median = sorted.map(innerArray => innerArray[1]);
console.log(median); */

/* const data = [
  [76, 1.50],
  [99, 2.12],
  [44, 1.14],
  [60, 1.62],
  [58, 2.30],
  [94, 2.29],
  [95, 2.30],
  [59, 2.13],
  [88, 2.00],
  [78, 2.03],
  [105, 1.76],
  [92, 2.04],
  [83, 1.90],
  [114, 2.96],
  [59, 1.32],
  [71, 1.72],
  [119, 2.06],
  [110, 3.03],
  [100, 2.77],
  [74, 2.09],
  [88, 1.54],
  [47, 1.14],
  [113, 1.91],
  [92, 1.60],
  [65, 1.80],
  [65, 1.52]
];
const result = [];
data.map(innerArray => {
    let weight = innerArray[0];
    let height = innerArray[1];
    let BMI = weight / Math.pow(height, 2);
    if(BMI < 18.5){
        result.push("under");
    }
    else if(BMI >= 18.5 && BMI <= 24.9){
        result.push("normal");
    }
    else if(BMI >= 25 && BMI <= 29.9){
        result.push("over");
    }else{
        result.push("obese");
    }
});
console.log(result.join(' ')); */

