"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/app/i18n/i18nConfig";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex flex-col lg:flex-row min-h-screen items-center justify-center px-4 md:px-24 bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 dark:from-[#10131a] dark:via-[#23283b] dark:to-[#23283b] pt-[4.5rem] lg:pt-0 overflow-hidden">
      {/* Decorative blurred shape */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full blur-3xl opacity-30 -z-10"></div>
      {/* Left: Text and Buttons */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center items-center lg:items-start lg:h-full lg:ml-0">
        <div className="max-w-xl space-y-6 mx-auto lg:mx-0 lg:pl-20">
          <div className="text-center lg:text-left">
            <span className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 animate-fadeIn text-center lg:text-left pr-2 md:pl-1.5">
              {t("hero.greeting")}
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg animate-slideLeft text-center lg:text-left mt-2">
              {t("hero.name")}
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 animate-slideLeft text-center lg:text-left py-2 tracking-wide">
              {t("hero.title")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 animate-fadeIn text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              {t("hero.description")}
            </p>
          </div>
          {/* Social Icons */}
          <div className="flex gap-6 justify-center lg:justify-start mb-6 w-full">
            <a
              href="https://www.instagram.com/mitreski_stefan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-white rounded-full"
            >
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                className="w-8 h-8"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/stefan-mitrevski-566214238/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-white rounded-full"
            >
              <Image
                src="/images/linkedin-logo.png"
                alt="LinkedIn"
                className="w-8 h-8"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~016ebe006d3a4e66b5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
              className="bg-white rounded-full"
            >
              <Image
                src="/images/upwork.png"
                alt="Upwork"
                className="w-8 h-8"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://github.com/stefanmitreski"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="bg-white rounded-full"
            >
              <Image
                src="/images/github.png"
                alt="GitHub"
                className="w-8 h-8"
                width={32}
                height={32}
              />
            </a>
          </div>
          {/* Download CV Button */}
          <div className="flex flex-col gap-4 items-center lg:items-start mt-8 lg:mt-20 w-full">
            <a
              href="/files/CV_Stefan_Mitrevski.pdf"
              download
              className="px-11 py-3 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl hover:from-blue-700 transition animate-popIn"
            >
              {t("hero.downloadCV")}
            </a>
          </div>
        </div>
      </div>
      {/* Right: Image */}
      <div className="w-full lg:w-7/12 flex justify-center items-center mt-8 lg:mt-0 pr-0 lg:pr-20 animate-slideRight">
        <div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-[#23283b] shadow-2xl flex items-center justify-center mx-auto">
          <Image
            src="/images/my_picture.png"
            alt="Stefan Mitrevski"
            width={300}
            height={300}
            className="object-cover object-top w-full h-full"
            priority
          />
          {/* Decorative Shape */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 sm:w-80 sm:h-80 bg-blue-100 dark:bg-blue-900 rounded-full blur-3xl opacity-40 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
