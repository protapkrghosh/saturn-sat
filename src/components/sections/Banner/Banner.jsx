import pathImg from '@/assets/banner/group.png'
import shapeImg from '@/assets/banner/vector.png'
import moonImg from '@/assets/banner/ellipse464.png'
import symbols from '@/assets/banner/symbols.png'
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${pathImg})` }} className='bg-no-repeat'>
      <div style={{ backgroundImage: `url(${shapeImg})` }} className='bg-no-repeat'>
        <div style={{ backgroundImage: `url(${moonImg})` }} className='bg-no-repeat'>
          <Container>
            <div>
              <h1 className='text-[100px] text-white text-center font-bebasNeue font-normal tracking-wider uppercase'>SPRINGFIELD AND <span className='text-[#40FE5B]'>$SAT</span></h1>

              <p className='text-[18px] text-white font-inter text-center w-full xl:w-[71%] 2xl:w-[58%] mx-auto mb-12'>In the bustling city of Springfield, life pulses with energy and vibrancy. From the quaint streets lined with charming boutiques to the bustling squares filled with the laughter of families.</p>

              <div className='flex justify-center'>
                <Button className="text-[#fff] bg-[#02B81C] rounded-[8px] group cursor-pointer px-12 py-[27px]">
                  <span className="flex justify-center items-center">
                    <p className='text-[18px] 2xl:text-[19px] font-inter font-normal uppercase mr-2'>Buy now</p>
                    <img src={symbols} alt="Image" className='w-[27px] 2xl:w-[28px] group-hover:-mt-2  duration-300' />
                  </span>
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banner;
