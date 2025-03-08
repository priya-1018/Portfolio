

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
     
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          <div className="flex justify-center">
           <img 
             src="src/assets/logo.jpg" 
              alt="Logo" 
             className="h-40 w-40 rounded-full shadow-lg ring-4 ring-black/30 bg-gradient-to-b from-white/10 to-transparent border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            />
         </div>
            Hi, I'm G T Priya 
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who is passionate about building scalable, user-friendly web applications, 
             With expertise in modern frameworks and technologies, 
            I've created seamless digital experiences that blend functionality with aesthetics. Let's turn ideas into reality! 
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/g-tpriya18/"
              target="_blank"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              LinkedIn Profile
            </a>

            <a
              href="https://github.com/priya-1018"
              target="_blank"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              GitHub Profile
            </a>
          </div>
        </div>
     
    </section>
  );
};
