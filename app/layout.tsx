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
    description: "Selected work and ideas by Hojoon, a multidisciplinary creator in Seoul.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Hojoon — Portfolio",
      description: "I turn curiosity into useful things.",
      type: "website",
      images: [{ url: new URL("/og.png", base), width: 1200, height: 630, alt: "Hojoon portfolio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Hojoon — Portfolio",
      description: "I turn curiosity into useful things.",
      images: [new URL("/og.png", base)],
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
