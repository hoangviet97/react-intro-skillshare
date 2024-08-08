import lifecycle from "../assets/lifecycle.png";
import { motion } from "framer-motion";

const LifecycleMethods = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          type: "spring",
        }}
      >
        <h3 className="poppins-medium main-gradient-color">
          Lifecycle Methods
        </h3>
      </motion.div>
      <div className="theory__section-text poppins-regular">
        A React component has three different phases in its lifecycle, including
        mounting, updating, and unmounting. Each phase has its own methods which
        are responsible. These methods are for class-based components,
        functional component has their own life cycle methods.
      </div>
      <div style={{ textAlign: "center" }}>
        <img src={lifecycle} width="90%" />
      </div>
    </div>
  );
};

export default LifecycleMethods;
