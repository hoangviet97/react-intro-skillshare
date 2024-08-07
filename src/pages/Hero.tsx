import Lottie from "react-lottie";
import reactIcon from "../json/react-icon.json";
import { motion } from "framer-motion";

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
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
            }}
          >
            <h3 className="poppins-regular hero__section">Skillshare</h3>
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
            }}
          >
            <h1 className="poppins-semibold hero-heading main-gradient-color">
              React basics
            </h1>
          </motion.h1>
        </div>
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
