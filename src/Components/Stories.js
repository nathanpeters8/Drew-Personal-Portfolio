import React from 'react';

function Stories() {
  return (
    <div className='container'>
      <h1 className='mt-3'>Latest Stories</h1>
      <div className='row mt-5 justify-content-center'>
        <div className='article col-md-6 mb-4'>
          <h4 className=''><a href='#' className='text-dark'>Article Title 1</a></h4>
          <img src='https://picsum.photos/500/400' alt='Random placeholder' />
        </div>
        <div className='article col-md-6 mb-4'>
          <h4 className=''><a href='#' className='text-dark'>Article Title 2</a></h4>
          <img src='https://picsum.photos/500/400' alt='Random placeholder' />
        </div>
        <div className='article col-md-6 mb-4'>
          <h4 className=''><a href='#' className='text-dark'>Article Title 3</a></h4>
          <img src='https://picsum.photos/500/400' alt='Random placeholder' />
        </div>
      </div>
    </div>
  );
}

export default Stories;
