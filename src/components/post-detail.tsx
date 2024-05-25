import { PostPreview, Preview } from "@/components/post-preview"
import ReplyPreview from "@/components/replies-preview"
import { Separator } from "@/components/ui/separator"

export type Reply = {
  cookie: String,
  content: String,
  time: Date,
  id: string,
  replyTo?: Reply
}

export interface Post extends PostPreview {
  replies: Array<Reply>
}


export default function Detail({ post }: { post: Post }) {
  const replies = post.replies

  return (
    <>
      <Preview post={post} />
      <div className="w-full mt-5">
        <h1 className="m-5 text-xl font-bold">
          回复
        </h1>
        {replies.map((reply: Reply) =>
          <ReplyPreview key={reply.id} reply={reply} />
        )}
      </div>
    </>
  )
}
