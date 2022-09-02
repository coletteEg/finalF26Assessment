const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}
// push puts it on the end

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}
// unshift puts it on the front

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// Extra large: insert- 1.4525393 seconds and appends is 10.9062 milliseconds
// large array: insert- 30.7136 milliseconds and append is 2.217 milliseconds
// medium array: insert 649.1 useconds and append is 552.9 useconds
// small array: insert is 218.7 useconds and append is 419.8 useconds
// tiny array: insert is 108.6 useconds and append is 255.4 useconds

// You can see from the answers above that append that uses .push takes less time by a large amount. While insert that uses .unshift takes much more time as the array gets bigger. It is interesting to note though that when the array is smaller the insert function is actually faster. I imagine thats because it can more quickly add to the front and print the rest of the array then printing it and adding it to the back. Once you get to the medium sized array it takes less time to use the append function.