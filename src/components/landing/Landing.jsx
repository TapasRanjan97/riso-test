import Herosec from "../hero/Herosec";
import "./Landing.css";
import costimg from "../../assets/images/construction.gif";

function Landing() {
  return (
    <div className="landing-container">
      <Herosec />
      <div className="comming-soon-container">
        <div className="const-img">
          <img src={costimg} alt="const illustration" />
        </div>
        <div className="coming-soon-text-conatiner">
          <div className="coming-soon-text">We Are Coming Soon . . . </div>
          <div className="coming-soon-desc">
            We're strong believers that the best solutions come from gathering
            new insights and pushing conventional boundaries.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
