const PracticalSection = () => {
  return (
    <div className="practical x-center poppins-thin">
      <div>
        <h2 className="main-gradient-color theory__heading">
          Get hands dirty!
        </h2>
        <div style={{ marginTop: "6rem" }}>
          <h3 className="poppins-medium main-gradient-color">Install</h3>
          <div style={{ display: "flex" }}>
            <div
              style={{
                color: "white",
                fontSize: "2.5rem",
                padding: "0.8rem 1rem",
                marginTop: "2rem",
              }}
            >
              npm create vite@latest my-react-app -- --template react-ts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticalSection;
