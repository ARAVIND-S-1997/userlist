
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';

// import { useState } from "react"
// import { Display } from "./display"

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function createData(name, emailid, rollno, location) {
    return { name, emailid, rollno, location };
}

const rows = [
    createData('Aravind', "aravind@gmail.com", "01", "Tirunelveli"),
    createData('Ajith', "ajith@gmail.com", "02", "Tirunelveli"),
    createData('Ajith Kumar', "ajithkumar@gmail.com", "03", "Tirunelveli"),
    createData('Ash', "ash@gmail.com", "04", "Tirunelveli"),
    createData('Adam', "adam@gmail.com", "05", "Tirunelveli"),
];

export default function BasicTable() {
    return (
        <div>
            <div id="table">
                <div id="top">
                    <h3>User List Dashboard</h3>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="centre">Name</TableCell>
                            <TableCell align="centre">Email id</TableCell>
                            <TableCell align="centre">Roll no</TableCell>
                            <TableCell align="centre">Location</TableCell>
                            <TableCell align="centre">Edit User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="centre">{row.emailid}</TableCell>
                                <TableCell align="centre">{row.rollno}</TableCell>
                                <TableCell align="centre">{row.location} </TableCell>
                                <TableCell align="centre">
                                <IconButton color="primary" aria-label="editbutton">
                                    <EditIcon />
                                </IconButton>
                                <IconButton color='error' aria-label="deletebutton">
                                    <DeleteIcon />
                                </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}



// export function UsersDetails(){
// const initialdata=[{ 
//     id:"01",
//     name:"Aravind",
//     emailid:"aravind@gmail.com",
//     contactno:"9856321471"
// },

// { 
//     id:"02",
//     name:"Ajith",
//     emailid:"ajith@gmail.com",
//     contactno:"8569742315"
// },

// { 
//     id:"03",
//     name:"Adam",
//     emailid:"adam@gmail.com",
//     contactno:"7895463216"
// },
// { 
//     id:"04",
//     name:"Ash",
//     emailid:"ash@gmail.com",
//     contactno:"9758641236"
// }
// ]
// const[finalData,setfinalData]=useState(initialdata)
//     return(
//        <div>
//            {finalData.map((id,name,emailid,contactno)=><Display Id={id} Name={name} Emailid={emailid} Contactno={contactno}/>)}
//        </div>
//     )
// }