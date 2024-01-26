import React from 'react';

const NewsPackages = () => {
  // Your component logic goes here

  return (
    // Your JSX code goes here
    <div className='container'>
      <div className='row justify-content-center'>
        <h1 className='mt-3'>News Packages</h1>
        <div className='news-package col-md-10 mt-5'>
          <h3>Package 1</h3>
          <video width='500' height='300' controls>
            <source src='https://player.vimeo.com/progressive_redirect/playback/883455384/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=707afb0d802486a70764b132d0b59b73eccd56114dd24ad76c51a77811dee423' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='news-package col-md-10 mt-5'>
          <h3>Package 2</h3>
          <video width='500' height='300' controls>
            <source src='https://player.vimeo.com/progressive_redirect/playback/883455384/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=707afb0d802486a70764b132d0b59b73eccd56114dd24ad76c51a77811dee423' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default NewsPackages;
