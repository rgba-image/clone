"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const create_image_1 = require("@rgba-image/create-image");
const fill_1 = require("@rgba-image/fill");
const __1 = require("..");
describe('clone', () => {
    it('clones', () => {
        const source = create_image_1.createImage(16, 16);
        fill_1.fill(source, [51, 153, 255, 127]);
        const dest = __1.clone(source);
        assert.deepEqual(dest, source);
    });
    it('operations on clone do not affect source', () => {
        const expect = create_image_1.createImage(16, 16);
        fill_1.fill(expect, [51, 153, 255, 127]);
        const source = create_image_1.createImage(16, 16);
        fill_1.fill(source, [51, 153, 255, 127]);
        const dest = __1.clone(source);
        fill_1.fill(dest, [0, 0, 0, 255]);
        assert.deepEqual(source, expect);
    });
});
//# sourceMappingURL=index.js.map