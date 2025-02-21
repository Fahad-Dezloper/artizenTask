import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { AvatarImage } from '@radix-ui/react-avatar'
import { Bell, ChevronDown, Search, Settings } from 'lucide-react'
import React from 'react'

const Topbar = () => {
  return (
    <div className='w-full flex pt-6 px-14 pb-4 justify-between items-center'>
        <div className='relative'>
        <Search className='absolute top-[20%] text-black/40 left-3' />
        <input type="text" placeholder='Search' className='bg-[#F5F6FA] py-2 pl-12 rounded-full text-base border outline-none' />
        </div>
        <div className='flex gap-6 items-center'>
            <div className='flex gap-3'>
            <Settings />
            <Bell />
            </div>
            <div className='bg-[#D9D9D9] p-2 flex gap-2 rounded-full items-center'>
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex flex-col leading-none gap-1'>
                <h3>Moni Roy</h3>
                <span className='text-xs text-[#7E7E7E]'>Super admin</span>
            </div>
            <ChevronDown size={20} />
            </div>
        </div>
    </div>
  )
}

export default Topbar