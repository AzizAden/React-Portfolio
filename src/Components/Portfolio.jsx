import React from 'react';
import FlixFinder from '../assets/FlixFinder.png';
import Daily from '../assets/planner.png';
import Suana from '../assets/Suana.png';

const Portfolio = () => {
  return (
    <section name='portfolio' className='w-full md:h-screen text-gray-300 bg-blue-900'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-500'>Projects</p>
          <p className='py-5'>Check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{ backgroundImage: `url(${FlixFinder})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto img-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <h2 className='font-bold text-white'>FlixFinder -</h2>
              <span className='text-2xl font-bold text-white tracking-wider'></span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/Are-Jae/FlixFinder'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Suana})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto img-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <h2 className='font-bold text-white'>Sauna Games -</h2>
              <span className='text-2xl font-bold text-white tracking-wider'></span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/m-vanhoose/Sauna-Game' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Daily})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto img-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <h2 className='font-bold text-white'>Daily Planner -</h2>
              <span className='text-2xl font-bold text-white tracking-wider'></span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/AzizAden/Day-Planner' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
