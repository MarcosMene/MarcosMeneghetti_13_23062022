import React from "react";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import { infoFeature } from "../../mock/infoFeature";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <section className="features">
      <h2 className="sr-only">Features</h2>
      <Features />
      <section/> */}
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {infoFeature.map((elem, index) => (
          <Features element={elem} key={index} />
        ))}
      </section>
    </main>
  );
};

export default Home;
