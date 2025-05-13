const Work = () => {
  return (
    <section
      id="work"
      className="py-10 px-2 sm:px-6 md:px-12 flex flex-col items-center min-h-screen"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-10 text-center">
        Work & Projects
      </h2>
      {/* Decorative Divider */}
      <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-cyan-900 rounded-full mb-8 mx-auto animate-popIn"></div>
      <div className="w-full max-w-5xl flex flex-col gap-12">
        {/* Experience Card */}
        <div className="bg-white/80 dark:bg-[#181c20]/80 rounded-2xl shadow-lg p-6 sm:p-8 mb-4 flex flex-col items-start border border-blue-100 dark:border-blue-900 w-full animate-popIn">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
            Experience
          </h3>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-2">
            <span className="font-semibold">QA Engineer</span> at a leading IT
            consultancy (2022 - Present)
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1 text-base sm:text-lg">
            <li>
              Developed and maintained automated test suites for web and backend
              systems
            </li>
            <li>Participated in agile ceremonies and sprint planning</li>
            <li>Maintained CI/CD pipelines and test reporting</li>
            <li>
              Collaborated with cross-functional teams to ensure high-quality
              releases
            </li>
          </ul>
        </div>
        {/* Projects Grid */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Project 1 */}
          <div className="flex-1 bg-white/80 dark:bg-[#181c20]/80 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-900 p-6 sm:p-8 flex flex-col min-w-0 mb-6 md:mb-0 hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate-popIn">
            <h4 className="text-xl sm:text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
              Media/Advertising Domain
            </h4>
            <p className="text-gray-700 dark:text-gray-200 mb-2 text-base sm:text-lg">
              Worked on a large-scale media buying platform, focusing on backend
              and UI testing, building stable automation pipelines, and
              improving regression test reliability.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1 text-base sm:text-lg">
              <li>Built and maintained E2E and API automation frameworks</li>
              <li>Enhanced test coverage and reduced manual effort</li>
              <li>Worked closely with developers and business analysts</li>
            </ul>
          </div>
          {/* Project 2 */}
          <div className="flex-1 bg-white/80 dark:bg-[#181c20]/80 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-900 p-6 sm:p-8 flex flex-col min-w-0 hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate-popIn">
            <h4 className="text-xl sm:text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
              Sports Betting Domain
            </h4>
            <p className="text-gray-700 dark:text-gray-200 mb-2 text-base sm:text-lg">
              Contributed to a sports betting platform, responsible for test
              planning, automation, and collaborating with cross-functional
              teams to ensure high-quality releases.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1 text-base sm:text-lg">
              <li>Designed and executed test plans for complex features</li>
              <li>Automated critical user journeys and backend flows</li>
              <li>Improved defect tracking and reporting processes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
