import React from "react";

function sep9() {
  function flattenObject(obj, prefix = "") {
    let flattened = {};
    for (let key in obj) {
      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        flattened = {
          ...flattened,
          ...flattenObject(obj[key], `${prefix}${key}_`),
        };
      } else {
        flattened[`${prefix}${key}`] = obj[key];
      }
    }

    return flattened;
  } // Flatten the user object with "user_" prefix

  const user = {
    name: "Rowdy Coders",
    address: {
      primary: {
        house: "109",
        street: {
          main: 21,
          cross: ["32", "1"],
        },
      },
    },
  };
  const flattenedUser = flattenObject(user, "user_");
  console.log(flattenedUser);
  //   flatern the objects functions

  //   {
  //     user_name: 'Rowdy Coders',
  //     user_address_primary_house: '109',
  //     user_address_primary_street_main: 21,
  //     user_address_primary_street_cross: [ '32', '1' ]

  //   UNDERSTANDABLE VERSION

  function flattenObjectS(obj, prefix = "") {
    let flatternObj = {};
    for (let val in obj) {
      if (typeof obj[val] === "object" && !Array.isArray(obj[val])) {
        flatternObj = {
          ...flatternObj,
          ...flattenObject(obj[val], `${prefix}${val}_`),
        };
      } else {
        flatternObj[`${prefix}${val}`] = obj[val];
      }
    }
    return flatternObj;
  } // Flatten the user object with "user_" prefix

  const users = {
    name: "Rowdy Coders",
    address: {
      primary: {
        house: "109",
        street: {
          main: 21,
          cross: ["32", "1"],
        },
      },
    },
  };
  const flattenedUsers = flattenObject(user, "user_");
  console.log(flattenedUsers);
  //   }
  return <div>sep9</div>;
}

export default sep9;
