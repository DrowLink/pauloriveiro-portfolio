"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'


export default function About() {
  const { ref } = useSectionInView('About');


  


  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' initial={{ opacity: 0, y: 100}} animate={{ opacity: 1, y: 0}} transition={{ delay: 0.175 }} id="about">
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
          {/* After graduating with a degree in{" "}
          <span className="font-medium">Accounting</span>, I decided to pursue my
          passion for programming. I enrolled in a coding bootcamp and learned{" "}
          <span className="font-medium">full-stack web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>
          . I am also familiar with TypeScript and Prisma. I am always looking to
          learn new technologies. I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a software
          developer.
        </p>
        <p>

<span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>

          <span className="italic">When I&apos;m not coding</span>, I enjoy playing
          video games, watching movies, and playing with my dog. I also enjoy{" "}
          <span className="font-medium">learning new things</span>. I am currently
          learning about{" "}
          <span className="font-medium">history and philosophy</span>. I&apos;m also
          learning how to play the guitar. */}
          As a Full-Stack developer, I'm excited to bring my skills in{" "} 
          <span className="font-medium">React, Javascript, Typescript, Django, Python, Tailwind, Bootstrap, Next.JS, HTML, and CSS.</span>{" "} 
          To a dynamic and innovative team. With a passion for automation and optimization on cutting-edge technology, 
          I am committed to streamlining routine processes and driving growth across a variety of industries. 
          With a strong background in operations and a love of organization, I am confident in my ability to bring 
          an adaptable, <span className="underline">detail-oriented</span>{" "} approach to any project.
        </p>
    </motion.section>
  )
}
