
/**Test.js */
var assert = require('assert');

var calculator = require('../src/index')

describe("Main Module",function(){

    it("Shout have the calculator property",function(){

        assert.equal('object',typeof(calculator.calculator));
    });

})