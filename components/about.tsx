"use client"

import SectionHeading from './section-heading'

import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section ref={ref} id='about' className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}}>
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
            I am a <span className="font-bold">Freelance Mobile App and Website Developer</span> based in the Philippines. I started learning to program way back year 2016 when I was in my 2nd year high school. 
            I started pursuing my passion in programming because of my curiousity on how various techs are made. 
            Before I started on focusing on being an aspiring developer, I have also delved into modifying mobile applications such as 
            adding more features and functionalities to the application and such. Then a year or so, I got interested on how a website is made 
            so I started learning web development through the help of youtube tutorials and online learning applications and websites. Particularly{" "}
            <span className="font-bold underline"><a href="https://w3schools.com" target='_blank'>W3Schools</a></span> and <span className="font-bold underline"><a href='https://sololearn.com' target="_blank">Sololearn</a></span>. 
            Those learning platforms were a really big help for me, because of those platforms, I am here today as a <span className="font-bold">Freelance Mobile App and Website Developer</span>.
        </p>
    </motion.section>
  )
}
