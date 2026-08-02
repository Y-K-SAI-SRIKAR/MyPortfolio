import { useState } from 'react'
import ScrollExpandMedia from "./components/Hero";
import bgImage from "./assets/6.jpg";
import heroImage from "./assets/5.jpg";
import "./App.css";

function App() {
  return (
    <section className="MyPortfolio">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={heroImage}
        bgImageSrc={bgImage}
        title="Hero image"
        scrollToExpand="Scroll down to explore"
        textBlend={true}
      />
    </section>
  );
}

export default App;