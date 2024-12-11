import React from 'react'
import thumbnail from '../assets/default-thumbnail.png'
import { Link } from 'react-router-dom'

const Videocard = (props) => {
    return (
        <Link to={ `/video/${ props.videokey }` }>
            <div className='h-64 w-80 my-4 dark:text-light-white'>
                <img className='rounded-2xl mb-2' src={props.data.thumbnails.medium.url || thumbnail} alt="thumbnail" />
                <div id='about-video' className='flex items-center'>
                    <img
                        id='channelProfile'
                        className='h-10 w-10 rounded-3xl mr-2 relative bottom-2'
                        src={props.data.thumbnails.medium.url} alt="profile" />
                    <div>
                        <p id='title' className='m-1 capitalize text-sm font-semibold tracking-wide'>{props.data.title}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Videocard