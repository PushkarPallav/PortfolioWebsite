import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Pushkar Pallav | AI & ML Engineer & Backend Developer",
  description: "Portfolio of Pushkar Pallav - AI & ML Engineer and Backend Developer. Specializing in Deep Learning, Multimodal Generative AI, RGB-D Autonomous Perception, and Scalable Backend Architecture.",
  keywords: ["AI Engineer", "ML Engineer", "Deep Learning", "Backend Developer", "Pushkar Pallav", "Spring Boot", "Computer Vision"],
  authors: [{ name: "Pushkar Pallav" }],
  openGraph: {
    title: "Pushkar Pallav | AI & ML Engineer & Backend Developer",
    description: "AI & ML Engineer and Backend Developer specializing in Deep Learning and Scalable Enterprise Backend Systems",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#09090b] text-white">
        {children}
      </body>
    </html>
  );
}
