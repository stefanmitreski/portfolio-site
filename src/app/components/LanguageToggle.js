"use client";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1 gap-1">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          i18n.language === "en"
            ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("mk")}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          i18n.language === "mk"
            ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`}
        aria-label="Switch to Macedonian"
      >
        MK
      </button>
    </div>
  );
};

export default LanguageToggle;
