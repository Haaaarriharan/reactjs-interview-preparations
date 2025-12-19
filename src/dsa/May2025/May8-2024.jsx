import React, { useState, useEffect, useRef } from "react";

function InfiniteScrollComponent() {
  const [items, setItems] = useState([]);
  const [skips, setSkip] = useState(0)
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef(); // for handling the insertion absorber

  const loadMoreItems = async (limit, skip) => {
    try {
      setSkip(skip)
      const newData = await fetch(
        `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
      ).then((res) => res.json());
      if (newData?.todos.length == 0) {
        setHasMore(false);
      }
      setItems([...items,...newData?.todos]);
    } catch (error) {
      console.log("error log", error);
    } finally {
      console.log("finalyy");
    }
    
  };

  const lastItemRef = useRef(null);
  // To point to the last rendered <li> element (the target for observation)

  useEffect(() => {
    if (items.length == 0) {
      loadMoreItems(10,1)
      return
    }
    if (!hasMore) return; // Stop if no more data
  // Disconnect old observer (clean up)
    if (observer.current) observer.current.disconnect();
// Create new IntersectionObserver
    observer.current = new IntersectionObserver((entries) => {
      console.log("sndjsndjnjsnd", entries[0].isIntersecting, entries)
      if (entries[0].isIntersecting) {
        // If last item visible → load more
        let limit = 10
        let skip = skips + limit
        loadMoreItems(limit , skip);
      }
    });

    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [items, hasMore]);


//   I’m using IntersectionObserver to watch the last item.
// When the last item comes into view, I fetch the next batch of data using limit & skip params and append it to the existing list.
// This continues until no more data is available.
// I manage states for items, skip count, and hasMore to control data flow.

  console.log("dsknksnd", lastItemRef)

  return (
    <div>
      <h2>Infinite Scroll Demo</h2>
      <ul>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={item}
              ref={isLast ? lastItemRef : null}
              style={{
                padding: "20px",
                border: "1px solid black",
                margin: "5px",
              }}
            >
              Item {item?.todo}
            </li>
          );
        })}
      </ul>
      {!hasMore && <p>No more items to load</p>}
    </div>
  );
}

export default InfiniteScrollComponent;
