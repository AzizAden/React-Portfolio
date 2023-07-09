import React from 'react';

const About = () => {
  return (
    <section name='about' className='w-full h-screen bg-[#0b1a31] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full gap-8'>
          <div className='sm:text-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-500'>About</p>
          </div>
          <div>
            <p className='pl-4 pb-4'>
            Hello! I am Abdiaziz but most call me Aziz. I am an aspiring software developer whose had an interest in computers
                    since my middle school days but only had the chance to get a deeper dive and a career in it now. Aside from coding, I have diverse interests and hobbies. I love reading books,
                    hanging with family and friends, and playing sports or video games in my free time.!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
