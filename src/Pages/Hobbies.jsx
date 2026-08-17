import { useState, useEffect } from "react";
import Lenis from 'lenis';
import './Hobbies.css';
import Silk from '../components/Silk';
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
                </div>
            </section>
        </section>
    )
}
export default Hobbies;