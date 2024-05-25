import Detail from "@/components/post-detail"
import { Post } from "@/components/post-detail"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export default async function DetailPage({
  params,
}: {
  params: { postId: string }
}) {
  // const res = await fetch("")
  // if (!res.ok) {
  //   throw new Error("The page does not exist.")
  // }

  const rep = {
    id: "123123",
    cookie: "e13781",
    time: new Date(2024, 3, 5, 8, 24, 0),
    content: "good",
  }

  const post: Post = {
    category: "闲聊",
    id: "1237847",
    cookie: "ejAif83",
    time: new Date(2024, 3, 5, 8, 24, 0),
    content: `
        两，两斤土豆，炖肉吃，一大盆，不就米饭，碾碎了往嘴里kuai着吃的，感觉自己像头活猪 
        (\`ᝫ´ )
        蛋白质，碳水，脂肪大集合，罪过罪过，又要胖三斤了……
      `,
    repliesCount: 2,
    replies: [
      rep,
      {
        id: "123456",
        cookie: "ejAif83",
        time: new Date(2024),
        content: "123",
        replyTo: rep,
      },
    ],
  }

  return (
    <>
      <div className="flex-2 flex-col space-y-2 w-full h-[calc(100vh_-_64px)] overflow-y-scroll pt-5 pl-20 pr-20 xl:pl-44 xl:pr-44">
        <Detail post={post} />
      </div>
    </>
  )
}
