import Lottie from "react-lottie";
import mobile from "../json/mobile.json";
import web from "../json/web.json";
import { motion } from "framer-motion";

const Introduction = () => {
  const mobileOptions = {
    loop: true,
    autoplay: true,
    animationData: mobile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const webOptions = {
    loop: true,
    autoplay: true,
    animationData: web,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="theory__introduction x-center poppins-light">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          type: "spring",
        }}
      >
        <div className="theory__introduction-p">
          React is javascript library for building user interfaces that define
          how user-friendly apps should be written..
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          type: "spring",
        }}
      >
        <div className="theory__introduction-p">
          It's widely used for creating Single-Page Applications, eCommerce
          sites, static sites, data dashboards, mobile apps and many more.
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          type: "spring",
        }}
      >
        <div className="theory__introduction-p">
          React offers various extensions for entire application architectural
          support, such as Flux and React Native, beyond mere UI.
        </div>
      </motion.div>
      <div
        className="theory__introduction-icons"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            type: "spring",
          }}
        >
          <Lottie options={mobileOptions} height={400} width={400} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            type: "spring",
          }}
        >
          <Lottie options={webOptions} height={400} width={400} />
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
