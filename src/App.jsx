import { useEffect, useState } from "react";
import "./App.css";
import Silk from "./components/Silk";
import Loader from "./components/Loader";
import TextType from "./components/TextType";
import RotatingText from "./components/RotatingText";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="App">
      <div className={`App-Loader ${loading ? "" : "loaded"}`}>
        <Loader />
      </div>
      <div className="App-Background">
        <Silk
          speed={8.5}
          scale={0.9}
          color="#1c1c1e"
          noiseIntensity={1.2}
          rotation={0.45}
        />
      </div>
      <section className="Content">
        <div className="App-content">
          <div className = "Intro-content">
            <TextType
              text={["> init. Srikar Yerraguntla — Engineer","Welcome to my corner of the internet.","I build things that think"]}
              typingSpeed={45}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="^"
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
            <div className="Intro-about">
              <span className="Intro-about__prefix">I am a</span>
              <RotatingText
                texts={['Machine Learning Engineer','Gen AI Specialist','Backend Developer','Problem Solver']}
                mainClassName="rotating-tag"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.05}
                splitLevelClassName="rotating-tag-word"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3500}
                splitBy="words"
                auto = {true}
                loop = {true}
              />
            </div>
            <div className="Intro-closure">

            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default App;