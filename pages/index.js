import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>Bufon&apos;s School</title>
    </Head>

    <div className='bg-zinc-900'>
        <div className="container mx-auto p-4">
          <section className="bg-white p-6 rounded shadow-md mb-6">
            <h1 className="text-2xl font-semibold mb-4">Announcements</h1>
            <p>Important news and updates will appear here.</p>
          </section>

          <section className="bg-white p-6 rounded shadow-md mb-6">
            <h1 className="text-2xl font-semibold mb-4">Student Information</h1>
            <ul>
              <li><a href="/students/1">John Doe</a></li>
              <li><a href="/students/2">Jane Smith</a></li>
              <li><a href="/students/3">David Johnson</a></li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded shadow-md mb-6">
            <h1 className="text-2xl font-semibold mb-4">Upcoming Events</h1>
            <ul>
              <li>Parent-Teacher Meeting on June 10</li>
              <li>School Picnic on July 15</li>
              <li>Mid-Term Exams from July 20 to July 30</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Quick Links</h1>
            <ul>
              <li><a href="/courses">View Courses</a></li>
              <li><a href="/attendance">View Attendance</a></li>
              <li><a href="/library">Library Catalog</a></li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}
