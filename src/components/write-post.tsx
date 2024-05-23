'use client'

import {
  AlertDialog, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Bold, Italic, LinkIcon, Pen, Underline} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const maxFileSize = 500000
const accepted_image_types = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

const formSchema = z.object({
  category: z.string(),
  content: z.string().max(200, {
    message: "串的字数必须在 200 字以内"
  }),
  image: z
    .custom<FileList>()
    .refine((files) => files[0].size <= maxFileSize, `文件大小不能超过 5MB.`)
    .refine(
      (files) => accepted_image_types.includes(files[0].type),
      "只能上传 .jpg，.jpeg，.png 和 .webp 的图片"
    )
})

export function WritePost() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline" size="icon"><Pen className="w-5"></Pen></Button>
    </AlertDialogTrigger>
    <AlertDialogContent className="overflow-y-scroll max-h-[calc(100vh_-_100px)]">
      <AlertDialogHeader>
        <AlertDialogTitle>编辑 & 发布串</AlertDialogTitle>
        <AlertDialogDescription>
          你可以在下面的文本编辑器中使用 Markdown。（不支持图片等语法，仅支持链接、斜体、粗体）
        </AlertDialogDescription>
      </AlertDialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>分类</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder="选择一个分类"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="talk">闲聊</SelectItem>
                      <SelectItem value="aa">Maths AA</SelectItem>
                      <SelectItem value="bio">Biology</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  分类是左侧边栏中的那些类别。
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>内容</FormLabel>
                <div className="flex justify-start space-x-1">
                  <Button variant="ghost" size="icon">
                    <Bold className="h-4 w-4"/>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Italic className="h-4 w-4"/>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Underline className="h-4 w-4"/>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <LinkIcon className="h-4 w-4"/>
                  </Button>
                </div>
                <FormControl>
                  <Textarea {...field}></Textarea>
                </FormControl>
                <FormDescription>
                  请不要发布违规内容。
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input id="picture" type="file" />
                </FormControl>
                <FormDescription>
                  你可以上传 4 个大小不超过 5MB 的图片。
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
          <AlertDialogFooter>
            <Button type="submit">提交</Button>
            <AlertDialogCancel type="reset">取消</AlertDialogCancel>
          </AlertDialogFooter>
        </form>
      </Form>
    </AlertDialogContent>
  </AlertDialog>
}