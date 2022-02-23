
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
// import { useHistory } from "react-router-dom";

export function Adduser() {

    const [userName, setuserName] = useState([]);
    const [userEmailid, setuserEmailid] = useState([]);
    const [userRollno, setuserRollno] = useState([]);
    const [userLocation, setuserLocation] = useState([]);
    const [finalData, setfinalData] = useState([]);

    const userData = () => {
        const data = {
            userName,
            userEmailid,
            userRollno,
            userLocation
        }
        return setfinalData(data)
    }

    console.log(finalData)
    return (
        <div>
            <div id="table">
                <div id="top">
                    <h3>User List Dashboard</h3>
                </div>
            </div>
            <div >
                <div className='adduserfield'>
                <TextField onChange={(event) => setuserName(event.target.value)} id="Enter the Name" label="Name" variant="filled" />
                <TextField onChange={(event) => setuserEmailid(event.target.value)} id="Enter the Email id" label="Email id" variant="filled" />
                <TextField onChange={(event) => setuserRollno(event.target.value)} id="Enter the Roll Number" label="Roll Number" variant="filled" />
                <TextField onChange={(event) => setuserLocation(event.target.value)} id="Enter the Location" label="location" variant="filled" />
                <Button onClick={userData} variant="contained">Add user</Button>
                </div>
            </div>
        </div>
    )
}