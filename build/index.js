"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 25000;
app.get('/alive', (_req, res) => {
    res.send("Yo estoy vivo");
});
app.listen(PORT, () => {
    console.log(`server connected to port http://localhost:${PORT}`);
});
