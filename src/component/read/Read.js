import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Read() {
    const [apiData, setapiData] = useState([])
    useEffect(() => {
     axios.get('https://645388bfc18adbbdfe9fff89.mockapi.io/crud/')
        .then((getData)=>setapiData(getData.data))
    })
    const setID=(id,firstName,lastName)=>{
        console.log(id)
        localStorage.setItem('id',id)
        localStorage.setItem('firstName',firstName)
        localStorage.setItem('lastName',lastName)
    }
    const getId =()=>{
        axios.get(`https://645388bfc18adbbdfe9fff89.mockapi.io/crud`)
        .then((setdata)=>{
            setapiData(setdata)
        })
        
    }
    const setData=(id)=>{
        axios.delete(`https://645388bfc18adbbdfe9fff89.mockapi.io/crud/${id}/`)
        .then(()=>{
            getId()
        })

    }
    
  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Edit</th>
      <th scope="col">Update</th>
      
    </tr>
  </thead>
  <tbody>
  {apiData.map((data)=>{
    return(
        
        <tr key={data.id}>
        <th scope="row">{data.id}</th>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>
            <Link to='/update'>
            <button className='btn btn-primary' onClick={()=>setID(data.id,data.firstName,data.lastName)}> update</button>
            </Link>
            </td>
        <td>
            <Link to='/delete'>
            <button className='btn btn-danger' onClick={()=>{setData(data.id)}}>Delete</button>
            </Link>
            </td>
      
        </tr>    

    )
  })}
  </tbody>
  
</table>
    </>
  )
}

export default Read