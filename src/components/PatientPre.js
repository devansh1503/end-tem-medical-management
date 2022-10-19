import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import GlobalObj from '../store/global-object'

function PatientPre() {
    const ctx = useContext(GlobalObj)
    const id = ctx.currUser.id
    const url = `http://localhost:3333/prescription?patientId=${id}`
    const[data,setData] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(url)
            console.log(response.data)
            setData(response.data)
        }
        fetchData()
    },[])
  return (
    <div className='prescriptions'>
      {data.map((item)=>{
        return <div className='pres'>
            <div>Date: {item.prescriptionData}</div>
            <div>Medicene: {item.mediceneName}</div>
            <div>Dosage: {item.mediceneDosage}</div>
            <div>Days: {item.days}</div>
            <div>Remarks: {item.remarks}</div>
        </div>
      })}
    </div>
  )
}

export default PatientPre
