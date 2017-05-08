
/**Test.js */
var assert = require('assert');

var add = require('../src/index')

describe("Array",function(){

    it("Should return -1 when the value is not present",function(){

        assert.equal(-1,[1,2,3].indexOf(4))
    })

    it("It should return sum",function(){

        assert.equal(5,add(2,3));
    })

})