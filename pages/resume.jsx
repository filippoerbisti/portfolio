import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Filippo Erbisti | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Filippo Erbisti</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/filippo-erbisti-1783a9202/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/filippoerbisti'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Web Development <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Web Development</p>
            <p className='py-2'>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          {/* Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies. */}

            I possess experience in software development with different programming languages 
            such as C#, SqlServer, Angular, NextJS, and PHP (Laravel).
            In the current workstation I develop on Microsoft C# environment in a FullStack context.
            Willing to know and learn new languages for the need of the moment.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span> Full-Stack Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span> CSS
            <span className='px-2'>|</span> Javascript
            <span className='px-2'>|</span> Angular
            <span className='px-2'>|</span> Next JS
            <span className='px-2'>|</span> C#
            <span className='px-2'>|</span> Laravel
            <span className='px-2'>|</span> SQL
            <span className='px-2'>|</span> MySQL
            <span className='px-2'>|</span> PostgreSQL
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> Sanity.io
            <span className='px-2'>|</span> Tailwind
            <span className='px-2'>|</span> Bootstrap
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Microsoft Azure Services</span>
            <span className='px-2'>|</span>
            <span>AZ-900</span>
          </p>
        </div>

          <div className='flex flex-col items-end'>
            <div>
              <label htmlFor="cv">Select language of CV</label>
              <select name="cv" id="cv" className='ml-2 p-2 rounded'>
                <option value="enCV">English</option>
                <option value="itCV">Italiano</option>
              </select>
            </div>
            <button className='p-2 text-xs w-28 mt-2'>Download</button>
          </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            ENERJ Srl
            </span>
            <span className='px-2'>|</span>Verona, IT
          </p>
          <p className='py-1 italic'>Full-Stack Developer (2022 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Razor Pages C#</li>
            <li>Bootstrap</li>
            <li>Asp .Net 6</li>
            <li>MySQL</li>
            <li>Microsoft Azure</li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            HiT Internet Technologies Srl
            </span>
            <span className='px-2'>|</span>Verona, IT
          </p>
          <p className='py-1 italic'>Full-Stack Developer (2021 - 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Angular</li>
            <li>Bootstrap</li>
            <li>C#</li>
            <li>MySQL</li>
          </ul>
        </div>

        {/* Education */}
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            ITS Academy Veneto
            </span>
            <span className='px-2'>|</span>Verona, IT
          </p>
          <p className='py-1 italic'>Student (2020 - 2022)</p>
          <p>Course: DIGITAL TRASFORMATION SPECIALIST
            <br />
            It is a two-year post-diploma specialization course in the field of information technology and new technologies.
            The topics covered range from Web Design, Web Programming (Back-End and Front-End) 
            and Data Analysis to IOT and Cyber Security.
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Html</li>
            <li>CSS</li>
            <li>Js</li>
            <li>Vue</li>
            <li>Angular</li>
            <li>Laravel</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Scientific High School
            </span>
            <span className='px-2'>|</span>Verona, IT
          </p>
          <p className='py-1 italic'>Student (2014 - 2019)</p>
        </div>
      </div>
    </>
  );
};

export default resume;
