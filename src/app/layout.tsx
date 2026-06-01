import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KidZoo | Play dates, Made Easy",
  description: "KidZoo is a social platform that takes the effort and awkwardness out of playdates. The essential toolkit for modern parents.",
  keywords: ["kidzoo", "playdates", "parenting app", "kids activities", "family app"],
  openGraph: {
    title: "KidZoo | Play dates, Made Easy",
    description: "KidZoo is a social platform that takes the effort and awkwardness out of playdates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
