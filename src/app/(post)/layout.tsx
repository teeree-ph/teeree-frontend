import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
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
    <>
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
    </>
  );
}
