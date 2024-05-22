'use client'

import {Megaphone, MessageSquareText} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

interface CategoryParams {
  category: string
}

interface CategoryProps {
  params: CategoryParams
}

export default function CategoryPage({ params }: CategoryProps) {
  return (
    <>
      <div className="flex-2 flex-col space-y-2 w-full pt-5 pl-20 pr-20 xl:pl-44 xl:pr-44">
        <Alert>
          <Megaphone className="w-5"></Megaphone>
          <AlertTitle>板块公告</AlertTitle>
          <AlertDescription>
            ABC
          </AlertDescription>
        </Alert>

        <Card className="w-full pt-5">
          <CardContent>
            <div className="space-y-2">
              <div className="flex space-x-2 items-center">
                <Badge>闲聊</Badge>
                <p>No.9090237</p>
                <p className="font-mono">eAjfe81</p>
                <p className="text-sm text-muted-foreground">2 小时前</p>
              </div>
              <div>
                <Link href="" className="hover:underline">
                  两，两斤土豆，炖肉吃，一大盆，不就米饭，碾碎了往嘴里kuai着吃的，感觉自己像头活猪
                  (`ᝫ´ )
                  蛋白质，碳水，脂肪大集合，罪过罪过，又要胖三斤了……
                </Link>
              </div>
              <Separator></Separator>
              <div className="flex space-x-2 items-start">
                <MessageSquareText className="w-5 text-muted-foreground"></MessageSquareText>
                <p className="text-muted-foreground">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}