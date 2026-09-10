import { useEffect } from "react";
import "./Achieve.css";
import Lenis from "lenis";
import { FaAws } from 'react-icons/fa';
import Silk from "../components/Silk";
import FoldText from "../components/FoldText";
import BorderGlow from "../components/BorderGlow";
import {
    CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
  CardCurtain
} from "../components/CurtainReveal";
import AnimatedContent from "../components/AnimatedContent";


function Achieve() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1
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
                <div className="Achieve-Cards-Container">
                    <BorderGlow
                        edgeSensitivity={30}
                        glowColor="40 80 80"
                        backgroundColor="#120F17"
                        borderRadius={28}
                        glowRadius={40}
                        glowIntensity={1}
                        coneSpread={25}
                        animated
                        colors={['#c084fc', '#f472b6', '#38bdf8']}
                        >
                        <CardCurtainReveal className="UG-Card">
                            <CardCurtainRevealBody className="UG">
                                <div style={{ position: 'relative' }}>
                                    <FaAws style={{ 
                                        position: 'absolute', 
                                        right: '20px', 
                                        top: '20px', 
                                        fontSize: '4rem',
                                        opacity: 0.7,             
                                        color: 'rgba(255,255,255,0.8)' 
                                    }} />
                                    <CardCurtainRevealTitle className="B-Tech-card">
                                        AWS
                                        <br />
                                        Certified
                                        <span className="hover-me-text">(Hover Me)</span>
                                    </CardCurtainRevealTitle>
                                    <CardCurtainRevealDescription className="B-Tech-Desc">
                                        <p>
                                            Achieved 1000/1000 - Perfect Score. Mastered AWS fundamentals with 
                                            deep expertise in cloud infrastructure and architecture. Ready to 
                                            build production-grade systems.
                                        </p>
                                    </CardCurtainRevealDescription>
                                    <CardCurtain className="B-Tech" />
                                </div>  {/* ← ADD THIS CLOSING DIV */}
                            </CardCurtainRevealBody>
                            <CardCurtainRevealFooter className="mt-auto">
                                <div className="B-Tech-College">
                                    <h3>@ AWS Cloud Practitioner</h3>
                                </div>
                            </CardCurtainRevealFooter>
                        </CardCurtainReveal>
                    </BorderGlow>
                    <BorderGlow
                        edgeSensitivity={30}
                        glowColor="40 80 80"
                        backgroundColor="#120F17"
                        borderRadius={28}
                        glowRadius={40}
                        glowIntensity={1}
                        coneSpread={25}
                        animated
                        colors={['#c084fc', '#f472b6', '#38bdf8']}
                        >
                        <CardCurtainReveal className="SSC-card">
                            <CardCurtainRevealBody className="SSC">
                                <CardCurtainRevealTitle className="Tenth-card">
                                    School Silver Medalist
                                    <span className="hover-me-text">(Hover Me)</span>
                                </CardCurtainRevealTitle>
                                <CardCurtainRevealDescription className="Tenth-Desc">
                                    <p>
                                        Silver Medal in SSC Public Exams.
                                        Perseverance, strategic learning, and a commitment to excellence
                                        that shaped me into the innovator I am today.
                                    </p>
                                </CardCurtainRevealDescription>
                                <CardCurtain className="Tenth" />
                            </CardCurtainRevealBody>
                            <CardCurtainRevealFooter className="mt-auto">
                                <div className="SSC-School">
                                    <h3>@ Jun 9 2024</h3>
                                </div>
                            </CardCurtainRevealFooter>
                        </CardCurtainReveal>
                    </BorderGlow>
                </div>
            </AnimatedContent>
        </div>
      </section>
    </section>
  );
}

export default Achieve;