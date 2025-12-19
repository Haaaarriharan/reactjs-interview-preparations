import React, { useEffect, useState } from "react";

function May2025() {
  // TODAYS TASK IS BUILDING A PAGINATION COMPONENTS  MAY 3

  // simple and proper pagination always please refer this ................

  // Features
  //   1. if only one page is available we need to show that one page
  // if 2 page is available we need to show those two page
  //  same for 3
  // same for 4 and 5 need to display 1 , 2 .. 4, 5
  // same from till the end
  // Custom function to generate array [1, 2, 3, ..., count]

//   need to work with a pagination more

  const [currentPage, setCurrentPage] = useState(1);
  function generatePageNumbers(count, currentPage) {
    console.log("dskdnksnd", count, currentPage);

    if (count == 0 || count == 1 || count == 2 || count == 3 || count == 4) {
      console.log(
        "sdsdsdds",
        Array(count)
          .fill()
          .map((_, idx) => idx + 1)
      );
      
      return Array(count)
        .fill()
        .map((_, idx) => idx + 1);
    }     else {
      // the count will be 5 or greater thaan 5
      let start = [1 , 2 , 3]
      let mid = []
      if (currentPage == 3) {
        start.push(4)
      }
      if (currentPage >= 4 ){
        mid = [currentPage - 1 ,currentPage, currentPage + 1];
        start = [1 , 2]
      }
      let end = [count - 1, count];
      if (currentPage >= count - 2) {
        end.unshift(count - 2)
        end.unshift(count - 3)
        mid = []
      }

      let pagination = [...start , "..", ...mid ,"..", ...end];

      return pagination;
    }   
  }

  const [overallPageCount, setOverallPageCount] = useState(() =>
    generatePageNumbers(100, currentPage)
  );

  // console.log("check this", overallPageCount);

  return (
    <div>
      <div>
        <main>
          <h2>CURRENT PAGE : {currentPage}</h2>
        </main>
        {overallPageCount.map((s) => {
          return (
            <button
              style={{
                padding: "10px",
                margin: "10px",
                backgroundColor: `${currentPage == s && s != "." ? "red" : ""}`,
              }}
              onClick={() => {
                if (s != ".") {
                  setOverallPageCount(() => generatePageNumbers(100, s));
                  setCurrentPage(s);
                }
              }}
            >
              {s}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default May2025;
