import { useState, useEffect } from "react";
import Lenis from 'lenis';
import './Connect.css';
import * as Icons from 'react-icons/vsc';
import * as IC from 'react-icons/fa';
import * as SI from 'react-icons/si'
import Img from '../assets/9.jpg'
import PixelSnow from "../components/PixelSnow";
import DitherReveal from "../components/DitherReveal";
import AnimatedContent from "../components/AnimatedContent";
import FoldText from "../components/FoldText";
import BottomUpLetters from "../components/BottumUpLetters";
import Dock from "../components/Dock";
import SpecularButton from "../components/SpecularButton";


function Connect(){

    const GenAIMLResume = () => {
        const link = document.createElement('a');
        link.href = '/Srikar_Resume_AIML.pdf';
        link.download = 'SRIKAR_AIML_Engineer_Resume.pdf';
        link.click();
    };

    const SDEResume = () => {
        const link = document.createElement('a');
        link.href = '/Srikar_Resume_SDE.pdf';
        link.download = 'SRIKAR_SDE_Resume.pdf';
        link.click();
    };

    const items = [
    { icon: <Icons.VscMail size={18} />, label: 'Mail', onClick: () => window.open('mailto:ksaisrikaryerraguntla9@gmail.com', '_blank') },
    { icon: <IC.FaLinkedin size={18} />, label: 'LinkedIn', onClick: () => window.open('https://www.linkedin.com/in/y-k-sai-srikar/', '_blank') },
    { icon: <Icons.VscGithub size={18} />, label: 'GitHub', onClick: () =>window.open('https://github.com/Y-K-SAI-SRIKAR', '_blank') },
    { icon: <SI.SiCodechef size={18} />, label: 'CodeChef', onClick: () => window.open('https://www.codechef.com/users/kl2400080069', '_blank') },
    { icon: <SI.SiLeetcode size={18} />, label: 'LeetCode', onClick: () => window.open('https://leetcode.com/u/KL2400080069/', '_blank') },
    { icon: <IC.FaHackerrank size={18} />, label: 'HackerRank', onClick: () => window.open('https://www.hackerrank.com/profile/KL2400080069', '_blank') },
    { icon: <IC.FaInstagram size={18} />, label: 'Instagram', onClick: () => window.open('https://instagram.com/shinazugawa_.22._', '_blank') }
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
                        direction="horizontal"
                        reverse={true}
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
                <div className="Connect-Content-Text">
                    <div className="Connect-Content-TitleA">
                        <FoldText
                            text="Spotlight's On You Now !"
                            splitBy="char"
                            hinge="top"
                            trigger="scroll"
                            duration={0.95}
                            stagger={0.045}
                            ease="power3.out"
                            perspective={700}
                            creaseShading={0.55}
                            fontSize={70}
                            fontWeight={650}
                            color="#e6ebeb"
                        />
                    </div>
                    <div className="Connect-Content-TitleB">
                        <BottomUpLetters triggerOnView={true}>
                            Collaboration time? Let's connect.
                        </BottomUpLetters>
                    </div>
                    <AnimatedContent
                            distance={50}
                            direction="horizontal"
                            reverse={false}
                            duration={2.2}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0.65}
                        >
                    <div className="Connect-Content-Dock">
                        <Dock 
                            items={items}
                            panelHeight={68}
                            baseItemSize={50}
                            magnification={70}
                        />
                    </div>
                    </AnimatedContent>
                    <div className="Connect-Content-Resume-Headline">
                        <FoldText
                            text="Full Story in One File"
                            splitBy="char"
                            hinge="top"
                            trigger="scroll"
                            duration={0.95}
                            stagger={0.045}
                            ease="power3.out"
                            perspective={700}
                            creaseShading={0.55}
                            fontSize={70}
                            fontWeight={650}
                            color="#e6ebeb"
                        />
                    </div>
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
                        <div className="Connect-Content-Resume-Buttons">
                            <div className="Connect-Content-Resume-Button1">
                                <SpecularButton
                                    size="lg"
                                    radius={18}
                                    tint="#ffffff"
                                    tintOpacity={0}
                                    blur={0}
                                    textColor="#f5f5f5"
                                    lineColor="#ffffff"
                                    baseColor="#525252"
                                    intensity={1}
                                    shineSize={10}
                                    shineFade={40}
                                    thickness={1}
                                    speed={0.35}
                                    followMouse
                                    proximity={250}
                                    autoAnimate={false}
                                    onClick={GenAIMLResume}
                                >
                                    GenAI & ML Specialist
                                </SpecularButton>
                            </div>
                            <div className="Connect-Content-Resume-Button2">
                                <SpecularButton
                                    size="lg"
                                    radius={18}
                                    tint="#ffffff"
                                    tintOpacity={0}
                                    blur={0}
                                    textColor="#f5f5f5"
                                    lineColor="#ffffff"
                                    baseColor="#525252"
                                    intensity={1}
                                    shineSize={10}
                                    shineFade={40}
                                    thickness={1}
                                    speed={0.35}
                                    followMouse
                                    proximity={250}
                                    autoAnimate={false}
                                    onClick={SDEResume}
                                >
                                    Software Engineer
                                </SpecularButton>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </section>
        </section>
    )
}
export default Connect;