import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://castarokio.github.io"),
  title: "Castarokio | Full-Stack Developer",
  description:
    "Portfolio of Hamid Ait Medjber, a Next.js developer building polished web apps, booking flows, storefronts, and admin-ready systems.",
  authors: [{ name: "Hamid Ait Medjber" }],
  keywords: [
    "Castarokio",
    "Hamid Ait Medjber",
    "Full-Stack Developer",
    "Next.js Developer Algeria",
    "UI UX",
    "Web Apps",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Castarokio | Full-Stack Developer",
    description:
      "Polished Next.js websites, product interfaces, booking flows, storefronts, and admin-ready systems.",
    url: "/",
    siteName: "Castarokio",
    images: [{ url: "/opengraph-image.jpg", width: 828, height: 819 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Castarokio | Full-Stack Developer",
    description:
      "Polished Next.js websites, product interfaces, booking flows, storefronts, and admin-ready systems.",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9ff" },
    { media: "(prefers-color-scheme: dark)", color: "#050816" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
