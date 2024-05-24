import {Editor, EditorContent, useEditor} from "@tiptap/react";
import {StarterKit} from "@tiptap/starter-kit";
import {Toggle} from "@/components/ui/toggle";
import {Bold, Italic, List, ListOrdered, Strikethrough, Code as CodeIcon, BarChartBig} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {CharacterCount} from "@tiptap/extension-character-count";
import "katex/dist/katex.min.css";
import {Mathematics} from "@tiptap-pro/extension-mathematics";
import '../app/text-editor.css';
import {Code} from "@tiptap/extension-code";
import {Link} from "@tiptap/extension-link";
import {Strike} from "@tiptap/extension-strike";
import {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import {z} from "zod";

export interface Poll {
  options: Array<string>,
  end: Date
}

export function RichTextEditor({ onChange }: { onChange: (content: string, poll: Poll | undefined) => void }) {
  const [poll, setPoll] = useState<Poll>();
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "min-h-[80px] max-h-[180px] max-w-[462px] rounded-md rounded-br-none rounded-bl-none border border-input bg-transparent px-3 py-2 border-b-0 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto",
      },
    },
    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-4",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-4",
          },
        },
      }),
      CharacterCount.configure({
        limit: 200,
      }),
      Mathematics,
      Code,
      Link,
      Strike
    ],
    content: '',
    onUpdate({ editor }) {
      onChange(editor.getHTML(), poll)
    },
  })

  return (
    <>
      <div className="p-0">
        <EditorContent editor={editor} />
        {editor ? <RichTextEditorToolbar editor={editor} onChange={(p) => {
          setPoll(p)
          onChange(editor?.getHTML(), poll)
        }} /> : null}
      </div>
    </>
  )
}

const formSchema = z.object({
  
})

function RichTextEditorToolbar({ editor, onChange }: { editor: Editor, onChange: (poll: Poll) => void }) {

  return (
    <div className="border border-input bg-transparent rounded-br-md rounded-bl-md p-1 flex flex-row items-center gap-1">
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("code")}
        onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <CodeIcon className="h-4 w-4" />
      </Toggle>
      <Separator orientation="vertical" className="w-[1px] h-8" />
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
      <Separator orientation="vertical" className="w-[1px] h-8" />
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="sm">
            <BarChartBig className="h-4 w-4"></BarChartBig>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 h-80">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">创建投票</h4>
            <p className="text-sm text-muted-foreground">
              请在此设定选项和结束日期。
            </p>
          </div>
          <Form>

          </Form>
        </PopoverContent>
      </Popover>
      <p className="ml-auto mr-2 text-sm text-muted-foreground">{editor.storage.characterCount.characters()} / 200
        字符</p>
    </div>
  );
}