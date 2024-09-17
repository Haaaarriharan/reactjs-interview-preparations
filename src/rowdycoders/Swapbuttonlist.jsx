import React, { useState } from "react";

function Swapbuttonlist() {
  const [list1, setList1] = useState([
    { name: "list1", checbox_status: false },
    { name: "list2", checbox_status: false },
    { name: "list3", checbox_status: false },
  ]);
  const [list2, setList2] = useState([
    { name: "list1" },
    { name: "list2" },
    { name: "list3" },
  ]);

  const swappingFunctionality = () => {
    let swapperVal = null;
    let newBool = false;

    for (let i = 0; i < list1.length; i++) {
      if (list1[i].checbox_status === true && !newBool) {
        swapperVal = i;
        newBool = true;
      } else if (list1[i].checbox_status === true && newBool) {
        let newList = [...list1];
        let newVar = newList[i].name;
        newList[i].name = newList[swapperVal].name;
        newList[swapperVal].name = newVar;
        setList1(newList);
      }
    }
  };

  console.log("dsknksdnsd", list1);

  return (
    <div>
      <li>
        {list1.map((d, i) => {
          return (
            <ul>
              <input
                type="checkbox"
                onChange={() => {
                  let newList = [...list1];
                  newList[i].checbox_status = !d.checbox_status;
                  setList1(newList);
                }}
                value={d.checbox_status}
              />
              {d.name}
            </ul>
          );
        })}
      </li>
      <button
        onClick={() => {
          swappingFunctionality();
        }}
      >
        swap button
      </button>
      <li>
        {list2.map((d) => {
          return <ul>{d.name}</ul>;
        })}
      </li>
    </div>
  );
}

export default Swapbuttonlist;
