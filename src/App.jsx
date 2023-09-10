import React, { useState, useRef, useEffect } from "react";
import "./styles/App.css";
import heroIMG from "./assets/hero.webp";
import heroNextIMG from "./assets/hero-next.webp";
import heroNextNextIMG from "./assets/hero-next-next.webp";

function App() {
  const [animationDirection, setAnimationDirection] = useState(1); // 1 for right to left, -1 for left to right

  useEffect(() => {
    const slider = document.querySelector('.customer-logos');

    const handleAnimationIteration = () => {
      setAnimationDirection((prevDirection) => prevDirection * -1);
      slider.style.animationDirection = animationDirection > 0 ? 'normal' : 'reverse';
    };

    slider.addEventListener('animationiteration', handleAnimationIteration);

    return () => {
      slider.removeEventListener('animationiteration', handleAnimationIteration);
    };
  }, [animationDirection]);
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <span className="chip">Beyond Technology</span>
          <h1>
            <span>Unlocking</span>
            <span>Digital Potential.</span>
          </h1>
          <p>
            Our relentless commitment to innovation, coupled with our unwavering
            dedication to excellence, ensures that you'll experience the very
            best in technology solutions. Discover how we're reshaping the
            digital landscape to empower your success.
          </p>
          <button>Get Started</button>
        </div>
        <div className="hero-card">
          <div className="left-hero-card">
            <h2>Big Brands Turn To Us To Elevate Their Digital Presence.</h2>
            <p>
              From publicly traded enterprises to mom and pop e-commerce
              boutiques, our results speak for themselves. From Website
              Development and Mobile Application Development to full-funnel
              optimization and testing, we’re focused on your profitability and
              achieving your desired goals.
            </p>
            <div className="chip-holder">
              <div className="chip">Creative Problem Solvers</div>
              <div className="chip">Client-Centric Approach</div>
              <div className="chip">Proven Track Record</div>
            </div>
          </div>
          <div className="right-hero-card">
            <img src={heroIMG} alt="Hero Image" />
          </div>
        </div>
        <div className="hero-card-grid">
          <div className="hero-card-grid-left">
            <h2>
              Respect, <b>Businesses don't pay taxes..</b>
            </h2>
            <p>
              Businesses don't pay taxes or feed families, people do. Our
              defining value is a deep respect for the money we're managing on
              your behalf, regardless of the size of your business and
              development budget.
              <img src={heroNextIMG} alt="Hero Image" />
            </p>
          </div>
          <div className="hero-card-grid-right">
            <img src={heroNextNextIMG} alt="Hero Image" />
            <h2>
              Transparency <b>As a premier IT company..</b>
            </h2>
            <p>
              As a premier IT company, we stand by complete transparency in
              every aspect of our relationship with you. You'll receive updates
              detailing our performance every week – delivered right to your
              inbox.
            </p>
          </div>
        </div>
      </section>
      <section className="clients-section">
        <h2>Trusted by leading companies</h2>
          <div className="overlay"></div>
        <div class="customer-logos">
            <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" />
            <img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" />
            <img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" />
            <img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" />
            <img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" />
            <img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" />
            <img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" />
            <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" />
            <img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" />
            <img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" />
            <img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" />
            <img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" />
            <img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" />
            <img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" />
        </div>
      </section>
    </>
  );
}

export default App;
