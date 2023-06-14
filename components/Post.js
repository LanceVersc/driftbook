import Image from 'next/image';
import React from 'react'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';

function Post({ name, message, email, postImage, image, timestamp }) {
  return (
    <div className='flex flex-col'>
        <div className='p-5 bg-gray-600 mt-5 rounded-t-2xl shadow-xl'>
            <div className='flex items-center space-x-2'>
                <img 
                className='rounded-full' 
                src={image} 
                width={40} 
                height={40} 
                alt='' 
                />
                <div>
                    <p className='font-medium text-gray-300'>{name}</p>

                    <p className='text-xs text-gray-400'>
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </p>
                </div>
            </div>

            <p className='pt-4 text-gray-300'>{message}</p>
        </div>

        {postImage && (
            <div className='relative h-56 md:h-96 bg-gray-600'>
                <Image src={postImage} objectFit='cover' layout='fill' />
            </div>
        )}

        {/* Footer of post */}
        <div className='flex justify-between items-center rounded-b-2xl bg-gray-600 shadow-xl text-gray-300 border-t'>
            <div className='inputIcon rounded-none rounded-bl-2xl'>
                <ThumbUpIcon className='h-4' />
                <p className='text-xs sm:text-base'>Lubię to</p>
            </div>
            
            
            <div className='inputIcon rounded-none'>
                <ChatAltIcon className='h-4' />
                <p className='text-xs sm:text-base'>Komentarz</p>
            </div>


            <div className='inputIcon rounded-none rounded-br-2xl'>
                <ShareIcon className='h-4' />
                <p className='text-xs sm:text-base'>Udostępnij</p>
            </div>
        </div>
    </div>
  );
}

export default Post