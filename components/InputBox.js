import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { db, storage } from '@/firebase';
import firebase from "firebase/compat/app";

function InputBox() {
    const { data: session } = useSession();
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const [ imageToPost, setImageToPost ] = useState(null);

    const sendPost = e => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
            if (imageToPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url')

                removeImage();

                uploadTask.on('state_change', null, error =>console.error(error), () => {
                    // When the upl completes
                    storage.ref(`posts`).child(doc.id).getDownloadURL().then(url => {
                        db.collection(`posts`).doc(doc.id).set({
                            postImage: url
                        }, { merge: true })
                    })
                } )
            }
        }) 

        inputRef.current.value = '';
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        
        reader.onload = e => {
           setImageToPost(e.target.result);
        };
    };

    const removeImage = () => { 
        setImageToPost(null); 
    };
    

  return (
    <div className='bg-gray-600 p-2 rounded-2xl shadow-xl text-gray-300 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <Image 
                className='rounded-full'
                src={session.user.image}
                width={40}
                height={40}
                layout="fixed"
            />
            <form className='flex flex-1'>
                <input
                    className='rounded-full h-12 bg-gray-500 flex-grow px-5 focus:outline-none text-gray-300' 
                    type="text"
                    ref={inputRef} 
                    placeholder={`O czym myślisz, ${session.user.name}?`} 
                />
                <button hidden type='submit' onClick={sendPost}>
                    Wyślij
                </button>
            </form>

            {imageToPost && (
                <div onClick={removeImage} className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>
                    <img className='h-10 object-contain' src={imageToPost} alt="" />
                    <p className='text-xs text-red-500 text-center'>Usuń</p>
                </div>
            )}
        </div>

        <div className='flex justify-evenly p-3 border-t'>
            <div className='inputIcon'>
                <VideoCameraIcon className='h-7 text-red-500' />
                <p className='text-xs sm:text-sm xl:text-base'>Na żywo</p>
            </div>


            <div onClick={() => filepickerRef.current.click()} 
            className='inputIcon'>
                <CameraIcon className='h-7 text-green-400' />
                <p className='text-xs sm:text-sm xl:text-base'>Zdjęcie</p> {/* /Wideo */}
                <input 
                    ref={filepickerRef} 
                    onChange={addImageToPost} 
                    type="file" 
                    hidden 
                />
            </div>


            <div className='inputIcon'>
                <EmojiHappyIcon className='h-7 text-yellow-300' />
                <p className='text-xs sm:text-sm xl:text-base'>Samopoczucie/Aktywność</p>
            </div>
        </div>
    </div>
  )
}

export default InputBox