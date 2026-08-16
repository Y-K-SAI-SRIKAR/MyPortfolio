import { useState, useEffect } from "react";
import Lenis from 'lenis';
import './Hobbies.css';
import PixelSnow from "../components/PixelSnow";
import FoldText from "../components/FoldText";

function Hobbies(){

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
                <PixelSnow 
                    color="#ffffff"
                    flakeSize={0.009}
                    minFlakeSize={1.25}
                    pixelResolution={440}
                    speed={2}
                    density={0.45}
                    direction={125}
                    brightness={1}
                    depthFade={17}
                    farPlane={30}
                    gamma={0.4545}
                    variant="snowflake"
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
                </div>
            </section>
        </section>
    )
}
export default Hobbies;