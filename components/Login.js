import React from 'react'
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

function Login() {
  return (
    <div className='grid place-items-center'> {/* zdjecie fb */}
        <Image 
        src="https://i.imgur.com/6zmQUwm.png"
        height={400}
        width={400}
        objectFit="contain"
        /> 
        <h1 onClick={signIn} className='p-5 bg-blue-500 rounded-full text-white 
        text-center cursor-pointer'>
            Zaloguj się z użyciem konta Facebook
        </h1>
    </div>
  )
}

export default Login