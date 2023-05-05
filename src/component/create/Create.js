import React,{useState} from 'react'
import axios from "axios"

function Create() {
    const [firstName, setFirstname] = useState('')
    const [lastName, setlastname] = useState('')

    console.log(firstName)
    console.log(lastName)

    const sendDataToApi =()=>{
        axios.post('https://645388bfc18adbbdfe9fff89.mockapi.io/crud/',{
            firstName,
            lastName,
        })

    }


  return (
<>
<form>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="text" name="fname" onChange={(e)=>setFirstname(e.target.value) } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="text" name="lname" onChange={(e)=>setlastname(e.target.value) } className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label">Check me out</label>
  </div>
  <button type="submit" onClick={sendDataToApi} className="btn btn-primary">Submit</button>
</form>
</>
  )
}

export default Create