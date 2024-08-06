import mykir from "../assets/mykir.gif";

const WhyReact = () => {
  return (
    <div className="theory__choose x-center poppins-medium">
      <h2 className="poppins-semibold main-gradient-color theory__heading">
        Why choose React?
      </h2>
      <blockquote className="theory__introduction-p">
        Write in pure javascript made my life a lot easier
      </blockquote>
      <div className="theory__mykir">
        <img src={mykir} />
      </div>
    </div>
  );
};

export default WhyReact;
