
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import Link from '@mui/material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';

export default function BasicTable({ finalData, setfinalData }) {
    const history = useHistory()
    return (
        <div>
            <div id="table">
                <div id="top">
                    <h3>User List Dashboard</h3>
                    <div className="links">
                        <Link href="/">Home</Link>
                        <Link href="/adduser">Add user</Link>
                    </div>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="centre">Name</TableCell>
                            <TableCell align="justify">Email id</TableCell>
                            <TableCell align="justify">Roll no</TableCell>
                            <TableCell align="justify">Location</TableCell>
                            <TableCell align="justify">Edit User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {finalData.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="justify">{row.emailid}</TableCell>
                                <TableCell align="justify">{row.rollno}</TableCell>
                                <TableCell align="justify">{row.location} </TableCell>
                                <TableCell align="justify">
                                    <IconButton onClick={() => { history.push("/edituser/" + index) }}
                                        color="primary" aria-label="editbutton">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => {
                                        const deletefile = index;
                                        const deleteuser = finalData.filter((user_data, indexvalue) => indexvalue !== deletefile)
                                        setfinalData(deleteuser)
                                    }
                                    } color='error' aria-label="deletebutton">
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

