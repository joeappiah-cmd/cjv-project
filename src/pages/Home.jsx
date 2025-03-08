import React from 'react';
import MovieFeatures from "../components/MovieFeatures";
import TvShowsFeatures from '../components/TvShowFeatures';
import ContentSection from '../components/ContentSection';
import HeroSection from '../components/HeroSection';



const Home = () => {
  return (
    <div className="home-page">
      <header>
        <h1 className="text-6xl text-center py-8">Welcome to Streamify!!!!</h1>
      </header>
    
      <HeroSection />
      <MovieFeatures />
      <TvShowsFeatures />
      <ContentSection />
     
    </div>
  );
};

export default Home;
