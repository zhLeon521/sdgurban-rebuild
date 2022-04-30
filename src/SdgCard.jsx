import React from 'react'
import ReactDOM from 'react-dom/client'

const sdgCard = ({ href, backsrc, frontsrc }) => {


  return (

    <article className="p-2 duration-300 transform hover:-translate-y-1 hover:shadow-2xl group">
      <a target="_blank" href={href}>
        <div className="relative overflow-hidden max-h-125">
          <img className="absolute" src={backsrc} alt="" />
          <img className="relative duration-500 transform group-hover:opacity-0" src={frontsrc} alt="" />
        </div>
      </a>
      <div className="absolute p-3 duration-500 transform bg-gray-200 rounded-full opacity-0 top-10 right-10 group-hover:opacity-100">
        <a target="_blank" href={href}>
          <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="rgba(0,0,0,0.5)">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </article>


  )
}


export default sdgCard