import { CopyOutlined } from "@ant-design/icons";

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
                fontSize: "2rem",
                border: "1px solid grey",
                padding: "0.8rem 1rem",
              }}
            >
              npm create vite@latest my-react-app -- --template react-ts
            </div>
            <div
              style={{
                padding: "0.8rem 1rem",
                fontSize: "2rem",
                background: "grey",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                cursor: "pointer",
              }}
            >
              <CopyOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticalSection;
