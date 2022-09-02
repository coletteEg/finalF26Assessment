// Adds to zero 

const array = [4,3]

let addsToZero = false

for(let i = 0; i < array.length; i++){
  for(let j = i + 1; j< array.length; j++){
    if(array[i] + array[j] === 0){
      addsToZero = true
      break
    }
  }
}

console.log(addsToZero)

// Code runtime guess-- O(1)
console.log("----------------------")

function hasUniqueChars(str) {
    
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < i; j++) {
            if (str.charCodeAt(i) === str.charCodeAt(j)) {
                return false
            }
        }
    }
    
    return true
}

console.log(hasUniqueChars("peanut"))
//code runtime guess --- O(n)

console.log("--------------------")

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  console.log(isPangram("the quick brown fox jumps over the lazy dog"))
//   Runtime guess--- O(n)

console.log("----------------------")

function longestString(...strs) {
    return strs.sort(function(a, b) {return b.length - a.length})[0];
  }
  
  console.log(longestString('meowing', 'cats', 'claws'));

// runtime guess O(log n)