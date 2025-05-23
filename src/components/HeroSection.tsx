import React, { useEffect } from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import { createGoogleCalendarUrl } from "@/lib/utils";

interface HeroSectionProps {
  title?: React.ReactNode;
  tagline?: string;
  ctaText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "El Naranjo Clinica Psicológica",
  tagline = "Apoyando tu camino hacia el bienestar mental con compasión y experiencia",
  ctaText = "Agendar una hora",
}) => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const handleAgendarCita = () => {
    window.open("http://wa.me/56933434628", "_blank");
  };

  return (
    <div className="relative h-[700px] w-full overflow-hidden">
      {/* Hero Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent>
          {["/Fotos/1-scaled.jpg", "/Fotos/3-scaled.jpg", "/Fotos/2.jpg", "/Fotos/4.jpg"].map((src, index) => (
            <CarouselItem key={index} className="w-full h-[700px]">
              <div className="relative w-full h-full">
                <img
                  src={src}
                  alt={`Hero slide ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content overlay */}
      <div className="absolute inset-0 z-10">
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="flex flex-col space-y-4 mb-8">
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                Bienvenid@s a Clínica
              </span>
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                Psicológica El Naranjo
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mb-10 drop-shadow-md">
              {tagline}
            </p>
            <Button
              size="lg"
              className="bg-[#FFDAB9] hover:bg-[#FFE4C4] text-black px-10 py-7 text-xl rounded-md transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={handleAgendarCita}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
