import React from 'react';

import './faq.styles.scss';

const FAQ = () => {
  return (
    <div className='faq' id='faq'>
      <h3 className='faq__heading'>
        F.A.Q
      </h3>
      <div className='faq__list'>
        <details className='faq__list-item'>
          <summary>What is the launсh date? </summary>
          <p className='faq__list-item-paragraph'>
            Our launch will be on the 8th of February - the pre-mint phase.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>What is the mint price for Meta Colonialists NFT?</summary>
          <p className='faq__list-item-paragraph'>
            OG role will be able to mint for 0.14eth. Other roles and public sale price will be 0.15eth.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>How do the minting process will be happening?</summary>
          <p className='faq__list-item-paragraph'>
            We are having the following phases:
          </p>
          <p className='faq__list-item-paragraph'>
            <span>DAY 01</span> 8th of February 3 PM EST - OG and WL mint (24 hours window)
          </p>
          <p className='faq__list-item-paragraph'>
            <span>DAY 02</span> 9th of February 3 PM EST - Raffle mint (24 hours window)
          </p>
          <p className='faq__list-item-paragraph'>
            <span>DAY 03</span> 10th of February 8 PM EST - Public sale
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>What is the raffle and how it works?</summary>
          <p className='faq__list-item-paragraph'>
            The raffle is a process when our system is randomly choosing people&apos;s wallets who will be able to mint before the public mint.
          </p>
          <p className='faq__list-item-paragraph'>
            Registration for the raffle will be opened from the 8th of February 3 PM - 9th of February 3 PM EST.
          </p>
          <p className='faq__list-item-paragraph'>
            Raffle mint will happen - 9th of February 3 PM -  10th of February 3 PM EST.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>How do I know if my NFT is one of the 176 unique with special benefits?</summary>
          <p className='faq__list-item-paragraph'>
            As you know, we have 176 NFTs which give 0.1eth cashback + exclusive merch. Those 176 NFTs will be chosen randomly from OG and WL holders. The winners will be announced after the 15th of February!
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
