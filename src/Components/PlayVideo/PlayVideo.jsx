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
    <div className='play-video'>
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube Channel to Learn web development</h3>
      <div className="play-video-info">
        <p>1525 views &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt="" />125</span>
          <span><img src={dislike} alt="" />2</span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className='publisher'>
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe GreatStackt to watch more tutuorials on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Good job!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Good job!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Good job!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Good job!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo
