import React, { useContext } from 'react'
import GlobalObj from '../store/global-object'
import DoctorPre from './DoctorPre'
import PatientPre from './PatientPre'

function Prescription() {
  const ctx = useContext(GlobalObj)
  const role = ctx.currUser.userRole.toLowerCase()
  return (
    <div>
      {
        {
          "patient":<PatientPre/>,
          "doctor":<DoctorPre/>,
          "admin":<div style={{fontSize:"20px",color:"black",padding:"30px"}}>Only accessed by Doctor and Patient</div>
        }[role]
      }
    </div>
  )
}

export default Prescription
