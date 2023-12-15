"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashBlock = exports.nowBlock = exports.openBlock = exports.deleteBlock = exports.removeBlock = exports.writeBlock = exports.readBlock = exports.createBlock = exports.updateBlock = exports.initBlock = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActBlk = require("../../03.block.unit/block.action");
var bit, val, idx, dex, lst, dat;
const initBlock = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initBlock = initBlock;
const updateBlock = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActBlk.NOW_BLOCK, {});
    var rsp = bit.blkBit.dat;
    bal.idx;
    bit = await ste.hunt(ActBlk.READ_BLOCK, { idx: bal.idx });
    var bric = bit.blkBit.dat;
    if (rsp == null)
        return bal.slv({ blkBit: { idx: "update-block", dat: bric } });
    if (bric == null)
        return bal.slv({ blkBit: { idx: "update-block", dat: bric } });
    if (rsp.height == null)
        return bal.slv({ blkBit: { idx: "update-block", dat: bric } });
    if (bric.bit.height == null)
        return bal.slv({ blkBit: { idx: "update-block", dat: bric } });
    if (rsp.height == bric.bit.height) {
        bric.diff = 0;
        bal.slv({ blkBit: { idx: "update-block", dat: bric } });
        return cpy;
    }
    var hash = bric.bit.hash;
    bit = await ste.hunt(ActBlk.HASH_BLOCK, { idx: hash });
    var timePast = bit.blkBit.dat.time;
    var timeNow = rsp.time;
    var diff = rsp.time - bric.bit.time;
    bric.diff = diff;
    bric.bit = rsp;
    var delay = timeNow - timePast;
    bric.diff = delay;
    bal.slv({ blkBit: { idx: "update-block", dat: bric } });
    return cpy;
};
exports.updateBlock = updateBlock;
const createBlock = async (cpy, bal, ste) => {
    if (bal.dat == null)
        bal.dat = {};
    var dat = { idx: bal.idx, src: bal.src, bit: null, height: 0, diff: 0 };
    bit = await ste.hunt(ActBlk.NOW_BLOCK, {});
    var rsp = bit.blkBit.dat;
    dat.bit = rsp;
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    if (bal.slv != null)
        bal.slv({ blkBit: { idx: "create-block", dat } });
    return cpy;
};
exports.createBlock = createBlock;
const readBlock = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActBlk.CREATE_BLOCK });
    if (slv != null)
        slv({ blkBit: { idx: "read-block", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readBlock = readBlock;
const writeBlock = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActBlk.UPDATE_BLOCK, { idx: bal.idx, src: bal.src, dat: bal.dat });
    dat = bit.blkBit.dat;
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat, bit: ActBlk.CREATE_BLOCK });
    if (bal.slv != null)
        bal.slv({ blkBit: { idx: "write-block", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeBlock = writeBlock;
const removeBlock = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removeBlock = removeBlock;
const deleteBlock = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteBlock = deleteBlock;
const openBlock = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActBlk.CREATE_BLOCK });
    bal.slv({ blkBit: { idx: "open-block", dat: bit.clcBit.dat } });
    return cpy;
};
exports.openBlock = openBlock;
const nowBlock = async (cpy, bal, ste) => {
    const { request } = require('undici');
    var blockfrost = process.env.BLOCKFROST;
    var url = 'https://cardano-mainnet.blockfrost.io/api/v0/blocks/latest';
    var rsp;
    try {
        const tokenResponseData = await request(url, {
            method: 'GET',
            body: '',
            headers: {
                'project_id': blockfrost,
            },
        });
        rsp = await tokenResponseData.body.json();
        bal.slv({ blkBit: { idx: "now-block", dat: rsp } });
    }
    catch (error) {
        bal.slv({ blkBit: { idx: "now-block-error", src: error } });
    }
    return cpy;
};
exports.nowBlock = nowBlock;
const hashBlock = async (cpy, bal, ste) => {
    const { request } = require('undici');
    var blockfrost = process.env.BLOCKFROST;
    var url = 'https://cardano-mainnet.blockfrost.io/api/v0/blocks/' + bal.idx;
    var rsp;
    try {
        const tokenResponseData = await request(url, {
            method: 'GET',
            body: '',
            headers: {
                'project_id': blockfrost,
            },
        });
        rsp = await tokenResponseData.body.json();
        bal.slv({ blkBit: { idx: "hash-block", dat: rsp } });
    }
    catch (error) {
        bal.slv({ blkBit: { idx: "hash-block-error", src: error } });
    }
    return cpy;
};
exports.hashBlock = hashBlock;
//# sourceMappingURL=block.buzz.js.map