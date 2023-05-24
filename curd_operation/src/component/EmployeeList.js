import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { useState,useEffect} from 'react'



export const  EmployeeList=()=>{


  const [ employeeList,setEmployeeList ] = useState(null)
  const navigate=useNavigate();

//edit method
  const empedit=(_id)=>{
    navigate("/employeeEdit/"+_id)
  }
  //delete method
  const empdelete =(_id) =>{
    if(window.confirm('Do you want to remove?'))
    fetch("http://localhost:3400/empRoutes"+`/${_id}`,{
      method:"DELETE",
      headers:{"content-type":"application/json"},
      body:JSON.stringify()
   }).then((res) => {
           alert(' Deleted successfully ')
         window.location.reload();
       })
       .catch((err)=>console.log(err.message))
    
  }


 useEffect(()=>{
   fetch("http://localhost:3400/empRoutes").then((res)=>{
    return res.json();
   })
    .then((res)=>{
      setEmployeeList(res);
    })
    .catch((error)=>{
      console.log(error.message);
    })
 },[])



  return (
    <div>
    <div className='main'>
    <h1 className='main1'>Dashboard</h1>
      <Link to="/createEmp" className="btn btn-success" id='main2'>Add Employee</Link>
    </div>
    <div >
    <table class="table table-dark table-striped" >
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Firstname</th>
        <th scope="col">Lastname</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Mobilenumber</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
       {
        employeeList &&
        employeeList.map((item,index)=>(
          <tr >
        <td>{index}</td>
        <td>{item.firstname}</td>
        <td>{item.lastname}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.mobilenumber}</td>
        <td>
           <a onClick={()=>{empedit( item._id)}} className='btn btn-primary' id='edit1'>Edit</a>
          <a onClick={()=>{empdelete(item._id)}} className='btn btn-danger'>Delete</a> 
        </td>

      </tr>
        ))
       }
      
     
    </tbody>
  </table>
  </div>
  </div>
  );
    

  
}
