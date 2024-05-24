import React from "react";

export default function Custom404() {
  return (
    <>
      <header className="top-0 m-2 w-full h-14 flex flex-row items-center ">
        <h1 className="pl-6 text-xl font-bold">Teeree</h1>
      </header>
      <div className="absolute top-0 left-0 bottom-0 right-0 m-auto flex flex-2 w-full justify-center items-center">
        <div className="h-10 flex justify-center items-center space-x-2">
          <h3 className="text-xl">404</h3>
          <div className="border-[0.9px]"></div>
          <h3 className="text-xl font-bold">Page Not Found!</h3>
        </div>
      </div>
    </>
  );
}