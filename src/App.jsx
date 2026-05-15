import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope,FaFacebook } from "react-icons/fa"; 

function App() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 md:px-16 bg-black/50 backdrop-blur-md">
        <h1 className="text-2xl font-bold text-red-500">
          Bisma <span className="text-pink-500">Rafique</span>
        </h1>

        <nav className="hidden space-x-8 md:flex">
          <a
            href="#home" className="relative hover:text-pink-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">
            Home
          </a>       
          <a       
           href="#about" className="relative hover:text-pink-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">
            Projects
          </a>  
          <a
            href="#skills" className="relative hover:text-pink-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">
            Skills
          </a>  
          <a
            href="#contact" className="relative hover:text-pink-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </a>          
        </nav>
      </header>

      {/* Hero Page*/}
      <section id="home" className="min-h-screen flex flex-col-reverse items-center justify-center px-8 py-20 md:flex-row md:px-16 gap-16">
        <div className="max-w-xl text-center md:text-left flex flex-col justify-center">
          <h3 className="text-gray-400">Hello, I'm</h3>

          <h1 className="my-3 text-4xl font-bold md:text-6xl">
            Bisma Rafique
          </h1>

          <h3 className="text-xl">
            And I'm a <span className="text-pink-500">{text}</span>
          </h3>

          <p className="mt-4 text-gray-400">
            I build modern full-stack web applications using React, Node.js, and Tailwind CSS.
          </p>

          {/* CV Button */}
          <a href="/cv.pdf" download>
            <button className="px-6 py-2 mt-6 bg-pink-500 rounded-full hover:bg-pink-600">
              Download CV
            </button>
          </a>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <div className="rounded-full p-1 bg-gradient-to-r from-pink-500 to-red-500 shadow-[0_0_25px_rgba(236,72,153,0.4)]">
            <img
              src="/profile.jpeg"
              alt="profile"
              className="object-cover w-64 h-64 rounded-full md:w-80 md:h-80"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
     <section id="projects" className="py-20 px-4 bg-black text-white">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center justify-between mb-10">
      <h2 className="text-3xl md:text-4xl font-bold">
         <span className="text-pink-500">Projects</span>
      </h2>
      
  </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Project 1 */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-pink-500 transition duration-300 
      hover:-translate-y-1 min-h-[500px] p-3">

        <img
          src="/portfolio-builder.jpeg"
          alt="Portfolio Builder"
          className="w-full h-47 object-cover"
        />
        <div className="p-7">
          <h3 className="text-2xl font-bold mb-3">
            Portfolio <span className="text-pink-500">Builder</span>
          </h3>
          <p className="text-gray-400 text-sm leading-7 mb-5">
            SaaS portfolio builder with authentication,
            dashboard and responsive UI.
          </p>
          <div className="flex flex-wrap gap-2">
 <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs"> React </span>
            <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs">Node.js</span>
            <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs"> Express</span>
            <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs"> MySQL </span>
          </div>
        </div>
      </div>
      {/* Project 2 */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-pink-500 transition duration-300
       hover:-translate-y-1 min-h-[420px] p-3">

        <img
          src="/ecommerce.jpeg"
          alt="Ecommerce"
          className="w-full h-47 object-cover"
        />
        <div className="p-7">
          <h3 className="text-2xl font-bold mb-3">
            E-Commerce <span className="text-pink-500">Store</span>
          </h3>
          <p className="text-gray-400 text-sm leading-7 mb-5">
            Full-stack ecommerce application with
            authentication and shopping cart.
          </p>
          <div className="flex flex-wrap gap-2">
 <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs"> React </span>
            <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs">Node.js</span>
            <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs"> Express</span>
            <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs"> MySQL </span>
          </div>
       </div>
       </div>
{/* Project 3 */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-pink-500 transition duration-300 hover:-translate-y-1
      min-h-[420px] p-3">
        <img
          src="/taskmanager.jpeg"
          alt="Task Manager"
          className="w-full h-47 object-cover"
        />
        <div className="p-7">
          <h3 className="text-2xl font-bold mb-3">
            Task <span className="text-pink-500">Manager</span>
          </h3>
          <p className="text-gray-400 text-sm leading-7 mb-5">
            Productivity app to manage daily tasks
            with clean responsive dashboard.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs"> React </span>
            <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs">Node.js</span>
            <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs"> Express</span>
            <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs"> MySQL </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Skills */}
<section id="skills" className="py-20 bg-black text-white px-4">
  <div className="max-w-6xl mx-auto">

  
    <div className="text-center mb-14">
      <h2 className="text-5xl font-bold">
        <span className="text-pink-500">Skills</span>
      </h2>

      <p className="text-gray-400 mt-4 text-lg">
        Here are the technologies I worked with to build modern <br/>fast and responsive web applications.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-500 transition duration-300 text-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="w-16 h-16 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">React</h3>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-500 transition duration-300 text-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          className="w-16 h-16 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">Node.js</h3>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-500 transition duration-300 text-center">
        <img
          src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          alt="Tailwind"
          className="w-16 h-16 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">Tailwind CSS</h3>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-500 transition duration-300 text-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="w-16 h-16 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">JavaScript</h3>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-500 transition duration-300 text-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML"
          className="w-16 h-16 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">HTML</h3>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-500 transition duration-300 text-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS"
          className="w-16 h-16 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">CSS</h3>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-500 transition duration-300 text-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          alt="MySQL"
          className="w-16 h-16 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">MySQL</h3>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-500 transition duration-300 text-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
          className="w-16 h-16 mx-auto mb-4 bg-white rounded-full"
        />
        <h3 className="text-xl font-semibold">Git / GitHub</h3>
      </div>

    </div>
  </div>
</section>

      {/* Contact - Full Page */}
      <section
  id="contact"
  className="py-24 bg-black text-white px-4"
>
  <div className="max-w-4xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold">
        Contact <span className="text-pink-500">Me</span>
      </h2>

      <p className="text-gray-400 text-lg mt-4 leading-8">
        Have a project idea or want to work together?
        <br />
        Feel free to reach out anytime.
      </p>

    </div>

    {/* Contact Card */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl">

      <div className="space-y-10">

        {/* Email */}
        <div className="flex items-center gap-5">

          <div className="bg-pink-500/20 p-5 rounded-2xl text-2xl">
            📧
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              Email
            </h3>

            <p className="text-gray-400 text-lg mt-1">
              bismarafique.67@gmail.com
            </p>
          </div>

        </div>

        {/* Phone */}
        <div className="flex items-center gap-5">

          <div className="bg-pink-500/20 p-5 rounded-2xl text-2xl">
            📱
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              Phone
            </h3>

            <p className="text-gray-400 text-lg mt-1">
              +92 3105766356
            </p>
          </div>

        </div>

        {/* Location */}
        <div className="flex items-center gap-5">

          <div className="bg-pink-500/20 p-5 rounded-2xl text-2xl">
            📍
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              Location
            </h3>

            <p className="text-gray-400 text-lg mt-1">
              Islamabad, Pakistan
            </p>
          </div>

        </div>

      </div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-5 mt-14">

        <a
          href="https://github.com/bisma-dev801"
          className="bg-pink-500 hover:bg-pink-600 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl font-semibold text-lg"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/bisma-rafique"
          className="bg-pink-500 hover:bg-pink-600 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl font-semibold text-lg"
        >
          LinkedIn
        </a>

        <a
          href="https://instagram.com/bisma_ch9324"
          className="bg-pink-500 hover:bg-pink-600 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl font-semibold text-lg"
        >
          Instagram
        </a>

      </div>

    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="py-12 text-center bg-black border-t border-gray-800/50">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-pink-500 mb-2">
            Bisma Rafique
          </h2>

          <p className="text-gray-400 mb-6">
            Full Stack Developer
          </p>
          <p className="text-sm text-gray-500">
            © 2024 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;