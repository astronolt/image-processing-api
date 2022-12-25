"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_util_1 = __importDefault(require("../../utilities/test-util"));
it('expects multiply(5) to equal 25', function () {
    expect((0, test_util_1.default)(5)).toEqual(25);
});
