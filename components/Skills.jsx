import Image from 'next/image';
import React from 'react';
import { BiCrown } from 'react-icons/bi';

const Nextjs = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166282/portfolio/skills/nextjs_wy1i1z.png';
const Angular = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166280/portfolio/skills/angular_w7jepf.png';
const RazorPages = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166280/portfolio/skills/csharp_yoilfu.png';
const Bootstrap = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166280/portfolio/skills/bootstrap_jq4wqy.jpg';
const Tailwind = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166282/portfolio/skills/tailwind_dxujie.png';
const Laravel = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166281/portfolio/skills/laravel_uywzcc.png';
const ASPNet = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166281/portfolio/skills/net6_rmlyd4.png';
const Node = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166282/portfolio/skills/node_xtw3ol.png';
const SQL = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166282/portfolio/skills/sql_qvx6cv.png';
const MySQL = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166281/portfolio/skills/mysql_umaifl.png';
const Postgre = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166282/portfolio/skills/postgre_pnzn7a.jpg';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 mt-28'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div>
          <h3 className='py-4'>Front-End</h3>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full absolute h-6 w-6' style={{backgroundColor: '#FFD700'}}><BiCrown className='h-full w-full'/></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={Nextjs} className='w-11 h-11 md:w-16 md:h-16' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Next JS</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full absolute h-6 w-6' style={{backgroundColor: '#C0C0C0'}}><BiCrown className='h-full w-full'/></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={Angular} className='w-11 h-11 md:w-16 md:h-16' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Angular</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full absolute h-6 w-6' style={{backgroundColor: '#CD7F32'}}><BiCrown className='h-full w-full'/></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={RazorPages} className='w-11 h-11 md:w-16 md:h-16' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Razor Pages C#</h3>
                </div>
              </div>
            </div>
          </div>
          <h3 className='py-4'>Style</h3>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full absolute h-6 w-6' style={{backgroundColor: '#FFD700'}}><BiCrown className='h-full w-full'/></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={Bootstrap} className='w-11 h-11 md:w-16 md:h-16' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Bootstrap</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full absolute h-6 w-6' style={{backgroundColor: '#C0C0C0'}}><BiCrown className='h-full w-full'/></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={Tailwind} className='w-11 h-11 md:w-16 md:h-16' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Tailwind CSS</h3>
                </div>
              </div>
            </div>
          </div>
          <h3 className='py-4'>Back-End</h3>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full absolute h-6 w-6' style={{backgroundColor: '#FFD700'}}><BiCrown className='h-full w-full'/></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={Laravel} className='w-11 h-11 md:w-16 md:h-16' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Laravel</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full absolute h-6 w-6' style={{backgroundColor: '#C0C0C0'}}><BiCrown className='h-full w-full'/></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={ASPNet} className='w-11 h-11 md:w-16 md:h-16' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>ASP .Net C#</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full absolute h-6 w-6' style={{backgroundColor: '#CD7F32'}}><BiCrown className='h-full w-full'/></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={Node} className='w-11 h-11 md:w-16 md:h-16' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Node Js</h3>
                </div>
              </div>
            </div>
          </div>
          <h3 className='py-4'>Database</h3>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full absolute h-6 w-6' style={{backgroundColor: '#FFD700'}}><BiCrown className='h-full w-full'/></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={SQL} className='w-11 h-11 md:w-16 md:h-16' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>SQL</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full absolute h-6 w-6' style={{backgroundColor: '#C0C0C0'}}><BiCrown className='h-full w-full'/></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={MySQL} className='w-11 h-11 md:w-16 md:h-16' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>MySQL</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full absolute h-6 w-6' style={{backgroundColor: '#CD7F32'}}><BiCrown className='h-full w-full'/></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={Postgre} className='w-11 h-11 md:w-16 md:h-16' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Postgre SQL</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
