import { TypeAnimation } from "react-type-animation";
import SectionTitle from "./SectionTitle";

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="hero__left">
        <p className="hero__label">— available for work</p>
        <h1 className="hero__title">
          Hi, I'm
          <br />
          Gaurav Handa<span className="accent">.</span>
        </h1>
        <div className="hero__subtitle-wrap">
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1800,
              "UI Engineer",
              1800,
              "React Dev",
              1800,
              "Full Stack Dev",
              1800,
            ]}
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            cursor={false}
            className="hero__subtitle"
          />
          <span className="hero__cursor" />
        </div>
      </div>
      <div className="hero__about">
        <div className="hero__about-glow" />

        <div className="hero__about-top">
          {/* <div className="hero__about-avatar">
            <span className="hero__about-avatar-code">&lt;/&gt;</span>
          </div> */}
          <div>
            <p className="hero__about-name" style={{ fontSize: "2rem" }}>
              <SectionTitle>About Me</SectionTitle>
            </p>
            <p className="hero__about-bio" style={{ fontSize: "17px"}}>
              <strong style={{ fontSize: "17px", color: "white" }}>
                Frontend Developer
              </strong>{" "}
              with hands-on experience building modern web applications using{" "}
              <strong style={{ fontSize: "17px", color: "white" }}>
                React.js,&nbsp; Express.js,&nbsp; MongoDB,&nbsp; Shopify,&nbsp; Node.js and Tailwind CSS.
              </strong>
              Experienced in developing responsive user interfaces, integrating
              backend functionality, and working on real-world client projects
              for both Indian and international companies. Skilled at creating
              scalable frontend architectures, reusable components, REST API
              integrations, and full-stack solutions with clean UI/UX practices.
            </p>
          </div>
        </div>

        <p className="hero__about-text" style={{ fontSize: "17px"}}>
          <strong>React Developer</strong> transitioning into advanced Full
          Stack Engineering. With a solid foundation in{" "}
          <strong>Frontend technologies</strong>{" "}
        </p>

        <div className="hero__about-stats">
          <div className="hero__about-stat">
            <span className="hero__about-stat-number">3+</span>
            <span className="hero__about-stat-label">Projects</span>
          </div>
          <div className="hero__about-stat-divider" />
          <div className="hero__about-stat">
            <span className="hero__about-stat-number">2+</span>
            <span className="hero__about-stat-label">Years of Experience</span>
          </div>
        </div>
        <div className="hero__about-stat">
          {/* <span className="hero__about-stat-number">5+</span> */}
          <span style={{ fontSize: "20px" }} className="hero__about-stat-label">
            Technologies
          </span>
          <br />
          <div className="hero__tags">
            {[
              "React",
              "Tailwind",
              "Git",
              "Node.js",
              "sql",
              "Shopify",
              "Platform Development",
            ].map((tag) => (
              <span key={tag} className="hero__tag" style={{ fontSize: "15px"}}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
