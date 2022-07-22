import React from "react";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import { infoFeature } from "../../mock/infoFeature";

/**
 * @name Home
 * @description create the home page with Hero element and features element
 * @returns  {JSX.Element}
 */

const Home = () => {
  return (
    <main>
      <Hero />
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
