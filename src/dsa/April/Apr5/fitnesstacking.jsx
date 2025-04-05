import React, { useState } from 'react'
import Form from './form'
import Listdata from './listdata'

function Fitnesstacking() {
    // creating a fitness tracking app with all the necessary condition that is mentioned below

    const [setarr, setArrayValues] = useState([])
  return (
    <div>
        <Form setArrayValues={setArrayValues} setarr={setarr}/>
        <Listdata setArrayValues={setArrayValues} setarr={setarr}/>
         
    </div>
  )
}

export default Fitnesstacking