import React from "react";
import { Button, Carousel } from "../../app/MTailwind";
const Banner = () => {
  const banners = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide2",
      prev: "#slide6",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide5",
      prev: "#slide3",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide6",
      prev: "#slide4",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide1",
      prev: "#slide5",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <Carousel className=" rounded-lg">
        {banners.map((banner, index) => {
          return (
            <div
              style={{
                backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                  index + 1
                }.jpg)`,
              }}
              key={index}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full bg-cover bg-center h-[100vh] bg-no-repeat"
            >
              <div className="flex flex-col space-y-4 w-1/3 md:ml-32 pt-36">
                <h2 className="text-6xl text-[#FFFFFF] font-semibold">
                  {banner.title}
                </h2>
                <p className="text-sm text-[#FFFFFF]">{banner.description}</p>
                <div className="gap-4 flex justify-start">
                  <Button variant="gradient" color="red" size="md">
                    Discover More
                  </Button>
                  <Button variant="outlined" color="red" size="md">
                    Latest Projects
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
