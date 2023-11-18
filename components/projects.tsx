"use client";

import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import Project from "./project";
import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';


export default function Projects() {
    const { ref } = useSectionInView('Proyectos', 0.5);


    return (
        <section ref={ref} id="projects" className='scroll-mt-28 mb-28'>
            <SectionHeading>Mis Proyectos 🧑‍💻</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </ React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}


