import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCart from "../HomeSectionCart/HomeSectionCart";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({data,sectionName}) => {
  const carouselRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6 },
  };

  const slideNext = () => {
    carouselRef.current?.slideNext();
  };

  const slidePrev = () => {
    carouselRef.current?.slidePrev();
  };
  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };
  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCart product={item} />);
  const maxIndex = items.length - Math.ceil(responsive[1024].items);
  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
            ref={carouselRef}
            mouseTracking
            items={items}
            responsive={responsive}
            disableButtonsControls
            disableDotsControls
            onSlideChanged={syncActiveIndex}
        />
        {activeIndex < maxIndex && ( <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            color="white"
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
          </Button> )}
        
        {activeIndex > 0 && ( <Button
          variant="contained"
          className="z-30"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8.9rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg) ",
          }}
          color="white"
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>)}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
