"use client"

import React from 'react'
import SectionHeading from './section-heading'

import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'

import toast from 'react-hot-toast'

export default function Contact() {
    const { ref } = useSectionInView('Contact')

    return (
        <motion.section initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} viewport={{once: true}} ref={ref} id="contact" className='scroll-mt-20 mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'>
            <SectionHeading>Contact Me</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">Please contact me directly at{" "}<a className='underline' href="mailto:johnroy062102calimlim@gmail.com">johnroy062102calimlim@gmail.com</a> or through this form.</p>

            <form id="contact-form" className="mt-10 flex flex-col dark:text-black" action={async (formData) => {
                const { data, error } = await sendEmail(formData)

                if(error)
                    toast.error(error)
                else 
                    toast.success('Email sent successfully!')

                let form = document.getElementById('contact-form') as HTMLFormElement
                form.reset()
            }}>
                <input className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" type="email" name='senderEmail' placeholder='youremail@example.com' maxLength={500} required/>
                <textarea className='h-52 my-3 rounded-lg borderbBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' name='message' placeholder='Your message...' maxLength={500} required/>

                <SubmitBtn />
            </form>
        </motion.section>
    )
}
