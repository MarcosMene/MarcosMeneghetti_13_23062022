import React from "react";
import { useNavigate } from "react-router-dom";
import "./notFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  /**
   * @name NotFound
   * @description create a page 404 if a url not found.
   * @return {JSX.Element}
   */

  return (
    <main>
      <div className="hero-not-found">
        <section className="hero-not-found-content">
          <h2 className="sr-only">Ops! </h2>
          <p className="subtitle">Ops, page not found!</p>
          <p className="text">
            Lets take you
            <span>
              <button
                className="hero-not-found-link"
                onClick={() => navigate(-1)}
              >
                back
              </button>
            </span>
          </p>
        </section>
      </div>
    </main>
  );
};

export default NotFound;
