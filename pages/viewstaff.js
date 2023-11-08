import React from 'react';

import { Table,Button, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useRouter } from 'next/router';
export default function ViewStaff({ staff }) {
  
    const router = useRouter()

    return (
        <>
        <h1 className='text-white text-center mt-10 mb-10 p-5 text-6xl'>Supporting Staffs Data</h1>
            <div className='container p-5'>
                
                <Table isStriped aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>Phone</TableColumn>
                        <TableColumn>ROLE</TableColumn>
                        <TableColumn>Details</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {
                            Object.keys(staff).map((key, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{staff[key].name}</TableCell>
                                        <TableCell>{staff[key].phone}</TableCell>
                                        <TableCell>{staff[key].role}</TableCell>
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getstaff`)
    const data = await res.json()
    const staff = data.staff



    return {
        props: { staff }, // will be passed to the page component as props
    }
}