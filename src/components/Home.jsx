import React from 'react';
import profilePlaceholder from '../assets/profile-placeholder.svg';

const Home = () => {
  return (
    <section id="home">
      <img src={profilePlaceholder} alt="Tejaswee Sulekh" style={{width: '150px', height: '150px', borderRadius: '50%'}} />
      <h1>Hello, I'm Tejaswee Sulekh</h1>
      <p>A Machine Learning and Software Engineer bridging the gap between complex algorithms and scalable software.</p>
    </section>
  );
};

export default Home;
