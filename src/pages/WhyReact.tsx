import mykir from "../assets/mykir.gif";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.9,
    },
  },
};

const WhyReact = () => {
  return (
    <div className="theory__choose x-center poppins-light-italic">
      <div>
        <h2 className="poppins-semibold main-gradient-color theory__heading">
          Why choose React?
        </h2>
        <div className="theory__choose-content">
          <blockquote
            style={{ color: "white", fontSize: "3rem", width: "70%" }}
          >
            <q>Build apps in vanilla javascript is a pure happiness!</q>
            <footer
              className="poppins-medium"
              style={{
                fontSize: "2rem",
                marginTop: "2rem",
                textAlign: "right",
              }}
            >
              Some random guy
            </footer>
          </blockquote>
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={cardVariants}>
              <div className="theory__mykir">
                <img src={mykir} />
              </div>
            </motion.div>
          </motion.div>

          <div className="theory__choose-pros">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
              }}
            >
              <div>Component-Based Architecture</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
              }}
            >
              <div>Ease of Writing HTML</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
              }}
            >
              <div>State Management</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
              }}
            >
              <div>Ecosystem and Community</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyReact;
