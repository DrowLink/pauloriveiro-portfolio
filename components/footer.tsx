import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block text-xs'>
            {/* &copy; 2023 Paulo Riveiro. All rights reserved. */}
            &copy; 2023 Paulo Riveiro. Todos los derechos reservados.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>Sobre este sitio web: </span> Construido con React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
    </footer>
  )
}
