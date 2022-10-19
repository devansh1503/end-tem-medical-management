import axios from 'axios'
import React, { useContext, useRef } from 'react'
import {Link, useNavigate} from "react-router-dom"
import GlobalObj from '../store/global-object'

function Edituser() {
    const ctx = useContext(GlobalObj)
    const name = useRef()
    const id = useRef()
    const role = useRef()
    const contact = useRef()
    const address = useRef()
    const gender = useRef()
    const age = useRef()
    const url = `http://localhost:3333/users/${ctx.currUser.id}`
    const history = useNavigate()
    const onclickhandle = async(event) => {
        event.preventDefault()
        const newData = {
            "id": ctx.currUser.id,
            "userName": name.current.value,
            "userRole": role.current.value ,
            "userAddress": address.current.value,
            "userContact": contact.current.value,
            "userGender": gender.current.value,
            "userAge": age.current.value,
            "approvalStatus": ctx.currUser.approvalStatus
        }
        await axios.put(url,newData)
        ctx.changeUser(newData)
        history('/home')
    }
    return (
        <div className='startpage'>
            <form className='reg'>
                <input ref={name} placeholder='Enter Your Name' defaultValue={ctx.currUser.userName} />
                <input ref={id} placeholder='Enter ID' value={ctx.currUser.id} />
                <input ref={role} placeholder='Enter Your Role' defaultValue={ctx.currUser.userRole} />
                <input ref={contact} placeholder='Enter Your Contact' defaultValue={ctx.currUser.userContact} />
                <input ref={address} placeholder='Enter Your Address' defaultValue={ctx.currUser.userAddress} />
                <input ref={gender} placeholder='Enter Your Gender' defaultValue={ctx.currUser.userGender} />
                <input ref={age} placeholder='Enter Your Age' defaultValue={ctx.currUser.userAge} />
                <button style={{fontSize:"20px", color:"white"}} onClick={onclickhandle}>Edit</button>
            </form>

        </div>
    )
}

export default Edituser
