import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import SectionHeading from './section-heading'

export default function Contact() {
  return (
    <section id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)]'>
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700'>Please contact me directly at <a className='underline' href='mailto:pauloriveiro01@gmail.com'>pauloriveiro01@gmail.com</a> or through this form.</p>
        <form className='mt-10 flex flex-col'>
            <input className="h-14 rounded-lg border borderBlack" type="email" />
            <textarea className='h-52 my-3 rounded-lg borderBlack p-4'/>
            <button className="h-[3rem] w-[8rem] bg-gray-900" type='submit'>Submit <FaPaperPlane /></button>
        </form>
    </section>)
}
