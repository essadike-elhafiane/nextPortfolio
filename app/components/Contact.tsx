"use client";
import "@/app/globals.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  let isSending = false;
  function sendEmail(e: FormEvent<HTMLFormElement>) {
    if (isSending) return;
    isSending = true;

    e.preventDefault();
    emailjs
      .sendForm(
        "service_vpn55fb",
        "template_f7uaz7l",
        e.currentTarget,
        "1M0zSCakfEeCqZ8Fv"
      )
      .then(
        (result) => {
          toast.success("Email sent successfully");
        },
        (error) => {
          toast.error("Error sending email");
        }
      )
      .finally(() => {
        isSending = false; // Reset the flag regardless of the promise outcome
      });
  }

  return (
   
    <form onSubmit={(e: FormEvent<HTMLFormElement>) => sendEmail(e)} className="relative">
      
      <div className="inputGroup mb-8 ">
        <input
          name="fullName"
          type="text"
          className="Inputt"
          required
          autoComplete="off"
          id="fullName"
        />
        <label htmlFor="fullName">Full Name</label>
      </div>
      <div className="inputGroup mb-8 ">
        <input
          type="mail"
          className="Inputt"
          name="email"
          id="email"
          required
          autoComplete="off"
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="inputGroup mb-8 ">
        <textarea
          name="message"
          className="Inputt max-h-[120px] min-h-[120px]"
          required
          autoComplete="off"
          id="message"
        />
        <label htmlFor="message">Message</label>
      </div>
      <button className=" bg-teal-400/10 text-sm font-medium leading-5 text-teal-300">
        <div className="svg-wrapper-1 ">
          <div className="svg-wrapper ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>Send</span>
      </button>
    </form>
  );
};

export default Contact;
