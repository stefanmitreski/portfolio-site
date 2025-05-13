"use client";

import { useState } from "react";
import SuccessModal from "./SuccessModal";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({ email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 px-2 sm:py-24 sm:px-6 md:px-12 flex items-center min-h-screen"
    >
      <div className="section-container max-w-4xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-10 text-center">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left side: Contact Info */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Let&apos;s Connect</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              Feel free to reach out for collaboration, freelance work, or just to say hi!
            </p>
            <div className="socials socials-contact mb-6">
              <a href="https://www.instagram.com/mitreski_stefan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Image src="/images/instagram.png" alt="Instagram" className="w-8 h-8 hover:scale-110 transition" width={32} height={32} />
              </a>
              <a href="https://www.linkedin.com/in/stefan-mitrevski-566214238/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Image src="/images/linkedin-logo.png" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition" width={32} height={32} />
              </a>
              <a href="https://www.upwork.com/freelancers/~016ebe006d3a4e66b5" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
                <Image src="/images/upwork.png" alt="Upwork" className="w-8 h-8 hover:scale-110 transition" width={32} height={32} />
              </a>
              <a href="https://github.com/stefanmitreski" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Image src="/images/github.png" alt="GitHub" className="w-8 h-8 hover:scale-110 transition" width={32} height={32} />
              </a>
            </div>
          </div>
          {/* Right side: Contact Form */}
          <form className="rounded-xl p-4 sm:p-8 flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
            <label className="text-lg font-medium text-gray-700 dark:text-gray-200 w-full">
              Email
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#23283b] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </label>
            <label className="text-lg font-medium text-gray-700 dark:text-gray-200 w-full">
              Message
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#23283b] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={5}
                placeholder="Type your message here..."
              />
            </label>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg py-3 px-8 font-semibold shadow-lg hover:bg-blue-700 transition w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
        {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
      </div>
    </section>
  );
};

export default Contact;