"use client";
import { useState } from "react";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="homepage">
    <section className="hero">
      {/* Logo */}
      <div className="logo">
        BR
      </div>

      {/* Hamburger Button */}
      <button
        className="menuButton"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Menu */}
      <nav className={`menu ${menuOpen ? "menuOpen" : ""}`}>

  <a href="#home" onClick={() => setMenuOpen(false)}>
    Home
  </a>

  <a href="#about" onClick={() => setMenuOpen(false)}>
    About
  </a>

  <a href="#projects" onClick={() => setMenuOpen(false)}>
    Projects
  </a>

  <a href="#services" onClick={() => setMenuOpen(false)}>
    Services
  </a>

  <a href="#contact" onClick={() => setMenuOpen(false)}>
    Contact
  </a>

</nav>
      {/* Hero Content */}
      <section className="heroContent">

        <h1>
          I'm Bisma Rafique
        </h1>

        <h2>
          A Full Stack Developer
        </h2>

        <p>
          I build modern, responsive and user-friendly web applications.
        </p>

      </section>
      </section>
{/* ================= ABOUT  ================= */}

<section className="bioPage" id="about">

  <div className="bioContainer">
    {/* About */}
    <div className="bioIntro">
      <h1>About</h1>
      <p>
        I am a motivated and detail-oriented Full Stack Developer
        with hands-on experience building modern web applications
        using Next.js, React.js, TypeScript, Node.js, Express.js,
        MySQL, Prisma and Tailwind CSS.
      </p>

      <p>
        I enjoy creating secure, responsive and user-friendly
        applications. I focus on writing clean and scalable code
        while continuously learning modern web development
        technologies.
      </p>

    </div>


    {/* Skills */}
    <section className="skillsSection" id="skills">

      <h2>Skills</h2>

      <Skill name="React.js" percentage="90%" />
      <Skill name="Next.js" percentage="88%" />
      <Skill name="TypeScript" percentage="85%" />
      <Skill name="JavaScript" percentage="90%" />
      <Skill name="HTML5" percentage="95%" />
      <Skill name="CSS3" percentage="92%" />
      <Skill name="Tailwind CSS" percentage="90%" />

    </section>


    {/* Buttons */}
    <div className="bioButtons">

      <a
        href="#contact"
        className="hireButton"
      >
        HIRE ME
      </a>

      <a
        href="/cv.pdf"
        className="cvButton"
        download
      >
        DOWNLOAD CV
      </a>

    </div>

  </div>

</section>
{/* ================= PROJECTS ================= */}

<section className="projectsSection" id="projects">

  <div className="projectsContainer">

    <h1 className="projectsTitle">
      My <span>Projects</span>
    </h1>

    <p className="projectsSubtitle">
      Some of the projects I have built using modern web technologies.
    </p>


    <div className="projectsGrid">


      {/* Project 1 - Portfolio Builder */}

      <div className="projectCard">

        <img
          src="/portfolio-builder.jpeg"
          alt="Portfolio Builder"
          className="projectImage"
        />

        <div className="projectContent">

          <h2>
            Portfolio <span>Builder</span>
          </h2>

          <p>
            SaaS portfolio builder with authentication,
            dashboard and responsive user interface.
          </p>

          <div className="projectSkills">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Prisma</span>
            <span>MySQL</span>
          </div>

        </div>

      </div>


      {/* Project 2 - E-Commerce */}

      <div className="projectCard">

        <img
          src="/ecommerce.jpeg"
          alt="E-Commerce Store"
          className="projectImage"
        />

        <div className="projectContent">

          <h2>
            E-Commerce <span>Store</span>
          </h2>

          <p>
            Full-stack ecommerce application with
            authentication, products and shopping cart.
          </p>

          <div className="projectSkills">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MySQL</span>
          </div>

        </div>

      </div>


      {/* Project 3 - Task Manager */}

      <div className="projectCard">

        <img
          src="/taskmanager.jpeg"
          alt="Task Manager"
          className="projectImage"
        />

        <div className="projectContent">

          <h2>
            Task <span>Manager</span>
          </h2>

          <p>
            Productivity application to manage daily
            tasks with a clean and responsive dashboard.
          </p>

          <div className="projectSkills">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MySQL</span>
          </div>

        </div>

      </div>


      {/* Project 4 - Authentication System */}

      <div className="projectCard">

        <img
          src="/authentication system.jpg"
          alt="Authentication System"
          className="projectImage"
        />

        <div className="projectContent">

          <h2>
            Authentication <span>System</span>
          </h2>

          <p>
            Secure authentication system with user
            registration, login, logout and session management.
          </p>

          <div className="projectSkills">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Prisma</span>
            <span>MySQL</span>
            <span>NextAuth.js</span>
          </div>

        </div>

      </div>


    </div>

  </div>

