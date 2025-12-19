import React from 'react'

function May16() {

    // https://blog.algomaster.io/p/15-leetcode-patterns

    // 1. Prefix Sum
    // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function prefixsum(data){
    for(let i = 0; i < data.length;i++){
        let sub = data[i - 1] || 0
        data[i] = data[i] + sub
    }
    
    return data 
}
console.log("Try programiz.pro", prefixsum([1,2,3,4,4,5,10]));




function slidingwindow(data){
   let arr = [2, 1, 5, 1, 3, 2]
   let k = 3    
   
   for(let i =0; i < arr.length; i++){
       if(k === i){
           return arr[i-1] + arr[i] + arr[i+1]
       }
   }
}
console.log("Try programiz.pro", prefixsum([1,2,3,4,4,5,10]));

//  git cherry-pick this command is used to add a specific commit from one branch  to another branch

  return (
    <div>May16</div>
  )
}

export default May16