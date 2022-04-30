import React from 'react'
import SdgsDetails from '../SdgsDetails'
import News from './News'

const Home = () => {
  return (
    <div>
      <SdgsDetails />
      <div className='container mx-auto p-5 flex items-center justify-center'>
        <h1 className='text-4xl font-bold'>新闻动态</h1>
      </div>
      <News />
    </div>
  )
}

export default Home