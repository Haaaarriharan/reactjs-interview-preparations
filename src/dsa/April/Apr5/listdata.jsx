import React from 'react'

function Listdata({setArrayValues, setarr}) {
  return (
    <main style={{
        width:"20%",
        padding:"20px",
        border:"1px solid black",
        margin:"20px"
    }} >
        {setarr.map((s) => {
            return (
                <div style={{
                    margin:"3px", padding:"5px", border:"1px solid black",
                    display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"
                }}>
                    <h3>Name : {s.excersise_name}</h3>
                    <h3>No of Calories Burned : {s.calories_burned}</h3>
                    <h3>No of Steps : {s.step_count}</h3>
        
                </div>
            )
        })}
    
        </main>
  )
}

export default Listdata