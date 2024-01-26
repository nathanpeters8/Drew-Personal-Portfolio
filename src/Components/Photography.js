import React from 'react';

function Photography() {
  const images = [
    'https://picsum.photos/600/500',
    'https://picsum.photos/600/500',
    // Add more image URLs here
  ];

  return (
    <div className='gallery container'>
      <h1 className='mt-3'>Photography Gallery</h1>
      <div className='row d-flex flex-row mt-5'>
        {/* IDEA 1: card layout for every image */}
        {images.map((image, index) => (
          <div className='col-md-6' key={index}>
            <div className='card mb-4 shadow-sm'>
              <img src='https://picsum.photos/600/500' className='card-img-top' alt='Random placeholder' />
              {/* <div className='card-body'>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photography;
