import React from 'react'
import './styles.css';
import bannerImg from './bannerImg.png';
import Logo from '../../common/Logo';
const Banner = ({handleScrollMenu}) => {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Never fear, we’ve got burgers and beer!</h1>
          <p>Enjoy Fresh and Healthy Food with a Variety of Cuisines.</p>
          <button onClick={handleScrollMenu} >View Menu <i className="fas fa-long-arrow-alt-right"></i> </button>
        </div>
      </div>
      <img src={bannerImg} alt='banner' className="header-img" />
    </header>
  )
}

export default Banner;