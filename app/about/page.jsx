const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-950 mb-6">About Me</h1>

      {/* Bio */}
      <p className="text-lg leading-relaxed mb-6">
        Hello! I'm <span className="font-semibold text-blue-900">Janhvi Bhatt</span>, a full-stack developer with a background in Electronics and Communication Engineering. I have a strong command of the MERN stack and a growing fascination with AI, automation, and generative technologies. I'm passionate about building interactive and intelligent digital experiences—from web apps to real-world service integrations.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Over the years, I’ve created products that not only function well but also bring meaningful value. Whether I’m designing a clean user interface or optimizing API performance, I approach every task with precision and creativity. My curiosity drives me to keep learning and pushing the boundaries of what I can build.
      </p>

      {/* Quick Facts */}
      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2"> Tech Stack</h3>
          <p>
            React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, TypeScript, Python, Git, PostgreSQL, REST APIs
          </p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2"> Interests</h3>
          <p>
            AI Agents, Automation, Full-Stack Systems, System Design, UI/UX, Building Scalable Products
          </p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2"> Goal</h3>
          <p>
            To join a forward-thinking tech company where I can solve real-world problems with code and creativity.
          </p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2"> Currently Exploring</h3>
          <p>
            Multi-agent AI systems, LLM-based workflows, LangChain, Generative AI, DevOps practices
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

