"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Sidebar = () => {
    const pathname = usePathname();
    const links = [
        {
            name: 'Dashboard',
            url: '/dashboard',
            active: true
        },
        {
            name: 'User Mangement',
            url: '/user'
        },
        {
            name: 'Customer Mangement',
            url: '/customer'
        },
        {
            name: 'Subscription Mangement',
            url: '/subscription'
        },
        {
            name: 'Quiz Mangement',
            url: '/quiz'
        },
        {
            name: 'Product Mangement',
            url: '/product'
        },
        {
            name: 'Inventory Mangement',
            url: '/inventory'
        },
        {
            name: 'Reporting',
            url: '/reporting'
        },
        {
            name: 'Billing & Invoicing',
            url: '/billing'
        },
        {
            name: 'Order Tracking',
            url: '/order'
        },
        {
            name: 'Notifications & Alerts',
            url: '/notifications'
        },
    ]
  return (
    <div className='font-primary pr-8 pl-4 py-8 flex flex-col gap-9 bg-white shadow-lg h-screen min-w-64 overflow-y-auto scorlll'>
        <img src="/shapes/logo.svg" alt="Logo Image" className='scale-75' />

        <div className='flex flex-col w-full gap-1'>
                {links.map((link, index) => {
                    const isActive = pathname === link.url;

                    return (
                        <div key={index} className='flex gap-3 w-full font-semibold'>
                            {isActive && <div className='w-1 rounded-r-2xl bg-[#1C562C]'></div>}
                            <Link 
                                className={`text-[14px] text-center w-full px-auto py-4 rounded-md hover:bg-gray-300 
                                    ${isActive ? "bg-[#1C562C] text-white" : ""}`}
                                href={link.url}>
                                {link.name}
                            </Link>
                        </div>
                    );
                })}
            </div>

            <hr />
        <div className='flex flex-col gap-4 font-semibold'>
            <div className='text-[14px] text-center w-full px-auto py-2 rounded-md hover:bg-gray-300'>Settings</div>
            <div className='text-[14px] text-center text-red-400 w-full py-2 rounded-md hover:bg-gray-300'>Logout</div>
        </div>
    </div>
  )
}

export default Sidebar