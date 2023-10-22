import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import Head from 'next/head'
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import ExpenseChart from '@/components/ExpenseChart';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const list = [
    {
      title: "Students",
      img: "/student.jpg",
      price: "250",
    },
    {
      title: "Students",
      img: "/student.jpg",
      price: "250",
    },
    {
      title: "Students",
      img: "/student.jpg",
      price: "250",
    },

  ];

  const jsonData = {
    "schoolName": "ABC School",
    "expenses": [
      {
        "category": "Salary and Payroll",
        "items": [
          {
            "name": "Teachers' Salaries",
            "amount": 35000
          },
          {
            "name": "Support Staff Salaries",
            "amount": 15000
          }
        ]
      },
      {
        "category": "Utilities",
        "items": [
          {
            "name": "Electricity Bill",
            "amount": 2000
          },
          {
            "name": "Water Bill",
            "amount": 1000
          },
          {
            "name": "Internet and Phone",
            "amount": 800
          }
        ]
      },
      {
        "category": "Maintenance and Repairs",
        "items": [
          {
            "name": "Building Repairs",
            "amount": 3000
          },
          {
            "name": "Equipment Maintenance",
            "amount": 1500
          }
        ]
      },
      {
        "category": "Educational Resources",
        "items": [
          {
            "name": "Textbooks and Supplies",
            "amount": 5000
          },
          {
            "name": "Computer Software",
            "amount": 2500
          }
        ]
      },
      {
        "category": "Transportation",
        "items": [
          {
            "name": "School Buses Fuel",
            "amount": 1200
          },
          {
            "name": "Vehicle Maintenance",
            "amount": 800
          }
        ]
      },
      {
        "category": "Extracurricular Activities",
        "items": [
          {
            "name": "Sports Equipment",
            "amount": 1000
          },
          {
            "name": "Event Organization",
            "amount": 2000
          }
        ]
      }
    ]
  }



  return (
    <>
      <Head>
        <title>Bufon&apos;s School</title>
      </Head>

      <div className='bg-zinc-900'>
        <h1 className='text-white text-center mt-5 mb-5 text-5xl'>School Management System</h1>

        <div className=" m-5 gap-5 grid grid-cols-2 sm:grid-cols-3">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  quality={100}
                  width={100}
                  height={100}  // Set the width
                  alt={item.title}
                  className="object-cover"
                  src={item.img}
                  style={{ height: "auto" }}  // Use CSS to maintain aspect ratio
                />

              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <h1 className=' text-5xl text-white text-center'>School Expenses</h1>
        <div className="bg-transparent  rounded-lg shadow-md mb-10 p-10">
          <Card className="max-w-[auto] bg-sky-950 text-white text-center">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
              </div>
            </CardHeader>
            <Divider />
            <CardBody>

              <div className="container mx-auto py-8 bg-white">

                <ExpenseChart jsonData={jsonData} />
              </div>
            </CardBody>
            <Divider />

          </Card>

        </div>

        <h1 className=' text-5xl text-white m-20 text-center'>Features of School Management System</h1>

        <div className='mb-30' >
          <Card className="max-w-[auto] bg-sky-950 text-white text-center text-3xl">
            <CardHeader className="flex gap-3">
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="mb-6">
                <h3 className="text-4xl font-semibold mb-2">Student Information Management</h3>
                <ul>
                  <li>Maintain a database of student records, including personal information, contact details, enrollment history, and demographic data.</li>
                  <li>Track student attendance, behavior, and health records.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-4xl font-semibold mb-2">Academic Management</h3>
                <ul>
                  <li>Create and manage class schedules, subject assignments, and classroom allocations.</li>
                  <li>Maintain academic calendars, including exam schedules and academic events.</li>
                  <li>Manage academic resources like textbooks and study materials.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-4xl font-semibold mb-2">Teacher and Staff Management</h3>
                <ul>
                  <li>Store information about teaching and non-teaching staff members, including qualifications, contact details, and employment history.</li>
                  <li>Assign roles and responsibilities to staff members.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-4xl font-semibold mb-2">Online Learning Integration</h3>
                <ul>
                  <li>Integrate e-learning tools, video conferencing, and digital classrooms.</li>
                  <li>Support remote learning and blended learning environments.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-4xl font-semibold mb-2">Mobile Accessibility</h3>
                <ul>
                  <li>Provide a mobile app for parents, students, and staff to access information and communicate on the go.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-4xl font-semibold mb-2">Multi-language Support</h3>
                <ul>
                  <li>Offer multi-language support for diverse user groups and international schools.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-4xl font-semibold mb-2">Customization and Scalability</h3>
                <ul>
                  <li>Customize the system to match the specific needs and branding of the school.</li>
                  <li>Ensure scalability to accommodate the growth of the school.</li>
                </ul>
              </div>
            </CardBody>
            <Divider />
          </Card>
        </div>

      </div>
    </>
  )
}
