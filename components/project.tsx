"use client"

import React, { useRef } from 'react'
import { projectsData } from '@/lib/data'
import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion'

type ProjectProps = typeof projectsData[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    
    const { scrollYProgress } = useScroll({
                                    target: ref,
                                    offset: ["0 1", "1.33 1"]
                                })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div ref={ref} style={{scale: scaleProgress, opacity: opacityProgress}} className="mb-3 group sm:mb-8 last:mb-0">
            <section className='bg-gray-100 max-w-[42rem] border backdrop-blur-[4px] border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] relative sm:group:even:pl-8 hover:bg-gray-200 hover:scale-105 hover:shadow transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>

                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
                    <ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li className="bg-black/[0.7] py-1 px-3 text-[0.7rem] uppercase tracking-wider dark:text-white/70 text-white rounded-full" key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <Image className="absolute top-8 -right-40 w-[28.25rem] h-full rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2 group-hover:scale-[1.04] transition hidden sm:block" src={imageUrl} alt={title} height={921} quality={95} />
            </section>
        </motion.div>
    );
}