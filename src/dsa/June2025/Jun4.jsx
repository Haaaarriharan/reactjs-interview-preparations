import React from 'react'

function Jun4() {
    let val =10

console.log("start" , val ** 10 )

// ** refers to the 10 to the power of 10  ans 10000000

  function test(){
  console.log(test.abc)
  }
  
  test()
  
  test.abc = 12
  test.abc = 20
  
  test()


//  console.log({} == {} , {} === {}) both are false

let a1 = 1
let b1 = new Number(1)
let c1 = 1
// beacuse the new key word will create an objects so we cannnot get a matched values
// type of b variable will be objects
console.log("sjndj", a1 === b1 , b1 === c1)


var a = {}
var b = {key : "b"}
var c = {key : "c"}
a[b] = 600
b[c] = 700
b[b] = 400


console.log(a[c])
console.log(a[b])
console.log(b[b])
console.log(b[c])

// WHEN THE WE PAGE IS LOADED MANY THINGS HAPPENS IN THE BEHIND THE SCEENS 

// !!!!!!!! PARSING THE HTML
// @@@@@@@@ DOWNLOADING THE SCRIPT
// ######## EXECUTING THE SCRIPT

// WITH OUT ASYNC OR DEFER
// !!!!!!!!!!!!!!!!!!!!!!!!                             !!!!!!!!!!!!!!!!!!!!!!!!!
//                         @@@@@@@@@@@@@@ ##############
// FIRST THE HTML WILL BE PARSED THEN IT WILL BE PAUSED SCRIPT WILL BE DOWNLODING THEN THE SCRIPT WILL BE EXECUTING 
// AFTER THE EXECUTION AGAIN THE PARSING WILL STARTED AND COMPLETED

// ASYNC
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!               !!!!!!!!!!!!!!!!!!!!!!!!!
//                  @@@@@@@@@@@@@@ ##############
// HTML WILL BE PARSED AND ASYNCRONOUSLY SCRIPT WILL BE DOWNLOADED THEN AFTER EXCECUTING THE SCRIPT HTML PARSING WILL STARTED AND 
// COMPLETED

// USEFULL
// GOOGLE ANALYTICS
// ADD
// SOCIAL SHARE BUTTON

// DEFER
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                  @@@@@@@@@@@@@@@                   #######################
//  HTML WILL BE PARSED AND ASYNCRONOUSLY SCRIPT WILL BE DOWNLOADED THEN AFTER THE HTML PARSING THE EXECUTION WILL BEGINS

// EVENT BUBBLING 
// EVENT CAPTURING IS ALSO KNOWN AS EVENT TRICKLING


  return (
    <div>Jun4</div>
  )
}

export default Jun4