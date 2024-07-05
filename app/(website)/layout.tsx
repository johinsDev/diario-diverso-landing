import { FloatingWhatsapp } from "@/components/shared/floating-whatsapp";
import { Footer } from "@/components/shared/footer";
import { Nav } from "@/components/shared/nav";
import { CSPostHogProvider } from "@/components/shared/providers";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";

const moonTime = localFont({
  src: "../../public/fonts/moontime.ttf",
  variable: "--font-moontime",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Diarios Personalizados en Colombia",
    template: "%s | Diario Diverso",
  },
  description:
    "Descubre nuestros diarios personalizados para mejorar tu bienestar emocional y crecimiento personal. Compra en Diario Diverso y encuentra el diario perfecto para ti.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://diariodiverso.com",
    siteName: "Diario Diverso",
    images: [
      {
        url: "https://pub-a29fc50331ec472d81857ca846d65d30.r2.dev/logo-color.png",
        alt: "Diario Diverso",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full flex flex-col">
      <CSPostHogProvider>
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
        </head>
        <body
          className={cn(
            "font-poppins overflow-x-hidden flex flex-col flex-1",
            poppins.variable,
            moonTime.variable,
            montserrat.variable,
          )}
        >
          <Nav />
          {children}
          <Toaster />
          <FloatingWhatsapp />
          <Suspense>
            <Footer />
          </Suspense>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
