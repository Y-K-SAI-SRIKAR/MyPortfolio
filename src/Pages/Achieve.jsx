import { useState, useEffect } from "react";
import './Achieve.css';
import Lenis from "lenis";
import Silk from '../components/Silk';
import FoldText from "../components/FoldText";
import BorderGlow from "../components/BorderGlow";


function Achieve(){

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

    return(
        <section className="Achieve">
            <div className="Achieve-Background">
                <Silk
                    speed={8.5}
                    scale={1}
                    color="#1c1c1e"
                    noiseIntensity={1.2}
                    rotation={0.45}
                />
            </div>
            <section className="Achieve-Content">
                <div className="Achieve-Content-Title">
                    <FoldText
                        text="Moments of Glory"
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
                <div className="Achieve-Content-Body">
                    <div className="Achieve-Content-Body-Cards">
                        <div className="card-A">
                            <BorderGlow
                                edgeSensitivity={0}
                                glowColor="40 80 80"
                                backgroundColor="#120F17"
                                borderRadius={31}
                                glowRadius={73}
                                glowIntensity={2}
                                coneSpread={20}
                                animated
                                colors={['#c084fc', '#f472b6', '#38bdf8']}
                                >
                                <div className="relative p-6 h-full flex flex-col">
                                    <div className="absolute top-4 right-4">
                                    <img 
                                        src="" 
                                        alt="AWS Certified Cloud Practitioner" 
                                        className="w-20 h-20 rounded-full shadow-lg"
                                    />
                                    </div>
                                    <div className="flex-1 pr-8">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        AWS Certified Cloud Practitioner
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        Foundational certification validating knowledge of AWS cloud concepts, services, and architecture best practices. Demonstrates proficiency in cloud computing fundamentals and AWS platform capabilities.
                                    </p>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-600">
                                    <span className="text-xs text-gray-400">Issued by Amazon Web Services</span>
                                    </div>
                                </div>
                            </BorderGlow>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Achieve;