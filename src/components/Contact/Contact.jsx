import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Adress from "../img/address.png";


function Contact() {
    const formRef = useRef();
    const[emailSent, emailSentDone] = useState("");
    const[NameSent, NameSentDone] = useState("");
    const[subjectSent, subjectSentDone] = useState("");
    const[messageSent, messageSentDone] = useState("");
    
     

    const handleSubmit = (e) => {
        e.preventDefault();
        
            emailjs.sendForm(
                'service_m4r9aep', 'template_so7ndmq', formRef.current, 'FoHGMTzugJjgWFaIe')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
    }

    const submitClick  = () => {
        NameSentDone("");
        subjectSentDone("");
        emailSentDone("");
        messageSentDone("");
        alert("Thank you for your mail")
        
    }

    return (
    <div className="h-screen relative mt-72 max-[480px]:mt-24">
      <div className="h-full w-5 bg-[#59b256] absolute "></div>
      {/* wrapper */}
      <div className="flex max-[480px]:py-0 max-[480px]:px-12 max-[480px]:flex-col">
        {/* left */}
        <div className="flex-1 mt-16 flex flex-col justify-center ml-24">
          <h1 className="text-5xl max-[480px]:mt-0 max-[480px]:text-3xl max-[480px]:mb-10 font-bold leading-relaxed">
            Let's discuss <br></br> Your Project
          </h1> 
          <div className="flex mt-20  max-[480px]:w-22 max-[480px]:my-4 max-[480px]:mx-0 ">
            <img src={Phone} alt="" className="w-7 h-7 mr-6" />
            <p>+923312838700 | 3168093504</p>
          </div>
          <div className="flex mt-20  max-[480px]:w-22 max-[480px]:my-4 max-[480px]:mx-0 ">
            <img src={Email} alt="" className="w-7 h-7 mr-6" />
            <p>qaderrkhan9@gmail.com</p>
          </div>
          <div className="flex mt-20 max-[480px]:w-22 max-[480px]:my-4 max-[480px]:mx-0 ">
            <img src={Adress} alt="" className="w-7 h-7 mr-6" />
            <p>
              Quaid-e-Azam Campus, Punjab <br />
              University, Lahore
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex-1">
          <div className="flex flex-col mt-20 w-4/5">
            <p className="max-[480px]:hidden">
              <b>What is your story?</b> Get in touch.Always available for
              freelancing if the right project comes along me
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col mt-6 max-[480px]:mt-0 max-[480px]:ml-16 max-[480px]:mb-12 max-[480px]:flex max-[480px]:flex-wrap">
              <input
                type="text"
                placeholder="Name.."
                name="user_name"
                className=" m-3  rounded-none rounded-b-sm border-b-2 p-3"
                value={NameSent} onChange={(e) => {NameSentDone(e.target.value)}}
              />
              <input
                type="text"
                name="user_subject"
                placeholder="Subject.."
                className=" m-3  rounded-none rounded-b-sm border-b-2 p-3"
                value={subjectSent} onChange={(e) => {subjectSentDone(e.target.value)}}
              />
              <input
                type="text"
                name="user_email"
                placeholder="Email.."
                className=" m-3  rounded-none rounded-b-sm border-b-2 p-3"
                value={emailSent} onChange={(e) => {emailSentDone(e.target.value)}}
              />
              <textarea
                name="message"
                placeholder="Message.."
                cols="8"
                rows="5"
                className="m-3 rounded-none rounded-b-sm border-b-2  p-3" 
                value={messageSent} onChange={(e) => {messageSentDone(e.target.value)}}
              ></textarea>
              <button className="px-2 py-3 text-md text-[#59b256] font-bold rounded-full border border-purple-200 hover:text-white hover:bg-[#59b256] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-[#59b256] focus:ring-offset-2"
              onClick={submitClick}>
                submit
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
