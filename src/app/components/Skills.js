"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/app/i18n/i18nConfig";

const skillData = [
  {
    name: "Automation",
    color: "bg-lime-100 text-lime-700",
    icon: "/images/automation.png",
  },
  {
    name: "Manual",
    color: "bg-sky-100 text-sky-700",
    icon: "/images/manual.png",
  },
  {
    name: "Java",
    color: "bg-blue-100 text-blue-700",
    icon: "/images/java.png",
  },
  {
    name: "Selenium",
    color: "bg-green-100 text-green-700",
    icon: "/images/se.png",
  },
  {
    name: "SQL",
    color: "bg-purple-100 text-purple-700",
    icon: "/images/sql.png",
  },
  {
    name: "Postman",
    color: "bg-yellow-100 text-yellow-700",
    icon: "/images/postman.png",
  },
  { name: "AI", color: "bg-sky-100 text-sky-700", icon: "/images/ai.png" },
  {
    name: "Cucumber",
    color: "bg-lime-100 text-lime-700",
    icon: "/images/cucumber.png",
  },
  {
    name: "Cypress",
    color: "bg-emerald-100 text-emerald-700",
    icon: "/images/cypress.svg",
  },
  {
    name: "Jenkins",
    color: "bg-orange-100 text-orange-700",
    icon: "/images/jenkins.png",
  },
  { name: "Git", color: "bg-red-100 text-red-700", icon: "/images/git.png" },
  {
    name: "Agile",
    color: "bg-pink-100 text-pink-700",
    icon: "/images/agile.png",
  },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="py-10 px-2 sm:px-4 md:px-12 min-h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 text-center pb-3">
        {t("skills.heading")}
      </h2>
      {/* Decorative Divider */}
      <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-cyan-900 rounded-full mb-8 mx-auto animate-popIn"></div>
      <p className="mb-4 text-center text-gray-500 dark:text-gray-400 max-w-2xl">
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {t("skills.tipLabel")}
        </span>{" "}
        {t("skills.tip")}
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 md:gap-16 max-w-4xl mx-auto justify-items-center w-full">
        {skillData.map((skill) => (
          <div
            key={skill.name}
            className={`group flex flex-col items-center justify-center ${skill.color} rounded-full shadow-lg w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto transition-transform duration-300 hover:scale-110 hover:shadow-2xl relative cursor-pointer`}
            tabIndex={0}
          >
            {skill.icon && (
              <Image
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2"
                width={48}
                height={48}
                draggable={false}
              />
            )}
            <span className="text-base sm:text-lg md:text-xl font-bold mb-1">
              {skill.name}
            </span>
            {/* Tooltip on hover/focus */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity duration-200  min-w-[9rem] max-w-xs w-32 px-3 py-2 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 text-center text-xs sm:text-sm font-semibold break-words overflow-hidden ${skill.color}`}
            >
              {t(`skills.${skill.name}Desc`)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
