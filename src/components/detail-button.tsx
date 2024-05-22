import {Cloud, Ellipsis, Github, LogOut, Phone, Settings, User} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function DetailButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Ellipsis className="w-5 mr-1"></Ellipsis>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>选项</DropdownMenuLabel>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem>
          <div className="flex flex-row items-center">
            <User className="w-5 mr-1"></User> 账户
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-row items-center">
            <Settings className="w-5 mr-1"></Settings> 设置
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem>
          <Github className="w-5 mr-2"></Github> GitHub
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Phone className="w-5 mr-2"></Phone> 反馈 & 举报
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Cloud className="w-5 mr-2"></Cloud> API
        </DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem>
          <LogOut className="w-5 mr-2"></LogOut> 登出
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}