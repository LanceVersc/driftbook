import React from 'react'
import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
    { src: "https://i.imgur.com/Nw0LjmU.jpg", name: "Elon Musk" },
    { src: "https://i.imgur.com/Swxa6W5.jpg", name: "Joe Biden" },
    { src: "https://i.imgur.com/TnxMc5C.png", name: "Bill Gates" },
    { src: "https://i.imgur.com/Ym4z7gd.jpg", name: "Mark Zuckerberg" },
    { src: "https://i.imgur.com/kDtYGv7.jpg", name: "Harry Potter" },
    { src: "https://i.imgur.com/jEkYnix.jpg", name: "Elizabeth II" },
    { src: "https://i.imgur.com/adu1HpE.jpg", name: "James Bond" },
];

function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
        <div className='flex justify-between items-center text-gray-300 mb-5'>
            <h2 className='text-xl'>Kontakty</h2>
            <div className='flex space-x-2'>
                <VideoCameraIcon className='h-6' />
                <SearchIcon className='h-6' />
                <DotsHorizontalIcon className='h-6' />
            </div>
        </div>

        {contacts.map((contact) => (
            <Contact key={contact.src} src={contact.src} name={contact.name} />
        ))}
    </div>
  )
}

export default Widgets