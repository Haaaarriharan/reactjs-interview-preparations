import React, { useState } from "react";

function Form({setArrayValues, setarr}) {
  const [first, setfirst] = useState({
    excersise_name: "",
    calories_burned: 0,
    step_count: 0,
  });
  const [error, setErrorMessage] = useState("")

  console.log("checkoing thi", first);
  return (
    <main
      style={{
        width: "20%",
        padding: "20px",
        border: "1px solid black",
        margin: "20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="">Excersice Name</label>
        <input
          type="text"
          value={first?.excersise_name}
          name="excersise_name"
          id="excersise_name"
          required
          onChange={(e) => {
            setfirst({ ...first, excersise_name: e.target.value });
          }}
          style={{ margin: "3px", padding: "5px" }}
        />
        <label htmlFor="">Calories Burned</label>
        <input
          type="number"
          rname="calories_burned"
          value={first?.calories_burned}
          id="calories_burned"
          required
          onChange={(e) => {
            setfirst({ ...first, calories_burned: e.target.value });
          }}
          style={{ margin: "3px", padding: "5px" }}
        />
        <label htmlFor="">Steps Count</label>
        <input
          type="number"
          name="step_count"
          id="step_count"
          value={first?.step_count}
          required
          onChange={(e) => {
            setfirst({ ...first, step_count: e.target.value });
          }}
          style={{ margin: "3px", padding: "5px" }}
        />
        <div style={{ margin: "3px", padding: "5px" }}>
          <button
            onClick={() => {
              setfirst({
                excersise_name: "",
                calories_burned: 0,
                step_count: 0,
              });
              setErrorMessage("")
            }}
          >
            clear Details
          </button>
          <button
        //   disabled={
        //     first.calories_burned > 0 || !first.excersise_name || !first.step_count > 0 
        //    }
            onClick={() => {
              if(parseInt(first.calories_burned) <= 0){
                setErrorMessage("The calories count should be in the positive values")
                return 
              }
              if(parseInt(first.step_count) <= 0){
                setErrorMessage("The steps count should be in the positive values")
                return 
              }
              let spreadVal = [...setarr];
              spreadVal.push(first);
              setArrayValues(spreadVal);
              setfirst({
                excersise_name: "",
                calories_burned: 0,
                step_count: 0,
              });
              setErrorMessage("")
            }}
          >
            Add Details
          </button>
        </div>
      </div>
      <h4 style={{color:"red"}}>{error}</h4>
    </main>
  );
}

export default Form;
