import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

import { MenuIcon, XIcon } from '@heroicons/react/outline'
import MobNav from './MobNav'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const topMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', topMenu)
    return () => {
      window.removeEventListener('resize', topMenu)
    }
  })


  return (
    <section className="p-4 pl-4 pr-4 md:p-6 bg-white shadow-md shadow-indigo-50 sticky inset-x-0 top-0 z-50">
      <nav className='container mx-auto md:flex md:items-center md:justify-between'>


        <div className='md:flex md:justify-between'>
          <Link to="/" className='flex items-center justify-between h-12 md:pl-8 md:pr-8'>
            <img src="http://urbansdg.org.cn/home/logos/SDGlogo.png" alt="" className='h-8 w-8 md:h-12 md:w-12' />
            <div onClick={toggleOpen} className='h-8 w-8 md:hidden'>
              {!isOpen ? <MenuIcon /> : <XIcon />}
            </div>

            <div className="ml-4 hidden md:block ">
              <p className='lg:text-2xl text-xl font-bold  text-sky-600'>城市可持续发展指标体系</p>
              <p className='lg:text-md text-sm font-semibold text-sky-500'>Urban Sustainability Indicator System</p>
            </div>
          </Link>

        </div>


        <div className="md:items-center text-lg font-bold leading-10 md:leading-6 hidden md:block">
          {[
            ['首页', '/'],
            ['指标案例', '/projects'],
            ['最新动态', '/newslist'],
          ].map(([title, url]) => (
            <Link to={url} key={title} className="px-4 py-2 font-bold text-md rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 duration-500 lg:text-xl">{title}</Link>
          ))}

        </div >


        {isOpen && <MobNav toggleOpen={toggleOpen} />}

      </nav >

    </section >
  )
}

export default Navbar