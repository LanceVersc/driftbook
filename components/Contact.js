import Image from 'next/image'
import React from 'react'

function Contact({src, name}) {
  return (
    <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-500 text-gray-300 cursor-pointer p-2 rounded-xl'>
        <Image 
            className='rounded-full'
            objectFit='cover'
            src={src}
            width={50}
            height={50}
            layout='fixed'
        />
        <p>{name}</p>
        <div className='absolute bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full animate-bounce' />
    </div>
  )
}

export default Contact