</section>
{/* ================= SERVICES ================= */}

      <section className="servicesSection" id="services">
        <div className="servicesContainer">

          <h1 className="servicesTitle"> My <span>Services</span> </h1>
          <p className="servicesSubtitle">
            I create modern, responsive and user-friendly websites
            tailored to your needs.
          </p>

          <div className="servicesGrid">
            {/* Service 1 */}
            <div className="serviceCard">

              <div className="serviceIcon">
                💼
              </div>

              <h3>
                Business <span>Website</span>
              </h3>

              <p>
                I create professional business websites that help
                companies build their online presence and connect
                with their customers.
              </p>

            </div>


            {/* Service 2 */}
            <div className="serviceCard">

              <div className="serviceIcon">
                👩‍💻
              </div>

              <h3>
                Portfolio <span>Website</span>
              </h3>

              <p>
                I build modern portfolio websites to showcase your
                skills, projects, experience and professional work.
              </p>

            </div>


            {/* Service 3 */}
            <div className="serviceCard">

              <div className="serviceIcon">
                🛒
              </div>

              <h3>
                E-Commerce <span>Website</span>
              </h3>

              <p>
                I develop responsive e-commerce websites with
                product listings, shopping cart and user-friendly
                interfaces.
              </p>

            </div>


            {/* Service 4 */}
            <div className="serviceCard">

              <div className="serviceIcon">
                🚀
              </div>

              <h3>
                Landing <span>Page</span>
              </h3>

              <p>
                I design attractive and conversion-focused landing
                pages for businesses, products, services and campaigns.
              </p>

            </div>


            {/* Service 5 */}
            <div className="serviceCard">

              <div className="serviceIcon">
                📱
              </div>

              <h3>
                Responsive Web <span>Design</span>
              </h3>

              <p>
                I make websites responsive and ensure they work
                smoothly across mobile, tablet and desktop devices.
              </p>

            </div>


            {/* Service 6 */}
            <div className="serviceCard">

              <div className="serviceIcon">
                🔧
              </div>

              <h3>
                Website <span>Redesign</span>
              </h3>

              <p>
                I redesign outdated websites with a modern interface,
                better layout, improved responsiveness and user experience.
              </p>

            </div>

          </div>

        </div>
      </section>
{/* ================= CONTACT ================= */}

<section className="contactPage" id="contact">

  <div className="contactSection">

    <div className="contactContainer">

      <h1>Contact Me</h1>

      <form
        className="contactForm"
        action="https://formsubmit.co/bismarafiq.m@gmail.com"
        method="POST"
      >

        {/* First + Last Name */}
        <div className="nameFields">

          <div className="inputGroup">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              required
            />
          </div>

          <div className="inputGroup">
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              required
            />
          </div>

        </div>


        {/* Email */}
        <div className="inputGroup">

          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
          />

        </div>


        {/* Message */}
        <div className="inputGroup">

          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            required
          ></textarea>

        </div>


        {/* Button */}
        <button
          type="submit"
          className="sendButton"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  </div>
</section>
{/* ================= FOOTER ================= */}

<footer className="footer">
  <div className="footerContainer">
    <div className="footerLogo">
      BR
    </div>
    <p>
      © 2026 Bisma Rafique. All Rights Reserved.
    </p>
    <div className="footerLinks">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</footer>
    </main>
  );
}
{/* Skill Component */}
function Skill({
  name,
  percentage,
}: {
  name: string;
  percentage: string;
}) {
  return (
    <div className="skill">

      <div className="skillTop">
        <span>{name}</span>
        <span>{percentage}</span>
      </div>

      <div className="skillBar">

        <div
          className="skillProgress"
          style={{ width: percentage }}
        />

      </div>

    </div>
  );
}
