"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_1 = __importDefault(require("./routes/api"));
var logger_1 = __importDefault(require("./middleware/logger"));
var app = (0, express_1.default)();
var port = 3000;
var middleware = [logger_1.default, api_1.default];
app.use('/api', middleware, function (req, res) {
    res.status(404).send("Sorry, we couldn't find that api channel!");
});
app.use(function (req, res, next) {
    res.status(404).send("Sorry, we couldn't find that!. Try again!");
});
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
exports.default = app;
