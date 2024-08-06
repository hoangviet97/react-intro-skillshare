import lifecycle from "../assets/lifecycle.png";

const LifecycleMethods = () => {
  return (
    <div>
      <h3 className="poppins-medium main-gradient-color">Lifecycle Methods</h3>
      <div className="theory__section-text poppins-regular">
        React hooks are a powerful feature in React that allow you to add state
        and other features to functional components
      </div>
      <div style={{ textAlign: "center" }}>
        <img src={lifecycle} width="90%" />
      </div>
    </div>
  );
};

export default LifecycleMethods;
