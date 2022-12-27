import Image from 'next/image';
import React from 'react';
import NextJS from '../public/assets/skills/nextjs.png'
import Angular from '../public/assets/skills/angular.png';
import Csharp from '../public/assets/skills/csharp.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Bootstrap from '../public/assets/skills/bootstrap.jpg';
import Laravel from '../public/assets/skills/laravel.png';
import Net6 from '../public/assets/skills/net6.png';
import NodeJs from '../public/assets/skills/node.png';
import SQL from '../public/assets/skills/sql.png';
import MySQL from '../public/assets/skills/mysql.png';
import Postgre from '../public/assets/skills/postgre.jpg';
import { BiCrown } from 'react-icons/bi';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div>
          {/* Front-End */}
          <h3 className='py-6'>Front-End</h3>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='p-1 rounded-full w-8 h-8 absolute' style={{backgroundColor: "#FFD700"}}><BiCrown className='h-full w-full' /></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={NextJS} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Next JS</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='p-1 rounded-full w-8 h-8 absolute' style={{backgroundColor: "#C0C0C0"}}><BiCrown className='h-full w-full' /></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Angular} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Angular</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full w-8 h-8 absolute' style={{backgroundColor: "#CD7F32"}}><BiCrown className='h-full w-full' /></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center h-full'>
                <div className='m-auto'>
                  <Image src={Csharp} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Razor Pages (C#)</h3>
                </div>
              </div>
            </div>
          </div>
          {/* Style */}
          <h3 className='py-6'>Style</h3>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='p-1 rounded-full w-8 h-8 absolute' style={{backgroundColor: "#FFD700"}}><BiCrown className='h-full w-full' /></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Bootstrap} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Bootstrap</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='p-1 rounded-full w-8 h-8 absolute' style={{backgroundColor: "#C0C0C0"}}><BiCrown className='h-full w-full' /></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Tailwind} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Tailwind CSS</h3>
                </div>
              </div>
            </div>
          </div>
          {/* Back-End */}
          <h3 className='py-6'>Back-End</h3>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='p-1 rounded-full w-8 h-8 absolute' style={{backgroundColor: "#FFD700"}}><BiCrown className='h-full w-full' /></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Laravel} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Laravel</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='p-1 rounded-full w-8 h-8 absolute' style={{backgroundColor: "#C0C0C0"}}><BiCrown className='h-full w-full' /></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Net6} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>ASP .Net C#</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full w-8 h-8 absolute' style={{backgroundColor: "#CD7F32"}}><BiCrown className='h-full w-full' /></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center h-full'>
                <div className='m-auto'>
                  <Image src={NodeJs} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Node Js</h3>
                </div>
              </div>
            </div>
          </div>
          {/* Database */}
          <h3 className='py-6'>Database</h3>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='p-1 rounded-full w-8 h-8 absolute' style={{backgroundColor: "#FFD700"}}><BiCrown className='h-full w-full' /></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={SQL} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>SQL</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='p-1 rounded-full w-8 h-8 absolute' style={{backgroundColor: "#C0C0C0"}}><BiCrown className='h-full w-full' /></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={MySQL} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>MySQL</h3>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='p-1 rounded-full w-8 h-8 absolute' style={{backgroundColor: "#CD7F32"}}><BiCrown className='h-full w-full' /></div>
              <div className='p-4 grid grid-cols-2 gap-4 justify-center items-center h-full'>
                <div className='m-auto'>
                  <Image src={Postgre} width='64px' height='64px' alt='/' />
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
