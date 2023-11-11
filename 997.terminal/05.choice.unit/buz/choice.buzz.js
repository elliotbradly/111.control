"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.towerChoice = exports.keyChoice = exports.openChoice = exports.updateChoice = exports.initChoice = void 0;
const ActChc = require("../../05.choice.unit/choice.action");
const initChoice = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initChoice = initChoice;
const updateChoice = (cpy, bal, ste) => {
    return cpy;
};
exports.updateChoice = updateChoice;
const openChoice = (cpy, bal, ste) => {
    let blessed = ste.value.terminal.blessed;
    let screen = ste.value.terminal.screen;
    var dat = { idx: 'choice-bit', clr0: Color.GREEN, clr1: Color.CYAN };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    let net = bal.net;
    var form = blessed.form({
        parent: screen,
        keys: true,
        left: net.left,
        top: net.top,
        width: net.width,
        height: net.height,
        bg: dat.clr0,
        content: ''
    });
    if (bal.lst == null)
        bal.lst = [];
    var output = [];
    bal.lst.forEach((a, b) => {
        let btn = blessed.button({
            parent: form,
            mouse: true,
            keys: true,
            shrink: true,
            padding: {
                left: 10,
                right: 1
            },
            left: 0,
            top: b,
            height: 1,
            width: '100%',
            name: a,
            content: a,
            style: {
                bg: dat.clr1,
                focus: {
                    bg: 'red'
                },
                hover: {
                    bg: 'red'
                }
            }
        });
        btn.on('press', function () {
            form.submit();
        });
        output.push(btn);
    });
    screen.key('left', () => form.focusPrevious());
    screen.key('right', () => form.focusNext());
    output[0].focus();
    screen.render();
    form.on('submit', async function (data) {
        //form.setContent('Submitted.');
        let selected = form._selected;
        if (selected == null) {
            var bit = await ste.hunt(ActChc.OPEN_CHOICE, bal);
            if (bal.slv != null)
                bal.slv({ chcBit: { idx: "open-choice", dat: bit } });
            return;
        }
        let src = selected.content;
        let val = selected.index - 1;
        screen.render();
        if (bal.slv != null)
            bal.slv({ chcBit: { idx: "open-choice", src, val } });
    });
    return cpy;
};
exports.openChoice = openChoice;
const keyChoice = (cpy, bal, ste) => {
    let blessed = ste.value.terminal.blessed;
    let screen = ste.value.terminal.screen;
    let net = bal.net;
    let menubar = blessed.listbar({
        parent: screen,
        keys: true,
        left: net.left,
        top: net.top,
        width: net.width,
        height: net.height,
        style: { item: { fg: "yellow" }, selected: { fg: "yellow" } },
        commands: {
            Login: {
                keys: ["l", "L"],
                callback: () => {
                    debugger;
                }
            },
            "Toggle Autotrading": {
                keys: ["a", "A"],
                callback: () => {
                    debugger;
                }
            },
            "Make a Trade": {
                keys: ["t", "T"],
                callback: () => {
                    debugger;
                }
            },
            Help: {
                keys: ["h", "H"],
                callback: () => {
                    debugger;
                }
            },
            Logout: {
                keys: ["o", "O"],
                callback: () => { debugger; }
            },
            Exit: {
                keys: ["C-c", "escape"],
                callback: () => process.exit(0)
            }
        }
    });
    screen.render();
    if (bal.slv != null)
        bal.slv({ scnBit: { idx: "key-choice" } });
    return cpy;
};
exports.keyChoice = keyChoice;
const towerChoice = (cpy, bal, ste) => {
    return cpy;
};
exports.towerChoice = towerChoice;
const Color = require("../../val/console-color");
//# sourceMappingURL=choice.buzz.js.map