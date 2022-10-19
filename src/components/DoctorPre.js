import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function DoctorPre() {
    const patid = useRef();
    const date = useRef();
    const medicene = useRef();
    const dosage = useRef();
    const days = useRef();
    const remarks = useRef();
    const url = "http://localhost:3333/prescription"
    const history = useNavigate()
    const[len,setLen] = useState(0)
    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(url)
            setLen(response.data.length)
        }
        fetchData()
    },[])
    const onclickhandle = async (event) => {
        event.preventDefault();
        const pre = {
            "id": len+1,
            "patientId": patid.current.value,
            "prescriptionData": date.current.value,
            "mediceneName": medicene.current.value,
            "mediceneDosage": dosage.current.value,
            "days": days.current.value,
            "remarks": remarks.current.value
        }
        await axios.post(url, pre)
        history('/home')
    }
    return (
        <div className='startpage'>
            <form className='reg'>
                <input ref={patid} placeholder='Enter Patient ID' />
                <input ref={date} placeholder='Enter Date' />
                <input ref={medicene} placeholder='Enter Medicene Name' />
                <input ref={dosage} placeholder='Enter Dosage' />
                <input ref={days} placeholder='Enter Days' />
                <input ref={remarks} placeholder='Enter Remarks' />
                <button onClick={onclickhandle} style={{ color: 'white', fontSize: '20px' }}>Submit</button>

            </form>
        </div>
    )
}

export default DoctorPre
