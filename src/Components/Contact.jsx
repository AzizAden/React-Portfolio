import React from 'react';

const Contact = () => {
  return (
    <section name='contact' className='w-full h-screen bg-blue-900 flex justify-center items-center p-4'>

      <form method='POST' action="https://getform.io/f/e2255267-7c42-4907-87f7-5ff617211f6b" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-200'>Contact Me</p>
          <p></p>
        </div>
        <input className='bg-gray-300 p-2' type="text" placeholder='Name' name="name" required />
        <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name="email" required />
        <textarea className='bg-gray-300 p-2' rows="10" placeholder='Message' name="message" required></textarea>
        <button className='text-white border-2 hover:bg-yellow-400 hover:border-yellow-400 px-4 py-3 my-8 mx-auto flex items-center'>Hire Me</button>
      </form>

    </section>
  );
};

export default Contact;
