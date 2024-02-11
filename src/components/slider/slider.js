import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import fi0 from "../../assets/one.jpg";
import fi1 from "../../assets/two.jpg";
import fi2 from "../../assets/three.jpg";
import fi3 from "../../assets/chatgpton.png";
import fi4 from "../../assets/ai-assistant.png";

const fruitData = [
  { image: fi0 },
  { image: fi1 },
  { image: fi2 },
  { image: fi3 },
  { image: fi4 },
];

const SliderComp = () => {
  const settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="h-[300px]  overflow-hidden ">
      <Slider {...settings} className="relative items-center justify-center bg-black rounded rounded-md mt-9 hover:duration-700">
        {fruitData.map((fruit, index) => (
          <div key={index} className="relative rounded-t-3xl gap-4 md:w-[270px] rounded-b-xl group z-0 mb-10 duration-500">
            <div className="relative aspect-[4/3] h-[14rem] z-0 overflow-hidden">
              <img
                src={fruit.image}
                alt={`fruit-${index}`}
                className="hover:scale-[1.2] transition-all duration-500 rounded rounded-md h-[300px] mt-2 shadow-sm shadow-red-700"
              />
            </div>
            {/* Additional content can be added here if needed */}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderComp;
