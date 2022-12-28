import Image from 'next/image';
import React from 'react';
// import netflixImg from '../public/assets/projects/netflix.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const roccoloImg = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672218028/portfolio/projects/landingroccolo_xs1t8z.png';

const roccolo = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={roccoloImg}
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
            This application was built using Next Js and Firebase, and is styled with
            Bootstrap. The application is hosted statically using Vercel.
          </p>
          <h3 className='pt-4 pb-2'>Company</h3>
          <p>
          Tenute Francesco Righetti in collaboration with Giuseppe Campagnola 
          (two families who have been working together for generations), give 
          birth in the last 10 years to Azienda Agricola Roccolo del Lago, an
           estate located on the beautiful hills of Lake Garda. The winery 
           produces organic wines typical of the area: Chardonnay, Custoza, 
           Bardolino, Corvina, Prosecco, Pinot Grigio, Valpolicella, and Amarone.
           Winemaking is not the only focus as they offer themselves as a location
           for events, weddings and organized tastings. They have a shop both physical
           on the estate and online where it is possible to order both wines and oil produced on the estate.
          </p>
          <h3 className='pt-4 pb-2'>The design challenge</h3>
          <p>
          The design challenge proposes the creation of living tours of the organic vineyards and winery. 
          The goal is to make all aspects of wine production known and appreciated to the fullest, going 
          to enhance the characteristics of the vineyards and the quality of the wine produced.
          </p>
          <h3 className='pt-4 pb-2'>Our proposals</h3>
          <ul>
            <li>Restyle of thier existing site (<a href='https://roccolodellago.vercel.app/it/' className='underline text-blue-600'>Demo</a>)</li>
            <li>Landing page to promote new proposal, virtual tour (<a href='https://landingroccolo.vercel.app/it/' className='underline text-blue-600'>Demo</a>)</li>
            <li>Mobile application called Mapapp to explore their estates by phone (<a href='https://mapapproccolo.vercel.app/' className='underline text-blue-600'>Demo</a>)</li>
          </ul>
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
                <RiRadioButtonFill className='pr-1' /> Swipe Js
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
