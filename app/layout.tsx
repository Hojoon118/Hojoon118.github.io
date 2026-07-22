import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: "Hojoon — Portfolio",
    description: "Software engineering, machine learning, and data projects by UC San Diego computer science student Hojoon Kim.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Hojoon — Portfolio",
      description: "Software engineering, machine learning, and data projects by Hojoon Kim.",
      type: "website",
      images: [{ url: new URL("/og-v2.png", base), width: 1200, height: 630, alt: "Hojoon Kim — Software, ML, and Data" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Hojoon — Portfolio",
      description: "Software engineering, machine learning, and data projects by Hojoon Kim.",
      images: [new URL("/og-v2.png", base)],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
