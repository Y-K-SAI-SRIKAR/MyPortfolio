import { useState, useEffect } from "react";
import Lenis from "lenis";
import './About.css'
import Silk from "../components/Silk"
import FoldText from "../components/FoldText";
import ScrollRevealParagraph from "../components/ScrollRevealParagraph"

function About(){
    const IntroPara = `I'm fascinated by how intelligent systems work and why they matter. 
    That curiosity led me to AI & Data Science, specializing in Generative AI and agentic systems. 
    I've learned that elegant solutions emerge at the intersection of rigorous engineering, 
    creative problem-solving, and deep understanding of how modern LLMs and transformer architectures reason and adapt.
    I don't just build systems, I ask why they work, then channel that understanding into production. 
    Whether architecting scalable backends, deploying NLP-powered inference at scale, or designing GenAI pipelines. 
    I'm driven by work that transforms theory into tangible impact.
    Beyond code, I explore discipline, and vedic philosophy to understand decision-making and resilience. 
    Gardening and music keep me grounded.`;

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
        <section className="About">
            <div className="About-Background">
                <Silk
                    speed={8.5}
                    scale={1}
                    color="#1c1c1e"
                    noiseIntensity={1.2}
                    rotation={0.45}
                />
            </div>
            <section className="About-Content">
                <div className="About-Content-title">
                    <FoldText
                        text="The Person Behind the Work"
                        splitBy="char"
                        hinge="top"
                        trigger="scroll"
                        duration={0.75}
                        stagger={0.05}
                        ease="power3.out"
                        perspective={700}
                        creaseShading={0.55}
                        fontSize={75}
                        fontWeight={650}
                        color="#e6ebeb"
                    />
                </div>
                <div className="About-Content-Intro">
                    <ScrollRevealParagraph
                        className="text-foreground"
                        paragraph={IntroPara}
                    />
                </div>
            </section>
        </section>
    )
}
export default About;