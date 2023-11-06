import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estimate your website's carbon emissions | Carbon Checker",
  description:
    "Estimate and reduce your website's carbon footprint with our easy-to-use carbon emissions calculator.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Estimate your website's carbon emissions | Carbon Checker",
    description:
      "Estimate and reduce your website's carbon footprint with our easy-to-use carbon emissions calculator.",
    creator: "@momito",
    images: ["https://carbon-checker-23.s3.amazonaws.com/carbon-checker.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌍</text></svg>"
      />
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  );
}
