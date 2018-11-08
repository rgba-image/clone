"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_image_1 = require("@rgba-image/create-image");
exports.CloneFactory = (createImage) => {
    const clone = ({ width, height, data }) => createImage(width, height, data.slice());
    return clone;
};
exports.clone = exports.CloneFactory(create_image_1.createImage);
//# sourceMappingURL=index.js.map