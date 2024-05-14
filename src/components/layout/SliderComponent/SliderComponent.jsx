import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./SliderComponent.css";



const SliderComponent = ({ slides }) => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4300,
    centerMode: true,
    centerPadding: '0px'
  };

  const Slide = ({ image, title, subtitle, button, url }) => {
    return (
      <div className="slide">
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href={url} target="_blank" rel="noopener noreferrer"><button>{button}</button></a>
      </div>
    );
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <Slide
          key={slide.image}
          image={slide.image}
          title={slide.title}
          subtitle={slide.subtitle}
          button={slide.button}
          url={slide.url}
        />
      ))}
    </Slider>
  );
};

export default SliderComponent;

  