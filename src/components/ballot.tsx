import { Card } from "@/components/ui/card"
import { useState } from "react"

type VoteItem = {
  name: string
  votes: number
}

type VoteProps = {
  endDate?: Date
  items: Array<VoteItem>
}

export default function Ballot({ items }: VoteProps) {
  const [voted, setVoted] = useState(false)

  function sumVotes(items: Array<VoteItem>) {
    return items.reduce((total, item) => {
      return total + item.votes
    }, 0)
  }

  return (
    <>
      <Card className="w-full pt-5"></Card>
    </>
  )
}
