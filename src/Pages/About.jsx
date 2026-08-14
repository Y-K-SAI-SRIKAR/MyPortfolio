import { useState, useEffect } from "react";
import Lenis from "lenis";
import './About.css'
import  myImg from "../assets/5.jpg" ;
import Silk from "../components/Silk"
import FoldText from "../components/FoldText";
import ScrollRevealParagraph from "../components/ScrollRevealParagraph";
import InteractiveParticles from "../components/InteractiveParticles";
import AnimatedContent from "../components/AnimatedContent";
import BottomUpLetters from "../components/BottumUpLetters";
import {
    CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
  CardCurtain
} from "../components/CurtainReveal";

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

    const ExpPara = `While I lack formal corporate experience, I've pursued hands-on GenAI and ML work through multiple project initiatives. 
    I've built ML pipelines, optimized LLM-powered services for production, and deployed real-time AI systems at scale. 
    These experiences taught me inference optimization and cross-team collaboration—skills that translate directly to professional environments. 
    Ready to contribute to GenAI & ML systems and grow within a structured team.`;

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
                        stagger={0.045}
                        ease="power3.out"
                        perspective={700}
                        creaseShading={0.55}
                        fontSize={75}
                        fontWeight={650}
                        color="#e6ebeb"
                    />
                </div>
                <div className="About-Content-Body">
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
                        delay={0}
                    >
                    <div className="About-Content-Intro">
                        <ScrollRevealParagraph
                            className="text-foreground"
                            paragraph={IntroPara}
                        />
                    </div>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={50}
                        direction="horizontal"
                        reverse={false}
                        duration={2}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0.5}
                    >
                    <div className="About-content-Image">
                        <InteractiveParticles src={myImg} background="transparent" threshold={2.5}/>
                    </div>
                    </AnimatedContent>
                </div>
                <div className="About-Content-Footer">
                    <div className="About-Content-Footer-Education">
                        <BottomUpLetters triggerOnView={true}>
                            Knowledge Arsenal
                        </BottomUpLetters>
                    </div>
                    <AnimatedContent
                        distance={50}
                        direction="horizontal"
                        reverse={false}
                        duration={2}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0.5}
                    >
                    <div className="Education-Cards-Container">
                        <CardCurtainReveal className="UG-Card">
                            <CardCurtainRevealBody className="UG">
                            <CardCurtainRevealTitle className="B-Tech-card">
                                UG <br />
                                B.Tech
                                <span className="hover-me-text">(Hover Me)</span>
                            </CardCurtainRevealTitle>
                            <CardCurtainRevealDescription className="B-Tech-Desc">
                                <p>
                                In AI & Data Science with a CGPA of 9.07, 
                                developing expertise in GenAi & ML frameworks,full-stack backend engineering, 
                                and cloud infrastructure optimization through production-grade systems.
                                </p>
                            </CardCurtainRevealDescription>
                            <CardCurtain className="B-Tech" />
                            </CardCurtainRevealBody>
                            <CardCurtainRevealFooter className="mt-auto">
                            <div className="B-Tech-College">
                                <h3> @ K L University</h3>
                            </div>
                            </CardCurtainRevealFooter>
                        </CardCurtainReveal>
                        <CardCurtainReveal className="Inter-Card">
                            <CardCurtainRevealBody className="IM">
                            <CardCurtainRevealTitle className="InterMediate-card">
                                +2 <br />
                                InterMediate
                                <span className="hover-me-text">(Hover Me)</span>
                            </CardCurtainRevealTitle>
                            <CardCurtainRevealDescription className="Inter-Desc">
                                <p>
                                Completed MPC studies with a grade of 94.5, 
                                built analytical and mathematical foundations in physics, chemistry, and mathematics 
                                that cultivated problem solving rigor essential for computer science.
                                </p>
                            </CardCurtainRevealDescription>
                            <CardCurtain className="Inter" />
                            </CardCurtainRevealBody>
                            <CardCurtainRevealFooter className="mt-auto">
                            <div className="Inter-College">
                                <h3> @ Bhahsyam Jr College</h3>
                            </div>
                            </CardCurtainRevealFooter>
                        </CardCurtainReveal>
                        <CardCurtainReveal className="SSC-card">
                            <CardCurtainRevealBody className="SSC">
                            <CardCurtainRevealTitle className="Tenth-card">
                                SSC <br />
                                Tenth Class
                                <span className="hover-me-text">(Hover Me)</span>
                            </CardCurtainRevealTitle>
                            <CardCurtainRevealDescription className="Tenth-Desc">
                                <p>
                                Completed SSC studies with a grade of 96.1 and 
                                earned the Silver Medal for academic excellence. 
                                During this period, served as an active NCC cadet, developing discipline, leadership, and community engagement.
                                </p>
                            </CardCurtainRevealDescription>
                            <CardCurtain className="Tenth" />
                            </CardCurtainRevealBody>
                            <CardCurtainRevealFooter className="mt-auto">
                            <div className="SSC-School">
                                <h3> @ B V M High School</h3>
                            </div>
                            </CardCurtainRevealFooter>
                        </CardCurtainReveal>
                    </div>
                    </AnimatedContent> 
                    <div className="About-Content-Footer-Experience">
                        <BottomUpLetters triggerOnView={true}>
                            Code in Action
                        </BottomUpLetters>
                    </div>
                    <div className="Experience-Text">
                        <ScrollRevealParagraph
                            className="text-foreground"
                            paragraph={ExpPara}
                        />
                    </div>  
                </div>
            </section>
        </section>
    )
}
export default About;