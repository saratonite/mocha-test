var assert = require('assert');
var autil = require('../src/array-utils')

describe("Array utilities",function(){

    it("Should chunk arrays",function(){

        assert.equal(3,autil.chunk([1,2,3,4,5,6,7,8,9],3).length)

    })
})