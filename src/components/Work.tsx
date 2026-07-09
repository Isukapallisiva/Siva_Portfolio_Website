import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Guidewire APD Configurator",
    category: "Product Architecture",
    tools: "APD, LCM, PolicyCenter, Gosu",
    image: "/images/placeholder.webp"
  },
  {
    title: "Integration Gateway Middleware",
    category: "API & Microservices",
    tools: "Integration-Gateway, Apache Camel, REST, AppEvents",
    image: "/images/placeholder.webp"
  },
  {
    title: "Underwriting & Policy Engine",
    category: "Core Engine Configuration",
    tools: "PolicyCenter, Gosu, DataScript, UW Rules",
    image: "/images/placeholder.webp"
  },
  {
    title: "REST API Endpoint Generator",
    category: "Systems Integration",
    tools: "REST Endpoint Generator, CloudAPI, Core Java",
    image: "/images/placeholder.webp"
  },
  {
    title: "Legacy-to-Java Migration Pipeline",
    category: "Data & Systems Migration",
    tools: "Java, Spring Framework, Git, Mainframe",
    image: "/images/placeholder.webp"
  },
  {
    title: "Automated Testing & CI/CD Framework",
    category: "QA & Release Engineering",
    tools: "GUnit, JUnit, Git, GitLab CI/CD",
    image: "/images/placeholder.webp"
  }
];

export default Work;
