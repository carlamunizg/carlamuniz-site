import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "Carla Muniz | %s",
    absolute: "Carla Muniz - Sono Infantil",
    default: "Carla Muniz - Sono Infantil",
  },
  description: "Carla Muniz - Especialista em Neurociência do Sono Infantil",
  applicationName: "Carla Muniz - Sono Infantil",
  alternates: {
    canonical: "https://carlamuniz.com",
    languages: {
      "pt-BR": "https://carlamuniz.com",
    },
  },
  authors: {
    name: "Carla Muniz",
    url: "https://carlamuniz.com",
  },
  generator: "Next.js",
  keywords: ["Carla Muniz"],
  referrer: "origin",
  creator: "Carla Muniz",
  publisher: "Carla Muniz",
  robots: {
    index: false,
    follow: false,
  },
  icons: [
    { rel: "icon", url: "favicon.ico" },
    {
      rel: "icon",
      url: "favicons/logo_16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      url: "favicons/logo_32.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      url: "favicons/logo_180.png",
      type: "image/png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      url: "favicons/logo_256.png",
      type: "image/png",
      sizes: "256x256",
    },
    {
      rel: "icon",
      url: "favicons/logo_512.png",
      type: "image/png",
      sizes: "512x512",
    },
  ],
  formatDetection: {
    telephone: false,
  },
  archives: null,
  assets: [],
  bookmarks: "/bookmarks",
  category: "Portfolio",
  classification: "Portfolio público",
  openGraph: {
    title: "Carla Muniz",
    description: "Carla Muniz",
    url: "https://carlamuniz.com",
    siteName: "Carla Muniz",
    images: [
      {
        url: "https://carlamuniz.com/favicons/logo_16.png",
        width: 16,
        height: 16,
        alt: "Logo Carla Muniz",
      },
      {
        url: "https://carlamuniz.com/favicons/logo_32.png",
        width: 32,
        height: 32,
        alt: "Logo Carla Muniz",
      },
      {
        url: "https://carlamuniz.com/favicons/logo_180.png",
        width: 180,
        height: 180,
        alt: "Logo Carla Muniz",
      },
      {
        url: "https://carlamuniz.com/favicons/logo_256.png",
        width: 256,
        height: 256,
        alt: "Logo Carla Muniz",
      },
      {
        url: "https://carlamuniz.com/favicons/logo_512.png",
        width: 512,
        height: 512,
        alt: "Logo Carla Muniz",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carla Muniz",
    description: "Carla Muniz",
    images: [
      {
        url: "https://carlamuniz.com/favicons/logo_16.png",
        width: 16,
        height: 16,
        alt: "Logo Carla Muniz",
      },
      {
        url: "https://carlamuniz.com/favicons/logo_32.png",
        width: 32,
        height: 32,
        alt: "Logo Carla Muniz",
      },
      {
        url: "https://carlamuniz.com/favicons/logo_180.png",
        width: 180,
        height: 180,
        alt: "Logo Carla Muniz",
      },
      {
        url: "https://carlamuniz.com/favicons/logo_256.png",
        width: 256,
        height: 256,
        alt: "Logo Carla Muniz",
      },
      {
        url: "https://carlamuniz.com/favicons/logo_512.png",
        width: 512,
        height: 512,
        alt: "Logo Carla Muniz",
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
    <html lang="pt-BR">
      <body>
        <div className="flex flex-col min-h-screen xxl:px-40 bg-white relative">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
