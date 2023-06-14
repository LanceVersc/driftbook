import React from 'react'
import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
    const {data: session} = useSession();


  return (
    <div className='sticky top-0 z-50 bg-gray-600 flex items-center p-2 lg:px-5 shadow-md'>
        {/* Left */}
        <div className="flex items-center cursor-pointer">
            <Image 
                src="https://i.imgur.com/Fam3lRx.png" 
                width={40}
                height={40} 
                layout="fixed"
            /> 
            <div className="flex ml-2 items-center rounded-full bg-gray-500 p-2 text-gray-200"> {/* Menu wyszukiwania */}
                <SearchIcon className="h-6 text-gray-300" />
                <input 
                    className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none 
                    placeholder-gray-300 flex-shrink' 
                    type="text" 
                    placeholder='Wyszukaj w Driftbook' 
                />
            </div>
        </div>

        {/* Center */}
        <div className="flex justify-center flex-grow">
            <div className="flex space-x-6 md:space-x-2">
                <HeaderIcon active Icon={HomeIcon} />
                <HeaderIcon Icon={FlagIcon} />
                <HeaderIcon Icon={PlayIcon} />
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />

            </div>
        </div>

        {/* Right */}
        <div className='flex items-center sm:space-x-2 justify-end'>
            {/* Profile pic */}
            
            <Image 
                onClick={signOut}
                className="rounded-full cursor-pointer"
                src={session.user.image}
                width="40"
                height="40"
                layout="fixed"
            />

            <p className='whitespace-nowrap font-semibold pr-3 text-gray-300'>{session.user.name}</p>
            <ViewGridIcon className='icon' />
            <ChatIcon className='icon' />
            <BellIcon className='icon' />
            <ChevronDownIcon className='icon' />
        </div>

    </div>
  )
}

export default Header