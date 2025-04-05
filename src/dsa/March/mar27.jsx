import React, { useEffect, useState } from "react";
// tak for maintaining the todo app in the local storage .....
function Mar27() {
  const [first, setfirst] = useState({
    id: "",
    name: "",
    age: "",
    profession: "",
    married: "",
    religion: "",
  })
  // i am going to create a todo app in the react
let sampleData = [
  {
    id: "1",
    name: "hari",
    age: "24",
    profession: "developer",
    married: "single",
    religion: "hindu",
  },
  {
    id: "2",
    name: "sri",
    age: "24",
    profession: "developer",
    married: "single",
    religion: "hindu",
  },
  {
    id: "3",
    name: "lee",
    age: "24",
    profession: "developer",
    married: "married",
    religion: "hindu",
  },
  {
    id: "4",
    name: "saran",
    age: "24",
    profession: "developer",
    married: "single",
    religion: "hindu",
  },
]
let getstoredvalues  = JSON.parse(localStorage.getItem("todo_values")) || []
const[addarr, setArrVal] = useState(getstoredvalues)
let setvalues = localStorage.setItem("todo_values", JSON.stringify(addarr));


  const header_mapping = [
    "No",
    "NAME",
    "AGE",
    "PROFESSION",
    "STATUS",
    "RELIGION",
  ];

  console.log("checking the local storage values here" , getstoredvalues)
  
  return (
    <div>
      <table>
        <tr>
          {header_mapping.map((s) => {
            return <th>{s}</th>;
          })}
        </tr>
        <tr>
          <td>
            <input
              type="text"
              id="id"
              value={first?.id}
              name="id"
              onChange={(e) => {
                setfirst({ ...first, id: e.target.value });
              }}
            />
          </td>
          <td>
            <input
              type="text"
              id="name"
              value={first?.name}
              name="name"
              onChange={(e) => {
                setfirst({ ...first, name: e.target.value });
              }}
            />
          </td>
          <td>
            <input
              type="text"
              id="age"
              value={first?.age}
              name="age"
              onChange={(e) => {
                setfirst({ ...first, age: e.target.value });
              }}
            />
          </td>
          <td>
            <input
              type="text"
              id="profession"
              name="profession"
              value={first?.profession}
              onChange={(e) => {
                setfirst({ ...first, profession: e.target.value });
              }}
            />
          </td>
          <td>
            <input
              type="text"
              value={first.married}
              id="married"
              name="married"
              onChange={(e) => {
                setfirst({ ...first, married: e.target.value });
              }}
            />
          </td>
          <td>
            <input
              type="text"
              value={first.religion}
              id="religion"
              name="religion"
              onChange={(e) => {
                setfirst({ ...first, religion: e.target.value });
              }}
            />
          </td>
          <td>
            <button
              onClick={() => {
                let addmockvalues = { ...first };
                let fullarr = [...addarr];
                fullarr.push(addmockvalues);
                console.log("dnsdnsnnd" , fullarr)
                localStorage.setItem("todo_values", JSON.stringify(fullarr));
                setArrVal(fullarr);
                setfirst({
                  id: "",
                  name: "",
                  age: "",
                  profession: "",
                  married: "",
                  religion: "",
                })
              }}
            >
              add
            </button>
          </td>
        </tr>

        {getstoredvalues.map((d, i) => {
          return (
            <tr>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.age}</td>
              <td>{d.profession}</td>
              <td>{d.religion}</td>
              <td>{d.married}</td>
              <td>
                <button
                  onClick={() => {
                    let fullarr = [...addarr];
                    fullarr.splice(i, 1);
                    setArrVal(fullarr);
                    setfirst({
                      id: d.id,
                      name: d.name,
                      age: d.age,
                      profession: d.profession,
                      married: d.religion,
                      religion: d.married,
                    })
                  }}
                >
                  update
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    let fullarr = [...addarr];
                    fullarr.splice(i, 1);
                    setArrVal(fullarr);
                    localStorage.setItem("todo_values", JSON.stringify(fullarr));
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Mar27;
