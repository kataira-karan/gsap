import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import { useEffect } from "react";
import { gsap, Expo, Power2, Power4 } from "gsap";
import Overlays from "./LandingPage/Overlays/Overlays";
import Banner from "./LandingPage/Banner/Banner.js";

import CSSRulePlugin from "gsap/CSSRulePlugin";

function App() {
  const boxStyle = {
    height: "20vh",
    width: "20vw",
    backgroundColor: "black",
  };

  //   to get the psudo element from the css
  const imageRevel = CSSRulePlugin.getRule(
    ".bottom-card-image-container::after"
  );

  useEffect(() => {
    // timeline

    var t = gsap.timeline();

    t.fromTo(
      ".banner-title",
      { y: 100, opacity: 0, skewY: 10 },
      { y: 0, opacity: 1, duration: 1, skewY: 0 }
    );

    t.fromTo(
      ".top-overlay",
      { height: "0vh", width: "33.33vw", ease: "Power4.inOut" },
      {
        height: "50vh",
        width: "33.33vw",
        duration: 1,
        ease: "Power4.inOut",
        stagger: 0.6,
      }
    );
    t.to(
      ".bottom-card-container",
      0,
      { css: { visibility: "visible" } },
      { stagger: 0.5 }
    )
      .to(imageRevel, 1.4, {
        width: "0% ",
        ease: Power2.easeInOut,
        stagger: 1,
      })
      .from(".bottom-card-image", 1, {
        scale: 1.6,
        ease: Power2.easeInOut,
        delay: -1.6,
      });
    // gsap
    //   .fromTo(".box", { x: 0 }, { x: 100, duration: 3, yoyo: true })
    //   .then(() =>
    //     gsap.fromTo(".box", { y: 0, x: 100 }, { y: 100, x: 100, duration: 3 })
    //   );
  }, []);

  return (
    <div className="App">
      <Overlays></Overlays>
      <Nav></Nav>
      <Banner></Banner>

      <Home></Home>
    </div>
  );
}

export default App;
