var assert = require('assert');
var colUtils = require('../src/collection-utils');


describe("Collection utils",function(){


    it("should intersect values",function(){

        var a1 = [{name:"sarath"},{name:"foo"},{name:"bar"}];
        var a2 = [{name:"sarath"},{name:"bar"}];

        assert.equal(2,colUtils.intersection(a1,a2,'name').length);

    })
})