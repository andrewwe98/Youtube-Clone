import React, { use } from 'react'
import './PlayVideo.css'
import video1 from '/home/andrewwells/Desktop/youtube-clone/src/assets/video.mp4'
import like from '/home/andrewwells/Desktop/youtube-clone/src/assets/like.png'
import dislike from '/home/andrewwells/Desktop/youtube-clone/src/assets/dislike.png'
import share from '/home/andrewwells/Desktop/youtube-clone/src/assets/share.png'
import save from '/home/andrewwells/Desktop/youtube-clone/src/assets/save.png'
import jack from '/home/andrewwells/Desktop/youtube-clone/src/assets/jack.png'
import user_profile from '/home/andrewwells/Desktop/youtube-clone/src/assets/user_profile.jpg'
import { useEffect, useState } from 'react'
import { API_KEY, value_converter} from '../../data'
import { useParams } from 'react-router-dom'


const PlayVideo = () => {

  const {videoId} = useParams();


  const [apiData, setAPiData]= useState(null);
  const [channelData, setChannelData] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchVideoData = async () => {
    // Fetch video data from YouTube API
    const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url).then(response => response.json()).then(data => {
      setAPiData(data.items[0]);
    });
  };

  const fetchOtherData = async () => {
    // Fetch channel data from YouTube API
    const channelData_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url).then(response => response.json()).then(data => {
      setChannelData(data.items[0]);
    });
//   fetching comment data from youtube api


 const comment_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`;
  await fetch (comment_url).then(response => response.json()).then(data => {
    setComments(data.items);
  }); 


  };

 
 
  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  } , [apiData]);



  if (!apiData) return null;

  return (
    <div className='play-video'>
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData.snippet.title}</h3>
      <div className="play-video-info">
        <p>{apiData?value_converter(apiData.statistics.viewCount) : "16k"} views &bull; {new Date(apiData.snippet.publishedAt).toLocaleDateString()}</p>
        <div>
          <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount) : "16k"}</span>
          <span><img src={dislike} alt="" />{apiData?value_converter(apiData.statistics.dislikeCount) : "16k"}</span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className='publisher'>
        <img src={channelData?.snippet?.thumbnails?.default?.url} alt="" />
        <div>
          <p>{channelData?channelData.snippet.title : "Channel Name"}</p>
          <span>{channelData?`${value_converter(channelData.statistics.subscriberCount)} Subscribers` : "1M Subscribers"}</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
       <p>{apiData?apiData.snippet.description.slice(0, 250) : "No description available"}</p>
        <h4>{apiData?value_converter(`${apiData.statistics.commentCount} Comments`)  : "0 Comments"}</h4>
        {comments.map((item, index)=>{
          return (
            <div className="comment" key={index}>
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{new Date(item.snippet.topLevelComment.snippet.publishedAt).toLocaleDateString()}</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          )
        })}
        
  </div>
  
  </div>
  )
}

export default PlayVideo
