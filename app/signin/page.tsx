"use client"
import React, { useRef, useState } from 'react'
import MainBg from '../components/MainBg'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'

const Page = () => {
  const [showPassword, setShowPassword] = useState(true)
  const [isOtpScreen, setIsOtpScreen] = useState(false)
  function toggleEye() {
    setShowPassword(!showPassword)
  }

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
      <MainBg>
        <div className='w-[55vw] z-[40] flex font-primary bg-white flex-col gap-11 border shadow-lg rounded-xl items-center px-20 py-16 justify-between'>
        {isOtpScreen ? (
          /** OTP Input UI */
          <>
          <div className='flex flex-col items-center gap-3'>
          <h1 className='text-[1.5rem] font-semibold'>Please enter your OTP</h1>
          <h1 className='text-[1.5rem] text-[#999999]'>We have sent an OTP to anshika******@mail</h1>
          </div>
            {/* <input type="text" className='bg-[#F5F5F5] px-4 py-2 text-lg h-14 w-full rounded-xl outline-none text-center tracking-widest' placeholder="Enter OTP" /> */}
            <div className='flex flex-col'>
            <div className="flex gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  className="bg-[#F5F5F5] px-4 py-2 text-lg h-14 w-14 rounded-xl outline-none text-center tracking-widest"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>
            <h3 className='text-[1.3rem] text-end text-[#999999] hover:underline '>Resend</h3>
            </div>
            <button className='w-full text-[1.5rem] p-2 h-14 bg-[#1C562C] text-white rounded-xl'>Continue</button>
          </>
        ) : (
        <>
          <h1 className='text-[1.5rem] font-semibold'>Please fill in your unique admin login details below</h1>
          <div className='flex flex-col gap-2 w-full'>
          <h3 className='text-[1.5rem] font-semibold'>Email address</h3>
          <input type="email" className='bg-[#F5F5F5] px-4 py-2 text-lg h-14 w-full rounded-xl outline-none' />
          </div>
          <div className='flex flex-col gap-2 w-full'>
          <h3 className='text-[1.5rem] font-semibold'>Password</h3>
          <div className='relative'>
          <input type={showPassword ? "password" : "text"} className='bg-[#F5F5F5] px-4 py-2 text-lg h-14 w-full rounded-xl outline-none'/>
          <div onClick={() => toggleEye()} className='cursor-pointer'>
            {showPassword ? <EyeOff className='text-[#999999] absolute top-[30%] right-6'/> : <Eye className='text-[#999999] absolute top-[30%] right-6'/>}
            {/* <Eye className='text-[#999999] absolute top-[30%] right-6'/> */}
          {/* <EyeOff className='text-[#999999]' /> */}
          </div>
          </div>
          <Link href='/dashboard' className='text-[1.5rem] text-[#999999] w-full flex justify-end'>forgot password?</Link>
          </div>
          <button onClick={() => setIsOtpScreen(true)} className='w-full text-[1.5rem] p-2 h-14 bg-[#1C562C] text-white rounded-xl'>Continue</button>
        </>
        )}
        </div>
      </MainBg>
  )
}

export default Page