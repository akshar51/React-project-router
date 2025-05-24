import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Employee from "./components/Employee";
import EmployeeData from "./components/EmployeeData";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  const [employee, setEmployee] = useState({});
  const [list, setList] = useState([]);
  const [editId,setEditId] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    let oldEmployee = JSON.parse(localStorage.getItem("Employee")) || [];
    setList(oldEmployee);
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editId == -1){
      let data = [...list, { ...employee, id: Date.now() }]
      setList(data);
      localStorage.setItem("Employee", JSON.stringify(data))
    }
    else{
      const updatedList = list.map((emp) =>
        emp.id === editId ? { ...emp, ...employee } : emp
      );
      setList(updatedList);
      localStorage.setItem("Employee", JSON.stringify(updatedList))
      setEditId(-1)
    }
    navigate("/view")
    setEmployee({});
  };

  const handleDelete = (id)=>{
    const data = list.filter((emp) => emp.id !== id);
    setList(data);
    localStorage.setItem("Employee", JSON.stringify(data));
  }

  const handleEdit = (id)=>{
    const emp = list.find((emp) => emp.id === id);
    setEmployee(emp);
    setEditId(id)
    navigate("/")
  }


  return (
    <>
      <Header />
      <Routes>
        <Route
        path="/"
          element={
            <Employee
              employee={employee}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          }
        />
        <Route
        path="view" 
        element={
          <EmployeeData
          handleDelete = {handleDelete}
          handleEdit = {handleEdit}
          list = {list}
          />}/>
      </Routes>
    </>
  );
};

export default App;
