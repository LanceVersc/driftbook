import React from 'react'
import StoryCard from './StoryCard';

const stories = [
    {
        name: "Błażej Młynek",
        src: "https://i.imgur.com/94JWU8k.jpg",
        profile: "https://i.imgur.com/MPIuyqX.jpg",
    },
    {
        name: "Elon Musk",
        src: "https://i.imgur.com/T7f6drL.jpg",
        profile: "https://i.imgur.com/Nw0LjmU.jpg",
    },
    {
        name: "Joe Biden",
        src: "https://i.imgur.com/jPzFJaB.jpg",
        profile: "https://i.imgur.com/Swxa6W5.jpg",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://i.imgur.com/2rWULbY.jpg",
        profile: "https://i.imgur.com/Ym4z7gd.jpg",
    },
    {
        name: "Bill Gates",
        src: "https://i.imgur.com/qBz3R23.jpg",
        profile: "https://i.imgur.com/TnxMc5C.png",
    },
]

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
        {stories.map(story => (
            <StoryCard 
                key={story.src} 
                name={story.name} 
                src={story.src} 
                profile={story.profile} 
            />
        ))}
    </div>
  )
}

export default Stories