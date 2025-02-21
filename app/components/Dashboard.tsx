import React from 'react'
import Topbar from './Topbar'
import Dets from './Dets'
import Graphs from './Graphs'
import SalesChart from './sales-chart'

const Dashboard = () => {
  return (
        <div className='flex flex-col w-full bg-[#FCFCFC] mb-6'>
            {/* TopBar */}
            <div className='w-full'>
                <Topbar />
                <hr />
            </div>

            {/* Main Dets */}
            <div className='flex flex-col flex-1 overflow-auto'>
            <div className='w-full'>
                <Dets />
            </div>

            {/* Graphs */}
            <div className='w-full flex gap-3 px-10 mt-6'>
                <div className="w-full">
                    <Graphs />
                </div>
                <div className="w-full">
                    <SalesChart />
                </div>
            </div>
            </div>
        </div>
  )
}

export default Dashboard