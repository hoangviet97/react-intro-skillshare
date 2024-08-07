const AdvancedReact = () => {
  return (
    <div className="advanced x-center">
      <h2 className="poppins-semibold main-gradient-color theory__heading">
        Advanced React
      </h2>
      <div
        className="theory__section-text poppins-regular"
        style={{
          marginTop: "12rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <div>Next time!</div>
        <div className="advanced-list">
          <div
            className="advanced-badge"
            style={{ border: "1px solid #f9ca24" }}
          >
            React Router
          </div>
          <div
            className="advanced-badge"
            style={{ border: "1px solid #f0932b" }}
          >
            Advanced Hooks
          </div>
          <div
            className="advanced-badge"
            style={{ border: "1px solid #eb4d4b" }}
          >
            Portals
          </div>
          <div
            className="advanced-badge"
            style={{ border: "1px solid #6ab04c" }}
          >
            Redux
          </div>
          <div
            className="advanced-badge"
            style={{ border: "1px solid #22a6b3" }}
          >
            More...
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedReact;
