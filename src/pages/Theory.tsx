import Todo from "../components/todo/Todo";
import Hooks from "./Hooks";
import { useState } from "react";
import Lottie from "react-lottie";
import mobile from "../json/mobile.json";
import web from "../json/web.json";
import dom from "../assets/dom.png";

const Theory = () => {
  const [activeComponent, setActiveComponent] = useState("");

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
    <div className="theory">
      <div className="theory__introduction poppins-medium">
        <div className="theory__introduction-p">
          React is javascript library for building user interfaces that define
          how user-friendly apps should be written..
        </div>
        <div className="theory__introduction-p">
          It's widely used for creating Single-Page Applications, eCommerce
          sites, static sites, data dashboards, mobile apps and many more.
        </div>
        <div className="theory__introduction-p">
          React offers various extensions for entire application architectural
          support, such as Flux and React Native, beyond mere UI.
        </div>
        <div className="theory__introduction-icons">
          <Lottie options={mobileOptions} height={400} width={400} />
          <Lottie options={webOptions} height={400} width={400} />
        </div>
      </div>
      <div className="theory__main">
        <h2 className="poppins-semibold main-gradient-color theory__heading">
          How does it work?
        </h2>
        <div className="theory__sections">
          <div className="theory__section">
            <h3 className="poppins-medium main-gradient-color poppins-regular">
              Virtual DOM
            </h3>
            <div className="theory__dom-cols">
              <div className="theory__dom-col">
                <div className="theory__section-text poppins-regular">
                  It is React’s local copy of HTML DOM that, by locally
                  comparing elements, allows React libraries to render only
                  actually changed components and save time by avoiding many
                  unnecessary operations.
                </div>
                <div className="poppins-regular theory__dom-steps">
                  <div>Step 1 - Initial Rendering</div>
                  <div>Step 2 - State and Props Changes</div>
                  <div>Step 3 - Comparison Using Diff Algorithm</div>
                  <div>Step 4 - Reconciliation Process</div>
                  <div>Step 5 - Update to the Real DOM</div>
                </div>
              </div>
              <div className="theory__dom-col">
                <img src={dom} width="90%" />
              </div>
            </div>
          </div>
          <div className="theory__section">
            <h3 className="poppins-medium main-gradient-color">JSX</h3>
            <div className="theory__section-text poppins-regular">
              JSX, which stands for JavaScript XML, is a syntax extension for
              JavaScript that lets you write HTML-like markup inside a
              JavaScript file.
            </div>
          </div>
          <div className="theory__section">
            <h3 className="poppins-medium main-gradient-color">
              One-way Data Binding
            </h3>
            <div className="theory__section-text poppins-regular">
              It is a way of connecting UI elements with data that goes in one
              direction. This improves the performance, as when there is a
              change in the component, it will be seen in the view, and vice
              versa, with no interference with the whole code.
            </div>
          </div>
          <div className="theory__section">
            <h3 className="poppins-medium main-gradient-color">
              Components and Props
            </h3>
            <div className="theory__section-text poppins-regular">
              React is component-based. Components are the main building modules
              of React applications. These are reusable - class and functional -
              elements similar to JavaScript functions but working independently
              based on their own logic.
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
          <div className="theory__section">
            <h3 className="poppins-medium main-gradient-color">Hooks</h3>
            <div className="theory__section-text poppins-regular">
              React hooks are a powerful feature in React that allow you to add
              state and other features to functional components
            </div>
            <Hooks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theory;
