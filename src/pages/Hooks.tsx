import ef1 from "../assets/ef-start.png";
import ef2 from "../assets/ef-every.png";
import ef3 from "../assets/ef-state.png";
import state from "../assets/usestate.png";
import { motion } from "framer-motion";

const Hooks = () => {
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
        {" "}
        <h3 className="poppins-medium main-gradient-color">Hooks</h3>
      </motion.div>
      <div className="theory__section-text poppins-regular">
        React hooks are a powerful feature in React that allow you to add state
        and other features to functional components
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <div style={{ margin: "4rem 0" }}>
          <h4 className="poppins-medium" style={{ fontSize: "2.3rem" }}>
            useState
          </h4>
          <div className="theory__section-text poppins-regular">
            The useState hook allows you to add state to a functional component.
            It takes an initial value as an argument and returns an array with
            two elements: the current state value and a function to update it.
          </div>
          <div style={{ marginTop: "4rem" }}>
            <img src={state} alt="" />
          </div>
        </div>
        <div>
          <h4 className="poppins-medium" style={{ fontSize: "2.3rem" }}>
            useEffect
          </h4>
          <div className="theory__section-text poppins-regular">
            The useEffect hook allows you to perform side effects in a
            functional component. It combines the functionality of
            componentDidMount, componentDidUpdate, and componentWillUnmount
          </div>
          <div
            className="poppins-regular"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
              marginTop: "4rem",
              fontSize: "1.5rem",
            }}
          >
            <div>
              <img src={ef1} alt="" />
              <div style={{ color: "white" }}>
                Run useEffect only once on the first render
              </div>
            </div>
            <div>
              <img src={ef2} alt="" />
              <div style={{ color: "white" }}>
                Run useEffect on every render
              </div>
            </div>
            <div>
              <img src={ef3} alt="" />
              <div style={{ color: "white" }}>
                Run useEffect on change of a particular value
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hooks;
