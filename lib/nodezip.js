var fs = require('fs');
var JSZip = require('jszip');

module.exports = function(data, options) { return new JSZip(data, options) };
exports.JSZip = JSZip;
