"use client";
import { useState } from "react";
import SuccessModal from "./SuccessModal";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/xovdpwgk", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target),
    });
    if (res.ok) {
      setShowModal(true);
      setFormData({ email: "", message: "" });
    } else {
      alert(t("contact.error"));
    }
  };

  return (
    <section
      id="contact"
      className="relative pb-16 px-2 sm:py-20 sm:px-6 md:px-12 flex items-center min-h-screen bg-transparent overflow-x-hidden"
    >
      <div className="section-container max-w-4xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-10 text-center">
          {t("contact.heading")}
        </h2>
        {/* Decorative Divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-cyan-900 rounded-full mb-8 mx-auto animate-popIn"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Socials and Info */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {t("contact.connect")}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              {t("contact.invite")}
            </p>
            <div className="flex gap-8 justify-center md:justify-start mb-6 mt-4 w-full">
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
                  className="w-8 h-8 hover:scale-110 transition"
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
                  className="w-8 h-8 hover:scale-110 transition"
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
                  className="w-8 h-8 hover:scale-110 transition"
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
                  className="w-8 h-8 hover:scale-110 transition"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl p-4 sm:p-8 flex flex-col gap-6 w-full"
          >
            <label className="text-lg font-medium text-gray-700 dark:text-gray-200 w-full">
              {t("contact.email")}
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#23283b] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder={t("contact.emailPlaceholder")}
              />
            </label>
            <label className="text-lg font-medium text-gray-700 dark:text-gray-200 w-full">
              {t("contact.message")}
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#23283b] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={5}
                placeholder={t("contact.messagePlaceholder")}
              />
            </label>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 text-white rounded-lg py-3 px-8 font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition w-full sm:w-auto"
            >
              {t("contact.send")}
            </button>
          </form>
        </div>
        {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
      </div>
    </section>
  );
};

export default Contact;
