"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const crypto_unit_1 = require("./00.crypto.unit/crypto.unit");
const cardano_unit_1 = require("./01.cardano.unit/cardano.unit");
const project_unit_1 = require("./02.project.unit/project.unit");
const block_unit_1 = require("./03.block.unit/block.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const crypto_model_1 = require("./00.crypto.unit/crypto.model");
const cardano_model_1 = require("./01.cardano.unit/cardano.model");
const project_model_1 = require("./02.project.unit/project.model");
const block_model_1 = require("./03.block.unit/block.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [crypto_unit_1.default, cardano_unit_1.default, project_unit_1.default, block_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromCrypto = require("./00.crypto.unit/crypto.reduce");
const reduceFromCardano = require("./01.cardano.unit/cardano.reduce");
const reduceFromProject = require("./02.project.unit/project.reduce");
const reduceFromBlock = require("./03.block.unit/block.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    crypto: reduceFromCrypto.reducer,
    cardano: reduceFromCardano.reducer,
    project: reduceFromProject.reducer,
    block: reduceFromBlock.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.crypto = new crypto_model_1.CryptoModel();
        this.cardano = new cardano_model_1.CardanoModel();
        this.project = new project_model_1.ProjectModel();
        this.block = new block_model_1.BlockModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map