import React from "react";
import SwaramImg from "../../assets/Graphic/16 x 10backled.jpg";
import RenewLogo from '../../assets/Graphic/renew.jpg';
const GraphicDesign = () => {
  return (
    <section>
      <div className="text-white font-sans md:w-[130vh] container">
        <h1 className="text-4xl text-center mb-10">Graphic <span className="text-[#B968C7] ">Design</span></h1>
        <div className="bg-[#17172f73] p-2 rounded-lg">
          <img src={SwaramImg} alt="" className="rounded-lg" />
          <div className="p-4">
            <h1 className="text-2xl font-mono">
              {" "}
              🖥️ SWARAM 2K24 OFFICIAL LOGO
            </h1>
            <h1 className="py-3">
              🎨 Proud to have contributed to my college’s cultural event,
              Swaran 2K24, as the poster designer! I had the opportunity to
              design the event logo using Photoshop and Cinema 4D, bringing our
              vision to life with a unique and creative touch. It was an amazing
              experience to combine creativity and technical skills to represent
              such a vibrant event. Looking forward to more opportunities to
              design and create!
            </h1>
          </div>
        </div>
      </div>


      <div className="text-white font-sans mt-20 md:w-[130vh] container">
        <div className="bg-[#17172f73] p-3 rounded-lg">
          <img src={RenewLogo} alt="" className="rounded-lg" />
          <div className="p-4">
            <h1 className="text-2xl font-mono">
              {" "}
              🖥️ Renaissance OFFICIAL LOGO
            </h1>
            <h1 className="py-3">
            🎨 I had the pleasure of editing the logo for our Computer Science Engineering department's "Renaissance" event. This project was a fantastic opportunity to refine the visual identity and ensure the logo effectively represented the event. It was rewarding to see the final design come together and contribute to such a significant department event. Looking forward to applying these skills to more creative projects in the future!
            </h1>
          </div>
        </div>
      </div>


    </section>
  );
};

export default GraphicDesign;
