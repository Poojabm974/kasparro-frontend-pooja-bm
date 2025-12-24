import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kasparro | The Living Algorithm for AI-SEO",
  description: "Kasparro transforms brand data into organic insight. See how ChatGPT, Gemini, and Perplexity perceive your brand. The AI-native SEO & Brand Intelligence platform.",
  keywords: ["AI SEO", "Brand Intelligence", "ChatGPT visibility", "Perplexity SEO", "Gemini optimization", "Living Algorithm"],
  authors: [{ name: "Kasparro" }],
  openGraph: {
    title: "Kasparro | The Living Algorithm for AI-SEO",
    description: "Where data becomes organic insight. Optimize your brand for the AI-first search era.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
