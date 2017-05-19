"use strict";

function extract(str) {
    var matches = String(str).match(/\bNCT\d+\b/ig);
    if (!matches) { return []; }

    return matches.map(normalize);
}

function normalize(nct_id) {
    return nct_id.toUpperCase();
}

exports.extract = extract;
