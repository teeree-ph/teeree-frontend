import {ModeToggle} from "@/components/mode-toggle";
import {Separator} from "@/components/ui/separator";
import {DetailButton} from "@/components/detail-button";

export function HeaderBar() {
  return (
    <>
      <div className="flex flex-row items-center space-x-3 h-16">
        <h1 className="m-0 ml-6 pt-0 pb-0 text-lg font-bold">Teeree 树洞</h1>
        <div className="absolute right-6 flex flex-row space-x-2">
          <ModeToggle></ModeToggle>
          <DetailButton></DetailButton>
        </div>
      </div>
      <Separator></Separator>
    </>
  )
}