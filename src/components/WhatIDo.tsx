import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO" id="what-i-do">
      <div className="what-box">
        <h2 className="title">
          SK<span className="hat-h2">ILL</span>
          <div>
            <span className="do-h2">S</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2"></div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1"></div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>CONFIGURATION</h3>
              <h4>Guidewire PolicyCenter</h4>
              <p>
                Configuring Guidewire PolicyCenter products, underwriting (UW) rules, activities, and complex Gosu business logic to support custom data models and interfaces (PCF).
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">PolicyCenter</div>
                <div className="what-tags">Gosu</div>
                <div className="what-tags">Core Java</div>
                <div className="what-tags">APD (Advanced Product Designer)</div>
                <div className="what-tags">Underwriting (UW)</div>
                <div className="what-tags">Rating</div>
                <div className="what-tags">DataScript</div>
                <div className="what-tags">GUnit Testing</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1"></div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>INTEGRATION</h3>
              <h4>Systems & Interfaces</h4>
              <p>
                Implementing robust integration solutions using Integration Gateway, Apache Camel, CloudAPI resource classes, and REST APIs for inbound and outbound communication.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Integration Gateway</div>
                <div className="what-tags">Apache Camel</div>
                <div className="what-tags">CloudAPI</div>
                <div className="what-tags">REST API</div>
                <div className="what-tags">Spring Boot / Java</div>
                <div className="what-tags">Git / GitLab CI/CD</div>
                <div className="what-tags">Claude Code</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
