import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#151729] flex justify-center items-center p-4"
    >
      <form action="https://getform.io/f/099d819b-05a5-479b-91f2-881e2da71ca7" method="POST" className="flex flex-col max-w-[800px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-rose-400 text-gray-300">
            contact
          </p>
          <p className="text-gray-300 py-4">Send me an email</p>
        </div>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="pg-white p-2"
        />
        <input type="email" placeholder="Your Email" name='email' className="my-4 p-2 bg-white" />
        <textarea className="bg-white p-2" name="message" placeholder='Your Message'rows="10"></textarea>
        <button className="text-gray-300 border-2 hover:bg-rose-400 px-4 py-3 my-8 mx-auto flex items-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
