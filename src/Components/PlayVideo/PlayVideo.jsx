import React from 'react'
import './PlayVideo.css'
import video1 from '/home/threed112/Youtube-Clone/src/assets/video.mp4'
import like from '/home/threed112/Youtube-Clone/src/assets/like.png'
import dislike from '/home/threed112/Youtube-Clone/src/assets/dislike.png'
import share from '/home/threed112/Youtube-Clone/src/assets/share.png'
import save from '/home/threed112/Youtube-Clone/src/assets/save.png'
import jack from '/home/threed112/Youtube-Clone/src/assets/jack.png'
import user_profile from '/home/threed112/Youtube-Clone/src/assets/user_profile.jpg'
const PlayVideo = () => {
  return (
    <div className = 'play-video'>
        <video src={video1} controls autoPlay muted></video>
      
    </div>
  )
}

export default PlayVideo
