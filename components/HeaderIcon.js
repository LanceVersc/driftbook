import React from 'react'

function HeaderIcon({ Icon, active }) {
  return (
    <div className='flex items-center cursor-pointer 
    md:px-10 sm:h-14 md:hover:bg-gray-500 rounded-xl 
    active:border-b-2 active:border-orange-500 group'>
        <Icon 
            className={`h-5 text-gray-400  text-center sm:h-7 mx-auto
            group-hover:text-orange-400 ${
                active && 'text-orange-500'
            }`} 
        />
    </div>
  );
}

export default HeaderIcon