import { appendOwnerState } from '@mui/base'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PatientAppoint() {
    const url = "http://localhost:3333/appointment"
    const[len,setLen] = useState(0)
    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(url)
            setLen(response.data.length)
        }
        fetchData()
    },[])
    const patid = useRef()
    const appdata = useRef()
    const hprob = useRef()
    const did = useRef()
    const history = useNavigate()
    const addAppointment = async(event) =>{
        event.preventDefault();
        const app = {
            "id":len+1,
            "patientId":patid.current.value,
            "appointmentData":appdata.current.value,
            "healthProblem":hprob.current.value,
            "appointmentStatus":false,
            "doctorId":did.current.value
        }
        await axios.post(url,app)
        history('/home')
    }

    return (
        <div className='startpage'>
            <form className='reg'>
                <input ref={patid} placeholder='Enter Your ID'/>
                <input ref={appdata} placeholder='Enter Your Available Date'/>
                <input ref={hprob} placeholder='Enter Your Health Problem'/>
                <input ref={did} placeholder='Enter ID of your Prefered Doctor'/>
                <button onClick={addAppointment} style={{color:"white",fontSize:"20px"}}>Submit</button>
            </form>

        </div>
    )
}

export default PatientAppoint
