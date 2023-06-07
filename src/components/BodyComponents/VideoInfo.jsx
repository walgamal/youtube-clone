import React from 'react'

function VideoInfo(props) {
  return (
    <div className='video-info-container'>
        <div className='video-img-container'>
            {/* <img className='video-img' src="" alt="" /> */}
        </div>
        <div className='video-details'>
            <img className='video-author-img' src="/assets/userIcon.svg" alt="author-pic" />
            <div className='video-title-author'>
                <p className='video-title'>
                    {props.title}
                </p>
                <p className='video-author'>
                    {props.author}
                </p>
                <p className='video-views-date-posted'>
                    {props.views} • {props.datePosted}
                </p>

            </div>
            <img className="video-details-dots-menu" src="/assets/dotsMenu.svg" alt="dots-menu" />
        </div>
    </div>
  )
}

export default VideoInfo