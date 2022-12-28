import React from 'react';
// import propertyImg from '../public/assets/projects/property.jpg';
// import portfolioImg from '../public/assets/projects/portfolio.png';
// import netflixImg from '../public/assets/projects/netflix.jpg';
// import twitchImg from '../public/assets/projects/twitch.jpg';
import ProjectItem from './ProjectItem';

const agendaImg = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672218261/portfolio/projects/agenda_ulrjq9.png';
const portfolioImg = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166277/portfolio/projects/portfolio_g7vv3o.png';
const roccoloImg = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672218028/portfolio/projects/landingroccolo_xs1t8z.png';
const rondaImg = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672218175/portfolio/projects/rondadellacarita_uctwxz.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full md:mt-0 mt-12'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='My Personal Agenda'
            backgroundImg={agendaImg}
            projectUrl='/agenda'
            tech='Next JS & Laravel'
          />
          <ProjectItem
            title='Roccolo del Lago'
            backgroundImg={roccoloImg}
            projectUrl='/roccolo'
            tech='Next JS & Firebase'
          />
          <ProjectItem
            title='My Portfolio'
            backgroundImg={portfolioImg}
            projectUrl='/portfolio'
            tech='Next JS & Tailwind'
          />
          <ProjectItem
            title='Ronda della Carità'
            backgroundImg={rondaImg}
            projectUrl='/rondadellacarita'
            tech='Angular & Laravel'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
