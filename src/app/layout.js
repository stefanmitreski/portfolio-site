import "@/app/i18n";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Stefan Mitrevski",
  description: "Portfolio of Stefan Mitrevski, QA Engineer & Automation Tester",
  icons: {
    icon: "/images/portfolio-icon.png",
    shortcut: "/images/portfolio-icon.png",
    apple: "/images/portfolio-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-[#10131a] dark:to-[#23283b] text-[#171717] dark:text-[#ededed] font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
