import React from "react";

function NOV4() {
  // Check if a string can be obtained by rotating another string 2 places
  function renderNewOne() {
    let str1 = "amazon";
    let str2 = "azonam";
    let newVar = str1.split("");
    let val = 2;
    let newArr = [];
    for (let i = 0; i < newVar.length; i++) {
      if (val - 1 < i) {
        let removedValue = newVar.shift();
        newArr.push(removedValue);
      }
    }
    if (newVar.concat(newArr).join("") === str2) {
      return true;
    }
    return false;
  }

  function validateThoseArrayOfstring(dict, str) {
    let m = dict.length;
    let n = str.length;
    let j = 0;
    for (var i = 0; i < n && j < m; i++) {
      if (dict[j] == str[i]) j++;
    }
    // if the value is true then we will ewplace the values
    return m == j;
  }

  function findLongestString(dict, str) {
    let lengthf = 0;
    let strChar = "";
    for (let i = 0; i < dict.length; i++) {
      if (
        lengthf < dict[i].length &&
        validateThoseArrayOfstring(dict[i], str)
      ) {
        strChar = dict[i];
        lengthf = dict[i].length;
      }
    }
    console.log("first", lengthf);
    return strChar;
  }
  var dict = ["ale", "apple", "monkey", "plea"];
  var str = "abpcplea";

  console.log("noonecanfind this", findLongestString(dict, str));

  return <div>NOV4</div>;
}

export default NOV4;
