
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../data';
import { value_converter } from '../../data';
import './Search.css';

const SearchResults = () => {
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      const search_url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${encodeURIComponent(searchQuery)}&type=video&key=${API_KEY}`;
      
      const response = await fetch(search_url);
      const data = await response.json();
      
      if (data.items) {
        // Get video IDs to fetch additional statistics
           const videoIds = data.items.map(item => item.id.videoId).join(',');
        
        // Fetch video statistics (views, likes, etc.)
        const stats_url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${API_KEY}`;
        const statsResponse = await fetch(stats_url);
        const statsData = await statsResponse.json();
        
        // Combine search results with statistics
        const resultsWithStats = data.items.map((item, index) => ({
          ...item,
          statistics: statsData.items[index]?.statistics || {}
        }));
        
        setSearchResults(resultsWithStats);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

  if (loading) {
    return <div className="loading">Loading search results...</div>;
  }

  return (
    <div className="search-results">
      <h2>Search results for: "{decodeURIComponent(searchQuery)}"</h2>
      <div className="results-container">
        {searchResults.map((item, index) => (
          <Link 
            to={`/video/${item.snippet.categoryId || '0'}/${item.id.videoId}`} 
            className="search-result-card" 
            key={index}
          >
            <img 
              src={item.snippet.thumbnails.medium.url} 
              alt={item.snippet.title} 
              className="result-thumbnail"
            />
            <div className="result-info">
              <h3>{item.snippet.title}</h3>
              <p className="channel-name">{item.snippet.channelTitle}</p>
              <p className="video-stats">
                {item.statistics.viewCount ? 
                  `${value_converter(item.statistics.viewCount)} views` : 
                  'No view data'
                } • {new Date(item.snippet.publishedAt).toLocaleDateString()}
              </p>
              <p className="description">
                {item.snippet.description.slice(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;