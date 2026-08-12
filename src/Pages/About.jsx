import { useState, useEffect } from "react";
import LightPillar from "../components/LightPillar.jsx";
import './About.css'

function About(){
    return (
        <section className="About">
            <div className="About-Background">
                <LightPillar
                    topColor="#686262"
                    bottomColor="#3666b3"
                    intensity={1}
                    rotationSpeed={0.3}
                    glowAmount={0.003}
                    pillarWidth={5.2}
                    pillarHeight={0.3}
                    noiseIntensity={0.5}
                    pillarRotation={120}
                    interactive={false}
                    mixBlendMode="normal"
                    quality="high"
                />
            </div>
        </section>
    )
}
export default About;