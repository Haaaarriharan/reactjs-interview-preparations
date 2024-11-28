import React from "react";

function Nov18() {
  const [first, setfirst] = React.useState([]);
  let handleInput = React.useRef();
  // 1. need to build the todo app
  const getContentDatas = () => {
    fetch("https://api.restful-api.dev/objects")
      .then((res) => res.json()) // why we are using the res.json we need to identify this properly...
      .then((res) => {
        console.log("datas", res);
        setfirst(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  React.useEffect(() => {
    getContentDatas();
  }, []);

  return (
    <div>
      <div>
        <input type="text" ref={handleInput} />
        <button
          type="submit"
          onClick={(e) => {
            console.log("no use off it", handleInput.current.value);
            let obj = {
              name: handleInput.current.value,
              id: first.length + 1,
            };
            setfirst([obj, ...first]);
          }}
        >
          add
        </button>
      </div>

      <ul>
        {first.length > 0 &&
          first.map((s, i) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  //   alignItems: "center",
                }}
              >
                <li>{s?.name}</li>
                <div>
                  <button
                    onClick={() => {
                      let spread = [...first];
                      spread.splice(i, 1);
                      setfirst(spread);
                    }}
                  >
                    delete
                  </button>
                  <button
                    onClick={() => {
                      handleInput.current.value = s?.name;
                      let spread = [...first];
                      spread.splice(i, 1);
                      setfirst(spread);
                    }}
                  >
                    update
                  </button>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default Nov18;
