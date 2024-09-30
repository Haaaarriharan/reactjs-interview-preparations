import React from "react";

function Sep26() {
  // STAIR CASE PROBLEM ....
  function StairCaseProblem() {
    // either a person the person can move one step or two step
    // we can count how many combinations in the array

    // we need to memorize this method for this problem
    let eligibleTo = [1, 2];
    let steps = 4;
    for (let i = 2; i < steps; i++) {
      eligibleTo[i] = eligibleTo[i - 1] + eligibleTo[i - 2];
    }
    return eligibleTo[steps - 1];
  }
  console.log("Try programiz.pro", StairCaseProblem());
  return <div>sep26</div>;
}

export default Sep26;
