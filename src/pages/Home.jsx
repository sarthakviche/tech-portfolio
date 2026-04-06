import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
