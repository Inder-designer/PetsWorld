import React from 'react'
import './Home.css';
import Banner from '../../Component/Banner/Banner';
import CategoryArea from '../../Component/CategoryArea/CategoryArea';
import SpecialProducts from '../../Component/SpecialProducts/SpecialProducts';
import Feature from '../../Component/Feature/Feature';
import Countdown from '../../Component/Countdown/Countdown';
import Blog from '../../Component/Blog/Blog';

const Home = () => {
  return (
    <div>
      <Banner/>
      <CategoryArea/>
      <SpecialProducts/>
      <Feature/>
      <Countdown/>
      <Blog/>
    </div>
  )
}

export default Home
