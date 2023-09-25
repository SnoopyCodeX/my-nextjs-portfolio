"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'
import { dateDiffInYears } from '@/lib/utils'
import catProfileImg from '@/public/cat_profile.jpg'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5)
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
    let yearsOfFreelancingExperience = dateDiffInYears(new Date("2020-11-1"), new Date(Date.now()))
    let yearsOfProgrammingExperience = dateDiffInYears(new Date("2016-06-1"), new Date(Date.now()))

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className='flex items-center justify-center'>
                <div className="relative">
                    <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "tween", duration: 0.2}}>
                        <Image src={catProfileImg} alt="John Roy Lapida's photo" className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl' quality={95} priority={true}/>
                    </motion.div>

                    <motion.span initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "spring", stiffness: 125, delay: 0.1, duration: 0.7}} className="absolute bottom-0 right-0 text-4xl">🤙</motion.span>
                </div>
            </div>

            <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 1}} className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
                <span className="font-bold">Hello, I&apos;m John Roy Lapida</span>. I&apos;m a <span className="font-bold">freelance website and mobile app developer</span> with <span className="font-bold">{yearsOfFreelancingExperience} years</span> of experience in freelancing and have <span className='font-bold'>{yearsOfProgrammingExperience} years</span> of experience in programming.
            </motion.h1>

            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}} className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full ouline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition" onClick={() => {
                    setActiveSection('Contact')
                    setTimeOfLastClick(Date.now())
                }}>
                    Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1" />
                </Link>

                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full ouline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10" href="/CV.pdf" download>
                    Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>
                
                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full ouline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="https://www.linkedin.com/in/johnroylapida" target="_blank">
                    <BsLinkedin />
                </a>
                
                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] ouline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="https://www.github.com/SnoopyCodeX" target="_blank">
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}
