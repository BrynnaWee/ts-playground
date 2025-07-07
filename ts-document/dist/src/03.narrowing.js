"use strict";
function padLeft(padding, input) {
    if (typeof padding == 'number') {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
function padLeft02(padding, input) {
    if (typeof padding === 'number') {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
function printAll(strs) {
    if (typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
    }
}
printAll('테스트');
