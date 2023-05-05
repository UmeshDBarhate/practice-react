import axios from 'axios'
import React,{useEffect,useState} from 'react'

function Update() {
    const [firstName, setFirstname] = useState('')
    const [lastName, setlastname] = useState('')
    const [id,setID]=useState(null)
    console.log(firstName)
    console.log(lastName)
    console.log(id)

    const sendDataToApi =()=>{
        axios.put(`https://645388bfc18adbbdfe9fff89.mockapi.io/crud/${id}/`,{
            firstName,
            lastName,
        })

    }
    useEffect(() => {
        console.log(localStorage.getItem('firstName'))
      setFirstname(localStorage.getItem('firstName'))
      setlastname(localStorage.getItem('lastName'))
      console.log(localStorage.getItem('id'))
      setID(localStorage.getItem('id'))
    
     
    },[])
    


  return (
<>
<form>
  <div className="mb-3">
    <label  className="form-label">first name</label>
    <input value={firstName} type="text" name="fname" onChange={(e)=>setFirstname(e.target.value) } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input value={lastName} type="text" name="lname" onChange={(e)=>setlastname(e.target.value) } className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label">Check me out</label>
  </div>
  <button type="submit" onClick={sendDataToApi} className="btn btn-primary">Update</button>
</form>
</>
  )
}

export default Update