const AboutMe = () => {
  return (
    <>
      <section id="about" aria-label="About me">
        <h2 className="text-xl text-white mb-5 lg:hidden">About Me</h2>
        <div className="grid grid-cols-1 gap-4 text-gray-200 ">
          <p>
            I work at the intersection of technology and human connection,
            whether that means orchestrating cross-functional projects, building
            AI-powered automation tools, or finding new ways for people to work
            together more effectively. My approach combines technical depth with
            creative problem solving and a focus on real-world impact.
          </p>
          <p>
            Most recently, I was a Geo ConnectX Manager at{" "}
            <span className="text-white font-semibold hover:text-orange-400">
              <a href="https://www.capgemini.com/" target="_blank">
                Capgemini
              </a>
            </span>
            , where I led regional engagement strategy and built AI systems to
            streamline workflows and reduce manual work. My technical background
            spans AWS cloud infrastructure, full-stack development,
            biotechnology research, and hands-on IT support.
          </p>
          <p>
            Before that, I contributed to AI protein engineering research, built
            AWS-powered analytics platforms through the{" "}
            <span className="text-white font-semibold hover:text-orange-400">
              <a href="https://perscholas.org/" target="_blank">
                Per Scholas
              </a>
            </span>{" "}
            AWS re/Start program, developed full-stack applications during a
            software engineering fellowship, and participated in biotechnology
            research with CRISPR-Cas9 at{" "}
            <span className="text-white font-semibold hover:text-orange-400">
              <a href="https://www.genspace.org/" target="_blank">
                Genspace
              </a>
            </span>{" "}
            . I have also built personal automation tools and rapid prototypes
            during hackathons. Each experience reinforces my drive to build
            technology that extends human capability, because every tool we
            create is about helping us become more than we were before.
          </p>
          <p>
            Offline, I'm usually composing music, hiking, biking, drinking
            morning tea, exploring, sipping an old fashioned to live jazz, or
            reading at a wonderfully slow pace.
          </p>
        </div>{" "}
      </section>
    </>
  );
};

export default AboutMe;
