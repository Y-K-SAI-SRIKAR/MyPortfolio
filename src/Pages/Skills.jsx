import { Fragment, useEffect } from "react";
import Lenis from "lenis";
import "./Skills.css";
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

function Skills() {
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

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Python", "Java", "C"]
        },
        {
            title: "Backend & APIs",
            skills: [
                "FastAPI",
                "Spring Boot",
                "RESTful APIs",
                "SQLAlchemy",
                "JDBC",
                "MySQL",
                "AWS RDS"
            ]
        },
        {
            title: "ML & MLOps",
            skills: [
                "Scikit-learn",
                "XGBoost",
                "PyTorch",
                "Pandas",
                "NumPy",
                "MLflow",
                "DVC"
            ]
        },
        {
            title: "AI",
            skills: [
                "Google ADK",
                "LLM Tool Calling"
            ]
        },
        {
            title: "Cloud & DevOps",
            skills: [
                "AWS",
                "Docker",
                "Git",
                "GitHub"
            ]
        },
        {
            title: "CS Concepts",
            skills: [
                "DSA",
                "OOP",
                "Operating Systems"
            ]
        }
    ];

    return (
        <section className="Skills">
            <div className="Skills-Background">
                <Silk
                    speed={8.5}
                    scale={1}
                    color="#1c1c1e"
                    noiseIntensity={1.2}
                    rotation={0.45}
                />
            </div>

            <section className="Skills-Content">
                <div className="Skills-Content-Title">
                    <FoldText
                        text="My Capabilities"
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

                <div className="Skills-Content-Body">
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
                        <div className="Skills-Cards-Container">
                            {skillCategories.map((category, index) => (
                                <BorderGlow
                                    key={index}
                                    edgeSensitivity={10}
                                    glowColor="40 80 80"
                                    backgroundColor="#120F17"
                                    borderRadius={28}
                                    glowRadius={80}
                                    glowIntensity={2}
                                    coneSpread={45}
                                    animated={true}
                                    colors={["#c084fc", "#f472b6", "#38bdf8"]}
                                >
                                    <CardCurtainReveal className="Skill-Card">
                                        <CardCurtainRevealBody className="Skill-Card-Body">
                                            <CardCurtainRevealTitle className="Skill-Card-Title">
                                                {category.title}
                                                <span className="hover-me-text">
                                                    (Hover Me)
                                                </span>
                                            </CardCurtainRevealTitle>

                                            <CardCurtainRevealDescription className="Skill-Card-Description">
                                                <p>
                                                    {category.skills.map((skill, skillIndex) => (
                                                        <Fragment key={skillIndex}>
                                                            {skill}
                                                            {skillIndex < category.skills.length - 1 && <br />}
                                                        </Fragment>
                                                    ))}
                                                </p>
                                            </CardCurtainRevealDescription>

                                            <CardCurtain className="Skill-Card-Curtain" />
                                        </CardCurtainRevealBody>

                                        <CardCurtainRevealFooter className="Skill-Card-Footer" />
                                    </CardCurtainReveal>
                                </BorderGlow>
                            ))}
                        </div>
                    </AnimatedContent>
                </div>
            </section>
        </section>
    );
}

export default Skills;