import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {MessageSquareText} from "lucide-react";

export interface Post {
  category: string,
  id: string,
  cookie: string,
  time: Date,
  content: string,
  comments: number
}

interface PostPreviewProps {
  post: Post
}

export function PostPreview({ post }: PostPreviewProps) {
  function timeBefore(time: Date) {
    const current = new Date();
    const diff = current.getTime() - time.getTime();
    const days = Math.floor(diff / (1000 * 3600 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor(days / 30);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    if (years >= 1) {
      return `${years} 年前`
    } else if (months > 0) {
      return `${months} 个月前`
    } else if (days >= 1) {
      return `${days} 天前`
    } else if (hours >= 1) {
      return `${hours} 小时前`
    } else if (minutes >= 1) {
      return `${minutes} 分钟前`
    } else {
      return `${seconds} 秒前`
    }
  }

  return (
    <>
      <Card className="w-full pt-5">
        <CardContent>
          <div className="space-y-2">
            <div className="flex space-x-2 items-center">
              <Badge>{post.category}</Badge>
              <p>No.{post.id}</p>
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
              <p className="text-muted-foreground">{post.comments}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}