import { TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'

const Dets = () => {
    const btns = ["Add new products", "Customer issues", "Access reports", "Recent customer activity"]
    const dashboardData = [
        {
          title: "New cancellations",
          value: "40,689",
          percentage: "8.5%",
          trend: "Up from yesterday",
          icon: "/icons/group.svg",
        bgIcon: "bg-[#E4E4FF]",
        trendingColor: "text-[#EF3826]",
        trending: <TrendingUp />,
        },
        {
          title: "Total Order",
          value: "10293",
          percentage: "1.3%",
          trend: "Up from past week",
          icon: "/icons/cube.svg",
            bgIcon: "bg-[#FEF2D6]",
            trendingColor: "text-[#00B69B]",
            trending: <TrendingUp />,
        },
        {
          title: "Total Sales",
          value: "$89,000",
          percentage: "4.3%",
          trend: "Down from yesterday",
          icon: "/icons/chart.svg",
          bgIcon: "bg-[#D9F7E7]",
          trendingColor: "text-[#EF3826]",
            trending: <TrendingDown />
        },
        {
          title: "Total Pending",
          value: "2040",
          percentage: "1.8%",
          trend: "Up from yesterday",
          icon: "/icons/time.svg",
          bgIcon: "bg-[#FFDED2]",
          trendingColor: "text-[#00B69B]",
            trending: <TrendingUp />
        }
      ];
  return (
    <div className='px-10 pt-4 flex flex-col gap-3 font-primary'>
        <div className='flex flex-col leading-none gap-2'>
            <h1 className='text-[1.5rem] font-bold'>Hello Moni!</h1>
            <span className='text-[#979797]'>Track your overall process here</span>
        </div>
        <div className='flex w-full gap-6 shrink-0'>
            <div className='bg-white p-6 rounded-xl shadow-lg flex flex-col shrink-0 gap-6 w-fit justify-between'>
                <h1 className='text-[20px] font-bold'>Total active subscribers</h1>
                <div className='w-full flex items-center justify-center'>
                <img src="/shapes/body.svg" alt="subs" className='w-32 h-w-32' />
                </div>
                <div className='flex w-full gap-8'>
                    <div className='flex flex-col gap-2 items-center'>
                        <h1 className='text-lg font-bold'>34,249</h1>
                        <span className='flex gap-2 items-center'>
                            <div className='w-3 h-3 rounded-full bg-black' />
                            <span className='text-[#282D32] text-sm font-semibold'>New subscribers</span>
                        </span>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <h1 className='text-lg font-bold'>1420</h1>
                        <span className='flex gap-2 items-center'>
                            <div className='w-3 h-3 rounded-full bg-[#C0D2F0]' />
                            <span className='text-[#282D32] text-sm font-semibold'>Old subscribers</span>
                        </span>
                    </div>
                </div>
            </div>
            {/* boxes */}
            <div className='grid-cols-2 grid w-full gap-2'>
                {dashboardData.map((data, index) => (
                    <div key={index} className='w-full h-fit flex flex-col gap-6 bg-white p-4 rounded-xl shadow-lg'>
                        <div className='flex justify-between w-full'>
                            <div className='flex flex-col gap-4'>
                                <span className='text-[#202224] font-semibold'>{data.title}</span>
                                <span className='font-bold text-[28px]'>{data.value}</span>
                            </div>
                            {/* <div className='px-4 py-1 rounded-2xl bg-[#E4E4FF]'> */}
                                <img src={data.icon} className={`p-4 rounded-3xl w-fit ${data.bgIcon} w-16 h-16`} alt="" />
                            {/* </div> */}
                        </div>
                        <div className='flex gap-1 font-semibold text-[#606060]'><span className={`flex ${data.trendingColor} font-semibold gap-1`}>{data.trending} {data.percentage}</span> {data.trend}</div>
                    </div>
                ))}
            </div>

            {/* options */}
            <div className='flex flex-col shrink-0 gap-3 h-full justify-center items-baseline'>
                {btns.map((btn, index) => (
                    <div key={index} className='px-4 py-2 text-base w-full text-center bg-[#1C562C] text-white rounded-2xl'>{btn}</div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Dets