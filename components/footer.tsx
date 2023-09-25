import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block tet-xs'>
            &copy; {new Date(Date.now()).getFullYear()} John Roy Lapida. All rights reserved.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About this website:</span> built with React & Next.js (App Router & Server Actions), Typescript, TailwindCSS, Framer Motion, React Email & Vercel hosting.
        </p>
    </footer>
  )
}
