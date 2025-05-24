import React, { useState } from 'react'
import Header from './components/Header'
import Employee from './components/Employee'

const App = () => {

  const [employee, setEmployee] = useState({});
  const [list, setList] = useState([]);

  const handleChange = (e)=>{
    const {name,value} = e.target
    setEmployee({...employee,[name]:value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setList([...list,{...employee,id : Date.now()}]);
    setEmployee({})
  }
  console.log(list)
  
  return (
    <>
      <Header/>
      <Employee 
      employee={employee}
      list={list}
      onChange={handleChange}
      onSubmit={handleSubmit}/>
    </>
  )
}

export default App
