import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section name='home' className='w-full h-screen bg-blue-900'>

      {/* home container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <p className='text-yellow-500'>Hello, I'm Abdiaziz Aden</p>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-200'>A Full Stack Developer</h1>
        <div>
          <Link to="portfolio" smooth={true} duration={500}>
            <button className='text-gray-100 border-2 px-5 py-3 my-2 flex items-center hover:bg-yellow-500'>
              <h2>View Work</h2>
              <HiArrowNarrowRight className='ml-2' />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Home;
