import React, { useContext } from 'react'
import Videocard from './Videocard'
import { Context } from '../assets/contextAPI'
import ChannelCard from './ChannelCard'


const Feed = () => {
    const { feedData, selectedCategories } = useContext(Context)
    return (
        <>
            <h1 className='text-base-red z-10 absolute top-20 left-60 text-2xl font-bold capitalize'>{selectedCategories} <span className='text-dark-black dark:text-light-white'>Videos</span></h1>
            <div className='flex flex-wrap al justify-evenly absolute top-16 right-0 w-[85%] pt-12 dark:bg-dark-gray h-fit'>
                {feedData.map((e) => {
                    if(e.id.kind === 'youtube#video'){
                        return (
                            <Videocard
                                key={ e.id.videoId }
                                videokey={ e.id.videoId }
                                data={ e.snippet }
                            />
                        )
                    }else{
                        return (
                            <ChannelCard
                                key={ e.id.channelId }
                                data={ e.snippet }
                            />
                        )
                    }
                })}

            </div>
        </>
    )
}

export default Feed