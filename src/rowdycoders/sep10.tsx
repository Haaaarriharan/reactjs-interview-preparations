import React from "react";

function sep10() {
  const data = {
    zone: {
      zoneType: {
        contains: "",
        mode: "insensitive",
      },
    },
  };

  // Function to dynamically update "contains" key
  function updateContainsValue(obj, newValue) {
    for (let key in obj) {
      if (key === "contains") {
        obj[key] = newValue; // Update the "contains" key with the new value
      }
      // If the value is an object, recursively traverse it
      if (typeof obj[key] === "object" && obj[key] !== null) {
        updateContainsValue(obj[key], newValue);
      }
    }
  }

  // Call the function to update the "contains" value
  updateContainsValue(data, "newContainsValue");

  console.log(data);

  return <div>sep10</div>;
}

export default sep10;
