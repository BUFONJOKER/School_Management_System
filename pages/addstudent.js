import React from 'react';
import { Input, Button } from "@nextui-org/react";

export default function AddStudents() {
    return (
        <>
            <h1 className='text-white text-center text-4xl mt-10 mb-5'>Add Students Data</h1>
            <div className='container p-5'>
                <div className="grid grid-cols-2 gap-8">
                    <Input type="name" label="Name" placeholder='Enter Your Name' />
                    <Input type="name" label="Father Name" placeholder="Enter your father name" />
                    <Input type="name" label="Mother Name" placeholder="Enter your mother name" />
                    <Input type='text' label="Date Of Birth" placeholder="Enter your date of birth" />
                    <Input type="text" label="Bay Form No" placeholder='Enter Your Bay Form Number' />
                    <Input type="email" label="Email" placeholder="Enter your email" />
                    <Input type='text' label="Phone" placeholder="Enter your Phone" />
                    <Input type='text' label="Address" placeholder="Enter your address" />
                    <Input type='number' label="Class" placeholder="Enter your class" />
                    <Input type='text' label="Section" placeholder="Enter your section" />
                    <Input type='number' label="Fees" placeholder="Enter your phone number" />
                    <Input type='text' label="Roll No" placeholder="Enter your roll number" />
                    <Input type='text' label="Registration" placeholder="Enter your registration" />

                </div>
                <Button className='text-xl mt-5'>Submit</Button>

            </div>
        </>

    )
}
