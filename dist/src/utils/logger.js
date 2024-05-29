"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogError = exports.LogSuccess = exports.LogInfo = void 0;
const LogInfo = (message) => {
    console.log(`Info: ${message}`);
};
exports.LogInfo = LogInfo;
const LogSuccess = (message) => {
    console.log(`Success: ${message}`);
};
exports.LogSuccess = LogSuccess;
const LogError = (message) => {
    console.error(`Error: ${message}`);
};
exports.LogError = LogError;
//# sourceMappingURL=logger.js.map