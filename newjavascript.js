// Core, Team, and Official extensions can `require` VM code:
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

class SomeBlocks {
    // ...
    getInfo () {
        return {
            id: 'set_device',
            name: 'Set Device',
            blocks: [
                {
                    opcode: 'set_device',
                    blockType: BlockType.REPORTER,
                    text: 'Set Hue [LETTER_NUM] with token [TEXT]',
                    arguments: {
                        LETTER_NUM: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Bridge1'
                        },
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                }
            ]
        };
    }
    // ...
}