import React from 'react';

import './roadmap.styles.scss';

const Roadmap = () => {
  const [selectedStep, setSelectedStep] = React.useState(1);

  const showStep = (step) => {
    if (step === 1) {
      let all = document.getElementsByClassName('roadmap__step-2');
      for (let i = 0; i < all.length; i++) {
        all[i].style.display = 'none';
      }

      all = document.getElementsByClassName('roadmap__step');
      for (let i = 0; i < all.length; i++) {
        all[i].style.display = 'flex';
      }
    }

    if (step === 2) {
      let all = document.getElementsByClassName('roadmap__step');
      for (let i = 0; i < all.length; i++) {
        all[i].style.display = 'none';
      }

      all = document.getElementsByClassName('roadmap__step-2');
      for (let i = 0; i < all.length; i++) {
        all[i].style.display = 'flex';
      }
    }

    setSelectedStep(step);
  };

  return (
    <div className='roadmap' id='roadmap'>
      <div className='roadmap__wrapper-bg'>
        <div className='roadmap__wrapper'>
          <h3 className='roadmap__heading'>Roadmap</h3>
          <div className='roadmap__info'>
            <div className='roadmap__phases'>
              <p
                className={`roadmap__phases-name ${selectedStep === 1 ? 'roadmap__phases-name--selected' : ''}`}
                onClick={() => showStep(1)}
              >
                1 HALF
              </p>
              <p
                className={`roadmap__phases-name ${selectedStep === 2 ? 'roadmap__phases-name--selected' : ''}`}
                onClick={() => showStep(2)}
              >
                2 HALF
              </p>
              <p className='roadmap__phases-name roadmap__phases-name--disabled'>PHASE 2</p>
            </div>
            <div className='roadmap__steps'>
              <div className='roadmap__step'>
                <div className='roadmap__step-box'>
                  0%
                </div>
                <div className='roadmap__step-promise'>
                  <h4 className='roadmap__step-heading'>
                    Community Formation
                  </h4>
                  <p className='roadmap__step-paragraph'>
                    Introducing you to our Space fam. Our main target is to build a close-knit Colony family, present our values, and give benefits to dedicated Colonialists.
                  </p>
                </div>
              </div>
              <div className='roadmap__step'>
                <div className='roadmap__step-box'>
                  5%
                </div>
                <div className='roadmap__step-promise'>
                  <h4 className='roadmap__step-heading'>
                    Unlocking first 2 rooms in MetaMuseum
                  </h4>
                  <p className='roadmap__step-paragraph'>
                    We welcome you into the MetaColonialists&apos; enchanting Museum. You will never forget this place once you&apos;ve been there. Now you can visit &quot;History Room (early unreleased renders)+&quot; and &quot;Fan-Art&quot; rooms out of the 16 total rooms.
                  </p>
                </div>
              </div>
              <div className='roadmap__step'>
                <div className='roadmap__step-box'>
                  10%
                </div>
                <div className='roadmap__step-promise'>
                  <h4 className='roadmap__step-heading'>
                    AR Launch and Competition
                  </h4>
                  <p className='roadmap__step-paragraph'>
                  Are you ready to see our Colonialists walking around the street next to your friends? Try out AR filters for TikTok and Instagram. Competition for the best video with our filter! Prizes valuing a total worth of $ 20,000!
                  </p>
                </div>
              </div>
              <div className='roadmap__step'>
                <div className='roadmap__step-box'>
                  25%
                </div>
                <div className='roadmap__step-promise'>
                  <h4 className='roadmap__step-heading'>
                    Exclusive Rewards and Colony Merch Launch
                  </h4>
                  <p className='roadmap__step-paragraph'>
                    We are releasing our first 500 pieces of Colony merch. Random 176 NFT holders will receive exclusively designed pieces.
                  </p>
                </div>
              </div>
              <div className='roadmap__step'>
                <div className='roadmap__step-box'>
                  40%
                </div>
                <div className='roadmap__step-promise'>
                  <h4 className='roadmap__step-heading'>
                    Legendary NFT
                  </h4>
                  <p className='roadmap__step-paragraph'>
                    Unlocking the 3rd &quot;Legendary Room&quot; in MetaMuseum. Releasing 15 Legendary MetaColonialists NFT&apos;s to OpenSea!
                  </p>
                </div>
              </div>
              <div className='roadmap__step-2' style={{ margin: 0 }}>
                <div className='roadmap__step-box'>
                  50%
                </div>
                <div className='roadmap__step-promise'>
                  <h4 className='roadmap__step-heading'>
                    Sending unique ART PIECES
                  </h4>
                  <p className='roadmap__step-paragraph'>
                    Everyone who has held our NFTs for more than one month will receive exclusive gifts from our 3D artist Nick Samushonok. Moreover, holders and OG members will receive a package in their mail with a Personal Colony Membership Card. You can use it the future to participate in events.
                  </p>
                </div>
              </div>
              <div className='roadmap__step-2'>
                <div className='roadmap__step-box'>
                  60%
                </div>
                <div className='roadmap__step-promise'>
                  <h4 className='roadmap__step-heading'>
                    $100,000 Grant for Holders
                  </h4>
                  <p className='roadmap__step-paragraph'>
                    We are launching an entrepreneur competition. All our NFT holders can share their ideas on how to make MetaColonialists a leader of the whole NFT market. The best idea will be sponsored with a grant of $100,000 and the winner will get access to project promotions.
                  </p>
                </div>
              </div>
              <div className='roadmap__step-2'>
                <div className='roadmap__step-box'>
                  75%
                </div>
                <div className='roadmap__step-promise'>
                  <h4 className='roadmap__step-heading'>
                    Grand Opening of our MetaMuseum
                  </h4>
                  <p className='roadmap__step-paragraph'>
                    All two floors of our MetaMuseum are ready for Colony visitors! You will find here a huge staircase leading to the 2nd floor and huge MetaColonialists in full height. 16 thematically designed rooms with presentations of all our 8.,888 NFT&apos;s.
                  </p>
                </div>
              </div>
              <div className='roadmap__step-2'>
                <div className='roadmap__step-box'>
                  100%
                </div>
                <div className='roadmap__step-promise'>
                  <h4 className='roadmap__step-heading'>
                    Grand Space Fam Party
                  </h4>
                  <p className='roadmap__step-paragraph'>
                    We&apos;ll make a world tour! Our NFT holders will vote and choose 3 different cities where we&apos;ll throw themed official events and private parties with dress-codes. As well as after-parties with the best DJ&apos;s and celebrities&apos; on board.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src='colonialist-left-roadmap.png' />
      <img src='colonialist-right-roadmap.png' />
    </div>
  );
};

export default Roadmap;
