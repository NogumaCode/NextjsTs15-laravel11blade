
import { Envelope, MapPin } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';


const TopNav = () => {
  return (
    <div className='bg-slate-600'>
      <div className="container flex items-center justify-between h-[44px]">
        <div className="left-block flex items-center">
          <div className="location flex items-center max-lg:hidden">
            <MapPin className="text-white text-xl"/>
            <span className='ml-2 caption1 text-white'>Fuchu Tokyo</span>
          </div>
          <div className="mail lg:ml-7 flex items-center">
            <Envelope className="text-white text-xl" />
            <span className='ml-2 caption1 text-white'>support@palet-design.com</span>
          </div>
        </div>
        <div className="right-block flex items-center gap-5">
          <div className="line h-6 w-px bg-grey max-sm:hidden"></div>
          <div className="list-social flex items-center gap-2.5 max-sm:hidden">
            <Link className='item items-center  rounded-full w-7 h-7 border-grey border-2 flex justify-center' href="https://facebook.com/" target='_blank'>
            <i className="icon-facebook text-sm"></i></Link>
            <Link className='item items-center  rounded-full w-7 h-7 border-grey border-2 flex justify-center' href="https://linkendin.com/" target='_blank'>
            <i className="icon-in text-[10px]"></i></Link>
            <Link className='item items-center  rounded-full w-7 h-7 border-grey border-2 flex justify-center' href="https://twitter.com/" target='_blank'>
            <i className="icon-twitter text-[10px]"></i></Link>
            <Link className='item items-center  rounded-full w-7 h-7 border-grey border-2 flex justify-center' href="https://Instagram.com/" target='_blank'>
            <i className="icon-insta text-[10px]"></i></Link>
            <Link className='item items-center  rounded-full w-7 h-7 border-grey border-2 flex justify-center' href="https://youtube.com/" target='_blank'>
            <i className="icon-youtube text-[10px]"></i></Link>

          </div>
        </div>



      </div>

    </div>
  );
};

export default TopNav;
