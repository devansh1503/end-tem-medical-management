
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalObj from '../store/global-object'

function Users() {
    const ctx = useContext(GlobalObj)
    //console.log(ctx.currUser)
    const role = ctx.currUser.userRole.toLowerCase()
    console.log(role)
    const url = "http://localhost:3333/users"
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url)
            console.log(response.data)
            setData(response.data)
        }
        fetchData()
    }, [data])
    const history = useNavigate()

    return (
        <div className='users'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Approval Status</th>
                    {role==='admin' && <th>Delete User</th>}
                </tr>
                {
                    data.map((item) => {
                        return (
                            <tr>
                                <td>{item.userName}</td>
                                <td>{item.userRole}</td>
                                <td>{item.userAddress}</td>
                                <td>{item.userContact}</td>
                                <td>{item.userGender}</td>
                                <td>{item.userAge}</td>
                                <td>{role === 'admin' ? 
                                (!item.approvalStatus?<button style={{color:"white",backgroundColor:"crimson"}} 
                                onClick={()=>{
                                    async function udpateData(){
                                        const newUse = {
                                            "id": item.id,
                                            "userName": item.userName,
                                            "userRole": item.userRole,
                                            "userAddress": item.userAddress,
                                            "userContact": item.userContact,
                                            "userGender": item.userGender,
                                            "userAge": item.userAge,
                                            "approvalStatus": true
                                          }
                                        await axios.put(`${url}/${item.id}`,newUse)
                                        //history('/home')
                                    }
                                    udpateData()
                                }}>Approve</button>:<div>Approved!</div>):<div style={{color:"white",fontSize:"20px"}}>{item.approvalStatus ? "Approved":"Not Approved"}</div>}</td>
                                <td>{role==='admin' && <button style={{color:"white",backgroundColor:"crimson"}}
                                 onClick={()=>{
                                    async function deleteData(){
                                        await axios.delete(`http://localhost:3333/users/${item.id}`)
                                    }
                                    deleteData()
                                 }}>Delete</button>}</td>
                            </tr>)
                        /*  */

                    })
                }
            </table>
        </div>
    )
}

export default Users
