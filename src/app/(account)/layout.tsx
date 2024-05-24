import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import React from "react";
import {ModeToggle} from "@/components/mode-toggle";
import {Toaster} from "@/components/ui/toaster";

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
      <header className="top-0 m-2 w-full h-14 flex flex-row items-center ">
        <h1 className="pl-6 text-xl font-bold">Teeree</h1>
        <div className="ml-auto mr-6">
          <ModeToggle></ModeToggle>
        </div>
      </header>
      <main>
        {children}
      </main>
      <Toaster></Toaster>
    </>
  );
}
