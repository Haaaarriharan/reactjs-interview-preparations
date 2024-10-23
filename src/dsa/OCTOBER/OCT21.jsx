import React from "react";

function OCT21() {
  // EXAMPLE OF THE CALLBACK HELL
  // AND ALSO IT IS USED TO UNDERSTAND THE COMPLEX JS FUNCTIONS

  function callBackfn(num, cb) {
    return cb(undefined, num * 2);
  }
  const callbackHell = (num) => {
    callBackfn(num, (err, res1) => {
      if (!err) {
        callBackfn(res1, (err, res2) => {
          if (!err) {
            callBackfn(res2, (err, res3) => {
              console.log(res3);
            });
          } else {
            console.log("error2");
          }
        });
      } else {
        console.log("error1");
      }
    });
  };

  console.log("Try programiz.pro", callbackHell(10));

  // EXAMPLE OF THE CALLBACK HELL
  // AND ALSO IT IS USED TO UNDERSTAND THE COMPLEX JS FUNCTIONS

  function callBackfn(num) {
    return new Promise((resolve, reject) => {
      resolve(num * 2);
    });
  }
  const callbackHell1 = (num) => {
    callBackfn(num).then((res) => {
      callBackfn(res).then((res1) => {
        console.log("no ons can use this methods ", res1);
      });
      console.log(res);
    });
  };

  console.log("Try programiz.pro", callbackHell1(10));

  // USING THE FLATLIST AND WE ARE USING ITERATORS FOR A SPECIFIC PROBELM
  let pushToNewArr = [];
  function Builtin(arrs, number) {
    for (let i = 0; i < arrs.length; i++) {
      console.log("ddd", arrs[i], number);
      if (Array.isArray(arrs[i]) && number > 0) {
        let newNum = number - 1;
        let arrVal = Builtin(arrs[i], newNum);
      } else {
        pushToNewArr.push(arrs[i]);
      }
    }
    return pushToNewArr;
  }

  let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11, [90]], [12]], [13, 14, 15]];
  let number = 3;
  console.log("Try programiz.pro", Builtin(arr, number));

  function App() {
    const [stopWatch, setStopWatch] = useState("");
    return (
      <div>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            let times;
            setTimeout(() => {
              setStopWatch(e.target.value);
            }, 1000);
            if (times) {
              times = clearTimeout();
            }
          }}
        />
      </div>
    );
  }

  //   ACTUALLY THE INTERVIEWER SAID NEED TO CREATE THE INPUT FIELD NEED TO PRINT THE VALUE AFTER USER
  //   STOPS PRINTING
  return <div>OCT21</div>;
}

export default OCT21;
