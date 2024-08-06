import { Sandpack } from "@codesandbox/sandpack-react";

const Hooks = () => {
  return (
    <div>
      <h3 className="poppins-medium main-gradient-color">Hooks</h3>
      <div className="theory__section-text poppins-regular">
        React hooks are a powerful feature in React that allow you to add state
        and other features to functional components
      </div>
      <div className="theory__sandbox">
        <Sandpack theme="light" template="react" />
      </div>
    </div>
  );
};

export default Hooks;
