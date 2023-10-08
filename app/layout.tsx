import "@/assets/styles/globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { LayoutI } from "@/interface";
import { Header } from "@/components";
import { CacheProvider } from "@/providers";

const customFont = localFont({
  src: [
    {
      path: "../public/fonts/custom-font-regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/custom-font-medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/custom-font-semi-bold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/custom-font-bold.ttf",
      weight: "700",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: '"DATA" endi - ta\'lim stansiyasi',
  description: "Har xil sohalarda bilimga to'ldiramiz",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutI) {
  return (
    <html lang="en">
      <body className={customFont.className}>
        <CacheProvider>
          <Header />
          {children}
        </CacheProvider>
      </body>
    </html>
  );
}
