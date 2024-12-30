import { Node } from '@tiptap/core';

const Watermark = Node.create({
    name: 'watermark',
    group: 'block',
    atom: true,

    parseHTML() {
        return [
            {
                tag: 'div[data-type="watermark"]',
            },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        return [
            'div',
            {
                ...HTMLAttributes,
                'data-type': 'watermark',
                style: 'position: absolute; pointer-events: none; color: rgb(255 251 251 / 8%); font-size: 4rem; top: 32%; left: 24%; transform: translate(-50%, -50%); z-index: 0; transform: rotate(-10deg)',
            },
            'Selected Watermark',
        ];
    },

    // Add a custom command to insert the watermark
    addCommands() {
        return {
            addWatermark: () => ({ chain }) => {
                return chain()
                    .insertContent({
                        type: this.name,
                    })
                    .run();
            },
        };
    },
});

export default Watermark;
