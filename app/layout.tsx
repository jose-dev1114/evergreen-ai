import type { Metadata } from "next";
import { Cormorant_Garamond, Heebo, Lekton } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lekton = Lekton({
  variable: "--font-lekton",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Evergreen.ai - AI Financial Advisor for Tech Professionals",
  description: "Finally, an AI advisor that understands RSUs, ISOs, AMT, and IPO scenarios. Ask your hardest equity question. We're ready.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${heebo.variable} ${lekton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-heebo">{children}</body>
    </html>
  );
}
