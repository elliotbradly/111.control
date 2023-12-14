"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCardano = exports.updateCardano = exports.initCardano = void 0;
var bit, val, idx, dex, lst, dat;
const initCardano = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initCardano = initCardano;
const updateCardano = (cpy, bal, ste) => {
    return cpy;
};
exports.updateCardano = updateCardano;
const readCardano = async (cpy, bal, ste) => {
    const { request } = require('undici');
    var blockfrost = process.env.BLOCKFROST;
    // var address = process.env.WALLET_ADDRESS;
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
        if (bal.slv != null)
            bal.slv({ crdBit: { idx: "read-cardano", dat: rsp } });
        //     var amount: AmountBit = rsp.amount[0];
        //    var value = amount.quantity;
    }
    catch (error) {
        // NOTE: An unauthorized token will not throw an error
        // tokenResponseData.statusCode will be 401
        //console.error(error);
    }
    // val = value * .000001;
    return cpy;
};
exports.readCardano = readCardano;
//# sourceMappingURL=cardano.buzz.js.map