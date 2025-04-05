import React from "react";

function Nov22() {
  // The behavior of the <img> tag differs from regular inline elements because it is an inline-replaced element.
  // This distinction explains why it can accept and respect width and height properties, unlike standard inline elements like <span> or <a>.

  //  What is Specificity? *******************************************************************************************************************
  // If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win"

  // in java script there is no seperate data type for an array*********************************************************************************

  // type of null is objectgit commit -m "creating a readme file when the concept of inheritance and the polimorphism is missed" it is a bug in the js for long time it need to be fixed actully ***************************************************
  // type of null is a null

  // we going to see how the call apply  and bind works in the js

  function callapplybind() {
    let obj = {
      name: "hari",
      lastname: "haran",
    };

    function callnewone(age, info) {
      return (
        this.name +
        this.lastname +
        "is the best developer in the world..." +
        age +
        info
      );
    }

    // call obj in the call method which is important
    // console.log("we can", callnewone.call(obj ,  "24" , "good looking guy"))

    //   console.log("we apply", callnewone.call(obj , [ "24" , "good looking guy"]))

    // bind will be used as a re-usable functions
    let newFn = callnewone.bind(obj);
    console.log("we bind these things", newFn("24", "good looking guy"));
    console.log("we bind these things", newFn("30", "bad looking guy"));
  }

  console.log("nnnnnnnnnnnn", callapplybind());

  let oneArr = [1, 2, 3];
  let twoArr = ["s", "l"];

  oneArr.push.apply(oneArr, twoArr);
  // actually it will modify  the exisiting array , when we use concat it will create a new array
  console.log("these method can concat the two array", oneArr);
  return <div>Nov22</div>;
}

export default Nov22;
