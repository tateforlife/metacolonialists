import React from 'react';
import PropTypes from 'prop-types';

import './home.styles.scss';
import './slider.css';

import Header from '../../components/header/header.component';
import Welcome from '../../components/welcome/welcome.component';
import Starfield from '../../components/starfield/starfield.component';
import Statistics from '../../components/statistics/statistics.component';
import About from '../../components/about/about.component';
import Footer from '../../components/footer/footer.component';
import Team from '../../components/team/team.component';
import Roadmap from '../../components/roadmap/roadmap.component';
import FAQ from '../../components/faq/faq.component';
import Partners from '../../components/partners.component.jsx/partners.component';

const HomePageComponent = ({
  currentAccount,
  setCurrentAccount,
  publicActive,
  presaleActive,
  raffleStatus,
}) => {
  return (
    <section className='home-page'>
      <Header
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <Welcome
        isMintShown={publicActive || presaleActive || raffleStatus}
      />
      <About />
      <Statistics />
      <Starfield />
      <Roadmap />
      <Team />
      <FAQ />
      <Partners />
      <Footer />
    </section>
  );
};

HomePageComponent.propTypes = {
  network: PropTypes.string,
  currentAccount: PropTypes.string,
  setCurrentAccount: PropTypes.func,
  publicActive: PropTypes.bool,
  presaleActive: PropTypes.bool,
  raffleStatus: PropTypes.bool,
  setMintType: PropTypes.func,
  setMintProof: PropTypes.func,
}

export default HomePageComponent;
