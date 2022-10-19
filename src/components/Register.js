import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
function Register() {
  const[password, setpass] = useState("")
  const[right,setright] = useState(false)
  const name = useRef();
  //const pass = useRef();
  const id = useRef();
  const role = useRef();
  const contact = useRef();
  const address = useRef();
  const gender = useRef();
  const age = useRef();
  const url = "http://localhost:3333/users"
  const[len,setLen] = useState(0)
  const passwords = []
  useEffect(()=>{
    async function fetchData(){
      const response = await axios.get(url)
      const l = response.data.length+1
      response.data.map((item) =>{
        passwords.push(item.password)
      })
      setLen(l)
    }
    fetchData()
  },[])

  const onclickhandle = async() => {
    const user = {
      "id": id.current.value,
      "password":password,
      "userName": name.current.value,
      "userRole": role.current.value,
      "userAddress": address.current.value,
      "userContact": contact.current.value,
      "userGender": gender.current.value,
      "userAge": age.current.value,
      "approvalStatus": (role.current.value.toLowerCase()==="admin" ? true : false)
    }
    await axios.post(url,user);
  }

   const checkpassword = (event) =>{
    setpass(event.target.value)
   }
  return (
    <div className='startpage'>
      <form className='reg'>
        <input ref={name} placeholder='Enter Your Name' />
        {/* {right ? <div>can't</div> : <div></div>} */}
        <input onChange={checkpassword} placeholder='Enter a New Password'/>
        <input ref={id} placeholder='Enter ID' value={len} />
        <input ref={role} placeholder='Enter Your Role' />
        <input ref={contact} placeholder='Enter Your Contact' />
        <input ref={address} placeholder='Enter Your Address' />
        <input ref={gender} placeholder='Enter Your Gender' />
        <input ref={age} placeholder='Enter Your Age' />
        <button onClick={onclickhandle}><Link to='/login' className='linkText'>Register</Link></button>
      </form>
    </div>
  )
}

export default Register
