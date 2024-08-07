import Todo from "../components/todo/Todo";
import Hooks from "./Hooks";
import { useState } from "react";
import Lottie from "react-lottie";
import state from "../json/state.json";
import dom from "../assets/dom.png";
import realDom from "../assets/real-dom.png";
import dataBinding from "../assets/data-binding.png";
import jsxCode from "../assets/jsx-code.png";
import jsCode from "../assets/js-code.png";
import { Sandpack } from "@codesandbox/sandpack-react";
import LifecycleMethods from "./LifeycleMethods";
import { motion } from "framer-motion";

const Concepts = () => {
  const [activeComponent, setActiveComponent] = useState("");

  const stateOptions = {
    loop: true,
    autoplay: true,
    animationData: state,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="theory__main">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
        }}
      >
        <h2 className="poppins-semibold main-gradient-color theory__heading">
          How does it work?
        </h2>
      </motion.h2>
      <div className="theory__sections">
        <div className="theory__section">
          <div>
            <h3 className="poppins-medium main-gradient-color">Components</h3>
            <div className="theory__section-text poppins-regular">
              <span style={{ color: "#f32170" }}>React components</span> are the
              building block of React Application. They are the reusable code
              blocks containing logics and and UI elements. They have the same
              purpose as JavaScript functions and return HTML. Components make
              the task of building UI much easier.
            </div>
            <div
              style={{
                color: "white",
                marginTop: "3rem",
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
              }}
            >
              <div>
                <h4 className="poppins-medium" style={{ fontSize: "2.3rem" }}>
                  Class components
                </h4>
                <ul
                  className="poppins-regular"
                  style={{ fontSize: "2.3rem", marginLeft: "40px" }}
                >
                  <li>
                    Employ JavaScript classes that extend the React.Component
                    class provided by React itself
                  </li>
                  <li>Ability to manage their own internal state</li>
                  <li>Each class component have lifecycle methods</li>
                </ul>
              </div>
              <div>
                <h4 className="poppins-medium" style={{ fontSize: "2.3rem" }}>
                  Functional components
                </h4>
                <ul
                  className="poppins-regular"
                  style={{ fontSize: "2.3rem", marginLeft: "40px" }}
                >
                  <li>
                    JavaScript functions that accept props (properties) as
                    arguments and return elements.
                  </li>
                  <li>
                    They don't have built-in state or lifecycle methods (until
                    hooks)
                  </li>
                </ul>
              </div>
            </div>
            <div className="theory__todo-example">
              <div className="theory__todo-section theory__todo-control">
                <div className="theory__todo-names poppins-medium">
                  <a
                    className="theory__todo-name"
                    onMouseEnter={() => setActiveComponent("todo")}
                    onMouseLeave={() => setActiveComponent("")}
                  >
                    &#10094;Todo /&#10095;
                  </a>
                  <a
                    className="theory__todo-name"
                    onMouseEnter={() => setActiveComponent("todoHeader")}
                    onMouseLeave={() => setActiveComponent("")}
                  >
                    &#10094;TodoHeader /&#10095;
                  </a>
                  <a
                    className="theory__todo-name"
                    onMouseEnter={() => setActiveComponent("todoForm")}
                    onMouseLeave={() => setActiveComponent("")}
                  >
                    &#10094;TodoForm /&#10095;
                  </a>
                  <a
                    className="theory__todo-name"
                    onMouseEnter={() => setActiveComponent("todoList")}
                    onMouseLeave={() => setActiveComponent("")}
                  >
                    &#10094;TodoList /&#10095;
                  </a>
                  <a
                    className="theory__todo-name"
                    onMouseEnter={() => setActiveComponent("todoItem")}
                    onMouseLeave={() => setActiveComponent("")}
                  >
                    &#10094;TodoItem /&#10095;
                  </a>
                </div>
              </div>
              <div className="theory__todo-section theory__todo-app">
                <Todo activeComponent={activeComponent} />
              </div>
            </div>
          </div>
        </div>
        <div className="theory__section">
          <div>
            <h3 className="poppins-medium main-gradient-color poppins-regular">
              Virtual DOM
            </h3>
            <div className="theory__dom-col">
              <div
                className="theory__section-text poppins-regular"
                style={{ paddingRight: "2.5rem" }}
              >
                <span style={{ color: "#f32170" }}>DOM</span> is a hierarchical
                representation of HTML documents. It defines the structure and
                properties of elements on a webpage, enabling JavaScript to
                dynamically access, manipulate, and update content, enhancing
                interactivity and functionality.
              </div>
              <div style={{ textAlign: "right" }}>
                <img src={realDom} width="90%" />
              </div>
            </div>
            <div className="theory__dom-col">
              <div>
                <div
                  className="theory__section-text poppins-regular"
                  style={{ paddingRight: "2.5rem" }}
                >
                  <span style={{ color: "#f32170" }}>Virtual DOM</span> is
                  React’s local copy of HTML DOM that, by locally comparing
                  elements, allows React libraries to render only actually
                  changed components and save time by avoiding many unnecessary
                  operations.
                </div>
                <div className="poppins-regular theory__dom-steps">
                  <div>Step 1 - Initial Rendering</div>
                  <div>Step 2 - State and Props Changes</div>
                  <div>Step 3 - Comparison Using Diff Algorithm</div>
                  <div>Step 4 - Reconciliation Process</div>
                  <div>Step 5 - Update to the Real DOM</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <img src={dom} width="90%" />
              </div>
            </div>
          </div>
        </div>
        <div className="theory__section">
          <div>
            <h3 className="poppins-medium main-gradient-color">JSX</h3>
            <div className="theory__section-text poppins-regular">
              JSX, which stands for JavaScript XML, is a syntax extension for
              JavaScript that lets you write HTML-like markup inside a
              JavaScript file.
            </div>
            <div>
              <div>
                <p
                  className="poppins-medium"
                  style={{ color: "white", fontSize: "2.1rem" }}
                >
                  Following JSX code:
                </p>
                <img src={jsxCode} width="50%" />
              </div>
              <div>
                <p
                  className="poppins-medium"
                  style={{ color: "white", fontSize: "2.1rem" }}
                >
                  is transformed into the this JavaScript code:
                </p>
                <img src={jsCode} width="50%" />
              </div>
            </div>
          </div>
        </div>
        <div className="theory__section">
          <div>
            <h3 className="poppins-medium main-gradient-color">
              One-way Data Binding
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div
                className="theory__section-text poppins-regular"
                style={{ paddingRight: "2.5rem" }}
              >
                It is a way of connecting UI elements with data that goes in one
                direction. This improves the performance, as when there is a
                change in the component, it will be seen in the view, and vice
                versa, with no interference with the whole code.
              </div>
              <div>
                <img src={dataBinding} width="100%" />
              </div>
            </div>
            <div
              className="theory__sandbox x-center"
              style={{ width: "80%", marginTop: "10rem" }}
            >
              <Sandpack theme="light" template="react" />
            </div>
          </div>
        </div>
        <div className="theory__section">
          <div>
            <h3 className="poppins-medium main-gradient-color">
              States and Props
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                alignItems: "center",
                marginTop: "-1rem",
              }}
            >
              <div>
                <Lottie options={stateOptions} height={250} width={250} />
              </div>
              <div className="theory__section-text poppins-regular">
                <span style={{ color: "#f32170" }}>State</span> is an object
                that holds data or information about the component. This data
                can change over time, and when it does, it causes the component
                to re-render to reflect the updated state.
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                alignItems: "center",
                marginTop: "-1rem",
              }}
            >
              <div>
                <Lottie options={stateOptions} height={250} width={250} />
              </div>
              <div className="theory__section-text poppins-regular">
                <span style={{ color: "#f32170" }}>Props</span> are used for
                passing data from one component to another. Props allow you to
                make components dynamic and reusable by enabling them to receive
                and utilize data provided by their parent components.
              </div>
            </div>
            <div className="theory__sandbox x-center" style={{ width: "80%" }}>
              <Sandpack theme="light" template="react" />
            </div>
          </div>
        </div>
        <div className="theory__section">
          <LifecycleMethods />
        </div>
        <div className="theory__section">
          <Hooks />
        </div>
      </div>
    </div>
  );
};

export default Concepts;
