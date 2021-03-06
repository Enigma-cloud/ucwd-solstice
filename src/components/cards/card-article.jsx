import React from 'react';

import ButtonSolid from '../buttons/button-solid';

import { HiChevronRight } from 'react-icons/hi';

const CardArticle = ({ imgUrl, imgTitle, tag }) => {
    return (
        <div className='container w-full h-full flex flex-col items-center 
        shadow-lg rounded-lg overflow-clip'>
            <div className="container flex justify-center 
             m-0.5 mb-0 overflow-hidden relative">
                <img
                    loading='lazy'
                    src={imgUrl}
                    alt={'Sports'}
                    className='w-full h-56 lg:h-72 object-cover'
                />
            </div>
            <div className='w-full bg-main px-4 py-2'>
                <h4 className={`container mb-1 uppercase text-lg font-semibold text-white drop-shadow-xl 
                md:text-xl lg:text-3xl`}>
                    {imgTitle}
                </h4>
                <div className='flex flex-col flex-wrap space-y-2
                lg:flex-row lg:space-x-1 lg:space-y-0'>
                </div>
                <p className='text-left py-4 text-slate-100 text-sm 
                lg:text-base'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptas, ipsam rem et explicabo nemo unde doloremque ducimus quasi assumenda labore molestiae error repellat omnis veritatis? Ipsa eius recusandae rerum!
                </p>
                <div className="flex w-fit justify-end text-custom-dark ml-auto mt-1 mb-2 
                    md:justify-end ">
                  <ButtonSolid 
                    btnStyles={'bg-white'}
                    btnTitle={'Learn more'} 
                    icon={
                      <HiChevronRight className='h-6 w-6 lg:h-8 lg:w-8' aria-hidden={true} />
                    } 
                  />
                </div>
            </div>
        </div>
        )
}

export default CardArticle;