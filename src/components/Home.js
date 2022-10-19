import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import GlobalObj from '../store/global-object'
import Uploadimg from './Uploadimg'
function Home() {
    const ctx = useContext(GlobalObj)
    const[edit,setEdit] = useState(true)
    console.log("data "+ctx.currUser)
    const imglink = localStorage.getItem('image')
    console.log(imglink)

    return (
        <div className='home'>
            <div className='top'>
                <div className='image'>
                    {(imglink===null) ?(ctx.currUser.userGender === "Male" ?<img src={require('../male.png')} />:<img src={require('../female.png')} />):<img style={{height:"250px",width:"270px", marginRight:"200px"}} src={imglink}/>}
                    {edit?<div style={{fontSize:"20px", padding:"10px", backgroundColor:"crimson", color:"white", width:"fit-content"}} onClick={()=>{setEdit(false)}}>Change Image</div>:<Uploadimg editimg={setEdit}/>}
                </div>
                <div className='details'>
                    <div className='det'>
                        <h5>Name: </h5>
                        <h5>{ctx.currUser.userName}</h5>
                    </div>
                    <div className='det'>
                        <h5>Age: </h5>
                        <h5>{ctx.currUser.userAge}</h5>
                    </div>
                    <div className='det'>
                        <h5>Gender: </h5>
                        <h5>{ctx.currUser.userGender}</h5>
                    </div>
                    <div className='det'>
                        <h5>Role: </h5>
                        <h5>{ctx.currUser.userRole}</h5>
                    </div>
                    <div className='det'>
                        <h5>Contact: </h5>
                        <h5>{ctx.currUser.userContact}</h5>
                    </div>
                    <div className='det'>
                        <h5>Approval Status: </h5>
                        {ctx.currUser.approvalStatus ? <h5 style={{color:'green'}}>Approved</h5>:<h5 style={{color:'red'}}>Not Approved</h5>}
                    </div>

                </div>
            </div>
            <div className='bottom'>
                <button><Link to='/appointment' className='linkText'>Appointment</Link></button>
                <button><Link to='/prescription' className='linkText'>Prescription</Link></button>
                <button><Link to='/edituser' className='linkText'>Edit Profile Details</Link></button>
            </div>
        </div>
    )
}

export default Home
