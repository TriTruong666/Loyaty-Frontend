import type { Metadata } from "next";
import { Provider } from "jotai";
import "./globals.css";
import localFont from "next/font/local";
import ThemeProvider from "@/components/theme";
import QueryProvider from "@/components/query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const interFont = localFont({
  src: "../static/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

const openFont = localFont({
  src: "../static/fonts/OpenSans-VariableFont_wdth,wght.ttf",
  variable: "--font-open-sans",
  weight: "100 900",
});

const monseFont = localFont({
  src: "../static/fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-monse",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Loyalty",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${openFont.variable} ${monseFont.variable} antialiased`}
      >
        <Provider>
          <QueryProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            <ThemeProvider>{children}</ThemeProvider>
          </QueryProvider>
        </Provider>
      </body>
    </html>
  );
}
