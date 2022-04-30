import React from 'react'

const News = () => {
  return (
    <>
      <div className='container mx-auto p-3 sm:p-2'>
        <section className="md:py-10 md:p-10 md:px-0">
          <section className="relative md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-2">
            <img className="xl:max-w-6xl" src="http://www.urbansdg.org.cn/newsList/details/static/img/1.jpg" alt=""></img>
            {/* <img className="xl:max-w-6xl " src="http://www.urbansdg.org.cn/newsList/details/static/img/1.jpg" alt=""></img> */}
            <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-xl w-full lg:absolute top-1/4 right-5">
              <div className="flex justify-between font-bold text-sm">
                <p></p>
                <p className="text-gray-400">30th April, 2022</p>
              </div>
              <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold mt-4 md:mt-10">国家重点研发课题成果《城市可持续发展指标体系》通过专家评审</h2>
              <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">2020年12月13日，国家重点研发计划课题《城市发展状态动态认知与评估技术》课题组在深圳大学组织召开“ 城市可持续发展指标体系”方案（以下简称“方案”）专家评审会，“以线下会议+网络会议”形式同步召开。</p>
              <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Read
                More</button>
            </div>
          </section>
        </section>
      </div>

      <div className='container mx-auto sm:p-2 flex lg:flex-row items-center justify-between flex-col p-3 lg:space-x-6'>
        <div className='flex lg:w-1/2'>
          <section className="relative  md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-2 ">
            <img className="xl:w-max" src="http://urbansdg.org.cn/home/20211029/%E5%90%88%E7%85%A7.webp" alt=""></img>
            <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-xl lg:absolute top-80 left-6">
              <div className="flex justify-between font-bold text-sm">
                <p></p>
                <p className="text-gray-400">30th April, 2022</p>
              </div>
              <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold mt-4 md:mt-10">国家重点研发计划课题“大数据支撑的城市发展状态动态认知与评估技术”在中国地理信息科学理论与方法学术年会组织专题会议</h2>
              <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">中国地理信息产业协会理论与方法工作委员会定于2021年10月15-17日在浙江省杭州市举办第十七届中国地理信息科学理论与方法学术年会，本次大会由浙江大学地球科学学院承办，会议紧扣地理信息科学理论、方法、技术、应用及产业化等主题展开交流与研讨</p>
              <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Read
                More</button>
            </div>
          </section>
        </div>
        <div className='flex lg:w-1/2'>
          <section className="relative md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-2 ">
            <img className="xl:w-max" src="http://urbansdg.org.cn/home/20211029/%E5%90%88%E7%85%A7.webp" alt=""></img>
            <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-xl lg:absolute top-80 left-6">
              <div className="flex justify-between font-bold text-sm">
                <p></p>
                <p className="text-gray-400">30th April, 2022</p>
              </div>
              <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold mt-4 md:mt-10">国家重点研发计划课题“大数据支撑的城市发展状态动态认知与评估技术”在中国地理信息科学理论与方法学术年会组织专题会议</h2>
              <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">中国地理信息产业协会理论与方法工作委员会定于2021年10月15-17日在浙江省杭州市举办第十七届中国地理信息科学理论与方法学术年会，本次大会由浙江大学地球科学学院承办，会议紧扣地理信息科学理论、方法、技术、应用及产业化等主题展开交流与研讨</p>
              <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Read
                More</button>
            </div>
          </section>
        </div>




      </div >
    </>
  )
}

export default News