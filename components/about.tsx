"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'


export default function About() {
  const { ref } = useSectionInView('Acerca');

  return (
    <motion.section ref={ref} className='mb-28 sm:mb-1 max-w-[45rem] text-center leading-8  scroll-mt-28' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about">
      {/* <SectionHeading>About me</SectionHeading> */}
      {/* <p className='mb-3'>
          As a Full-Stack developer, I&apos;m excited to bring my skills in{" "} 
          <span className="font-medium">React, Javascript, Typescript, Django, Python, Tailwind, Bootstrap, Next.JS, HTML, and CSS.</span>{" "} 
          To a dynamic and innovative team. With a passion for automation and optimization on cutting-edge technology, 
          I am committed to streamlining routine processes and driving growth across a variety of industries. 
          With a strong background in operations and a love of organization, I am confident in my ability to bring 
          an adaptable, <span className="underline">detail-oriented</span>{" "} approach to any project.
        </p> */}
      <SectionHeading>Acerca de mí 🔎</SectionHeading>
      <p className='mb-3'>
        Como desarrollador Full-Stack, Me complace aportar mis habilidades en{" "}
        <span className="font-medium">React, Javascript, Typescript, Django, Python, Tailwind, Bootstrap, Next.JS, PHP, Laravel, FastAPI, HTML, y CSS.</span>{" "}
        A un equipo dinámico e innovador. Con pasión por la automatización y optimización de tecnologías de punta,
        Estoy comprometido a optimizar los procesos rutinarios e impulsar el crecimiento y escabilidad de diversos sistemas.
        Confío en mi capacidad para traer un adaptable enfoque  <span className="underline">orientado al detalle</span>{" "}
        para la resolución de problemas en distintos proyectos.
      </p>
    </motion.section>
  )
}
