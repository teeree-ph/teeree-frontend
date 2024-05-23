import {Editor, EditorContent, useEditor} from "@tiptap/react";
import {StarterKit} from "@tiptap/starter-kit";
import {Toggle} from "@/components/ui/toggle";
import {Bold, Italic, List, ListOrdered, Strikethrough, Code as CodeIcon} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {CharacterCount} from "@tiptap/extension-character-count";
import "katex/dist/katex.min.css";
import {Mathematics} from "@tiptap-pro/extension-mathematics";
import '../app/text-editor.css';
import {Code} from "@tiptap/extension-code";
import {Link} from "@tiptap/extension-link";
import {Strike} from "@tiptap/extension-strike";

export function RichTextEditor({ content, onChange }: { content: string, onChange: (content: string) => void}) {
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
    content: content,
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    },
  })

  return (
    <>
      <div className="p-0">
        <EditorContent editor={editor} />
        {editor ? <RichTextEditorToolbar editor={editor} /> : null}
      </div>
    </>
  )
}

function RichTextEditorToolbar({ editor }: { editor: Editor }) {
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
      <p className="ml-auto mr-2 text-sm text-muted-foreground">{editor.storage.characterCount.characters()} / 200 字符</p>
    </div>
  );
}