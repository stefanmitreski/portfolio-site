import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={i18n.language === "en" ? "font-bold underline" : ""}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage("mk")}
        className={i18n.language === "mk" ? "font-bold underline" : ""}
      >
        MK
      </button>
    </div>
  );
};

export default LanguageToggle;
