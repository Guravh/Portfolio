import { useEffect, useRef } from "react";
import { EXPERIENCES } from "../Data";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) lineRef.current.classList.add("in-view");
      },
      { threshold: 0.1 }
    );
    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section">
      <SectionTitle>Experience</SectionTitle>
      <div className="experience__inner">
        <div className="experience__timeline">
          <div ref={lineRef} className="experience__timeline-line" />
        </div>
        <div className="experience__list">
          {EXPERIENCES.map((item, i) => (
            <div
              key={i}
              className="experience__item animate"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className="experience__period">{item.period}</span>
              <div className="experience__body">
                <div className="experience__header">
                  <h3 className="experience__title">{item.title}</h3>
                  {/* <span className="experience__arrow">↗</span> */}
                </div>
                <p className="experience__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;