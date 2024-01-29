import React from 'react';

function AboutMe() {
  return (
    <div className='container'>
      <h1 className='mt-3'>About Me</h1>
      <div className='row mt-5'>
        <div className='skills col-12 mb-5'>
          <h3>Skills</h3>
          <hr />
          <div className='row'>
            <div className='col-6 col-md-3 d-flex flex-column'>
              <ul className='list-unstyled'>
                <li>Customer service</li>
                <li>Time management</li>
                <li>Hard working</li>
                <li>Teamwork oriented</li>
              </ul>
            </div>
            <div className='col-6 col-md-3 d-flex flex-column'>
              <ul className='list-unstyled'>
                <li>Strong communication</li>
                <li>AP Writing</li>
                <li>Fact checking</li>
                <li>Story Editing</li>
              </ul>
            </div>
            <div className='col-6 col-md-3 d-flex flex-column'>
              <ul className='list-unstyled'>
                <li>Public Relations</li>
                <li>Organized</li>
                <li>Video production</li>
                <li>Photography</li>
              </ul>
            </div>
            <div className='col-6 col-md-3 d-flex flex-column'>
              <ul className='list-unstyled'>
                <li>Adobe CC</li>
                <li>Video editing</li>
                <li>Work calmly under deadlines</li>
                <li>Social media management</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <h3>Education</h3>
          <hr />
          <div>
            <h4 className='text-decoration-underline'>B.A Journalism and Media Studies</h4>
            <h5>University of Northern Colorado</h5>
            <h6>
              <small className='fw-light fst-italic'>(Aug 2020 - Aug 2024)</small>
            </h6>
            <p className='lh-sm pt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perspiciatis porro dignissimos quis
              expedita ducimus non, ex, qui at odio similique sint optio cupiditate. Aliquam doloremque repudiandae est
              quae iure?
            </p>
          </div>
        </div>
        <div className='col-6'>
          <h3>Experience</h3>
          <hr />
          <div>
            <h4 className='text-decoration-underline'>Public Relations Intern</h4>
            <h5>University of Northern Colorado Athletics</h5>
            <h6>
              <small className='fw-light fst-italic'>(Sept 2022 - Dec 2022)</small>
            </h6>
            <p className='lh-sm pt-2'>
              Wrote meet previews for UNC cross country, live tweeted football and volleyball games, and took photos for
              women&#39;s basketball.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
