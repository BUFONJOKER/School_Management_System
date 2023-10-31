import React from 'react';

import { Table,Button, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useRouter } from 'next/router';
export default function ViewTeacher({ teacher }) {
    const router = useRouter()


    return (
        <>
            <div className='container mb-40 mt-40'>
                <Table isStriped aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>ROLE</TableColumn>
                        <TableColumn>STATUS</TableColumn>
                        <TableColumn>Details</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {
                            Object.keys(teacher).map((key, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{teacher[key].name}</TableCell>
                                        <TableCell>{teacher[key].subject}</TableCell>
                                        <TableCell>{teacher[key].email}</TableCell>
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getteacher`)
    const data = await res.json()
    const teacher = data.teacher



    return {
        props: { teacher }, // will be passed to the page component as props
    }
}