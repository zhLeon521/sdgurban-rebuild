import React from 'react'

const Header = () => {
  return (
    <section className="container mx-auto">


      <div className="container flex items-center justify-between pt-8 ">
        <div className='flex items-center justify-between'>
          <img src="http://urbansdg.org.cn/home/logos/SDGlogo.png" alt="" className='h-14 w-14' />
          <div className="items-start justify-between mx-auto ml-2 ">
            <p className='text-xl font-bold'>城市可持续发展指标体系</p>
            <p className='text-lg font-bold'>Urban Sustainability Indicator System</p>
          </div>
        </div>

        <div className="flex items-center text-lg font-bold leading-10 ">
          <div className="">
            {[
              ['首页', '/home'],
              ['团队', '/team'],
              ['指标案例', '/projects'],
              ['最新动态', '/news'],
            ].map(([title, url]) => (
              <a href={url} key={title} className="px-4 py-4 font-bold rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900">{title}</a>
            ))}
          </div>

        </div>
      </div >


    </section >
  )
}

export default Header;