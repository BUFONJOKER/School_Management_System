import React from 'react';

import { Table,Button, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useRouter } from 'next/router';
export default function ViewStudent({ student }) {
  
    const router = useRouter()

    return (
        <>
        <h1 className='text-white text-center mt-10 mb-10 p-5 text-6xl'>Students Data</h1>
            <div className='container p-5'>
                
                <Table isStriped aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>Class</TableColumn>
                        <TableColumn>Roll NO</TableColumn>
                        <TableColumn>Details</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {
                            Object.keys(student).map((key, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{student[key].name}</TableCell>
                                        <TableCell>{student[key].class}</TableCell>
                                        <TableCell>{student[key].roll}</TableCell>
                                        <TableCell><Button>Details</Button></TableCell>
                                    </TableRow>
                                )
                            })
                        }


                    </TableBody>
                </Table>
            </div>

        </>
    )
}


export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getstudent`)
    const data = await res.json()
    const student = data.student



    return {
        props: { student }, // will be passed to the page component as props
    }
}