import { CounterType } from '@/types/about';
import React from 'react';


const AboutCounter = ({classname}:CounterType) => {
  return (
    <div className='container bg-slate-100 rounded-md pt-8'>
        <div className={` counter-block ${classname} `}>
            <div className='grid xl:grid-cols-4 grid-cols-2 gap-y-8'>

            <div className='item'>
                <div className='flex flex-col items-center'>
                    <div className='count-block flex items-center'>
                        <div className='counter heading3'> 2.5 </div>
                        <span className='heading3'>k</span>
                    </div>
                    <div className='body1 text-secondary text-center'>
                    Business Setup Growth
                    </div>
                </div>
            </div>

            <div className='item'>
                <div className='flex flex-col items-center'>
                    <div className='count-block flex items-center'>
                        <div className='counter heading3'> 1.77 </div>
                        <span className='heading3'>k</span>
                    </div>
                    <div className='body1 text-secondary text-center'>
                    Business Setup Growth
                    </div>
                </div>
            </div>

            <div className='item'>
                <div className='flex flex-col items-center'>
                    <div className='count-block flex items-center'>
                        <div className='counter heading3'> 250 </div>
                        <span className='heading3'>k</span>
                    </div>
                    <div className='body1 text-secondary text-center'>
                    Business Setup Growth
                    </div>
                </div>
            </div>


            <div className='item'>
                <div className='flex flex-col items-center'>
                    <div className='count-block flex items-center'>
                        <div className='counter heading3'> 300 </div>
                        <span className='heading3'>k</span>
                    </div>
                    <div className='body1 text-secondary text-center'>
                    Business Setup Growth
                    </div>
                </div>
            </div>

            </div>

        </div>

    </div>
  );
};

export default AboutCounter;
