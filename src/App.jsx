import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Features } from "./components/features";
import { Part1 } from "./components/part1";
import { Part2 } from "./components/part2";
import { Part3 } from "./components/part3";
import { Part4 } from "./components/part4";
import { Part5 } from "./components/part5";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />      
      <Features data={landingPageData.Features} />
      <Part1 data={landingPageData.Part1} />
      <Part2 data={landingPageData.Part2} />
      <Part3 data={landingPageData.Part3} />
      <Part4 data={landingPageData.Part4} />
      <Part5 data={landingPageData.Part5} />            
      <Footer data={landingPageData.Footer} />      
    </div>
  );
};

export default App;
