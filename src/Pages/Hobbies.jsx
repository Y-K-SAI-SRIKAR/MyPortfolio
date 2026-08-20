import { useState, useEffect } from "react";
import Lenis from 'lenis';
import './Hobbies.css';
import Silk from '../components/Silk';
import FoldText from "../components/FoldText";
import ScrambledText from "../components/ScrambledText";
import CoverflowCarousel from "../components/CoverflowCarousel";
import AnimatedContent from "../components/AnimatedContent";

function Hobbies(){

    const SLIDES = [
  {
    src: "",
    alt: "Diver silhouetted inside a sunset seascape shaped like a profile",
    title: "Tidewater",
    meta: [
      { label: "Year", value: "2019" },
      { label: "Place", value: "Ada Ferrow" },
    ],
  },
  {
    src: "",
    alt: "Double-exposure portrait blended with a city skyline at dusk",
    title: "Nightshift",
    meta: [
      { label: "Year", value: "2021" },
      { label: "Place", value: "Kell Mora" },
    ],
  },
  {
    src: "",
    alt: "Motion-blurred side-profile portrait against a deep orange backdrop",
    title: "Overexposed",
    meta: [
      { label: "Year", value: "2018" },
      { label: "Place", value: "Juno Vale" },
    ],
  },
  {
    src: "",
    alt: "Figure holding a racket that dissolves into a swirling cloud at dusk",
    title: "Slow Bloom",
    meta: [
      { label: "Year", value: "2022" },
      { label: "Place", value: "Rue Alcott" },
    ],
  },
  {
    src: "",
    alt: "Fog rolling through a forested valley at first light",
    title: "Low Country",

    meta: [
      { label: "Year", value: "2017" },
      { label: "Place", value: "Sim Oyo" },
    ],
  },
];

    useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
    });
    window.lenis = lenis;
    let rafId;
    const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
        delete window.lenis;
    };
    }, []);

    return (
        <section className="Hobbies">
            <div className="Hobbies-Background">
                <Silk
                    speed={8.5}
                    scale={1}
                    color="#1c1c1e"
                    noiseIntensity={1.2}
                    rotation={0.45}
                />
            </div>
            <section className="Hobbies-Content">
                <div className="Hobbies-Content-Title">
                    <FoldText
                        text="Beyond Work"
                        splitBy="char"
                        hinge="top"
                        trigger="scroll"
                        duration={0.75}
                        stagger={0.045}
                        ease="power3.out"
                        perspective={700}
                        creaseShading={0.55}
                        fontSize={75}
                        fontWeight={650}
                        color="#e6ebeb"
                    />
                </div>
                <div className="Hobbies-Content-Body"> 
                    <div className="Hobbies-Content-Ph-Intro">
                        <ScrambledText
                            className="scrambled-text-Hobbies-Ph-Intro"
                            radius={55}
                            duration={0.7}
                            speed={0.4}
                            scrambleChars=".:"
                        >
                            Photography: Where I'm learning to see the world through a different lens.
                            Imperfectly. Passionately. Honestly. Not every frame is gallery-worthy. 
                            But every frame is real. I chase moments, not perfection. Stories, not settings.
                            The blurry shots, the overexposed skies, the unexpected angles they're all part of my journey. 
                            And I love this beautifully imperfect process.
                        </ScrambledText>
                    </div>
                    <AnimatedContent
                        distance={50}
                        direction="horizontal"
                        reverse={false}
                        duration={1.5}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0.55}
                    >
                    <div className="Hobbies-Content-Ph-Carousel">
                        <div className="w-full overflow-hidden bg-background pb-6 pt-0 -mt-4">
                            <CoverflowCarousel slides={SLIDES} showCaption />
                        </div>
                    </div>
                    </AnimatedContent>
                </div>
            </section>
        </section>
    )
}
export default Hobbies;