'use client'

import {Button} from "@/components/ui/button";
import {Ghost, LibraryBig} from "lucide-react";
import {ScrollArea} from "@/components/ui/scroll-area";
import {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface Category {
  type: 'casual' | 'course'
  name: string,
  link: string
}

export function SideBar() {
  const cate: Array<Category> = [
    { type: 'casual', name: "闲聊", link: "talk" },
    { type: 'casual', name: "吐槽", link: "debunk" },
    { type: 'casual', name: "怪谈", link: "weird" },
    { type: 'casual', name: "游戏", link: "game" },
    { type: 'course', name: "Maths AA", link: "aa" },
    { type: 'course', name: "Geography", link: "geo" },
    { type: 'course', name: "Music", link: "music" },
    { type: 'course', name: "Biology", link: "bio" },
  ]

  const current = usePathname()
    .split("/")
    .findLast(() => true)!!;

  const [selected, setSelected] =
    useState<string>(cate.find((c) => c.link === current)?.name ?? '');

  function categories(categories: Array<Category>) {
    return categories.map((category) => {
      if (selected === category.name) {
        return <Link key={category.link} href={`/category/${category.link}`}>
          <Button onClick={() => setSelected(category.name)} variant="secondary" className="mt-1 w-full justify-start">
            {category.name}
          </Button>
        </Link>
      }
      return <Link key={category.link} href={`/category/${category.link}`}>
        <Button onClick={() => setSelected(category.name)} variant="ghost" className="mt-1 w-full justify-start">
          {category.name}
        </Button>
      </Link>
    })
  }

  return (
    <>
      <div className="flex h-full">
        <div className="w-full flex-col p-3">
          <h3 className="ml-5 text-lg font-bold flex flex-row items-center">
            <Ghost className="w-5 mr-1"></Ghost> 休闲
          </h3>
          <div className="h-40 mt-2 space-y-1 overflow-y-scroll">
            {categories(cate.filter((c) => c.type === 'casual'))}
          </div>
          <h3 className="ml-5 mt-5 text-lg font-bold flex flex-row items-center">
            <LibraryBig className="w-5 mr-1"></LibraryBig> 学术
          </h3>
          <div className="w-full h-50 mt-2 space-y-1 overflow-y-scroll">
            {categories(cate.filter((c) => c.type === 'course'))}
          </div>
        </div>
        <div className="border-[0.9px]"></div>
      </div>
    </>
  )
}