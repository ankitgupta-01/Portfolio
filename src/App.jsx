import "./Style.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import img from "./assets/p1.png";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {

  const boxRef = useRef(null);

 useEffect(() => {
  gsap.fromTo(
    ".text h1",
    {
      x: -200,     // start from -200px left
      opacity: 0
    },
    {
      x: 0,        // end at original (center) position
      opacity: 1,
      duration: 3,
      ease: "power3.out"
    }
  );
}, []);

useEffect(() => {
  // Logo from left
  gsap.fromTo(
    ".logo",
    { x: -150, opacity: 0 },
    { x: 0, opacity: 1, duration: 2, ease: "power3.out" }
  );

  // Menu items from right (stagger effect)
  gsap.fromTo(
    ".nav ul li",
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      stagger: 0.2 // one by one animation
    }
    
  );

  gsap.fromTo(
    ".t2",
    { x: -150, opacity: 0 },
    { x: 0, opacity: 1, duration: 2, ease: "power3.out" }
  );


}, []);

  return (
    <>
    <div className="container">
     <Navbar />


        <div className="box">

  <div className="text">
    <h1>Hey! Welcome to my <span className="high">Portfolio</span></h1>
  <img src={img} alt="Description" />
    
  </div>
</div>
  <div className="content"><h1>
  {/* <span className="c2">I’m </span>{" "} */}
  <span className="c1">Ankit Gupta</span>
</h1>
   <div className="t2">
       <span className="highlight">MERN Stack</span> Full Stack Developer who builds fast, scalable, <br /> and user-friendly web applications.
      From designing responsive <br />frontends to developing robust backend systems.
    </div>
    </div>
    <Projects />
    <Contact  />
      </div>
    </>
  );
}

export default App;