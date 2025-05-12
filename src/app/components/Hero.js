import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-row h-screen px-4 md:px-24 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-[#10131a] dark:to-[#23283b]">
      {/* Left: Text and Buttons */}
      <div className="w-5/12 flex flex-col justify-center h-full hero-text-margin">
        <div className="max-w-xl space-y-6">
          <span className="hello-align text-lg md:text-xl text-gray-500 dark:text-gray-400 animate-fadeIn">
            Hello, I&apos;m
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white animate-slideLeft">
            Stefan Mitrevski
          </h1>
          <h2 className="hero-subtitle text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 animate-slideLeft">
            QA Engineer &amp; Automation Tester
          </h2>
          <div className="socials socials-hero">
            <a href="https://www.instagram.com/mitreski_stefan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/images/instagram.png" alt="Instagram" className="w-8 h-8 hover:scale-110 transition" />
            </a>
            <a href="https://www.linkedin.com/in/stefan-mitrevski-566214238/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/images/linkedin-logo.png" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition" />
            </a>
            <a href="https://www.upwork.com/freelancers/~016ebe006d3a4e66b5" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
              <img src="/images/upwork.png" alt="Upwork" className="w-8 h-8 hover:scale-110 transition" />
            </a>
            <a href="https://github.com/stefanmitreski" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="/images/github.png" alt="GitHub" className="w-8 h-8 hover:scale-110 transition" />
            </a>
          </div>
          <div className="flex flex-col gap-4 items-start">
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
      <div className="w-7/12 flex justify-center items-center pr-8 md:pr-20 animate-slideRight">
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-[#23283b] hero-img-shadow flex items-center justify-center">
          <Image
            src="/images/my_picture.png"
            alt="Stefan Mitrevski"
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
            priority
          />
          {/* Decorative Shape */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 dark:bg-blue-900 rounded-full blur-3xl opacity-40 -z-10"></div>
        </div>
      </div>
    </section>
  );
}