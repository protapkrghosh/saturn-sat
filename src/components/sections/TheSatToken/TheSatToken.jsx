import React from 'react';
import Container from '../Container/Container';
import TheSatTokenImg from '@/assets/theSatToken/Group 1000003510.png'
import { IoCheckmarkCircle } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import { MdArrowOutward } from 'react-icons/md';

const TheSatToken = () => {
  return (
    <>
      <Container>
        <div className='flex justify-center items-center lg:gap-12 xl:gap-16 2xl:gap-20'>
          {/*  THE SAT Token images  */}
          <div>
            <img className='lg:w-[95%] xl:w-[100%] 2xl:w-full' src={TheSatTokenImg} alt="" />
          </div>
          {/* THE SAT Token discription  */}
          <div className='lg:w-[80%] xl:w-[70%] 2xl:w-full'>
            <p className='text-[#FFF] font-inter text-[58px] font-bold leading-[75.4px] mb-[40px]'>THE <span className='text-[#40FE5B]'>SAT</span> Token</p>
            <div className='flex items-center gap-4 mb-[20px]'>
              <div><IoCheckmarkCircle className='text-[#40FE5B]' /></div>
              <div><p className='text-[#F4F4F4] font-inter text-[18px] leading-[28.8px]'>In the heart of Springfield, where Lisa's wisdom met Homer's folly,</p></div>
            </div>
            <div className='flex items-center gap-4 mb-[20px]'>
              <div><IoCheckmarkCircle className='text-[#40FE5B]' /></div>
              <div><p className='text-[#F4F4F4] font-inter text-[18px] leading-[28.8px]'>$SAT token emerged, a crypto saga so jolly.</p></div>
            </div>
            <div className='flex items-center gap-4 mb-[20px]'>
              <div><IoCheckmarkCircle className='text-[#40FE5B]' /></div>
              <div><p className='text-[#F4F4F4] font-inter text-[18px] leading-[28.8px]'>A nod to Sat Simpson's mischief, it was born with a grin,</p></div>
            </div>
            <div className='flex items-center gap-4 mb-[50px]'>
              <div><IoCheckmarkCircle className='text-[#40FE5B]' /></div>
              <div><p className='text-[#F4F4F4] font-inter text-[18px] leading-[28.8px]'>For a playful, decentralized world, where the fun would begin</p></div>
            </div>
            <Button className="bg-[#02b81c4d] rounded-[8px] group cursor-pointer md:px-5">
              <span className="flex justify-center items-center">
                <p className='text-[#FFF] text-[16px] 2xl:text-[18px] font-inter font-medium'>BUY NOW</p>
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TheSatToken;