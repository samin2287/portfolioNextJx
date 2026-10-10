import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AOSWrapper from "./components/AOSWrapper";
import LayoutContent from "./components/LayoutContent";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: {
    default: "Zubayer Mahmud Samin | Frontend & Webflow Developer",
    template: "%s | Zubayer Mahmud Samin",
  },
  description:
    "Portfolio of Zubayer Mahmud Samin, a Frontend Developer skilled in React, Next.js, and Webflow, building responsive, modern, and high-performance web applications.",
  keywords: [
    "Zubayer Mahmud Samin",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Webflow Developer",
    "Web Designer",
    "Portfolio",
  ],
  authors: [{ name: "Zubayer Mahmud Samin" }],
  creator: "Zubayer Mahmud Samin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/samin2287",
    siteName: "Zubayer Mahmud Samin Portfolio",
    title: "Zubayer Mahmud Samin | Frontend & Webflow Developer",
    description:
      "Frontend Developer skilled in React, Next.js, and Webflow, crafting clean, responsive, and user-friendly digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zubayer Mahmud Samin | Frontend & Webflow Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and Webflow.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body className="bg-gray-900">
        <AOSWrapper>
          <LayoutContent>{children}</LayoutContent>
        </AOSWrapper>
      </body>
    </html>
  );
}
