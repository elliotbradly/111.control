"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProject = exports.updateProject = exports.initProject = void 0;
const initProject = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initProject = initProject;
const updateProject = (cpy, bal, ste) => {
    return cpy;
};
exports.updateProject = updateProject;
const listProject = async (cpy, bal, ste) => {
    const { request } = require('undici');
    var env = require("dotenv").config();
    var auth = process.env.NMKR_ELLIOT_BRADLY;
    var url = 'https://studio-api.nmkr.io/v2/ListProjects';
    try {
        const tokenResponseData = await request(url, {
            method: 'GET',
            body: '',
            headers: {
                'authorization': auth,
            },
        });
        const rsp = await tokenResponseData.body.json();
        debugger;
    }
    catch (error) {
        // NOTE: An unauthorized token will not throw an error
        // tokenResponseData.statusCode will be 401
        console.error(error);
    }
    return cpy;
};
exports.listProject = listProject;
//# sourceMappingURL=project.buzz.js.map