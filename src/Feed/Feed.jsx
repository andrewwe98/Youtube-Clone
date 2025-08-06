import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail1.png'
import thumbnail2 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail2.png'
import thumbnail3 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail3.png'
import thumbnail4 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail4.png'
import thumbnail5 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail5.png'
import thumbnail6 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail6.png'
import thumbnail7 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail7.png'
import thumbnail8 from '/home/andrewwells/Desktop/youtube-clone/src/assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY } from '../data'


const Feed = ({category}) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    await fetch(videoList_url).then(resonse=> resonse.json()).then(data=>setData(data.items))
  }
  useEffect(() => {
    fetchData();
  }, [category]);

  return (
  <div className="feed">
    {data.map((item, index)=>{
      return (

    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
      <img src={thumbnail1} alt="" />
      <h2>Best Channel to learn coding that help you to be a web developer</h2>
      <h3>Greatstack</h3>
      <p>15k views &bull; 2 days ago</p>
    </Link>
    )
  })}
</div>
  )
}
export default Feed
