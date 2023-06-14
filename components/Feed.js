import React from 'react'
import Stories from './Stories';
import InputBox from './InputBox';
import Posts from './Posts';

function Feed() {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 
    overflow-y-auto scrollbar-hide'>

        <div className='mx-auto max-w-md md:max-w-lg'>
            <Stories />
            <InputBox />
            <Posts />
            
        </div>
    </div>
  )
}

export default Feed