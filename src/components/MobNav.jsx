import React from 'react'
import { Link } from 'react-router-dom'

const MobNav = ({ toggleOpen }) => {
  return (
    <div className='absolute left-0 w-full h-screen flex flex-col text-center items-center justify-center bg-[#0a192f] z-10' onClick={toggleOpen}>
      {[
        ['首页', '/'],
        ['指标案例', '/projects'],
        ['最新动态', '/newslist'],
      ].map(([title, url]) => (
        <Link to={url} key={title} className="py-6 text-2xl text-white font-semibold">{title}</Link>
      ))}



    </div>
  )
}

export default MobNav