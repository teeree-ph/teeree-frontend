import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {HeaderBar} from "@/components/header-bar";
import {SideBar} from "@/components/side-bar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teeree 树洞",
  description: "一个模仿 A 岛匿名版的前台匿名树洞平台。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="w-full h-full">
      <body className={inter.className + "h-full"}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <header className="top-0 w-full">
          <HeaderBar></HeaderBar>
        </header>
        <main>
          <div className="flex w-full">
            <div className="flex-2 w-62 h-[calc(100vh_-_64px)]">
              <SideBar></SideBar>
            </div>
            {children}
          </div>
        </main>
      </ThemeProvider>
      </body>
    </html>
  );
}
