import React from "react";
import MainNav from "../components/navHome";
import Hero from "../components/hero";
import Features from "../components/features";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="home">
      <MainNav />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;