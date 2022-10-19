import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import GlobalObj from '../store/global-object'

function DoctorAppoint() {
    const ctx = useContext(GlobalObj)
    const id = ctx.currUser.id
    const [data, setData] = useState([])
    const url = `http://localhost:3333/appointment?doctorId=${id}`
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url)
            setData(response.data)
        }
        fetchData()
    },[])
    return (
        <div className='users'>
            <table>
                <tr>
                    <th>Patient ID</th>
                    <th>Appointment Date</th>
                    <th>Health Problem</th>
                    <th>Appointment Status</th>
                    <th>Doctor ID</th>
                </tr>
                {
                    data.map((item) => {
                        return (
                            <tr>
                                <td>{item.patientId}</td>
                                <td>{item.appointmentData}</td>
                                <td>{item.healthProblem}</td>
                                <td>{item.appointmentStatus ? "Done" : "Pending"}</td>
                                <td>{item.doctorId}</td>
                            </tr>)

                    })
                }
            </table>

        </div>
    )
}

export default DoctorAppoint
