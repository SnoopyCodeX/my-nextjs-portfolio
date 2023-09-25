"use server"

import { getErrorMessage, validateString } from '@/lib/utils'
import { Resend } from 'resend'

import ContactFormEmail from '@/email/contact-form-email'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    let from = formData.get('senderEmail')
    let message = formData.get('message')

    if(!validateString(from, 500)) {
        return {
            error: 'Invalid email address'
        }
    }

    if(!validateString(message, 5000)) {
        return {
            error: 'Invalid message'
        }
    }

    try {
        let data = await resend.emails.send({
            to: 'extremeclasherph@gmail.com',
            from: 'Contact Form <onboarding@resend.dev>',
            subject: 'Message from My Portfolio',
            reply_to: from as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string, 
                senderEmail: from as string
            }),
        })

        return {
            data
        }
    } catch(error) {
        return {
            error: getErrorMessage(error)
        }
    }
}