const Work = () => {
  return (
    <section
      id="work"
      className="py-10 px-6 md:px-12 flex flex-col items-center min-h-screen"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-10 text-center">
        Work & Projects
      </h2>
      <div className="w-full max-w-5xl flex flex-col gap-12">
        {/* Experience Card */}
        <div className="bg-white dark:bg-[#181c20] rounded-2xl shadow-lg p-8 mb-4 flex flex-col items-start border border-gray-100 dark:border-gray-800">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Experience</h3>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">
            <span className="font-semibold">QA Engineer</span> at a leading IT consultancy (2022 - Present)
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
            <li>Developed and maintained automated test suites for web and backend systems</li>
            <li>Participated in agile ceremonies and sprint planning</li>
            <li>Maintained CI/CD pipelines and test reporting</li>
            <li>Collaborated with cross-functional teams to ensure high-quality releases</li>
          </ul>
        </div>
        {/* Projects Grid */}
              <div className="flex flex-row gap-8 w-full">
        {/* Project 1 */}
        <div className="flex-1 bg-white dark:bg-[#181c20] rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-800 flex flex-col min-w-0">
          <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Media/Advertising Domain</h4>
          <p className="text-gray-700 dark:text-gray-200 mb-2">
            Worked on a large-scale media buying platform, focusing on backend and UI testing, building stable automation pipelines, and improving regression test reliability.
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
            <li>Built and maintained E2E and API automation frameworks</li>
            <li>Enhanced test coverage and reduced manual effort</li>
            <li>Worked closely with developers and business analysts</li>
          </ul>
        </div>
        {/* Project 2 */}
        <div className="flex-1 bg-white dark:bg-[#181c20] rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-800 flex flex-col min-w-0">
          <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Sports Betting Domain</h4>
          <p className="text-gray-700 dark:text-gray-200 mb-2">
            Contributed to a sports betting platform, responsible for test planning, automation, and collaborating with cross-functional teams to ensure high-quality releases.
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
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