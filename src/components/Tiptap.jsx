import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Watermark from './extensions/watermark'
const extensions = [
    StarterKit, Watermark,
]
const content = ``

const Tiptap = () => {
    const editor = useEditor({
        extensions,
        content
    })
    if (!editor) {
        return null
    }
    return (
        <div className='h-[100vh] w-full bg-zinc-900 flex flex-col justify-center items-center' >
            <div className='btns bg-blue-500 h-[50px] w-[80vw] flex gap-2 justify-center items-center'>

                {/* Watermark */}
                <button onClick={() => editor.commands.addWatermark()}>W</button>


                {/* Bold*/}
                <button onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>
                    <strong>B</strong>
                </button>

                {/* Italic */}
                <button onClick={() => editor.chain().focus().toggleItalic().run()} disabled={!editor.can().chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>
                    <em>I</em>
                </button>

                {/* Strike */}
                <button onClick={() => editor.chain().focus().toggleStrike().run()} disabled={!editor.can().chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>
                    <s>S</s>
                </button>

                {/* Code */}
                <button onClick={() => editor.chain().focus().toggleCode().run()} disabled={!editor.can().chain().focus().toggleCode().run()} className={editor.isActive('code') ? 'is-active' : ''}>C</button>

                {/* Clear nodes */}
                <button onClick={() => editor.chain().focus().clearNodes().run()}>Cn</button>

                {/* Paragraph */}
                <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''}>P</button>

                {/* H1 */}
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>h1</button>

                {/* H2 */}
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>h2</button>

                {/* H3 */}
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>h3</button>

                {/* H4 */}
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}>h4</button>

                {/* H5 */}
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()} className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}>h5</button>

                {/* H6 */}
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()} className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}>h6</button>

                {/* Bullet list */}
                <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'is-active' : ''}>ul</button>

                {/* Ordered List */}
                <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'is-active' : ''}>ol</button>

                {/* Undo */}
                <button className='flex items-center justify-center' onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().chain().focus().undo().run()}> <img src="src\assets\undo.svg" alt="" width={20}/> </button>

                {/* Redo */}
                <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().chain().focus().redo().run()}>↷</button>

            </div>

            <div>
                <EditorContent editor={editor} />
            </div>
            <button>Save</button>
        </div>
    )
}

export default Tiptap