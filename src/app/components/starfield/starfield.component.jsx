import React from 'react';
import Slider from 'react-slick';
import useMediaHook from '../../hooks/media.hook';

import './starfield.styles.scss';

const Starfield = () => {
  const [selectedColonialist, setSelectedColonialist] = React.useState(1);

  const { isMobile, isTablet, isAvgDesktop } = useMediaHook();

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: (isMobile && 1) || (isTablet && 2) || (isAvgDesktop && 3) || 4,
    slidesToScroll: (isMobile && 1) || (isTablet && 2) || (isAvgDesktop && 3) || 4,
    beforeChange: (_, newIndex) => {
      if (isMobile) {
        setSelectedColonialist(newIndex + 1);
      }
    },
    dots: !isMobile && !isTablet,
  };

  return (
    <div className='starfield'>
      <div className='starfield-wrapper'>
        <canvas id='canvas'></canvas>
        <div className='starfield-current'>
          <img
            src='/game-1.png'
            alt='game colonialist 1'
            className={`
              starfield-current-img
              ${selectedColonialist === 1 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/game-2.png'
            alt='game colonialist 2'
            className={`
              starfield-current-img
              ${selectedColonialist === 2 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/game-3.png'
            alt='game colonialist 3'
            className={`
              starfield-current-img
              ${selectedColonialist === 3 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/game-4.png'
            alt='game colonialist 4'
            className={`
              starfield-current-img
              ${selectedColonialist === 4 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/game-5.png'
            alt='game colonialist 5'
            className={`
              starfield-current-img
              ${selectedColonialist === 5 ? 'starfield-current-img--visible' : ''}
            `}
          />
        </div>
      </div>
      <div className='starfield-slider'>
        <h3>Legendary Units</h3>
        <div className='starfield-slider-wrapper'>
          <Slider {...settings}>
            <div onClick={() => setSelectedColonialist(1)}>
              <img src='slider-1.png' alt='slider 1' />
            </div>
            <div onClick={() => setSelectedColonialist(2)}>
              <img src='slider-2.png' alt='slider 2' />
            </div>
            <div onClick={() => setSelectedColonialist(3)}>
              <img src='slider-3.png' alt='slider 3' />
            </div>
            <div onClick={() => setSelectedColonialist(4)}>
              <img src='slider-4.png' alt='slider 4' />
            </div>
            <div onClick={() => setSelectedColonialist(5)}>
              <img src='slider-5.gif' alt='slider 5' />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Starfield;
