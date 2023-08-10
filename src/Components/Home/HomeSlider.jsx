import { Box, Image } from "@chakra-ui/react";
import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import sliderImage1 from "../../Asssets/SliderImage1.jpg";
import sliderImage2 from "../../Asssets/SliderImage2.gif";
import sliderImage3 from "../../Asssets/SliderImage3.jpg";
import sliderImage4 from "../../Asssets/SliderImage4.jpg";
import sliderImage5 from "../../Asssets/SliderImage5.jpg";
import AOS from "aos";
import "aos/dist/aos.css"

export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <Box data-aos="zoom-out"
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
        marginTop={3}
      >
        <Slider {...settings}>
          <Box data-aos="zoom-out" borderRadius={"8px"}>
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              src={sliderImage1}
            />
          </Box>
          <Box borderRadius={"8px"}>
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              src={sliderImage2}
            />
          </Box>
          <Box borderRadius={"8px"}>
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              src={sliderImage3}
            />
          </Box>
          <Box borderRadius={"8px"}>
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              src={sliderImage4}
            />
          </Box>
          <Box borderRadius={"8px"}>
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              src={sliderImage5}
            />
          </Box>
        </Slider>
      </Box>
    );
  }
}
