
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

function memoize(fn) {
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
console.log(memoizedSum(3, 2)); 


 

