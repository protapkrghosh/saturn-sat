import React from 'react';
import Container from '../Container/Container';
import TheSatTokenImg from '@/assets/imges/theSatToken/Group 1000003510.png';

const TheSatToken = () => {
  return (
    <div className='bg-[#040D1B]'>
      <Container>
        <div>
          {/* THE SAT Token images  */}
          <div>
            <img src={TheSatTokenImg} alt="" />
          </div>
          {/* THE SAT Token discription  */}
          <div>
            <p className='text-[#FFF] font-'>THE SAT Token</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TheSatToken;