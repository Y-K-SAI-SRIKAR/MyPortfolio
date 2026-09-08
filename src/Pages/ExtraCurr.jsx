import { useState, useEffect } from "react";
import Lenis from 'lenis';
import './ExtraCurr.css';
import Silk from '../components/Silk';
import FoldText from "../components/FoldText";
import { Accordion05 } from "../components/Accordion";
import DotMatrixText from "../components/DotText";

function ExtraCurr(){

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
        <section className="ExtraCurr">
            <div className="ExtraCurr-Background">
                <Silk
                    speed={8.5}
                    scale={1}
                    color="#1c1c1e"
                    noiseIntensity={1.2}
                    rotation={0.45}
                />
            </div>
            <section className="ExtraCurr-Content">
                <div className="ExtraCurr-Content-Title">
                    <FoldText
                        text="Leadership & Beyond"
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
                <div className="ExtraCurr-Content-Body">
                    <div className="ExtraCurr-Content-Body-Acc">
                        <Accordion05 />
                    </div>
                    <div className="ExtraCurr-Content-Body-Quote">
                        <div className="relative z-10 w-full max-w-5xl px-6 h-56 md:h-80 flex items-center justify-center">
                            <DotMatrixText
                                text={["Conduct", "Compose","Empower"]}
                                transition="fade"
                                cycleInterval={3000}
                                dotSize={2.5}
                                gap={2.5}
                                activeColor="#ffffff"
                                inactiveColor="rgba(255, 255, 255, 0.04)"
                                showInactive={true}
                                className="w-full h-full drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default ExtraCurr;