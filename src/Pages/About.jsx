import { useState, useEffect } from "react";
import './About.css'
import SlicedWaves from "../components/SlicedWaves.jsx";

function About(){
    return (
        <section className="About">
            <div className="About-Background">
                <SlicedWaves
                    color1="#000000"
                    color2="#2f62b5"
                    color3="#18181f"
                    columns={14}
                    rows={10}
                    barThickness={0.15}
                    speed={0.35}
                    travel={0.45}
                    waveSpread={0.65}
                    rowOffset={1.55}
                    softness={0.05}
                    glow={0.25}
                    brightness={1}
                    contrast={1}
                    opacity={0.5}
                    orientation="horizontal"
                    alternate={false}
                    mouseInteraction={true}
                    mouseStrength={0.8}
                    mouseRadius={0.2}
                    grain={true}
                    grainIntensity={0.05}
                />
            </div>
        </section>
    )
}
export default About;