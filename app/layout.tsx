import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SITE } from "@/lib/content";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.role}`,
  description: SITE.bio,
  metadataBase: new URL("https://chihaolu.me"),
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.bio,
    url: "https://chihaolu.me",
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
