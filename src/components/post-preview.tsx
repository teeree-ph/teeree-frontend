import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {MessageSquareText} from "lucide-react";
import { timeBefore } from "@/lib/utils";

export interface PostPreview {
  category: string,
  id: string,
  cookie: string,
  time: Date,
  content: string,
  repliesCount: number
}

type PreviewProps = {
  post: PostPreview
}

export function Preview({ post }: PreviewProps ) {

  return (
    <>
      <Card className="w-full pt-5">
        <CardContent>
          <div className="space-y-2">
            <div className="flex space-x-2 items-center">
              <Badge>{post.category}</Badge>
              <p className="font-bold">No.{post.id}</p>
              <p className="font-mono">{post.cookie}</p>
              <p className="text-sm text-muted-foreground">{timeBefore(post.time)}</p>
            </div>
            <div>
              <Link href="" className="hover:underline">
                {post.content}
              </Link>
            </div>
            <Separator></Separator>
            <div className="flex space-x-2 items-start">
              <MessageSquareText className="w-5 text-muted-foreground"></MessageSquareText>
              <p className="text-muted-foreground">{post.repliesCount}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}