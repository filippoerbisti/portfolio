import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import AboutImg from '../public/assets/about.jpg';
// import MeImg from '../public/assets/profileMePic.jpg';

const MeImg = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166277/portfolio/profileMePic_zxdoz2.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            {/* I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job. */}

            I possess experience in software development with different programming languages 
            such as C#, SqlServer, Angular, NextJS, and PHP (Laravel).
            In the current workstation I develop on Microsoft C# environment in a FullStack context.
            Willing to know and learn new languages for the need of the moment.
          </p>
          <p className='py-2 text-gray-600'>
            {/* I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies. */}
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, perferendis optio, neque soluta ipsa quisquam veritatis eius atque architecto nisi, nemo dolores. Excepturi beatae at ex, enim et eaque earum. */}
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. A accusamus odio rem, cupiditate eius et magni soluta quidem eveniet aliquid ut repellat asperiores natus quos ex ratione eum delectus? Voluptas? */}
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 md:hover:scale-105 ease-in duration-300'>
          <img id='mePic' src={MeImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
