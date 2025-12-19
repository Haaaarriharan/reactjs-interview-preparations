import React from "react";
import { useState } from "react";

function May21() {
  // todays react js interview session
  // zegoclouds customized for the vedio cloud

  // IN THE CALCULATER TO PERFORM UNDO AND REDO OPERATIONS
  // WHICH DATA STRUCTURE WILL USED IS STACK NEED TO SEE BREIFLY ABOUUT THIS

  // react js problem with a dropdown functionalyties


  // TYPES OF PAGINATION 
  // Offset-Based Pagination (Traditional Pagination)
//   It uses parameters like page and limit (or offset and limit) to fetch a specific set of items.
  // Cursor-Based Pagination (Keyset Pagination)
//   This uses a unique identifier (like a timestamp or an ID) to fetch the next set of items.


// FRAGMENT 
// <> </> WE CANNOT PROPS
// <FRAGMENTS> </FRAGMENTS> WE CAN PROPS

// CHILDREN
// children is a special prop automatically provided by React. It holds the content placed 
// between the opening and closing tags of a component.


// EXAMPLE CODES
const Modal = ({ children }) => (
  <div className="modal">
    {children}
  </div>
);

<Modal>
  <p>Are you sure you want to delete?</p>
  <button>Confirm</button>
</Modal>





  const [message, setMessage] = useState("");
  const [first, setfirst] = useState("");
  // DROP DOWN PROBLEMS
  const [asswordvalidation, setPasswordvalidation] = useState({
    is_upper_true: false,
    is_lower_true: false,
    is_number_true: false,
  });
  let questionArr = [
    {
      country: "India",
      state: [
        {
          name: "Tamil Nadu",
          city: ["chennai", "coimbatore", "thricy", "selam"],
        },
        { name: "Kerala", city: ["kochi", "thalacheri", "munnar"] },
        { name: "Maharastra", city: ["abc1", "abc2", "abc3"] },
      ],
    },
    {
      country: "Pakisthan",
      state: [
        { name: "Lahore", city: ["cho", "leeke", "peeche", "keyake"] },
        { name: "Karachi", city: ["1", "2", "3"] },
        { name: "Mashore", city: ["abc1", "abc2", "abc3"] },
      ],
    },
    {
      country: "America",
      state: [
        { name: "los angels", city: ["0", "789", "456", "123"] },
        { name: "new york", city: ["hij1", "efg2", "abc3"] },
        { name: "no use", city: ["abc1", "abc2", "abc3"] },
      ],
    },
  ];
  const [state, setstate] = useState([]);
  const [city, setcity] = useState([]);

  const countryOnchange = (country, key, setkey, data) => {
    let mainobj = data.find((d) => d[key] == country);
    console.log("check this", country, key, setkey, mainobj, data);

    if (setkey == "state") {
      setstate(mainobj[setkey] || []);
    } else {
      setcity(mainobj[setkey]);
    }
  };


//   ARROW PROBLEMS 
// CREATE A 4 BUTTON WITH ABCD IN THIS a-->b-->c-->d-->

  const addArrows = (strval) => {    
    let exsist = `${first}` + `${strval}-->`
    let check = exsist.split("-->")
    let newArrr=[]
    let checker = []
    for(let i =0; i < check.length; i++){
        console.log("00000", newArrr , check[i]);
        
        if(!checker.includes(check[i]) && check[i] !== ""){
           newArrr.unshift(`${check[i]}-->`)
           checker.unshift(check[i])
        }
    }    
    
    setfirst(newArrr.join(""));
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <select
          name="Country"
          id="country"
          style={{ padding: "7px", margin: "10px" }}
          onClick={(e) => {
            console.log("dksmkdmksmd", e.target.value);
            setstate([]);
            setcity([]);
            countryOnchange(e.target.value, "country", "state", questionArr);
          }}
        >
          {questionArr.map((d, i) => (
            <option value={d.country}>{d.country}</option>
          ))}
        </select>
        {state.length > 0 && (
          <select
            name="State"
            id="state"
            style={{ padding: "7px", margin: "10px" }}
            onClick={(e) => {
              countryOnchange(e.target.value, "name", "city", state);
            }}
          >
            {state.map((d) => (
              <option value={d.name}>{d.name}</option>
            ))}
          </select>
        )}
        {city.length > 0 && (
          <select
            name="city"
            id="city"
            style={{ padding: "7px", margin: "10px" }}
            onClick={(e) => {
              // countryOnchange(e.target.value, "state", "city");
            }}
          >
            {city.map((d) => (
              <option value={d}>{d}</option>
            ))}
          </select>
        )}

        {/* INPUT FIELDS WITH A PASSWORD CHECK */}
        <input
          type="password"
          name="password"
          id="password"
          style={{ padding: "7px", margin: "10px" }}
          onChange={(e) => {
            let password = e.target.value;
            let slice_password = password.slice(
              password.length - 1,
              password.length
            );
            if (slice_password === slice_password.toUpperCase()) {
              setPasswordvalidation({
                ...asswordvalidation,
                is_upper_true: true,
              });
            }
            if (slice_password === slice_password.toLowerCase()) {
              setPasswordvalidation({
                ...asswordvalidation,
                is_lower_true: true,
              });
            }
            if (
              typeof parseInt(slice_password) === "number" &&
              !isNaN(parseInt(slice_password))
            ) {
              setPasswordvalidation({
                ...asswordvalidation,
                is_number_true: true,
              });
            }

            if (
              asswordvalidation.is_lower_true &&
              asswordvalidation.is_upper_true &&
              asswordvalidation.is_number_true
            ) {
              setMessage("Passwords is a strong");
            } else {
              setMessage("Password is Week");
            }
          }}
        />
        <header>{message}</header>
      </div>
      <div style={{ padding: "10px", margin: "20px" }}>
        <button
          onClick={() => {
            addArrows("A");
          }}
        >
          A
        </button>
        <button
          onClick={() => {
            addArrows("B");
          }}
        >
          B
        </button>
        <button
          onClick={() => {
            addArrows("C");
          }}
        >
          C
        </button>
        <button onClick={() => {
            addArrows("D");
          }}>
       
          D
        </button>
      </div>
      <div>
        {first}
      </div>
    </main>
  );
}

export default May21;
