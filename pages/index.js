import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const NavLogo = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672330082/portfolio/log_n48s8x.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Erbisti | Full-Stack Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href={NavLogo} />
      </Head>
      {/* <div className='flex flex-column'> */}
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      {/* </div> */}
    </div>
  )
}
