import Image from 'next/image';
import React from 'react';
// import netflixImg from '../public/assets/projects/netflix.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const netflixImg = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166280/portfolio/projects/netflix_o097ki.jpg'; 

const roccolo = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={netflixImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Roccolo App</h2>
          <h3>Next JS / Bootstrap / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            {/* I built this application in React JS and is hosted on GitHub pages.
            This app features user authentication with firebase as well as the
            firestore cloud storage database. This application is pulling movie
            data from an the IMDB movie API and displaying different categories.
            It features horizontal sliding and a featured selection. The
            useContext hook is also being implemented for app-wide state
            management. */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate recusandae ratione nihil laborum, magnam similique voluptatem, accusantium unde assumenda harum animi molestiae sapiente quibusdam, enim est possimus tempora! Id, doloremque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad, cupiditate ipsa accusamus hic nobis repellat nisi voluptate quas natus asperiores nulla provident, nostrum omnis cumque est ex libero officiis!
          </p>
          <a
            href='https://github.com/filippoerbisti/Roccolo-s-project'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://roccolodellago.vercel.app/it/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Bootstrap
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sanity.io
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Email Js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> PayPal Checkout
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default roccolo;
