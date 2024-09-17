import React from "react";

function Sep13() {
  const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(b[i]), 1000);
  }

  for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(b[i]), 1000);
  }

  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9
  // 10
  // undefined
  // undefined
  // undefined
  // undefined
  // undefined
  // undefined
  // undefined
  // undefined
  // undefined
  // undefined

  //   the thing is 1st loop will iterate over all the 10 values in the array
  //   but the secound loop will the values that is after 10 values (after 10 there will be no values)
  //   so it will identified as undefined

  // FINDING THE SECOUND LARGEST VALUES IN THE ARRAY
  function findSecoundLargestValue() {
    let arr = [1, 200, 20, 3, 9, 10, 45];
    let largest = null;
    let secound = null;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secound = largest;
        largest = arr[i];
      } else if (arr[i] > secound && arr[i] !== largest) {
        secound = arr[i];
      }
    }
    //   let findTheSecoundLargestVal = {
    //   "d":"s",
    //   "d":"d"
    // }
    // js will takes the last values as key
    // output is {"d":"d"}

    return secound;
  }
  console.log("Hello, World!", findSecoundLargestValue());

  //DIFF BETWEEN FUNCTION EXPRESSION AND THE FUNCTION

  sall();
  pall();
  function sall() {
    console.log("-----------it is a function---------------");
  }
  const pall = () => {
    console.log("-----------it is a function expression---------------");
  };

  // WHY WE ARE USING THE GENERATOR FUNCTION?
  function* generator() {
    yield 10;
    yield 12;
  }
  const result = generator();

  console.log("1", result.next()); // {value : 10 , done: true}
  console.log("1", result.next()); // {value : 12 , done: true}
  // when we tires to access third time it will show this undefined
  console.log("1", result.next()); // {value : undefined  , done: true}

  // WHEN THE USER WANTS TO PAINTS THE STRINGYFIED HTML CONTENT
  // AT THE TIME HE CAN USE THIS APPROACH

  let htmldata = "<p>hari is the nest developer in</p>";

  // we can create a tag like this
  // <div dangerouslySetInnerHTML={{__html : data}} />

  const [counties, setCountries] = React.useState([]);

  const country = [
    { name: "india", state: ["tamilNadu", "kerala", "Banguluro"] },
    { name: "pakisthan", state: ["puri", "kashmir", "punjab"] },
    { name: "America", state: ["losvegas"] },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100px",
      }}
    >
      <select
        name="country"
        id="country"
        onChange={(e) => {
          let fetchState = e.target.value;
          let findChidVal = country.find((d) => d.name === fetchState);
          setCountries(findChidVal.state);
        }}
      >
        {country.map((s) => {
          return <option value={s.name}>{s.name}</option>;
        })}
      </select>
      <select name="state" id="state" onChange={() => {}}>
        {counties?.length > 0 &&
          counties.map((s) => {
            return <option value={s}>{s}</option>;
          })}
      </select>
    </div>
  );
}

export default Sep13;
