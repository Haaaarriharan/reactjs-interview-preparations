import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

function May82024() {
  const [page, setPage] = useState(1);
  const [populate, setPopulateDatas] = useState([]);
  const loadMoreRef = useRef(null);
  const fetch_data = async () => {
    try {
      const newData = await fetch(
        `https://dummyjson.com/todos?limit=10&skip=10`
      ).then((res) => res.json());
      setPopulateDatas(newData?.todos);
    } catch (error) {
      console.log("error log", error);
    } finally {
      console.log("finalyy");
    }
  };

  useEffect(() => {
    fetch_data();
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        console.log("payload info here", target);
        // if (target.isIntersecting) {
          fetch_data();
        // } 
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 1, // Trigger when 10% of the target is visible
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>INFINITE SCROLLING</h1>
      <main>
        {populate?.map((s) => {
          return (
            <div
            ref={loadMoreRef}
              style={{
                backgroundColor: "#101820",
                display: "flex",
                flexDirection: "row",
                height:"50px", 
                padding:"10px",
                margin:"10px",
                justifyContent:"center",
                alignItems:"center",
                color:"#FEE715",
                border:"3px solid #FEE715"
              }}
            >
              <div
                style={{
                  width: "50%",
                }}
              >
                {s?.todo}
              </div>
              <div
                style={{
                  width: "20%",
                }}
              >
                {s?.completed.toString()}
              </div>
              <div>{s?.id}</div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default May82024;
