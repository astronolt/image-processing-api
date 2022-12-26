"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = __importDefault(require("../../../utilities/fs"));
function imageEdit(inputAsset, outputAsset, width, height, style) {
    if (height === void 0) { height = null; }
    if (style === void 0) { style = null; }
    return __awaiter(this, void 0, void 0, function () {
        var editImage, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    editImage = (0, sharp_1.default)(inputAsset).resize(width, height);
                    if (style === 'tint') {
                        editImage.tint({ r: 255, g: 240, b: 16 });
                    }
                    if (style === 'greyscale') {
                        editImage.greyscale();
                    }
                    return [4 /*yield*/, editImage.toFile(outputAsset)];
                case 1:
                    _a.sent();
                    console.log('image generated');
                    return [2 /*return*/, true];
                case 2:
                    err_1 = _a.sent();
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 *
 */
var processImage = function (fileName, width, height, style, extension) {
    if (height === void 0) { height = null; }
    if (style === void 0) { style = null; }
    if (extension === void 0) { extension = null; }
    return __awaiter(void 0, void 0, void 0, function () {
        var styleCodes, styleName, ext, inputAsset, outputAsset, inputAssetCheck, outputAssetCheck;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    styleCodes = ['tint', 'greyscale'];
                    styleName = styleCodes.includes(style)
                        ? "_".concat(style)
                        : '';
                    ext = extension !== '' ? '.jpg' : ".".concat(extension);
                    inputAsset = "./assets/full/".concat(fileName).concat(ext);
                    outputAsset = "./assets/thumb/".concat(fileName, "_").concat(width).concat(height !== null ? "_".concat(height) : '').concat(styleName).concat(ext);
                    return [4 /*yield*/, (0, fs_1.default)(inputAsset)];
                case 1:
                    inputAssetCheck = _a.sent();
                    return [4 /*yield*/, (0, fs_1.default)(outputAsset)
                        // check if convert file exist
                    ];
                case 2:
                    outputAssetCheck = _a.sent();
                    if (!!outputAssetCheck) return [3 /*break*/, 5];
                    if (!inputAssetCheck) return [3 /*break*/, 4];
                    return [4 /*yield*/, imageEdit(inputAsset, outputAsset, width, height, style)];
                case 3:
                    if (_a.sent()) {
                        return [2 /*return*/, outputAsset];
                    }
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5: return [2 /*return*/, outputAsset];
                case 6: return [2 /*return*/, ''];
            }
        });
    });
};
exports.default = processImage;
