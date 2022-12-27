import React from 'react';
// import propertyImg from '../public/assets/projects/property.jpg';
// import portfolioImg from '../public/assets/projects/portfolio.png';
// import netflixImg from '../public/assets/projects/netflix.jpg';
// import twitchImg from '../public/assets/projects/twitch.jpg';
import ProjectItem from './ProjectItem';

const propertyImg = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166280/portfolio/projects/property_dfbjog.jpg';
const portfolioImg = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166277/portfolio/projects/portfolio_g7vv3o.png';
const netflixImg = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166280/portfolio/projects/netflix_o097ki.jpg';
const twitchImg = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672166281/portfolio/projects/twitch_a6o2fj.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full mt-40'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='My Personal Agenda'
            backgroundImg={propertyImg}
            projectUrl='/agenda'
            tech='Next JS & Laravel'
          />
          <ProjectItem
            title='Roccolo del Lago'
            backgroundImg={netflixImg}
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
            backgroundImg={twitchImg}
            projectUrl='/rondadellacarita'
            tech='Angular & Laravel'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
