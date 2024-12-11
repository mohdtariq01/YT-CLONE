import React from 'react'

const ChannelCard = (props) => {
  return (
    <div className='h-64 w-80 my-4 flex flex-col items-center dark:text-light-white'>
        <img 
            className='h-48 w-48 rounded-full'
            src={ props.data.thumbnails.medium.url } 
            alt=''
        />
        <p className='m-1 capitalize text-lg font-semibold tracking-wide'>{ props.data.channelTitle }</p>
    </div>
  )
}

export default ChannelCard