import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../assets/contextAPI';

import ReactPlayer from 'react-player/lazy'

import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Videodetails = () => {
    const { id } = useParams();
    const { setvideoID, videoData } = useContext(Context);
    const [readMore, setreadMore] = useState(false);
    setvideoID(id);

    function toggleReadMode(){
        setreadMore(!readMore);
    }

    if (videoData.length !== 0) {
        return (
            <div className='absolute top-16 right-0 w-[85%] border border-black p-5 dark:bg-dark-gray'>
                {console.log(videoData)}
                <div id="player" className='bg-dark-black relative h-104 '>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${id}`}
                        controls
                        width="100%"
                        height="100%"
                        playing={true}
                    />
                </div>
                <div id='videoTitle' className='m-2 text-xl font-bold dark:text-font-dark'>{videoData[0].snippet.title}</div>
                {/* channel-title, like count and view count */}
                <div className='w-4/5 my-2 px-4 flex flex-row items-center justify-between'>
                    <div className='flex items-center'>
                        <img
                            className='border border-black h-10 w-10 rounded-3xl mr-2'
                            src={videoData[0].snippet.thumbnails.medium.url} alt="channel" />
                        <p id='channelTitle' className='text-lg font-bold dark:text-font-dark'>{videoData[0].snippet.channelTitle}</p>
                    </div>
                    <div>
                        <span className='mx-2 dark:text-font-dark'> <ThumbUpIcon /> {videoData[0].statistics.likeCount} </span>
                        <span className='mx-2 dark:text-font-dark'> <VisibilityIcon /> {videoData[0].statistics.viewCount} </span>
                    </div>
                </div>

                {/* published-date */}
                {/* <p className='w-4/5 text-left mb-4 px-8 text-sm dark:text-font-dark'>2023-09-01</p> */}

                <div id="desc" className='px-6 text-sm  dark:text-font-dark'>{ readMore ? videoData[0].snippet.description.slice(0, 240) : videoData[0].snippet.description }
                    <span className='ml-1 cursor-pointer font-bolder text-base-red ' onClick={ toggleReadMode }>{ readMore ? "...read more" : "read less" }</span>
                </div>
            </div>
        )
    }


}

export default Videodetails