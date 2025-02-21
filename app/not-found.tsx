import Link from 'next/link'
import MainBg from './components/MainBg'
 
export default function NotFound() {
  return (
    <MainBg>
      <div className='w-fit z-[35] flex font-primary bg-white flex-col gap-24 border shadow-lg rounded-xl items-center px-32 py-16 justify-between'>
        <img src="/shapes/404.svg" className='' alt="404 image" />
        <div className='flex flex-col items-center gap-4 w-full'>
            <h1 className='text-[1.5rem] font-bold'>Looks like you’ve got lost….</h1>
            <Link href={"/"} className='w-full text-[1.5rem] p-2 text-center bg-[#1C562C]  text-white rounded-xl'>Back to Dashboard</Link>
        </div>
        </div>
    </MainBg>
  )
}