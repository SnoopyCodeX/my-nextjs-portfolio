"use client"

import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import Project from './project'
import SectionHeading from './section-heading'

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.2)

    return (
        <section ref={ref} id="projects" className='scroll-mt-28 mb-28'>
            <SectionHeading>My Projects</SectionHeading>

            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}