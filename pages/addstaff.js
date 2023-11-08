import React from 'react';
import { Input, Button } from "@nextui-org/react";

export default function AddStaff() {
    return (
        <>
            <h1 className='text-white text-center text-4xl mt-10 mb-5'>Add Staff Data</h1>
            <div className='container p-5'>
                <div className="grid grid-cols-2 gap-8">
                    <Input type="name" label="Name" placeholder='Enter Your Name' />
                    <Input type="email" label="Email" placeholder="Enter your email" />
                    <Input type='text' label="Phone" placeholder="Enter your phone number" />
                    <Input type="text" label="Address" placeholder='Enter Your Address' />
                    <Input type="text" label="Role" placeholder="Enter your Role" />
                    <Input type='text' label="Qualification" placeholder="Enter your Qualification" />
                    <Input type='number' label="Salary" placeholder="Enter your phone number" />


                </div>
                <Button className='text-xl mt-5'>Submit</Button>

            </div>
        </>

    )
}
