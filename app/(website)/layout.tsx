/* eslint-disable @next/next/no-img-element */
import { FloatingWhatsapp } from "@/components/shared/floating-whatsapp";
import { Footer } from "@/components/shared/footer";
import { Nav } from "@/components/shared/nav";
import { CSPostHogProvider } from "@/components/shared/providers";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
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
          <meta
            name="facebook-domain-verification"
            content={process.env["FACEBOOK_DOMAIN_VERIFICATION_ID"]}
          />
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
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env["FACEBOOK_PIXEL_ID"]}');
          fbq('track', 'PageView');
        `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              alt=""
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${process.env["FACEBOOK_PIXEL_ID"]}&ev=PageView&noscript=1`}
            />
          </noscript>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
