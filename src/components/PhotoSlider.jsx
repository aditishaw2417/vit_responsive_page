import React from "react";
import Slider from "react-slick";
const photos = ["university4.jpg", "university5.jpeg", "university3.jpg"];
const PhotoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="relative">
            <img
              src={`/images/${photo}`}
              alt={`Photo ${index + 1}`}
              className="img_slider w-full h-96 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoSlider;
