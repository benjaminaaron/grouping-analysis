var latinize = require('latinize');
var Strinc = require('strinc');

module.exports = {
    formatNameAsId: function(str) {
        return latinize(str).replace(/ /g, '_').replace('#', '').toLowerCase();
    },
    sort: function(arr) {
        return arr.map(Number).sort(function(a, b) {
            return a - b;
        });
    },
    toGroupId: function(arr) {
        var sorted = this.sort(arr);
        var groupId = '';
        for(var i = 0; i < sorted.length; i ++)
            groupId += '-' + sorted[i];
        return groupId.substring(1);
    },
    generateBinStrings: function(memberCount) {
        var generate = Strinc(Strinc.BIN);
        var zeroes = '';
        for(var i = 0; i < memberCount; i ++)
            zeroes += '0';
        var binStrings = [];
        var nextBinStr = generate(); // skip the empty group
        for (var i = 1; i < Math.pow(2, memberCount); i ++) {
            nextBinStr = generate();
            binStrings.push(zeroes.substring(0, zeroes.length - nextBinStr.length) + nextBinStr);
        }
        return binStrings;
    }
};
