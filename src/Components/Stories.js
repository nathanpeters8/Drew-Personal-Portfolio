import React from 'react';

function Stories() {
  return (
    <div className='container'>
      <h1 className='mt-3'>Latest Stories</h1>
      <div className='row mt-5 justify-content-center'>
        <div className='article col-md-6 mb-4'>
          <h5 className=''>
            <a
              href='https://www.uncmirror.com/news/2023/11/10/unc-professors-travel-to-belize-to-gain-more-educational-experience/'
              className='text-dark'
            >
              UNC Professors Travel to Belize to Gain More Educational Experience
            </a>
          </h5>
          <a href='https://www.uncmirror.com/news/2023/11/10/unc-professors-travel-to-belize-to-gain-more-educational-experience/'>
            <div
              className='aspectRatioBox'
              style={{
                backgroundImage: `url(https://i1.wp.com/www.uncmirror.com/wp-content/uploads/2023/11/unc-9.jpg?resize=1024%2C785&ssl=1)`,
              }}
            ></div>
          </a>
        </div>
        <div className='article col-md-6 mb-4'>
          <h5 className='text-dark'>
            <a
              href='https://www.uncmirror.com/news/2023/10/10/unc-student-organizes-fundraiser-for-maui-wildfire-victims/'
              className='text-dark'
            >
              UNC Student Organizes Fundraiser for Maui Wildfire Victims
            </a>
          </h5>
          <a href='https://www.uncmirror.com/news/2023/10/10/unc-student-organizes-fundraiser-for-maui-wildfire-victims/'>
            <div
              className='aspectRatioBox'
              style={{
                backgroundImage: `url(https://cdn.myportfolio.com/5bfe8294-83c0-46fa-84c6-a3c0bb5c73b6/354a2d94-77b4-41dd-879e-13e02f242278_rw_1920.jpg?h=61e4f16522b5885882409948baccd810)`,
              }}
            ></div>
          </a>
        </div>
        <div className='article col-md-6 mb-4'>
          <h5 className='text-dark'>
            <a href='#' className='text-dark'>
              Texas on tap for UNC Cross Country this Saturday
            </a>
          </h5>
          <a href='#'>
            <div
              className='aspectRatioBox'
              style={{
                backgroundImage: `url(https://cdn.myportfolio.com/5bfe8294-83c0-46fa-84c6-a3c0bb5c73b6/4c2513a7-ff22-4933-bbd5-2f37a396ebcc_rw_1920.jpg?h=0b278960bc8659f5193117eba9956cad)`,
              }}
            ></div>
          </a>
        </div>
        <div className='article col-md-6 mb-4'>
          <h5 className='text-dark'>
            <a href='#' className='text-dark'>
              UNC earns No. 14 spot in latest USTFCCCA Regional Ranking
            </a>
          </h5>
          <a href='#'>
            <div
              className='aspectRatioBox'
              style={{
                backgroundImage: `url(https://cdn.myportfolio.com/5bfe8294-83c0-46fa-84c6-a3c0bb5c73b6/4b2015aa-1dde-4aa2-a7df-0f87639f36b5_rw_1920.jpg?h=93ec484224c952c6dcdf3ef09cd5eb62)`,
              }}
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stories;
