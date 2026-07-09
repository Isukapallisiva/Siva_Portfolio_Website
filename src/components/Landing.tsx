import "./styles/Landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SIVARAMA
              <br />
              <span>DEEKSHITHULU</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Certified</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">PolicyCenter</div>
              <div className="landing-h2-2">Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">PolicyCenter</div>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
