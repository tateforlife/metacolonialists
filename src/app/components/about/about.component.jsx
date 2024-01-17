import React from 'react';

import './about.styles.scss';

import Social from '../../components/header/social/social.component';

const About = () => {
  return (
    <div className='about' id="about">
      <img className='about__mobile-img' src='about-gif.gif' alt='About mobile' />
      <div className='about__colonialist'>
        <img src='about-gif.gif' alt='About colonialist 1' />
      </div>
      <div className='about__texts'>
        <h3 className='about__heading'>About</h3>
        <p>
          Welcome to the Club! MetaColonialists are one of the most powerful communities in the NFT world.
        </p>
        <p>
          We have gathered the mightiest crypto enthusiasts, crypto investors, celebrities, NFT holders and businessmen from the most popular projects together in order to create joint projects among the community. We are gaining momentum with each day and our final goal is the Metaverse!
        </p>
        <p>
          We have prepared our roadmap, where we have written down all of stages of our project in greater detail in order for you to be able to see our progress in real time!
        </p>
        <h5>Join the Club right now:</h5>
        <Social />
      </div>
    </div>
  );
};

export default About;
