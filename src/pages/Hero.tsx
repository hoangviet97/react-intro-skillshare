import Lottie from "react-lottie";
import reactIcon from "../json/react-icon.json";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="hero">
      <div className="hero__text">
        <div>
          <h3 className="poppins-regular hero__section">Skillshare</h3>
          <h1 className="poppins-semibold hero-heading main-gradient-color">
            React basics
          </h1>
        </div>
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
