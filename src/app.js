"use strict";
exports.__esModule = true;
var express_1 = require("express");
var http = require("http");
var winston = require("winston");
var expressWinston = require("express-winston");
var cors_1 = require("cors");
var users_routes_config_1 = require("./users/users.routes.config");
var debug_1 = require("debug");
var app = (0, express_1["default"])();
var server = http.createServer(app);
var port = 3333;
var routes = [];
var debugLog = (0, debug_1["default"])('app');
// Middleware API:
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
var loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true }))
};
// Added because new thing about not allowing "console.log"...
if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}
// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));
// Users Routes:
routes.push(new users_routes_config_1.UsersRoutes(app));
var serverMsg = "Server running at http://localhost:" + port;
app.get('/', function (req, res) {
    res.status(200).send(serverMsg);
});
