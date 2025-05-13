import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-2 sm:py-24 sm:px-6 md:px-12 flex items-center min-h-screen"
    >
      <div className="section-container max-w-3xl mx-auto flex flex-col items-center relative px-2 sm:px-6">
        {/* Profile Image */}
        <Image
          src="/images/my_picture.png"
          alt="Stefan Mitrevski"
          width={90}
          height={90}
          className="rounded-full shadow-lg mb-4 sm:mb-6 border-4 border-blue-100 dark:border-blue-900"
        />
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 text-center">
          About Me
        </h2>
        {/* Decorative Divider */}
        <div className="w-12 sm:w-16 h-1 bg-blue-200 dark:bg-blue-700 rounded-full mb-6 sm:mb-8 mx-auto"></div>
        {/* About Text */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-center">
          Hello! I&apos;m <span className="font-bold text-blue-600 dark:text-blue-400">Stefan Mitrevski</span>, a passionate and detail-oriented <span className="font-semibold text-blue-500 dark:text-blue-300">QA Engineer</span> with over two years of experience. I work at <span className="font-semibold text-blue-500 dark:text-blue-300">Endava</span>, where I have contributed to major projects.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-center">
          I specialize in <span className="font-semibold text-blue-500 dark:text-blue-300">Test Planning</span>, <span className="font-semibold text-blue-500 dark:text-blue-300">Manual &amp; Automation Testing</span>, <span className="font-semibold text-blue-500 dark:text-blue-300">Reporting</span>, and <span className="font-semibold text-blue-500 dark:text-blue-300">Agile Methodologies</span>. My work involves collaborating with cross-functional teams and ensuring the highest quality in all software releases.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-center">
          Outside of work, I enjoy <span className="font-semibold text-blue-500 dark:text-blue-300">problem-solving</span>, learning new technologies, and improving processes to enhance product quality.
        </p>
        {/* Call-to-Action */}
        <a
          href="#contact"
          className="hero-cv-btn inline-block mt-2 sm:mt-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default About;