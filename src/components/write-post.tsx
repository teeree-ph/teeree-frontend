'use client'

import {
  AlertDialog, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Pen} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Poll, RichTextEditor} from "@/components/text-editor";

const maxFileSize = 500000
const acceptedImageTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

const formSchema = z.object({
  category: z.string({ required_error: "请选择一个分类" }),
  content: z.object({
    text: z
      .string({ required_error: "不得输入空白内容" })
      .trim()
      .refine(
        (text) => text.replace(/<\/?[^>]*>/g, '')  !== '',
        '不得输入空白内容'
      ),
    poll: z.custom<Poll>().optional()
  }),
  image: z
    .custom<File>()
    .refine((file) => file.size <= maxFileSize, `文件大小不能超过 5MB.`)
    .refine(
      (file) => acceptedImageTypes.includes(file?.type),
      "只能上传 .jpg，.jpeg，.png 和 .webp 的图片"
    )
    .optional()
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
                  <Select onValueChange={field.onChange}>
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
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>内容</FormLabel>
                <FormControl>
                  <RichTextEditor
                    onChange={field.onChange}
                  ></RichTextEditor>
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
            render={({field: { value, onChange, ...fieldProps}}) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...fieldProps}
                    id="picture"

                    type="file"
                    onChange={(event) => {
                      onChange(event.target.files && event.target.files[0])
                    }}
                  />
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