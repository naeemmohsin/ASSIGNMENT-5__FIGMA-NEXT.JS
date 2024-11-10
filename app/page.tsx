import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

const HomePage = () => {
  return (

    <div className='w-[1920px] h-screen'> 

      <Header/>    

      <div className='flex'>

      <div className='w-1/2'>

      <h1 className=' text-[40px] font-bold w-[496px] h-[189px] mt-[182px] ml-[176px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1> 
      <p className='font-medium text-[30px] w-[902px] h-[147px] text-[#A29875] mt-[28px] ml-[171px]'>An example of intricate workmanship and detail, elegant <br />
      necklaces and long and short chains form a part of our <br /> desirable collection.</p>
      
      <button className='w-[288px] h-[58px] flex rounded-[10px] p-[10px] ml-[176px] mt-[50px] gap-[10px] border-white bg-[#A29875]
                         font-medium text-[30px] justify-center items-center'>Explore Now</button>

      </div>

      <div className='flex justify-center items-center w-1/2 mt-[64px]'>
      <Image src="/images/figma-img.png" 
             alt="figma design image" 
             width={490}
             height={667}/> 
      </div>
      </div>
    </div>
  )
}

export default HomePage

