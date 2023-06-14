import React from 'react'
import Image from 'next/image';

function SidebarRow({ src, Icon, title }) {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-500 rounded-xl cursor-pointer text-gray-300'>
        {src && (
            <Image 
                className='rounded-full'
                src={src}
                width={30}
                height={30}
                layout="fixed"
            />
        )}
        {Icon && (
            <Icon className="h-8 w-8 text-orange-400" />
        )}
        <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow