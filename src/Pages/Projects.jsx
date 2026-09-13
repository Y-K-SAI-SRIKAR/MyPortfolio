import { useEffect } from "react";
import Lenis from 'lenis';
import './Projects.css';
import Silk from '../components/Silk';
import FoldText from "../components/FoldText";
import { CategoryList} from '../components/ProjectAccordion';
import { Code } from 'lucide-react';
import DotMatrixText from "../components/DotText";

const sampleCategories = [
  {
    id: 1,
    title: "LossLess Engine",
    subtitle: "AI Enabled Fraud Detection System",
    onClick: () => window.open("https://github.com/Y-K-SAI-SRIKAR/LossLess-Engine","_blank"),
    icon: <Code className="w-8 h-8" />, 
  },
  {
    id: 2,
    title: "Accident Severity Detection",
    subtitle: "DL & CV based Severity Inference",
    onClick: () => window.open("https://github.com/Y-K-SAI-SRIKAR/AccSevDetFrontend","_blank"),
    icon: <Code className="w-8 h-8" />
  },
  {
    id: 3,
    title: "WavePoint : Customer Support",
    subtitle: "React & SpringBoot stacked Application",
    onClick: () => window.open("https://github.com/Y-K-SAI-SRIKAR/WavePoint-Support","_blank"),
    icon: <Code className="w-8 h-8" />
  },
  {
    id: 4,
    title: "Student Performance Analyzer",
    subtitle: "Data Manipulation Application Built on Numpy-Python",
    onClick: () => window.open("https://github.com/Y-K-SAI-SRIKAR/StudentPerformenceAnalyzer","_blank"),
    icon: <Code className="w-8 h-8" />
  }
]

function Projects(){

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
        <section className="Projects">
            <div className="Projects-Background">
                <Silk
                    speed={8.5}
                    scale={1}
                    color="#1c1c1e"
                    noiseIntensity={1.2}
                    rotation={0.45}
                />
            </div>
            <section className="Projects-Content">
                <div className="Projects-Content-Title">
                    <FoldText
                        text="Code Showcase"
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
                <div className="Projects-Content-Body">
                    <div className="Projects-Content-Body-Quote">
                        <div className="relative z-10 w-full max-w-5xl px-6 h-56 md:h-80 flex items-center justify-center">
                            <DotMatrixText
                                text={["Code", "Deploy", "Iterate"]}
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
                    <div className="Projects-Content-Body-Acc">
                        <CategoryList
                            categories={sampleCategories}
                        />
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Projects;