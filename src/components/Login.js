import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { getallUsers } from '../service/api';
import GlobalObj from '../store/global-object';
function Login() {
    const[id,setId] = useState(1);
    const ctx = useContext(GlobalObj)
    const [notfound, setFound] = useState(false);
    const name = useRef()
    const history = useNavigate()
    localStorage.removeItem('image')
    const getUser = async(event) => {
        event.preventDefault()
        await axios.get(`http://localhost:3333/users?password=${id}&userName=${name.current.value}`)
        .then((response)=>{
            if(name.current.value!==response.data[0].userName){
                console.log('wrong name'+name.current.value+" "+response.data[0].userName)
                setFound(true)
                return;
            }
            ctx.changeUser(response.data[0])
            history('/home')
        })
        .catch((error)=>{
            if(error.request){
                setFound(true)
            }
            else{
                setFound(true)
            }
        })
    }
    const onchangehandle = async(event) => {
        setId(event.target.value)
        console.log(id)
    }
    return (
        <div className='startpage'>
            <form className='start'>
                <input placeholder='Enter Your Name' ref={name} />
                <input type='password' onChange={onchangehandle} placeholder='Enter Your password'/>
                <button onClick={getUser} style={{color:"white",fontSize:"20px"}}>Login</button>
            </form>
            <div>
                {notfound && <div className='nouser' >Wrong Name or Password</div>}
            </div>
        </div>
    )
}

export default Login
