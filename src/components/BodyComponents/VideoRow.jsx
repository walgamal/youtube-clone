import React from 'react'
import VideoInfo from './VideoInfo'

function VideoRow(props) {
  return (
    <div className='video-row-container'>
        <VideoInfo 
        title={props.title1}
        author={props.author1}
        views={props.views1}
        datePosted={props.datePosted1} />
        
        <VideoInfo 
        title={props.title2}
        author={props.author2}
        views={props.views2}
        datePosted={props.datePosted2} />
        
        <VideoInfo 
        title={props.title3}
        author={props.author3}
        views={props.views3}
        datePosted={props.datePosted3} />
    </div>
  )
}

export default VideoRow