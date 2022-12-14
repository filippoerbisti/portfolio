import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const NavLogo = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672330082/portfolio/log_n48s8x.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const [darkTheme, setDarkTheme] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);

    if (!darkTheme) {
      document.getElementsByTagName('body')[0].style.backgroundColor = navBg;
      document.getElementsByTagName('body')[0].style.opacity = 1;

      let boxesShadow = document.querySelectorAll('.shadow-lg');
      boxesShadow.forEach(box => {
        box.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgb(0, 0, 0, 0.1)';
      });

      let boxes = document.querySelectorAll('.shadow-xl');
      boxes.forEach(box => {
        box.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgb(0, 0, 0, 0.1)';
      });
    }

    if (darkTheme) {
      document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
      document.getElementsByTagName('body')[0].style.opacity = .8;
      let skills = document.querySelectorAll('#skill');
      skills.forEach(skill => {
        skill.style.backgroundColor = 'rgba(256,256,256)';
        skill.style.boxShadow = '0 20px 25px -5px rgba(256, 256, 256, 0.1), 0 8px 10px -6px rgb(256, 256, 256, 0.1)';
      });

      let boxesShadow = document.querySelectorAll('.shadow-lg');
      boxesShadow.forEach(box => {
        box.style.boxShadow = '0 20px 25px -5px rgba(256, 256, 256, 0.1), 0 8px 10px -6px rgb(256, 256, 256, 0.1)';
      });

      let boxes = document.querySelectorAll('.shadow-xl');
      boxes.forEach(box => {
        box.style.boxShadow = '0 20px 25px -5px rgba(256, 256, 256, 0.1), 0 8px 10px -6px rgb(256, 256, 256, 0.1)';
      });
    }
  }, [shadow, setShadow, darkTheme, setDarkTheme]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width={100}
              height={75}
              className='cursor-pointer'
            />
          </a>
        </Link>
        <div className='flex'>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex md:mr-10 md:items-center'>
            <li className='lg:ml-10 md:ml-2 text-sm uppercase border-b border-transparent md:hover:border-slate-300'>
              <Link href='/'>Home</Link>
            </li>
            <li className='lg:ml-10 md:ml-2 text-sm uppercase border-b border-transparent md:hover:border-slate-300'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='lg:ml-10 md:ml-2 text-sm uppercase border-b border-transparent md:hover:border-slate-300'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='lg:ml-10 md:ml-2 text-sm uppercase border-b border-transparent md:hover:border-slate-300'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='lg:ml-10 md:ml-2 text-sm uppercase border-b border-transparent md:hover:border-slate-300'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='lg:ml-10 md:ml-2 text-sm uppercase border-b border-transparent md:hover:border-slate-300'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          <div className='hidden md:flex'>
            <label htmlFor="theme" className="theme">
              <span>Light</span>
              <span className="theme__toggle-wrap">
                <input id="theme" className="theme__toggle" type="checkbox" name="theme" value={darkTheme} onChange={() => setDarkTheme(!darkTheme)} />
                <span className="theme__fill"></span>
                <span className="theme__icon">
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                </span>
              </span>
              <span>Dark</span>
            </label>
          </div>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src={NavLogo}
                    width={100}
                    height={75}
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Filippo Erbisti
              </p>
            </div>
            <div className='md:hidden flex mt-2'>
              <label htmlFor="theme" className="theme">
                <span>Light</span>
                <span className="theme__toggle-wrap">
                  <input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" value={darkTheme} onChange={() => setDarkTheme(!darkTheme)} />
                  <span className="theme__fill"></span>
                  <span className="theme__icon">
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                  </span>
                </span>
                <span>Dark</span>
              </label>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-4'>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/filippo-erbisti-1783a9202/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer md:hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/filippoerbisti'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer md:hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer md:hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer md:hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
