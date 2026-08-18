import { useState, useEffect } from "react";
import Lenis from 'lenis';
import './Connect.css';
import Img from '../assets/9.jpg'
import PixelSnow from "../components/PixelSnow";
import DitherReveal from "../components/DitherReveal";
import AnimatedContent from "../components/AnimatedContent";
import FoldText from "../components/FoldText";
import BottomUpLetters from "../components/BottumUpLetters";
import GlassDock from "../components/GlassDock";


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
                            text="Story time is over !"
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
                    <div className="Connect-Content-Dock">
                        <GlassDock
                            items={[
                                { icon: "email", title: "Email", href: "" },
                                { icon: "linkedin", title: "LinkedIn", href: "" },
                                { icon: "dockerhub", title: "DockerHub", href:"" },
                                { icon: "instagram", title: "Instagram", href:"" },
                                { icon: "blog", title: "Blog", href:"" },
                            ]}
                        />
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Connect;

/*<GlassDock
      items={[
        { icon: "home", title: "Home", href: "/" },
        { icon: "settings", title: "Settings", href: "/settings" },
      ]}
    />*/