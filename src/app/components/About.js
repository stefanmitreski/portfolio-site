import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-2 sm:py-24 sm:px-6 md:px-12 flex items-center min-h-screen bg-transparent"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center relative px-2 sm:px-6 bg-white/60 dark:bg-[#23283b]/70 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 dark:border-[#23283b]/40 animate-fadeIn">
        {/* Profile Image with gradient ring */}
        <div className="relative mt-[-3rem] mb-4 sm:mb-6">
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-cyan-300 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-cyan-900 blur-md opacity-60 -z-10"></span>
          <Image
            src="/images/my_picture.png"
            alt="Stefan Mitrevski"
            width={90}
            height={90}
            className="rounded-full shadow-lg border-4 border-white dark:border-blue-900"
          />
        </div>
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-2 text-center tracking-tight animate-slideLeft">
          About Me
        </h2>
        {/* Decorative Divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-cyan-900 rounded-full mb-8 mx-auto animate-popIn"></div>
        {/* About Text */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-center text-gray-700 dark:text-gray-200">
          Hello! I&apos;m{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            Stefan Mitrevski
          </span>
          , a passionate and detail-oriented{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-300">
            QA Engineer
          </span>{" "}
          with over two years of experience. I work at{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-300">
            Endava
          </span>
          , where I have contributed to major projects.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-center text-gray-700 dark:text-gray-200">
          I specialize in{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-300">
            Test Planning
          </span>
          ,{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-300">
            Manual &amp; Automation Testing
          </span>
          ,{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-300">
            Reporting
          </span>
          , and{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-300">
            Agile Methodologies
          </span>
          . My work involves collaborating with cross-functional teams and
          ensuring the highest quality in all software releases.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-center text-gray-700 dark:text-gray-200">
          Outside of work, I enjoy{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-300">
            problem-solving
          </span>
          , learning new technologies, and improving processes to enhance
          product quality.
        </p>
        {/* Call-to-Action */}
        <a
          href="#contact"
          className="inline-block my-4 sm:mt-4 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl hover:from-blue-700 transition px-8 py-3 text-base sm:text-lg animate-popIn"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default About;
