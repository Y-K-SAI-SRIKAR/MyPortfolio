import { useState, useEffect } from "react";
import Lenis from 'lenis';
import './Connect.css';
import PixelSnow from "../components/PixelSnow";


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
                    color="#a89e9e"
                    flakeSize={0.005}
                    minFlakeSize={1.25}
                    pixelResolution={440}
                    speed={1.5}
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
            </section>
        </section>
    )
}
export default Connect;