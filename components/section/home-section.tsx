import React from "react";
import Status from "../ui/status";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeSection = () => {
  return (
    <section className="flex flex-col w-full max-w-4xl items-center" id="home">
      <div className="flex flex-col w-full justify-center items-center text-center max-w-3xl">
        <Status className="mb-3 md:mb-6 border-2">
          <p className="font-medium text-muted-foreground">
          Ready to contribute and grow 🚀
          </p>
        </Status>
        <h1 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6">
        Building innovative websites and engaging digital experiences
        </h1>
        <p className="text-sm md:text-base font-medium text-muted-foreground mb-6 md:mb-8">
        With 1 year of experience, I've worked as a freelance developer, collaborating with 
        startups and businesses to craft unique digital experiences. I am currently building 
        conversion-focused and SEO-optimized products to help businesses grow and thrive. I primarily 
        create my magic using{" "}
          <span className="text-semibold text-foreground">Next.js</span> and{" "}
          <span className="text-semibold text-foreground">Supabase</span>.
        </p>
        <div className="flex items-center justify-center gap-x-4 gap-y-4 flex-wrap">
          <Button className="border-2 py-1.5 h-fit" id="about">
            Explore more
          </Button>
          <Button
            className="border-2 py-1.5 h-fit bg-white dark:bg-secondary"
            variant="secondary"
            email="ryanwirayuda3@gmail.com"
          >
            Send me a message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
