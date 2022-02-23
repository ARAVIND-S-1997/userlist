import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';


// Edit user

export function Edituser({ finalData, setfinalData }) {
    const { index } = useParams();
    const match = finalData[index];
    const [name, setname] = useState(match.name);
    const [emailid, setemailid] = useState(match.emailid);
    const [rollno, setrollno] = useState(match.rollno);
    const [location, setlocation] = useState(match.location);
    const history = useHistory();
    const edituserData = () => {
        const data = {
            name,
            emailid,
            rollno,
            location
        }
        const edit = [...finalData];
        edit[0] = data;
        setfinalData(edit);
        history.push("/")
    }
    return (
        <div className='inputfieldcontainer'>
            <TextField className='inputfields' value={name} onChange={(event) => setname(event.target.value)} label="Enter the Name" id="Name" variant="filled" />
            <TextField className='inputfields' value={emailid} onChange={(event) => setemailid(event.target.value)} label="Enter the Email id" id="Email id" variant="filled" />
            <TextField className='inputfields' value={rollno} onChange={(event) => setrollno(event.target.value)} label="Enter the Roll Number" id="Roll Number" variant="filled" />
            <TextField className='inputfields' value={location} onChange={(event) => setlocation(event.target.value)} label="Enter the Location" id="location" variant="filled" />
            <Button onClick={edituserData} variant="contained">save</Button>
        </div>
 
    )
}