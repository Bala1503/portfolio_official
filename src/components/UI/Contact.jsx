import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_05gcj4b', 'template_uj00upr', form.current, {
        publicKey: 'ArfZn3wvukqL798bb',
      })
      .then(
        () => {
          toast.success('Mail sent successfully');
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section id="contact" className="pb-16">
        <br /><br />
        <div className="container">
            <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
                Get in touch
            </h2>
            <div className="md:flex justify-between items-center">
                <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                    <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.8172528566747!2d78.13898557406453!3d8.803232992484054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef962d73f39d%3A0x90a076e43c222ffe!2sMelur%20Bungalow%20St%2C%20Thoothukudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704640588022!5m2!1sen!2sin" className="border-0 w-full h-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                    <form ref={form} onSubmit={sendEmail} className="w-full">
                        <div className="mb-5">
                            <input type="text" placeholder="Enter your name" name='user_name' className="w-full p-3 focus:outline-none rounded-[5px]" />
                        </div>
                        <div className="mb-5">
                            <input type="email" placeholder="Enter your email" name='user_mail' className="w-full p-3 focus:outline-none rounded-[5px]" />
                        </div>
                        <div className="mb-5">
                            <input type="text" placeholder="Subject" name='user_subject' className="w-full p-3 focus:outline-none rounded-[5px]" />
                        </div>
                        <div className="mb-5">
                            <textarea type="text" rows={3} placeholder="Write your message" name='message' className="w-full p-3 focus:outline-none rounded-[5px]" />
                        </div>
                        <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact