"use client";

import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React from 'react';
import toast from 'react-hot-toast';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';

export default function Contact() {
    const { ref } = useSectionInView('Contact');


  return (
    <motion.section ref={ref} id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} viewport={{once: true}}>
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a className='underline' href='mailto:pauloriveiro01@gmail.com'>pauloriveiro01@gmail.com</a> or through this form.</p>
        <form className='mt-10 flex flex-col dark:text-black' action={async (formData) => { const { data, error } = await sendEmail(formData) 
        if (error) {
            toast.error(error)
            return;
        }
        toast.success("Email sent succesfully! 😎")
        }}>
            <input className="h-14 px-4 rounded-lg border borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" name="senderEmail" placeholder="Your email" required maxLength={500} type="email" />
            <textarea className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' maxLength={5000} name="message" placeholder='Your message'/>
            <SubmitBtn />
        </form>
    </motion.section>)
}
