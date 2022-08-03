
import React, { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Img from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { BsPlay } from 'react-icons/bs';

import { Image } from './../types';

interface IProps {
  post: Image;
  isShowingOnHome?: boolean;
}

const Card: NextPage<IProps> = ({ post: { caption, postedBy, image, _id, likes }, isShowingOnHome }) => {
  const [isHover, setIsHover] = useState(false);
  
  if(!isShowingOnHome) {
    return (
      <div>
        <Link href={`/detail/${_id}`}>
          <Img
            className='w-[250px] md:w-full rounded-xl cursor-pointer'
            src={image.asset.url}
            alt='Img'
            layout='responsive'
          />
        </Link>
            <div className='flex gap-2 -mt-8 items-center ml-4'>
              <p className='text-white text-lg font-medium flex gap-1 items-center'>
                <BsPlay className='text-2xl' />
                {likes?.length || 0}
              </p>
            </div>
        <Link href={`/detail/${_id}`}>
          <p className='mt-5 text-md text-gray-800 cursor-pointer w-210'>
            {caption}
          </p>
        </Link>
      </div>
    )
  }

  return (
    <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
      
      <div className='lg:ml-20 flex gap-4 relative'>
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className='rounded-3xl'
        >
          <Link href={`/detail/${_id}`}>
            <Img
            className='w-[250px] md:w-full rounded-xl cursor-pointer'
            src={image.asset.url}
            alt='Img'
            layout='responsive'
          />
          </Link>
        </div>
        <Link href={`/detail/${_id}`}>
              <p className='mt-2 font-normal '>{caption}</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;