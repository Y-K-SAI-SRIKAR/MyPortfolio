import { useState, useEffect } from "react";
import Lenis from 'lenis';
import './Connect.css';
import Img from '../assets/9.jpg'
import PixelSnow from "../components/PixelSnow";
import DitherReveal from "../components/DitherReveal";
import AnimatedContent from "../components/AnimatedContent";


function Connect(){

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
        <section className="Connect">
            <div className="Connect-Background">
                <PixelSnow 
                    color="#eeeaea"
                    flakeSize={0.004}
                    minFlakeSize={1.25}
                    pixelResolution={440}
                    speed={1}
                    density={0.45}
                    direction={125}
                    brightness={1}
                    depthFade={17}
                    farPlane={30}
                    gamma={0.4545}
                    variant="snowflake"
                />
            </div>
            <section className="Connect-Content">
                <AnimatedContent
                        distance={50}
                        direction="vertical"
                        reverse={false}
                        duration={2}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0.65}
                    >
                <div className="Connect-Content-Image">
                    <DitherReveal
                        image = {Img}
                        focusY = {13}
                    />
                </div>
                </AnimatedContent>
            </section>
        </section>
    )
}
export default Connect;