"use client";
import { Carousel, Typography } from "@material-tailwind/react";

const CarouselComponent = () => {
  return (
    <>
      <Carousel
        loop
        autoplay
        className="rounded-xl text-text h-[500px] shadow-xl "
      >
        <div className="relative h-full w-full ">
          <img
            src="/pills.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-primary/60">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                Mission
              </Typography>
              <Typography
                variant="lead"
                className="mb-12 opacity-80 font-semibold"
              >
                Building Healthier Community through Customer Centric Health
                Service
              </Typography>
              <div className="flex justify-center gap-2">
                {/* <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img
            src="/wellness.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-primary/60">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                Vision
              </Typography>
              <Typography
                variant="lead"
                className="mb-12 opacity-80 font-semibold"
              >
                To Be the Best Company in Health Sector Customers’ Experience
              </Typography>
              <div className="flex justify-center gap-2">
                {/* <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img
            src="/stock.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-primary/60">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                Core Values
              </Typography>
              <Typography
                variant="lead"
                className="mb-12 opacity-80 font-semibold"
              >
                Agility <br /> Honesty <br /> Human Centric Service
              </Typography>
              <div className="flex justify-center gap-2">
                {/* <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button> */}
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <span id="product"></span>
    </>
  );
};

export default CarouselComponent;
