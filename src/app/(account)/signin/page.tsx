'use client'

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {z} from "zod";
import {useToast} from "@/components/ui/use-toast";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import Link from "next/link";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().trim().min(1, { message: "请输入邮箱" }).email("邮箱格式不正确.").refine((e) => e.endsWith("@shphschool.com"), "请使用平和邮箱"),
  password: z.string().min(5, { message: "请输入密码" }).max(70).trim()
})

export default function SignInPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
  const { toast } = useToast()
  const [isDisabled, setIsDisabled] = useState(false)

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <>
      <div className="flex justify-items-center items-center w-full h-full">
        <Card className="w-[350px] lg:w-[400px]">
          <CardHeader>
            <CardTitle>欢迎</CardTitle>
            <CardDescription>登录你的账户</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>邮箱</FormLabel>
                      <FormControl>
                        <Input placeholder="@shphschool.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>密码</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button variant="link" asChild>
                    <Link href="/signup">
                      还没有账号？
                    </Link>
                  </Button>
                  <Button type="submit" disabled={isDisabled}>
                    {isDisabled ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    登录
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}