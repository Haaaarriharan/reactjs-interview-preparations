import React from 'react'

function feb10() {
    // infinite function currying in the js 

function infiniteCurring(a){
    console.log("cheking with js functionns" , a)
    return (b)=>{
        if(b !== undefined){ 
            return infiniteCurring(a+b)
        }
        return a
    }
}


console.log("Try programiz.pro", infiniteCurring(1)(2)(3)(4)());


function one(a=5,b=7){
    console.log(a+b) // 25
}
// undefined is the values that is been added unfortunalty
one(undefined,20)

function two(a=5,b=7){
    console.log(a+b) // 20
}
// null value will maually we are defining it as null so the output will be 20
two(null,20)

console.log("dsdsd", 100+undefined) // Nan

// select tage is used in the older version of the html
// dl is the latest verision for the html for the dropdowns

// layout of the html
// doctype - body - 


  return (
    <div>feb10</div>
  )
}

export default feb10