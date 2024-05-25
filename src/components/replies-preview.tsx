import { Reply } from "@/components/post-detail"
import { Card, CardContent } from "@/components/ui/card"
import { timeBefore } from "@/lib/utils"
import Link from "next/link"

export default function ReplyPreview({ reply }: { reply: Reply }) {
  return (
    <Card className="w-full pt-5 mb-2">
      <CardContent>
        <div className="space-y-2">
          <div className="flex space-x-2 items-center">
            <p className="font-bold">No.{reply.id}</p>
            <p className="font-mono">{reply.cookie}</p>
            {reply.replyTo ? (
              <p className="flex">
                回复
                <p className="font-bold">
                  <Link href="">
                  No.{reply.replyTo.id}
                  </Link>
                </p>
              </p>
            ) : null}
            <p className="text-sm text-muted-foreground">
              {timeBefore(reply.time)}
            </p>
          </div>
          <div>{reply.content}</div>
        </div>
      </CardContent>
    </Card>
  )
}
