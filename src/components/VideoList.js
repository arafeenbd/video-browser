import React from 'react';

// imageUrl : video.snippet.thumbnails.default.url

const VideoList = props => {
  console.log(props.videos)
  return (
    <ul className="col-md-4 list-group">
    {
      props.videos.map( video => {
        return (
          <li key={video.id.videoId}>
            {video.snippet.title}
          </li>
        )
      })
    }
    </ul>
  )
}

export default VideoList;
