"use client";

// import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React from 'react';
import toast from 'react-hot-toast';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';

export default function Contact() {
    const { ref } = useSectionInView('Contacto');


  return (
    <motion.section ref={ref} id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 5}} viewport={{once: true}}>
        <SectionHeading>¡Contactáme! 📨</SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>Póngase en contacto conmigo al <a className='underline' href='mailto:pauloriveiro01@gmail.com'>pauloriveiro01@gmail.com</a> o a través de este formulario.</p>
        <form className='mt-10 flex flex-col dark:text-black'
        // if (error) {
        //     toast.error(error)
        //     return;
        // }
        // toast.success("Email sent succesfully! 😎✅")
        // toast.success("Correo enviado exitosamente! 😎✅")
        >
            <input className="h-14 px-4 rounded-lg border borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" name="senderEmail" placeholder="Your email" required maxLength={500} type="email" />
            <textarea className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' maxLength={5000} name="message" placeholder='Your message'/>
            <SubmitBtn />
        </form>
    </motion.section>)
}
