"use client";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

const Work = () => {
  const { t } = useTranslation();

  return (
    <section
      id="work"
      className="py-10 px-2 sm:px-6 md:px-12 flex flex-col items-center min-h-screen"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-10 text-center">
        {t("work.heading")}
      </h2>
      {/* Decorative Divider */}
      <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-cyan-900 rounded-full mb-8 mx-auto animate-popIn"></div>
      <div className="w-full max-w-5xl flex flex-col gap-12">
        {/* Experience Card */}
        <div className="bg-white/80 dark:bg-[#181c20]/80 rounded-2xl shadow-lg p-6 sm:p-8 mb-4 flex flex-col items-start border border-blue-100 dark:border-blue-900 w-full animate-popIn">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
            {t("work.experienceTitle")}
          </h3>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-2">
            <span className="font-semibold">{t("work.experienceRole")}</span>{" "}
            {t("work.experienceAt")}
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1 text-base sm:text-lg">
            <li>{t("work.experience1")}</li>
            <li>{t("work.experience2")}</li>
            <li>{t("work.experience3")}</li>
            <li>{t("work.experience4")}</li>
          </ul>
        </div>
        {/* Projects Grid */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Project 1 */}
          <div className="flex-1 bg-white/80 dark:bg-[#181c20]/80 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-900 p-6 sm:p-8 flex flex-col min-w-0 mb-6 md:mb-0 hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate-popIn">
            <h4 className="text-xl sm:text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
              {t("work.project1Title")}
            </h4>
            <p className="text-gray-700 dark:text-gray-200 mb-2 text-base sm:text-lg">
              {t("work.project1Desc")}
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1 text-base sm:text-lg">
              <li>{t("work.project1Item1")}</li>
              <li>{t("work.project1Item2")}</li>
              <li>{t("work.project1Item3")}</li>
            </ul>
          </div>
          {/* Project 2 */}
          <div className="flex-1 bg-white/80 dark:bg-[#181c20]/80 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-900 p-6 sm:p-8 flex flex-col min-w-0 hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate-popIn">
            <h4 className="text-xl sm:text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
              {t("work.project2Title")}
            </h4>
            <p className="text-gray-700 dark:text-gray-200 mb-2 text-base sm:text-lg">
              {t("work.project2Desc")}
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1 text-base sm:text-lg">
              <li>{t("work.project2Item1")}</li>
              <li>{t("work.project2Item2")}</li>
              <li>{t("work.project2Item3")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
