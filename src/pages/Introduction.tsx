import Lottie from "react-lottie";
import mobile from "../json/mobile.json";
import web from "../json/web.json";

const Introduction = () => {
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
    <div className="theory__introduction x-center poppins-medium">
      <div className="theory__introduction-p">
        React is javascript library for building user interfaces that define how
        user-friendly apps should be written..
      </div>
      <div className="theory__introduction-p">
        It's widely used for creating Single-Page Applications, eCommerce sites,
        static sites, data dashboards, mobile apps and many more.
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
  );
};

export default Introduction;
