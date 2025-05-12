import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row min-h-screen items-center justify-center px-4 md:px-24 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-[#10131a] dark:to-[#23283b] pt-[4.5rem] lg:pt-0">
      {/* Left: Text and Buttons */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center items-center lg:items-start lg:h-full lg:ml-0">
        <div className="max-w-xl space-y-6 mx-auto lg:mx-0 lg:pl-20">
          <div className="text-center lg:text-left">
            <span className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 animate-fadeIn text-center lg:text-left pr-2 md:pl-1.5">
              Hello, I&apos;m
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white animate-slideLeft text-center lg:text-left">
              Stefan Mitrevski
            </h1>
            <h2 className="hero-subtitle text-lg sm:text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 animate-slideLeft text-center lg:text-left">
              QA Engineer &amp; Automation Tester
            </h2>
          </div>
          <div className="flex gap-8 justify-center lg:justify-start mb-6 w-full">
            <a
              href="https://www.instagram.com/mitreski_stefan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-white rounded-full"
            >
              <Image src="/images/instagram.png" alt="Instagram" className="w-8 h-8 hover:scale-110 transition" width={32} height={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/stefan-mitrevski-566214238/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-white rounded-full"
            >
              <Image src="/images/linkedin-logo.png" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition" width={32} height={32} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~016ebe006d3a4e66b5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
              className="bg-white rounded-full"
            >
              <Image src="/images/upwork.png" alt="Upwork" className="w-8 h-8 hover:scale-110 transition" width={32} height={32} />
            </a>
            <a
              href="https://github.com/stefanmitreski"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="bg-white rounded-full"
            >
              <Image src="/images/github.png" alt="GitHub" className="w-8 h-8 hover:scale-110 transition" width={32} height={32} />
            </a>
          </div>
          <div className="flex flex-col gap-4 items-center lg:items-start mt-8 lg:mt-20 w-full">
            <a
              href="/files/CV_Stefan_Mitrevski.pdf"
              download
              className="hero-cv-btn bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition animate-popIn"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      {/* Right: Image */}
      <div className="w-full lg:w-7/12 flex justify-center items-center mt-8 lg:mt-0 pr-0 lg:pr-20 animate-slideRight">
        <div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-[#23283b] hero-img-shadow flex items-center justify-center mx-auto">
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