import React from 'react'
import './Recommended.css'
import thumbnail1 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail1.png'
import thumbnail2 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail2.png'
import thumbnail3 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail3.png'
import thumbnail4 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail4.png'
import thumbnail5 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail5.png'
import thumbnail6 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail6.png'
import thumbnail7 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail7.png'
import thumbnail8 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail8.png'
import { useEffect, useState } from 'react'
import { API_KEY } from '../../data'
import { value_converter } from '../../data'
import { Link } from 'react-router-dom'

const Recommended = ({categoryId}) => {

  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {

    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(videoList_url).then(response=> response.json()).then(data=>setApiData(data.items))
  }

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className='recommended'>
      {apiData && apiData.map((item,index)=>{
        return (
      <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
      <img src={item.snippet.thumbnails.medium.url} alt="" />
      <div className="vid-info">
          <h4>{item.snippet.title}</h4>
          <p>{item.snippet.channelTitle}</p>
          <p>{value_converter(item.statistics.viewCount)} views</p>
      </div>
      </Link>
        );
      })}
     
    </div>
  )
}

export default Recommended
