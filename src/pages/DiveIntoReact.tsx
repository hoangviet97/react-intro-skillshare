import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Picture1 from "../assets/1.jpg";
import Picture2 from "../assets/2.jpeg";
import Picture3 from "../assets/3.jpeg";
import Picture4 from "../assets/4.jpeg";
import Picture5 from "../assets/5.jpeg";
import Picture6 from "../assets/6.jpeg";
import Picture7 from "../assets/7.jpeg";
import "../App.scss";

const DiveIntoReact = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="container">
      <div className="sticky">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className="el">
              <div className="imageContainer">
                {index === 0 && (
                  <div className="txt poppins-semibold main-gradient-color">
                    React whaat..?
                  </div>
                )}
                <img
                  src={src}
                  alt="image"
                  sizes="100vw"
                  width="100%"
                  height="100%"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default DiveIntoReact;
