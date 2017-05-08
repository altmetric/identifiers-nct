/* globals test, expect */
"use strict";

const nct = require("../lib/nct");

test("extracts NCT IDs", () => {
    expect(nct.extract("NCT00000106\nNCT00000107")).toEqual(["NCT00000106", "NCT00000107"]);
});

test("normalizes NCT IDs", () => {
    expect(nct.extract("nct00000106\nnCt00000107")).toEqual(["NCT00000106", "NCT00000107"]);
});
